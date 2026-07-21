import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { clusters, site, type GalleryItem } from "@/lib/content";

const ratioClass: Record<NonNullable<GalleryItem["ratio"]>, string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  tall: "aspect-[4/5]",
};

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block overflow-hidden rounded-xl border border-border bg-boom-surface",
        ratioClass[item.ratio ?? "portrait"]
      )}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
      <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border border-fire/40 bg-background/60 text-fire opacity-0 backdrop-blur transition-all group-hover:opacity-100">
        <ArrowUpRight className="size-4" />
      </div>
      <p className="absolute inset-x-0 bottom-0 translate-y-1 p-3 text-sm font-medium leading-snug text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {item.caption}
      </p>
    </a>
  );
}

export function Work() {
  return (
    <section id="work" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-fire">
                Einblicke
              </p>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                Backstage &amp; on Location.
              </h2>
            </div>
            <Button asChild variant="outline">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                {site.instagramHandle} →
              </a>
            </Button>
          </div>
        </Reveal>

        <div className="flex flex-col gap-16">
          {clusters.map((cluster) => (
            <div key={cluster.label}>
              <Reveal>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-fire" />
                  <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {cluster.label}
                  </h3>
                </div>
                {cluster.desc && (
                  <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {cluster.desc}
                  </p>
                )}
              </Reveal>

              <Reveal delay={0.05}>
                <div
                  className={cn(
                    "grid gap-3",
                    cluster.label === "Einmal um Block"
                      ? "max-w-2xl grid-cols-2 sm:grid-cols-3"
                      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                  )}
                >
                  {cluster.items.map((item) => (
                    <GalleryCard key={item.src} item={item} />
                  ))}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
