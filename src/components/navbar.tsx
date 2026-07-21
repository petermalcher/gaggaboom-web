"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { site } from "@/lib/content";

export function Navbar() {
  // Start with a huge sentinel so the header is guaranteed to be
  // invisible on first render (before the real height is measured).
  const [viewportHeight, setViewportHeight] = useState(1_000_000);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    function updateViewportHeight() {
      setViewportHeight(window.innerHeight);
    }
    updateViewportHeight();
    window.addEventListener("resize", updateViewportHeight);
    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

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
            <a href="#top" className="group flex flex-col outline-none">
              <span
                aria-hidden
                className="font-display text-[1.15rem] font-bold uppercase leading-[0.95] tracking-tight text-foreground transition-colors group-hover:text-acid group-focus-visible:text-acid md:text-2xl"
              >
                GAGGABOOM
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
                className="outline-none transition-colors hover:text-foreground focus-visible:text-foreground"
              >
                Referenzen
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-foreground outline-none transition-colors hover:text-acid focus-visible:text-acid"
              >
                Kontakt
              </a>
            </div>
      </nav>
    </motion.header>
  );
}
