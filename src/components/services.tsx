"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/content";

/** Was ich mache — ein schwarzer Service-Index im Editorial-Stil:
 *  nummerierte Zeilen, harte Linien, gelb/orange Akzente, je ein Bild. */
export function Services() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="leistungen" className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <div className="mb-12 md:mb-16">
              <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground/90 md:text-sm">
                <span aria-hidden className="flex flex-col gap-[3px]">
                  <span className="h-0.5 w-6 bg-acid" />
                  <span className="h-0.5 w-6 bg-stage-bright" />
                </span>
                {services.label}
              </p>
              <h2 className="mt-4 font-heading text-4xl font-medium uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
                {services.headlineA}{" "}
                <span className="text-acid">{services.headlineB}</span>
              </h2>
            </div>
          </Reveal>

          <ul>
            {services.items.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="grid gap-y-6 py-8 md:grid-cols-[15rem_1fr] md:items-center md:gap-x-10 md:py-10">
                  {/* Copy — Trennstrich zwischen Überschrift und Text */}
                  <div className="min-w-0">
                    <h3 className="border-b border-white pb-4 font-mono text-lg font-semibold uppercase leading-snug tracking-[0.14em] text-acid sm:text-xl md:pb-5 md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed tracking-[0.06em] text-white md:mt-5 md:text-base">
                      {item.body}
                    </p>
                  </div>

                  {/* Bild — links, quadratischer Ausschnitt wie in der Sektion darüber */}
                  <motion.div
                    initial={{ filter: "grayscale(1)" }}
                    whileInView={{ filter: "grayscale(0)" }}
                    viewport={{ once: true, margin: "-25% 0px" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="relative aspect-square w-full max-w-sm overflow-hidden rounded-xl border border-border md:order-first md:max-w-none"
                  >
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, 240px"
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
                    {/* Leichter Orange-Filter */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-stage-bright/40 mix-blend-multiply"
                    />
                  </motion.div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}
