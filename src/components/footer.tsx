"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionConfig } from "motion/react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

/** Kontakt — clean black, Editorial-Stil wie die anderen Sektionen,
 *  Portrait mit orangenem Duotone-Filter. */
export function Footer() {
  return (
    <MotionConfig reducedMotion="user">
      <footer className="relative overflow-hidden bg-background">
        <div className="mx-auto flex min-h-[80svh] w-full max-w-6xl flex-col justify-between px-5 pb-6 pt-20 md:pt-28">
          <Reveal y={12}>
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground/90 md:text-sm">
              <span aria-hidden className="flex flex-col gap-[3px]">
                <span className="h-0.5 w-6 bg-acid" />
                <span className="h-0.5 w-6 bg-acid" />
              </span>
              Kontakt
            </p>
          </Reveal>

          <div className="grid items-center gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-24">
            {/* Portrait — auf Mobile zuerst/oben, auf Desktop rechts */}
            <Reveal delay={0.1} y={12}>
              <figure className="relative order-first mx-auto w-full max-w-[15rem] md:order-last md:mx-0 md:ml-auto md:max-w-[22rem] lg:max-w-[25rem]">
                <div className="relative aspect-square">
                  <Image
                    src="/images/kontakt-foto-v2.png"
                    alt="Schwarzwei\u00df-Portrait von Kerstin Kleinenbrands"
                    fill
                    sizes="(max-width: 768px) 60vw, 35vw"
                    className="object-contain"
                    priority
                  />
                </div>
              </figure>
            </Reveal>

            <Reveal y={12}>
              <div className="text-center md:text-left">
                <h2 className="font-heading text-3xl font-medium uppercase leading-[1.0] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Zünde den <span className="text-acid">Funken</span>
                </h2>

                <p className="mx-auto mt-2 max-w-md font-mono text-xs uppercase leading-relaxed tracking-[0.14em] text-foreground/60 md:mx-0 md:text-sm">
                  Mit Gaggaboom verbinden.
                </p>

                <a
                  href={`mailto:${site.email}`}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-acid px-4 py-5 font-mono text-sm font-semibold uppercase tracking-[0.1em] text-primary-foreground outline-none transition-all hover:brightness-110 focus-visible:brightness-110 sm:w-fit sm:gap-3 sm:px-9 sm:text-base sm:tracking-[0.16em] md:px-11 md:py-6 md:text-lg"
                >
                  Projekt anfragen <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white pt-6 font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-foreground/80 md:text-sm">
            <p>
              Tel: Auf Anfrage
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
            <p className="text-left md:text-right">
              {site.brand} · {site.person}
              <br />
              {site.location} · Überall wo’s kracht
              <br />© {new Date().getFullYear()}
              <br />
              <Link
                href="/impressum"
                className="outline-none hover:underline focus-visible:underline"
              >
                Impressum
              </Link>{" "}
              ·{" "}
              <Link
                href="/datenschutz"
                className="outline-none hover:underline focus-visible:underline"
              >
                Datenschutz
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}
