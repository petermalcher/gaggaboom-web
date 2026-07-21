import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

const pills = [
  "Live-Moderation",
  "Reels",
  "Storytelling",
  "Voice-over",
  "Interviews",
  "Vodcast",
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.85fr_1fr] md:px-8">
        <Reveal>
          <div className="ring-fire relative overflow-hidden rounded-3xl bg-boom-surface p-4">
            <Image
              src="/images/about.png"
              alt="Der rote Faden — vom kreativen Chaos zum fertigen Content"
              width={1024}
              height={1024}
              className="rounded-2xl"
            />
            <p className="mt-4 px-2 pb-1 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Vom Chaos zum roten Faden
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-fire">
            Wer hinter {site.brand} steckt
          </p>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            Echte Inhalte.
            <br />
            <span className="text-fire text-glow">Echter Einfluss.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {site.brand} ist die kreative Allzweckwaffe von{" "}
            <strong className="font-semibold text-foreground">
              {site.person}
            </strong>{" "}
            — Moderatorin und Content Creatorin aus Köln. Reels, Stories,
            Voice-over, Live-Moderation: Ich übernehme die authentische
            Präsentation deines Produkts für maximale Sichtbarkeit und messbare
            Reichweite.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Von der ersten Content-Strategie und Formatentwicklung bis zum
            fertigen Social-Media-Content — die gesamte Pipeline aus einer Hand.
            Ich kreiere Verbindungen zwischen Menschen und Marken.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-border bg-boom-surface px-3.5 py-1.5 text-sm text-foreground/90"
              >
                {pill}
              </span>
            ))}
          </div>

          <Button asChild size="lg" className="mt-8">
            <a href="#contact">Let&apos;s talk</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
