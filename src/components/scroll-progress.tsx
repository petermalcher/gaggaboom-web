"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

/** Thin fiery progress bar pinned to the top of the viewport.
 *  Fades in together with the navbar (50% → 85% of the viewport height). */
export function ScrollProgress() {
  const [viewportHeight, setViewportHeight] = useState(1);

  useEffect(() => {
    const update = () => setViewportHeight(Math.max(window.innerHeight, 1));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.4,
  });

  const rawOpacity = useTransform(
    scrollY,
    [viewportHeight * 0.1, viewportHeight * 0.25],
    [0, 1],
    { clamp: true },
  );
  const opacity = useSpring(rawOpacity, { stiffness: 220, damping: 26, mass: 0.4 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, opacity }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-acid"
    />
  );
}
