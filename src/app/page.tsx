import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Mehr } from "@/components/mehr";
import { Services } from "@/components/services";
import { References } from "@/components/references";
import { Footer } from "@/components/footer";
import { StackSection } from "@/components/stack-section";

export default function Home() {
  return (
    <>
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
