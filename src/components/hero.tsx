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

/** Deterministic comic starburst points (no randomness → no hydration drift). */
function starPoints(spikes: number, radii: number[], inner: number): string {
  const pts: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? radii[(i / 2) % radii.length] : inner;
    const a = (Math.PI * i) / spikes - Math.PI / 2;
    pts.push(`${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`);
  }
  return pts.join(" ");
}

const OUTER = starPoints(14, [104, 88, 97, 84, 100, 90, 94], 46);
const INNER = starPoints(10, [66, 56, 62, 53, 60], 30);
// Bigger yellow star for the small returning explosion, spins counter to the orange one.
const INNER_BIG = starPoints(10, [89, 76, 84, 72, 81], 41);

/** The boom — a comic explosion bursting behind the figure,
 *  straight out of the Gaggaboom logo. */
function Explosion() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-[38%] -z-10 translate-x-[calc(-50%+22px)] translate-y-[calc(-50%+25px)] md:top-[40%]"
    >
      {/* Phase 1 — the big burst: pop in, then vanish */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: -25, opacity: 0 }}
        animate={{ scale: [0, 1.15, 1.35], rotate: [-25, 0, 18], opacity: [0, 1, 0] }}
        transition={{ delay: 0.55, duration: 1.6, times: [0, 0.35, 1], ease: "easeOut" }}
      >
        <svg viewBox="-110 -110 220 220" className="size-[120vmin] max-w-none md:size-[46rem]">
          <polygon points={OUTER} fill="var(--stage-bright)" />
          <polygon points={INNER} fill="var(--acid)" />
        </svg>
      </motion.div>

      {/* Phase 2 — small explosion returns: grows in slowly like the first
          burst, then the two stars keep spinning in opposite directions */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.15, duration: 1.6, ease: "easeOut" }}
      >
        <svg viewBox="-110 -110 220 220" className="size-[124.9vmin] max-w-none md:size-[47.25rem]">
          <motion.g
            initial={{ rotate: 20 }}
            animate={{ rotate: 380, opacity: [0.75, 1, 0.75] }}
            transition={{
              rotate: { delay: 2.15, duration: 42, ease: "linear", repeat: Infinity },
              opacity: { delay: 2.15, duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <polygon points={OUTER} fill="var(--stage-bright)" />
          </motion.g>
          <motion.g
            initial={{ rotate: -20 }}
            animate={{ rotate: -380, opacity: [0.75, 1, 0.75] }}
            transition={{
              rotate: { delay: 2.15, duration: 42, ease: "linear", repeat: Infinity },
              opacity: { delay: 2.15, duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <polygon points={INNER_BIG} fill="var(--acid)" />
          </motion.g>
        </svg>
      </motion.div>
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
  const imgScrollY = useTransform(scrollY, [0, vh], [0, reduce ? 0 : -60]);
  const wordScrollY = useTransform(scrollY, [0, vh], [0, reduce ? 0 : 110]);
  const glowScrollY = useTransform(scrollY, [0, vh], [0, reduce ? 0 : 40]);
  const fade = useTransform(scrollY, [0, vh * 0.7], [1, 0]);

  // From 50% scrolled, darken the whole hero in lockstep with the
  // scroll — fully black already at 75% of the viewport height.
  const darkness = useTransform(scrollY, [vh * 0.5, vh * 0.75], [0, 1]);

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={sectionRef}
        id="top"
        onPointerMove={onPointerMove}
        className="sticky top-0 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden"
      >
        {/* Stage light — drifts slowest (parallax back layer), pulsing in intensity only */}
        <motion.div
          aria-hidden
          style={{ y: glowScrollY }}
          animate={{ opacity: [0.72, 0.8, 0.72] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="stage-radial absolute inset-0"
        />

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
                  aspectRatio: "923 / 1152",
                }}
                className="relative h-[min(54svh,32rem)] w-auto max-w-[88vw]"
              >
                <Image
                  src="/images/kerstin-fisheye.png"
                  alt="Kerstin Kleinenbrands schaut von oben in die Fisheye-Kamera und hält ein Puschel-Mikrofon"
                  fill
                  preload
                  sizes="(max-width: 768px) 88vw, 440px"
                  style={{
                    filter:
                      "sepia(0.35) saturate(1.35) hue-rotate(-18deg) brightness(1.1) drop-shadow(0 18px 50px rgba(0,0,0,0.45))",
                  }}
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
            className="-mt-[8vw] flex w-full items-baseline justify-center px-3 font-display text-[clamp(2.7rem,10.8vw,9rem)] font-bold uppercase leading-[0.95] tracking-tight md:-mt-16"
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
          <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-sm uppercase tracking-[0.28em] text-foreground/90 md:mt-6 md:text-lg">
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
              {site.location} · <span className="text-acid">{site.instagramHandle}</span>
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
