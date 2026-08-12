import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von Gaggaboom.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-16 md:pt-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground/70 outline-none transition-colors hover:text-acid focus-visible:text-acid md:text-sm"
        >
          <span aria-hidden>←</span> Zurück zu Gaggaboom
        </Link>

        <h1 className="mt-10 font-heading text-4xl font-medium uppercase leading-[1.0] tracking-tight md:text-6xl">
          Impressum
        </h1>

        <div className="mt-12 max-w-2xl space-y-10 text-sm leading-relaxed text-foreground/85 md:text-base">
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-3">
              {site.person}
              <br />
              {site.brand}
              <br />
              Kerpener Str. 5
              <br />
              50937 Köln
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              Kontakt
            </h2>
            <p className="mt-3">
              Telefon: Auf Anfrage
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-acid outline-none hover:underline focus-visible:underline"
              >
                {site.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              Steuernummer
            </h2>
            <p className="mt-3">
              Steuernummer: 223/5151/2271
              <br />
              Kleinunternehmerin gemäß § 19 UStG. Es wird keine Umsatzsteuer
              ausgewiesen.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              Redaktionell verantwortlich (§ 18 Abs. 2 MStV)
            </h2>
            <p className="mt-3">
              {site.person}
              <br />
              Kerpener Str. 5
              <br />
              50937 Köln
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              Haftung für Inhalte
            </h2>
            <p className="mt-3">
              Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
              §§ 8 bis 10 DDG bin ich als Diensteanbieterin jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
              der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
              von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend
              entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              Haftung für Links
            </h2>
            <p className="mt-3">
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
              Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets die jeweilige Anbieterin oder der jeweilige Anbieter
              der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
              der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei
              Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend
              entfernen.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              Urheberrecht
            </h2>
            <p className="mt-3">
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der
              jeweiligen Autorin bzw. Erstellerin. Downloads und Kopien dieser Seite
              sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
