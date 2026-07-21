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

            {/* Bild — leicht gekippt, wird beim Scrollen farbig */}
            <figure className="relative w-full max-w-sm md:max-w-none">
              <motion.div
                initial={{ filter: "grayscale(1)" }}
                whileInView={{ filter: "grayscale(0)" }}
                viewport={{ once: true, margin: "-25% 0px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative aspect-square overflow-hidden rounded-xl border border-border"
              >
                <Image
                  src={about.photo.src}
                  alt={about.photo.alt}
                  fill
                  sizes="(max-width: 768px) 88vw, 420px"
                  className="object-cover"
                />
                <motion.div
                  aria-hidden
                  initial={{ opacity: 0.6 }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: true, margin: "-25% 0px" }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                />
              </motion.div>
              <figcaption className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground/60">
                {about.photo.caption}
              </figcaption>
            </figure>
          </div>

          {/* Statement & Body — artikelartig: Überschrift, Trennstrich, Fließtext */}
          <div className="mt-16 md:mt-24">
            <h3 className="border-b border-white pb-4 font-mono text-lg font-semibold uppercase leading-snug tracking-[0.14em] text-acid sm:text-xl md:pb-5 md:text-2xl">
              {about.statement}
            </h3>
            <p className="mt-4 max-w-3xl font-mono text-sm leading-relaxed tracking-[0.06em] text-white md:mt-5 md:text-base">
              {about.body}
            </p>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
