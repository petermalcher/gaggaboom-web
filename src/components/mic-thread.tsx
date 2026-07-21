"use client";

import { useScroll, motion, useTransform, useReducedMotion } from "motion/react";

/**
 * Signature element: a glowing orange mic cable that draws itself down the
 * left edge as you scroll, ending in a fuzzy windshield mic — Gaggaboom's
 * "roter Faden", reimagined in fire. Purely decorative; hidden on small
 * screens and for reduced-motion users.
 */
export function MicThread() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0, 0.92], [0, 1]);
  const micOpacity = useTransform(scrollYProgress, [0.86, 0.96], [0, 1]);
  const micScale = useTransform(scrollYProgress, [0.86, 0.98], [0.6, 1]);

  if (reduce) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-3 z-40 hidden w-16 lg:block"
    >
      <svg
        viewBox="0 0 40 1000"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id="fireCable" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.82 0.11 55)" />
            <stop offset="100%" stopColor="oklch(0.68 0.2 42)" />
          </linearGradient>
          <filter id="cableGlow" x="-100%" y="-20%" width="300%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M20,0 C30,80 8,140 20,220 C32,300 8,360 20,440 C32,520 8,580 20,660 C32,740 10,800 20,880 C26,930 20,960 20,985"
          fill="none"
          stroke="url(#fireCable)"
          strokeWidth={2.5}
          strokeLinecap="round"
          filter="url(#cableGlow)"
          style={{ pathLength }}
        />
      </svg>

      {/* Fuzzy mic at the bottom */}
      <motion.svg
        width="56"
        height="72"
        viewBox="0 0 56 72"
        style={{ opacity: micOpacity, scale: micScale }}
        className="absolute bottom-24 left-1 origin-bottom overflow-visible"
      >
        {/* windshield fuzz */}
        <ellipse cx="28" cy="20" rx="18" ry="20" fill="#6a6a6a" />
        <ellipse cx="20" cy="12" rx="7" ry="8" fill="#8a8a8a" opacity="0.7" />
        <ellipse cx="36" cy="13" rx="6" ry="7" fill="#8a8a8a" opacity="0.6" />
        <ellipse cx="28" cy="6" rx="6" ry="6" fill="#9a9a9a" opacity="0.6" />
        {/* fire coil */}
        <path
          d="M40,16 C50,16 48,-4 28,-5 C8,-4 6,16 16,16"
          fill="none"
          stroke="oklch(0.68 0.2 42)"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#cableGlow)"
        />
        {/* body */}
        <rect x="18" y="38" width="20" height="26" rx="6" fill="#1a1a1a" />
        <circle cx="24" cy="47" r="1.6" fill="oklch(0.75 0.2 145)" />
        <circle cx="28" cy="58" r="5" fill="#2a2a2a" stroke="#444" strokeWidth="1" />
      </motion.svg>
    </div>
  );
}
