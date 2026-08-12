"use client";

import { Clapperboard, Handshake, Podcast } from "lucide-react";
import { motion, MotionConfig } from "motion/react";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/content";

const ICONS = {
  Clapperboard,
  Podcast,
  Handshake,
} as const;

/** Was ich mache — ein schwarzer Service-Index im Editorial-Stil:
 *  nummerierte Zeilen, harte Linien, gelb/orange Akzente, je ein Icon. */
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
                  <span className="h-0.5 w-6 bg-acid" />
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
            {services.items.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div className="grid gap-y-6 py-8 md:grid-cols-[6rem_1fr] md:items-start md:gap-x-10 md:py-10">
                    {/* Icon */}
                    <div className="flex size-16 items-center justify-center rounded-xl border border-acid bg-black text-acid md:order-first md:size-24">
                      <Icon
                        aria-hidden
                        strokeWidth={1.5}
                        className="size-8 md:size-11"
                      />
                    </div>

                    {/* Copy — Trennstrich zwischen Überschrift und Text */}
                    <div className="min-w-0">
                      <h3 className="border-b border-white pb-4 font-mono text-lg font-semibold uppercase leading-snug tracking-[0.14em] text-acid sm:text-xl md:pb-5 md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed tracking-[0.06em] text-white md:mt-5 md:text-base">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}
