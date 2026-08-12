"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  MotionConfig,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { hero, site } from "@/lib/content";
import { useSvh } from "@/lib/use-svh";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Deterministic layout data for the procedural explosion
   (fixed values → no randomness → no hydration drift).
   angle in deg, dist/size as fraction of the container. */
const FIRE_PUFFS = [
  { angle: 0, dist: 0.3, size: 0.52, delay: 0 },
  { angle: 48, dist: 0.34, size: 0.44, delay: 0.05 },
  { angle: 95, dist: 0.3, size: 0.5, delay: 0.02 },
  { angle: 140, dist: 0.36, size: 0.42, delay: 0.07 },
  { angle: 185, dist: 0.32, size: 0.48, delay: 0.03 },
  { angle: 230, dist: 0.34, size: 0.45, delay: 0.06 },
  { angle: 275, dist: 0.3, size: 0.5, delay: 0.01 },
  { angle: 320, dist: 0.35, size: 0.43, delay: 0.04 },
];

const SMOKE_PUFFS = [
  { angle: 20, dist: 0.42, size: 0.55, delay: 0.12 },
  { angle: 80, dist: 0.46, size: 0.48, delay: 0.18 },
  { angle: 150, dist: 0.44, size: 0.52, delay: 0.1 },
  { angle: 210, dist: 0.47, size: 0.5, delay: 0.16 },
  { angle: 270, dist: 0.43, size: 0.54, delay: 0.14 },
  { angle: 330, dist: 0.45, size: 0.47, delay: 0.2 },
];

const SPARKS = [
  { angle: 10, dist: 0.62 },
  { angle: 55, dist: 0.7 },
  { angle: 100, dist: 0.6 },
  { angle: 135, dist: 0.72 },
  { angle: 170, dist: 0.64 },
  { angle: 215, dist: 0.68 },
  { angle: 250, dist: 0.6 },
  { angle: 295, dist: 0.74 },
  { angle: 340, dist: 0.66 },
];

function polar(angle: number, dist: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: Math.cos(rad) * dist * 100, y: Math.sin(rad) * dist * 100 };
}

/** The boom — a procedural, semi-realistic explosion behind the figure:
 *  bright flash, fireball puffs, drifting smoke and flying sparks.
 *  Same timing as the old comic burst: pops at ~0.55s, gone by ~2.3s. */
function Explosion() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-[38%] -z-10 translate-x-[calc(-50%+22px)] translate-y-[calc(-50%+25px)] md:top-[40%]"
    >
      <div className="absolute left-1/2 top-1/2 size-[72vmin] max-w-none -translate-x-1/2 -translate-y-1/2 md:size-[28rem]">
        {/* Fireball puffs — orange-yellow cores blooming outward.
            x/y transform-% are relative to the element's own size,
            so divide by the puff size to get container-relative motion. */}
        {FIRE_PUFFS.map((p, i) => {
          const raw = polar(p.angle, p.dist);
          const x = raw.x / p.size;
          const y = raw.y / p.size;
          return (
            <motion.div
              key={`fire-${i}`}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: `${p.size * 100}%`,
                height: `${p.size * 100}%`,
                marginLeft: `${(-p.size * 100) / 2}%`,
                marginTop: `${(-p.size * 100) / 2}%`,
                background:
                  "radial-gradient(circle, #fff3c4 0%, var(--acid) 22%, var(--stage-bright) 48%, color-mix(in oklch, var(--stage-deep), transparent 25%) 72%, transparent 88%)",
                filter: "blur(6px)",
              }}
              initial={{ x: 0, y: 0, scale: 0.1, opacity: 0 }}
              animate={{
                x: [0, `${x * 0.7}%`, `${x}%`],
                y: [0, `${y * 0.7}%`, `${y}%`],
                scale: [0.1, 1, 1.25],
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: 0.58 + p.delay,
                duration: 1.35,
                times: [0, 0.4, 1],
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Smoke — darker puffs that linger a touch longer and drift up */}
        {SMOKE_PUFFS.map((p, i) => {
          const raw = polar(p.angle, p.dist);
          const x = raw.x / p.size;
          const y = raw.y / p.size;
          return (
            <motion.div
              key={`smoke-${i}`}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: `${p.size * 100}%`,
                height: `${p.size * 100}%`,
                marginLeft: `${(-p.size * 100) / 2}%`,
                marginTop: `${(-p.size * 100) / 2}%`,
                background:
                  "radial-gradient(circle, rgba(90,78,66,0.9) 0%, rgba(55,48,42,0.65) 50%, rgba(35,30,26,0.35) 72%, transparent 88%)",
                filter: "blur(10px)",
              }}
              initial={{ x: 0, y: 0, scale: 0.15, opacity: 0 }}
              animate={{
                x: [0, `${x * 0.8}%`, `${x}%`],
                y: [0, `${(raw.y * 0.8 - 4) / p.size}%`, `${(raw.y - 10) / p.size}%`],
                scale: [0.15, 1, 1.4],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                delay: 0.68 + p.delay,
                duration: 1.6,
                times: [0, 0.35, 1],
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Sparks — small hot embers shooting out fast (2.5% own size) */}
        {SPARKS.map((s, i) => {
          const raw = polar(s.angle, s.dist);
          const x = raw.x / 0.025;
          const y = raw.y / 0.025;
          return (
            <motion.div
              key={`spark-${i}`}
              className="absolute left-1/2 top-1/2 size-[2.5%] rounded-full"
              style={{
                marginLeft: "-1.25%",
                marginTop: "-1.25%",
                background:
                  "radial-gradient(circle, #fffbe0 0%, var(--acid) 45%, transparent 75%)",
                boxShadow: "0 0 12px color-mix(in oklch, var(--acid), transparent 30%)",
              }}
              initial={{ x: 0, y: 0, scale: 1, opacity: 0 }}
              animate={{
                x: `${x}%`,
                y: `${(raw.y + 8) / 0.025}%`,
                scale: [1, 0.9, 0.3],
                opacity: [0, 1, 0],
              }}
              transition={{ delay: 0.56, duration: 0.95, times: [0, 0.3, 1], ease: "easeOut" }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Pointer parallax — the figure leans toward the cursor.
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), {
    stiffness: 110,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), {
    stiffness: 110,
    damping: 15,
  });

  function onPointerMove(e: React.PointerEvent) {
    if (reduce) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  // Scroll-out parallax — bound to the global scroll position relative to
  // the stable small-viewport height (no iOS browser-chrome jumps).
  const vh = useSvh();

  const { scrollY } = useScroll();
  // Gentler parallax — smaller offsets so layers drift less as the hero leaves.
  const imgScrollY = useTransform(scrollY, [0, vh], [0, reduce ? 0 : -32]);
  const wordScrollY = useTransform(scrollY, [0, vh], [0, reduce ? 0 : 60]);
  // Fade out later and over a longer stretch, so the exit is softer.
  const fade = useTransform(scrollY, [vh * 0.15, vh], [1, 0]);

  // Darken the hero gradually — start later and stretch the ramp well past
  // the first viewport so it dims slowly rather than snapping black.
  const darkness = useTransform(scrollY, [vh * 0.35, vh], [0, 1]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={sectionRef}
        id="top"
        onPointerMove={onPointerMove}
        className="sticky top-0 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
      >
        {/* Fisheye figure — appears first, explosion pops behind it */}
        <motion.div style={{ y: imgScrollY }} className="relative z-10">
          <Explosion />
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 26 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.6,
              }}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformPerspective: 900,
                  aspectRatio: "892 / 1146",
                  filter: "drop-shadow(0 18px 50px rgba(0,0,0,0.45))",
                }}
                className="relative h-auto max-h-[min(54svh,32rem)] w-[min(88vw,25rem)]"
              >
                <Image
                  src="/images/kerstin-hero-v10.png"
                  alt="Kerstin Kleinenbrands schaut mit Sonnenbrille von oben in die Kamera und hält ein Puschel-Mikrofon"
                  fill
                  preload
                  sizes="(max-width: 768px) 88vw, 440px"
                  quality={95}
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Wordmark — laid over the lower part of the figure,
            drifts faster than the photo (parallax front layer) */}
        <motion.div style={{ y: wordScrollY, opacity: fade }} className="z-20 w-full">
          <h1
            aria-label={hero.title}
            className="-mt-[5vw] flex w-full items-baseline justify-center px-3 font-display text-[clamp(2.9rem,12vw,9rem)] font-bold uppercase leading-[0.95] tracking-tight md:-mt-5 md:text-[4rem]"
          >
            {hero.title.split("").map((letter, i) => (
              <motion.span
                key={i}
                aria-hidden
                initial={{ y: "0.6em", opacity: 0, rotate: 10 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{
                  delay: 0.5 + i * 0.055,
                  type: "spring",
                  stiffness: 300,
                  damping: 22,
                }}
                className={`inline-block select-none [text-shadow:0_6px_40px_rgba(0,0,0,0.55)] ${
                  i >= 5 ? "text-acid" : ""
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          {/* Tagline — words appear one after another */}
          <p className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[0.8rem] uppercase tracking-[0.22em] text-foreground/90 md:mt-1 md:text-lg md:tracking-[0.28em]">
            {site.tagline.split(" · ").map((word, i, arr) => (
              <span key={word} className="inline-flex items-center gap-3">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.15 + i * 0.4, duration: 0.5, ease: EASE }}
                >
                  {word}
                </motion.span>
                {i < arr.length - 1 && (
                  <motion.span
                    aria-hidden
                    className="text-acid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.35 + i * 0.4, duration: 0.4 }}
                  >
                    ·
                  </motion.span>
                )}
              </span>
            ))}
          </p>
        </motion.div>

        {/* Bottom meta line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.7 }}
          className="absolute inset-x-0 bottom-0 z-10"
        >
          <motion.div
            style={{ opacity: fade }}
            className="mx-auto flex w-full max-w-6xl items-baseline justify-between gap-4 px-5 pb-6 font-mono text-xs uppercase tracking-[0.16em] text-foreground/80 md:text-sm"
          >
            <span>{site.person}</span>
            <span>
              {site.location} ·{" "}
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-acid outline-none hover:underline focus-visible:underline"
              >
                {site.instagramHandle}
              </a>
            </span>
          </motion.div>
        </motion.div>

        {/* Darkening veil — fades the whole hero to black between
            50% and 100% of the viewport height scrolled */}
        <motion.div
          aria-hidden
          style={{ opacity: darkness }}
          className="pointer-events-none absolute inset-0 z-30 bg-black"
        />
      </section>
    </MotionConfig>
  );
}
