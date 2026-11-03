import type { Metadata } from "next";
import { site } from "@/lib/content";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Mehr } from "@/components/mehr";
import { Services } from "@/components/services";
import { References } from "@/components/references";
import { Footer } from "@/components/footer";
import { StackSection } from "@/components/stack-section";

export const metadata: Metadata = {
  alternates: { canonical: "https://gaggaboom.de" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": "https://gaggaboom.de/#kerstin",
            name: site.person,
            alternateName: site.brand,
            url: "https://gaggaboom.de",
            image: "https://gaggaboom.de/images/kerstin-portrait.jpg",
            jobTitle: "Moderatorin, Storytellerin und Brand Host",
            description: "Moderation, Reels, Interviews und Vodcasts aus Köln.",
            homeLocation: { "@type": "City", name: site.location },
            sameAs: [site.instagram],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        {/* Each section pins once scrolled through — the next one
            slides up and covers it, like the hero cover effect. */}
        <StackSection zIndex={10}>
          <Mehr />
        </StackSection>
        <StackSection zIndex={20}>
          <Services />
        </StackSection>
        <StackSection zIndex={30} anchorId="referenzen">
          <References />
        </StackSection>
        <StackSection zIndex={40} drift={false} anchorId="contact">
          <Footer />
        </StackSection>
      </main>
    </>
  );
}
