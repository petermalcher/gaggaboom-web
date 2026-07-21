"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { useSvh } from "@/lib/use-svh";

/** Slow, eased scroll to an absolute Y target. Duration scales with the
 *  distance travelled, capped at 1.6s, so short trips stay snappy and long
 *  ones feel gentle. */
function animateScrollTo(targetY: number) {
  const start = window.scrollY;
  const distance = targetY - start;
  if (Math.abs(distance) < 1) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetY);
    return;
  }
  const duration = Math.min(1600, 500 + Math.abs(distance) * 0.4);
  const startTime = performance.now();
  const easeInOut = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (now: number) => {
    const p = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, start + distance * easeInOut(p));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/** Scroll to a section by id. The target lives inside a sticky parallax
 *  stack, so getBoundingClientRect is unreliable while another section is
 *  pinned. We resolve the true document-flow position via the offsetTop
 *  chain, which stays static regardless of sticky pinning. */
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  animateScrollTo(y);
}

export function Navbar() {
  // Start with a huge sentinel so the header is guaranteed to be
  // invisible on first render (before the real height is measured).
  const viewportHeight = useSvh(1_000_000);
  const [interactive, setInteractive] = useState(false);

  // Fade in gradually with scroll progress, starting at 50% of the
  // viewport height and fully visible shortly after.
  const { scrollY } = useScroll();
  const rawOpacity = useTransform(
    scrollY,
    [viewportHeight * 0.1, viewportHeight * 0.25],
    [0, 1],
    { clamp: true },
  );
  const rawY = useTransform(
    scrollY,
    [viewportHeight * 0.1, viewportHeight * 0.25],
    [-16, 0],
    { clamp: true },
  );
  const opacity = useSpring(rawOpacity, { stiffness: 220, damping: 26, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 220, damping: 26, mass: 0.4 });

  useMotionValueEvent(opacity, "change", (latest) => {
    setInteractive(latest > 0.05);
  });

  return (
    <motion.header
      style={{ opacity, y, pointerEvents: interactive ? "auto" : "none" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md"
    >
      <nav
            aria-label="Hauptnavigation"
            className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 font-mono text-xs uppercase tracking-[0.18em] md:py-7 md:text-sm"
          >
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                animateScrollTo(0);
              }}
              className="group flex flex-col outline-none"
            >
              <span
                aria-hidden
                className="font-display text-[1.15rem] font-bold uppercase leading-[0.95] tracking-tight text-foreground transition-colors group-hover:text-acid group-focus-visible:text-acid md:text-2xl"
              >
                GAGGA<span className="text-acid">BOOM</span>
              </span>
              <span
                aria-hidden
                className="mt-0.5 font-mono text-[0.58rem] uppercase leading-none tracking-[0.2em] text-muted-foreground md:text-[0.77rem]"
              >
                KERSTIN KLEINENBRANDS
              </span>
              <span className="sr-only">Gaggaboom — Kerstin Kleinenbrands</span>
            </a>
            <div className="flex items-center gap-6 text-muted-foreground">
              <a
                href="#referenzen"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("referenzen");
                }}
                className="outline-none transition-colors hover:text-foreground focus-visible:text-foreground"
              >
                Referenzen
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("contact");
                }}
                className="outline-none transition-colors hover:text-foreground focus-visible:text-foreground"
              >
                Kontakt
              </a>
            </div>
      </nav>
    </motion.header>
  );
}
