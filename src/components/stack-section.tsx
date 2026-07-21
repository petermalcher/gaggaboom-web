"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/** Pins a section once it has been fully scrolled through, so the next
 *  sibling slides up over it — the cover effect from the hero.
 *
 *  The covered section is not fully static: while the next section slides
 *  over, its content keeps drifting upward at partial scroll speed, so it
 *  gets pushed up as well instead of being completely overlapped.
 *
 *  Sections taller than the viewport pin with their bottom edge at the
 *  bottom of the viewport (top offset becomes negative). */
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
  const ref = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);
  const [exitRange, setExitRange] = useState<[number, number]>([0, 1]);
  const [driftPx, setDriftPx] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const vh = window.innerHeight;
      setTop(Math.min(0, vh - el.offsetHeight));

      // Document flow position (independent of the sticky paint offset).
      let flowTop = 0;
      let node: HTMLElement | null = el;
      while (node) {
        flowTop += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      const flowBottom = flowTop + el.offsetHeight;

      // While the next section slides over (≈ one viewport of scroll),
      // push this section's content up at ~45% of the scroll speed.
      setExitRange([Math.max(flowBottom - vh, 0), flowBottom]);
      setDriftPx(drift ? -vh * 0.45 : 0);
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
  }, [drift]);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, exitRange, [0, driftPx]);

  return (
    <div
      ref={ref}
      className="sticky overflow-hidden bg-background"
      style={{ top, zIndex }}
    >
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
