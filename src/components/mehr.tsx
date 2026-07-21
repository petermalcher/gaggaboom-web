"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, MotionConfig, useScroll, useTransform } from "motion/react";
import { about } from "@/lib/content";

/** Mehr als nur ein Mikro — one unified story: wer hier spricht
 *  und was das für Marken heißt. Editorial-Stil wie der Service-Index. */
export function Mehr() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-linked reveal: the whole section content fades and drifts in
  // proportionally to the scroll position — no time-based pop-in.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.6"],
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [48, 0]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={sectionRef}
        id="info"
        className="relative overflow-hidden bg-background py-24 md:py-36"
      >
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative mx-auto w-full max-w-6xl px-5"
        >
          <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-14">
            <div>
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground/90 md:text-sm">
                <span aria-hidden className="flex flex-col gap-[3px]">
                  <span className="h-0.5 w-6 bg-acid" />
                  <span className="h-0.5 w-6 bg-stage-bright" />
                </span>
                {about.label}
              </p>

              <h2 className="mt-8 font-heading text-4xl font-medium uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
                {about.headlineA}
                <br />
                <span className="text-acid">{about.headlineB}</span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground md:text-xl">
                {about.lead}
              </p>
            </div>

            {/* Bild — leicht gekippt, richtet sich beim Hover auf */}
            <figure className="group relative w-full max-w-sm md:max-w-none">
              <div className="relative aspect-square -rotate-2 overflow-hidden rounded-xl border border-border transition-all duration-500 group-hover:rotate-0 group-hover:border-acid/50">
                <Image
                  src={about.photo.src}
                  alt={about.photo.alt}
                  fill
                  sizes="(max-width: 768px) 88vw, 420px"
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-0"
                />
              </div>
              <figcaption className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground/60">
                {about.photo.caption}
              </figcaption>
            </figure>
          </div>

          {/* Statement & Body — nummerierte Editorial-Zeilen wie im Service-Index */}
          <ul className="mt-16 md:mt-24">
            <li className="group border-t border-border">
              <div className="grid grid-cols-[auto_1fr] items-start gap-x-5 py-8 md:grid-cols-[5rem_1fr] md:gap-x-10 md:py-10">
                <span
                  aria-hidden
                  className="font-display text-lg font-bold leading-none text-foreground/25 transition-colors duration-300 group-hover:text-acid md:text-2xl"
                >
                  01
                </span>
                <div className="min-w-0">
                  <p className="max-w-3xl font-heading text-2xl font-medium leading-snug tracking-tight transition-colors duration-300 group-hover:text-acid md:text-4xl">
                    {about.statement}
                  </p>
                  <span
                    aria-hidden
                    className="mt-5 flex w-fit flex-col gap-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <span className="h-0.5 w-10 bg-acid" />
                    <span className="h-0.5 w-10 bg-stage-bright" />
                  </span>
                </div>
              </div>
            </li>
            <li className="group border-t border-border last:border-b">
              <div className="grid grid-cols-[auto_1fr] items-start gap-x-5 py-8 md:grid-cols-[5rem_1fr] md:gap-x-10 md:py-10">
                <span
                  aria-hidden
                  className="font-display text-lg font-bold leading-none text-foreground/25 transition-colors duration-300 group-hover:text-acid md:text-2xl"
                >
                  02
                </span>
                <div className="min-w-0">
                  <p className="max-w-3xl text-base leading-relaxed text-foreground/70 md:text-lg">
                    {about.body}
                  </p>
                  <span
                    aria-hidden
                    className="mt-5 flex w-fit flex-col gap-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <span className="h-0.5 w-10 bg-acid" />
                    <span className="h-0.5 w-10 bg-stage-bright" />
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
