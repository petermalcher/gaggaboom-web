"use client";

import Image from "next/image";
import { motion, MotionConfig } from "motion/react";
import { clusters, site, type Cluster } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const RATIO_CLASS: Record<Cluster["ratio"], string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  tall: "aspect-[4/5]",
};

const GRID_CLASS: Record<Cluster["ratio"], string> = {
  portrait: "grid-cols-2 md:grid-cols-4",
  square: "grid-cols-2 md:grid-cols-4",
  tall: "grid-cols-2 max-w-xl",
};

function ClusterBlock({ cluster }: { cluster: Cluster }) {
  return (
    <div className="group/cluster py-10 md:py-14">
      <Reveal>
        <div className="min-w-0">
          <p className="border-b border-white pb-4 font-mono text-lg font-semibold uppercase leading-snug tracking-[0.14em] text-acid sm:text-xl md:pb-5 md:text-2xl">
            {cluster.label}
          </p>
          {cluster.desc && (
            <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed tracking-[0.06em] text-white md:mt-5 md:text-base">
              {cluster.desc}
            </p>
          )}
        </div>
      </Reveal>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        className={`mt-8 grid gap-2.5 md:gap-3 ${GRID_CLASS[cluster.ratio]}`}
      >
        {cluster.items.map((item) => (
          <motion.li
            key={item.src}
            variants={{
              hidden: { opacity: 0, y: 24, scale: 0.97 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 220, damping: 26 },
              },
            }}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block outline-none"
            >
              <motion.span
                initial={{ filter: "grayscale(1)" }}
                whileInView={{ filter: "grayscale(0)" }}
                viewport={{ once: true, margin: "-25% 0px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className={`relative block overflow-hidden rounded-xl border border-border group-focus-visible:ring-2 group-focus-visible:ring-ring ${RATIO_CLASS[cluster.ratio]}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                  className="object-cover"
                />
                {/* Desktop: caption as hover overlay */}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-10 font-mono text-xs font-semibold uppercase leading-snug tracking-[0.1em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
                  {item.caption}
                </span>
              </motion.span>
              {/* Mobile: caption below the tile, always readable */}
              <span className="mt-2 block font-mono text-xs uppercase leading-snug tracking-[0.08em] text-foreground/85 [overflow-wrap:anywhere] md:hidden">
                {item.caption}
              </span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export function References() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="referenzen" className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 md:py-28">
          <Reveal>
            <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground/90 md:text-sm">
                  <span aria-hidden className="flex flex-col gap-[3px]">
                    <span className="h-0.5 w-6 bg-acid" />
                    <span className="h-0.5 w-6 bg-stage-bright" />
                  </span>
                  Referenzen
                </p>
                <h2 className="mt-4 font-heading text-4xl font-medium uppercase leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
                  Vor dem <span className="text-acid">Mikro</span>
                </h2>
                <p className="mt-2 max-w-sm font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-muted-foreground md:text-sm">
                  Backstage & on Location / Jede Kachel öffnet den Clip
                </p>
              </div>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border-2 border-acid px-9 py-5 font-mono text-base font-semibold uppercase tracking-[0.16em] text-acid outline-none transition-all hover:bg-acid hover:text-primary-foreground focus-visible:bg-acid focus-visible:text-primary-foreground sm:w-fit md:px-11 md:py-6 md:text-lg"
              >
                Instagram <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>

          {clusters.map((cluster) => (
            <ClusterBlock key={cluster.label} cluster={cluster} />
          ))}
        </div>
      </section>
    </MotionConfig>
  );
}
