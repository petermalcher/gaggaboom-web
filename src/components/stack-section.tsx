"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useSvh } from "@/lib/use-svh";

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
 *  - The drift is wrapped in a spring, so corrections ease in smoothly. */
export function StackSection({
  children,
  zIndex,
  drift = true,
}: {
  children: ReactNode;
  zIndex: number;
  /** Disable for the last section (nothing covers it). */
  drift?: boolean;
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

  // Push the covered content up at ~45% of the scroll speed — springed,
  // so range corrections (image loads, resizes) ease in instead of jumping.
  const rawY = useTransform(scrollY, exitRange, [0, drift ? -svh * 0.45 : 0]);
  const y = useSpring(rawY, { stiffness: 160, damping: 28, mass: 0.5 });

  // While being covered: fade the content out slowly …
  const opacity = useTransform(scrollY, exitRange, drift ? [1, 0] : [1, 1]);
  // … and darken it right away (veil reaches full strength at 40% of the cover).
  const veilOpacity = useTransform(
    scrollY,
    [exitRange[0], exitRange[0] + (exitRange[1] - exitRange[0]) * 0.4],
    drift ? [0, 0.65] : [0, 0],
  );

  return (
    <>
      <div ref={sentinelRef} aria-hidden />
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
