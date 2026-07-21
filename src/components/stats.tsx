import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="relative border-t border-border bg-boom-surface py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-fire">
            Mittendrin, in Zahlen
          </p>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            Da, wo es{" "}
            <span className="text-fire text-glow">kracht.</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Von der ersten Idee bis zum viralen Reel — Gaggaboom liefert Content,
            der Menschen bewegt und Marken sichtbar macht.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="rounded-2xl border border-border bg-background/40 p-6">
                <div className="font-heading text-4xl font-bold tracking-tight text-fire text-glow md:text-5xl">
                  {stat.value}
                </div>
                <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
