"use client";

import Image from "next/image";
import { MotionConfig } from "motion/react";
import { Reveal } from "@/components/reveal";
import { funken, site } from "@/lib/content";

/** Kontakt — clean black, Editorial-Stil wie die anderen Sektionen,
 *  Portrait mit orangenem Duotone-Filter. */
export function Footer() {
  return (
    <MotionConfig reducedMotion="user">
      <footer id="contact" className="relative overflow-hidden bg-background">
        <div className="mx-auto flex min-h-[80svh] w-full max-w-6xl flex-col justify-between px-5 pb-6 pt-20 md:pt-28">
          <Reveal>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground/90 md:text-sm">
              <span aria-hidden className="flex flex-col gap-[3px]">
                <span className="h-0.5 w-6 bg-acid" />
                <span className="h-0.5 w-6 bg-stage-bright" />
              </span>
              Kontakt
            </p>
          </Reveal>

          <div className="grid gap-10 py-14 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-14 md:py-20">
            <Reveal>
              <div>
                <a href={`mailto:${site.email}`} className="group block outline-none">
                  <span className="font-heading text-5xl font-medium uppercase leading-[1.02] tracking-tight transition-colors duration-300 group-hover:text-acid group-focus-visible:text-acid sm:text-6xl md:text-8xl">
                    Lass uns <span className="text-acid">drehen</span>
                  </span>
                  <span className="mt-6 block break-all font-mono text-sm uppercase tracking-[0.12em] text-foreground/85 underline-offset-4 group-hover:underline md:text-base">
                    {site.email}
                  </span>
                </a>

                <div className="mt-10 flex flex-col gap-2 font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-foreground/70 md:text-sm">
                  <p>{funken.statementA}</p>
                  <p>{funken.statementB}</p>
                </div>
              </div>
            </Reveal>

            {/* Portrait — orangener Filter, Wordmark mittig darüber */}
            <Reveal delay={0.1}>
              <figure className="relative w-full max-w-xs md:max-w-sm">
                <div className="mb-6">
                  <p className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-foreground md:text-4xl">
                    GAGGA<span className="text-acid">BOOM</span>
                  </p>
                  <p className="mt-1 font-mono text-[0.95rem] uppercase leading-none tracking-[0.2em] text-muted-foreground md:text-sm">
                    KERSTIN KLEINENBRANDS
                  </p>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
                  <Image
                    src="/images/kontakt-portrait.jpg"
                    alt="Kerstin Kleinenbrands — Schwarzweiß-Portrait mit INSIDE-Schriftzug"
                    fill
                    sizes="(max-width: 768px) 88vw, 380px"
                    className="object-cover"
                  />
                  {/* Orangener Duotone-Filter */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-stage-bright mix-blend-multiply"
                  />
                </div>
              </figure>
            </Reveal>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white pt-6 font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-foreground/80 md:text-sm">
            <p>
              Tel: auf Anfrage
              <br />
              E-Mail: {site.email}
              <br />
              Social Media:{" "}
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-acid outline-none hover:underline focus-visible:underline"
              >
                {site.instagramHandle}
              </a>
            </p>
            <p className="text-right">
              {site.brand} · {site.person}
              <br />
              {site.location} · Überall wo’s kracht
              <br />© {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}
