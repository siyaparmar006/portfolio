import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Work } from "@/components/site/Work";
import { DesignOS } from "@/components/site/DesignOS";
import { Atlas } from "@/components/site/Atlas";
import { About } from "@/components/site/About";
import { Footer } from "@/components/site/Footer";

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
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Work />
      <DesignOS />
      <Atlas />
      <About />
      <Footer />
    </main>
  );
}
