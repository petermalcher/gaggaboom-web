"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax depths — background moves least, foreground most.
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const yLogo = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const yWord = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="ember-radial relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Ambient glow blob, parallaxed */}
      <motion.div
        aria-hidden
        style={{ y: yGlow }}
        className="pointer-events-none absolute -right-24 top-10 size-[520px] rounded-full bg-fire/20 blur-[120px]"
      />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 opacity-60" />

      {/* Oversized ghost word behind everything */}
      <motion.span
        aria-hidden
        style={{ y: yWord, opacity }}
        className="pointer-events-none absolute -left-4 bottom-4 select-none font-heading text-[26vw] font-bold leading-none tracking-tighter text-fire/[0.06] md:bottom-10 md:text-[18vw]"
      >
        BOOM
      </motion.span>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:px-8">
        {/* Left — copy */}
        <motion.div
          style={{ opacity }}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fire/40 bg-fire/10 px-3.5 py-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-fire" />
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ember">
              {site.tagline}
            </span>
          </div>

          <h1 className="font-heading text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-[5.5rem]">
            Immer
            <span className="text-fire text-glow">.</span>
            <br />
            Mitten
            <br />
            <span className="text-fire text-glow">drin.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Ob backstage auf dem Festival, im Getümmel, als rasende Reporterin
            auf dem Moped oder im Vodcast-Studio — {site.brand} ist da, wo was
            passiert. Authentisch, humorvoll, professionell.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#contact">Zusammenarbeiten</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#work">Einblicke ansehen</a>
            </Button>
          </div>
        </motion.div>

        {/* Right — parallax photo + logo */}
        <div className="relative mx-auto h-[440px] w-full max-w-sm md:h-[560px]">
          <motion.div
            style={{ y: yPhoto }}
            initial={reduce ? false : { opacity: 0, scale: 0.96, rotate: -3 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="ring-fire absolute inset-x-4 top-6 aspect-[3/4] overflow-hidden rounded-3xl"
          >
            <Image
              src="/images/kerstin-hero.png"
              alt="Kerstin Kleinenbrands mit Mikrofon im Einsatz"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Gaggaboom logo badge */}
          <motion.div
            style={{ y: yLogo }}
            initial={reduce ? false : { opacity: 0, scale: 0.8, rotate: 8 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1, rotate: 5 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="absolute -right-2 bottom-2 size-32 rounded-2xl border border-fire/40 bg-boom-surface/90 p-2 shadow-2xl backdrop-blur md:-right-6 md:size-40"
          >
            <div className="relative size-full overflow-hidden rounded-xl">
              <Image
                src="/images/logo-gaggaboom.jpeg"
                alt="Gaggaboom Logo"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden
        style={{ opacity }}
        className="absolute inset-x-0 bottom-6 flex justify-center"
      >
        <div className="flex flex-col items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
          <span className="h-8 w-px animate-pulse bg-gradient-to-b from-fire to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
