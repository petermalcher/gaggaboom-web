import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Stats } from "@/components/stats";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MicThread } from "@/components/mic-thread";

export default function Home() {
  return (
    <>
      <Navbar />
      <MicThread />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Work />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
