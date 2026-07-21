"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cubicBezier, motion, useScroll, useTransform } from "motion/react";
import { useSvh } from "@/lib/use-svh";

const EASE_OUT = cubicBezier(0.33, 1, 0.68, 1);

/** Pins a section once it has been fully scrolled through, so the next
 *  sibling slides up over it — the cover effect from the hero.
 *
 *  The covered section is not fully static: while the next section slides
 *  over, its content keeps drifting upward at partial scroll speed and
 *  slowly fades out, so it gets pushed away instead of being hard-covered.
 *
 *  Robustness:
 *  - The flow position is measured on a zero-height sentinel that sits in
 *    normal flow, NOT on the sticky element itself (whose offsetTop shifts
 *    while pinned — that caused jumps when e.g. images finished loading).
 *  - The viewport height comes from a 100svh probe, which stays constant
 *    while the iOS browser chrome collapses/expands during scrolling.
 *  - The drift is coupled 1:1 to the scroll position (no spring lag), with
 *    an ease-out curve on the transform so it feels smooth, not linear. */
export function StackSection({
  children,
  zIndex,
  drift = true,
  anchorId,
}: {
  children: ReactNode;
  zIndex: number;
  /** Disable for the last section (nothing covers it). */
  drift?: boolean;
  /** Scroll-anchor id, placed on the in-flow sentinel so navigation lands
   *  at the exact scroll position where this section reaches the top —
   *  independent of the sticky pinning and drift transforms. */
  anchorId?: string;
}) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const svh = useSvh();
  const [top, setTop] = useState(0);
  const [exitRange, setExitRange] = useState<[number, number]>([0, 1]);

  useEffect(() => {
    const el = ref.current;
    const sentinel = sentinelRef.current;
    if (!el || !sentinel) return;

    const update = () => {
      const h = el.offsetHeight;

      // Sections taller than the viewport pin with their bottom edge
      // at the bottom of the viewport (top offset becomes negative).
      setTop(Math.min(0, svh - h));

      // Document flow position — measured on the static sentinel.
      let flowTop = 0;
      let node: HTMLElement | null = sentinel;
      while (node) {
        flowTop += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      const flowBottom = flowTop + h;

      // While the next section slides over (≈ one viewport of scroll).
      setExitRange([Math.max(flowBottom - svh, 0), flowBottom]);
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    ro.observe(document.body);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [svh]);

  const { scrollY } = useScroll();

  // Push the covered content up at ~40% of the scroll speed. Coupled 1:1 to
  // the scroll (no spring → no lag / no overshoot), but eased so it starts
  // gently and never snaps.
  const y = useTransform(scrollY, exitRange, [0, drift ? -svh * 0.4 : 0], {
    ease: EASE_OUT,
  });

  // While being covered: fade the content out gradually …
  const opacity = useTransform(scrollY, exitRange, drift ? [1, 0.15] : [1, 1], {
    ease: EASE_OUT,
  });
  // … and darken it in step with the cover sliding over it.
  const veilOpacity = useTransform(scrollY, exitRange, drift ? [0, 0.6] : [0, 0], {
    ease: EASE_OUT,
  });

  return (
    <>
      <div ref={sentinelRef} id={anchorId} aria-hidden />
      <div
        ref={ref}
        className="sticky overflow-hidden bg-background"
        style={{ top, zIndex }}
      >
        <motion.div style={{ y, opacity }}>{children}</motion.div>
        <motion.div
          aria-hidden
          style={{ opacity: veilOpacity }}
          className="pointer-events-none absolute inset-0 bg-black"
        />
      </div>
    </>
  );
}
