import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Gaggaboom.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
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
          Datenschutz&shy;erklärung
        </h1>

        <div className="mt-12 max-w-2xl space-y-10 text-sm leading-relaxed text-foreground/85 md:text-base">
          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              1. Verantwortlicher
            </h2>
            <p className="mt-3">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-3">
              {site.person}
              <br />
              {site.brand}
              <br />
              [STRASSE HAUSNUMMER]
              <br />
              [PLZ ORT]
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-acid outline-none hover:underline focus-visible:underline"
              >
                {site.email}
              </a>
            </p>
            <p className="mt-3">
              Weitere Angaben finden Sie in unserem{" "}
              <Link
                href="/impressum"
                className="text-acid outline-none hover:underline focus-visible:underline"
              >
                Impressum
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              2. Hosting (Vercel)
            </h2>
            <p className="mt-3">
              Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut,
              CA 91789, USA, gehostet. Wenn Sie diese Website besuchen, verarbeitet
              Vercel technisch notwendige Verbindungsdaten (z.&nbsp;B. IP-Adresse,
              Datum und Uhrzeit des Zugriffs, aufgerufene Seite), um die Auslieferung
              der Website zu ermöglichen und die Sicherheit und Stabilität zu
              gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einer sicheren und effizienten
              Bereitstellung der Website). Mit Vercel besteht ein Vertrag zur
              Auftragsverarbeitung (Data Processing Agreement). Soweit personenbezogene
              Daten in die USA übermittelt werden, erfolgt dies auf Grundlage der
              EU-Standardvertragsklauseln.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              3. Server-Logfiles
            </h2>
            <p className="mt-3">
              Beim Aufruf dieser Website werden automatisch Informationen in
              sogenannten Server-Logfiles erfasst, die Ihr Browser übermittelt. Dies
              sind insbesondere:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Datum und Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (gekürzt/anonymisiert, soweit möglich)</li>
            </ul>
            <p className="mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
              vorgenommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Der
              Websitebetreiber hat ein berechtigtes Interesse an der technisch
              fehlerfreien Darstellung und der Sicherheit seiner Website.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              4. Schriftarten (lokal eingebunden)
            </h2>
            <p className="mt-3">
              Diese Website nutzt zur einheitlichen Darstellung Schriftarten (u.&nbsp;a.
              Inter, JetBrains Mono, Poppins). Die Schriften werden lokal von unserem
              bzw. dem Server des Hosters ausgeliefert und beim Aufruf der Website
              nicht von externen Servern (z.&nbsp;B. Google) nachgeladen. Es wird daher
              keine Verbindung zu Servern Dritter aufgebaut, und es werden hierbei
              keine personenbezogenen Daten an Dritte übermittelt.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              5. Cookies, Tracking &amp; Analyse
            </h2>
            <p className="mt-3">
              Diese Website verwendet keine Cookies, kein Webtracking und keine
              Analyse- oder Statistik-Dienste. Es werden keine Nutzungsprofile
              erstellt und keine Daten zu Marketingzwecken verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              6. Externe Links (u.&nbsp;a. Instagram)
            </h2>
            <p className="mt-3">
              Diese Website enthält Links zu externen Websites Dritter (u.&nbsp;a.
              Instagram). Beim Anklicken dieser Links werden Sie auf die Seiten der
              jeweiligen Anbieter weitergeleitet. Auf deren Datenverarbeitung haben
              wir keinen Einfluss. Es gelten die Datenschutzbestimmungen des jeweiligen
              Anbieters. Für Instagram (Meta Platforms Ireland Ltd.) finden Sie diese
              unter{" "}
              <a
                href="https://privacycenter.instagram.com/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-acid outline-none hover:underline focus-visible:underline"
              >
                privacycenter.instagram.com/policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              7. Kontaktaufnahme
            </h2>
            <p className="mt-3">
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (z.&nbsp;B.
              Name, E-Mail-Adresse und der Inhalt Ihrer Nachricht) zum Zweck der
              Bearbeitung Ihrer Anfrage verarbeitet und gespeichert. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. b DSGVO (bei vorvertraglichen oder vertraglichen
              Anfragen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Bearbeitung der Anfrage). Die Daten werden gelöscht, sobald sie für die
              Zweckerreichung nicht mehr erforderlich sind und keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              8. Ihre Rechte
            </h2>
            <p className="mt-3">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
              das Recht auf:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren
              (Art. 77 DSGVO). Zur Ausübung Ihrer Rechte genügt eine formlose
              Nachricht an die oben genannte Kontaktadresse.
            </p>
          </section>

          <section>
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-acid md:text-sm">
              9. Aktualität
            </h2>
            <p className="mt-3">
              Diese Datenschutzerklärung wird bei Bedarf angepasst, um sie an
              geänderte Rechtslagen oder Änderungen der Website anzupassen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
