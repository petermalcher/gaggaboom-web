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
                className="group border-t border-border last:border-b"
              >
                <div className="grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-6 py-8 md:grid-cols-[5rem_1fr_15rem] md:items-center md:gap-x-10 md:py-10">
                  {/* Index */}
                  <span
                    aria-hidden
                    className="font-display text-lg font-bold leading-none text-foreground/25 transition-colors duration-300 group-hover:text-acid md:text-2xl"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Copy */}
                  <div className="min-w-0">
                    <h3 className="font-heading text-2xl font-medium uppercase leading-[1.05] tracking-tight transition-colors duration-300 group-hover:text-acid sm:text-3xl md:text-5xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
                      {item.body}
                    </p>
                    <span
                      aria-hidden
                      className="mt-5 flex w-fit flex-col gap-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    >
                      <span className="h-0.5 w-10 bg-acid" />
                      <span className="h-0.5 w-10 bg-stage-bright" />
                    </span>
                  </div>

                  {/* Bild — leicht gekippt, richtet sich beim Hover auf */}
                  <div className="col-span-2 md:col-span-1">
                    <div
                      className={`relative aspect-[4/3] overflow-hidden rounded-xl border border-border transition-all duration-500 group-hover:rotate-0 group-hover:border-acid/50 md:aspect-[4/5] ${
                        i % 2 === 0 ? "rotate-2" : "-rotate-2"
                      }`}
                    >
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        sizes="(max-width: 768px) 90vw, 240px"
                        className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-0"
                      />
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}
