import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { SoftwareRibbon } from "@/components/site/SoftwareRibbon";
import { Work } from "@/components/site/Work";
import { DesignOS } from "@/components/site/DesignOS";
import { Atlas } from "@/components/site/Atlas";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

export default function HomePage() {
  return (
    <main className="relative overflow-x-clip">
      <ScrollProgress />
      <Nav />
      <Hero />
      <SoftwareRibbon />
      <Work />
      <DesignOS />
      <Atlas />
      <About />
      <Footer />
    </main>
  );
}
