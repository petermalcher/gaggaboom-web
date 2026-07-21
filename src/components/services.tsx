import {
  Clapperboard,
  Mic,
  Radio,
  Camera,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { services } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  clapperboard: Clapperboard,
  mic: Mic,
  radio: Radio,
  camera: Camera,
  handshake: Handshake,
};

export function Services() {
  return (
    <section id="services" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-fire">
                Was ich mache
              </p>
              <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                Dein Produkt.
                <br />
                <span className="text-fire text-glow">Meine Stimme.</span>
              </h2>
            </div>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Anfrage stellen →</a>
            </Button>
          </div>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <StaggerItem key={service.title}>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-fire/60 hover:shadow-[0_18px_50px_-12px_oklch(0.68_0.2_42/0.35)]">
                  <CardHeader>
                    <div className="mb-2 flex size-11 items-center justify-center rounded-xl border border-fire/30 bg-fire/10 text-fire transition-colors group-hover:bg-fire/20">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="font-heading text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.body}
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
