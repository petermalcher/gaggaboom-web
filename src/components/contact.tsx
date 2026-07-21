import { Mail, AtSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="ember-radial relative border-t border-border py-28 md:py-36"
    >
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-fire">
            Lass uns reden
          </p>
          <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Bereit für echten{" "}
            <span className="text-fire text-glow">Content?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Anfragen für Events, Kooperationen, Vodcast-Projekte und alles, was
            sich nach einem kreativen Abenteuer anfühlt — immer willkommen.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${site.email}`}>
                <Mail className="size-4" />
                E-Mail schreiben
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                <AtSign className="size-4" />
                Instagram
              </a>
            </Button>
          </div>

          <p className="mt-10 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {site.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
