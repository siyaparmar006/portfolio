import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { DesignOS } from "@/components/site/DesignOS";
import { Atlas } from "@/components/site/Atlas";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress, ScrollMarker } from "@/components/site/ScrollProgress";
import { FloatingPortraitCard } from "@/components/site/FloatingPortraitCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siya Parmar — Product Designer" },
      {
        name: "description",
        content:
          "Siya Parmar is a Product Designer crafting human-centered digital experiences with strong visual systems and brand thinking.",
      },
      { property: "og:title", content: "Siya Parmar — Product Designer" },
      {
        property: "og:description",
        content:
          "Human-centered digital experiences with strong visual systems and brand thinking.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  // Spans Hero → About; the shared portrait card animates across this range.
  const journeyRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative overflow-x-clip">
      <ScrollProgress />
      <ScrollMarker />
      <Nav />
      <FloatingPortraitCard trackRef={journeyRef} />
      <div ref={journeyRef}>
        <Hero />
        <Work />
        <DesignOS />
        <About />
      </div>
      <Atlas />
      <Footer />
    </main>
  );
}
