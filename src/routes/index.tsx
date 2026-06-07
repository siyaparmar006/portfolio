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
      { title: "Studio — Calm interfaces, intentional motion" },
      {
        name: "description",
        content:
          "An independent design studio crafting product systems, brand identities, and the quiet animations that hold them together.",
      },
      { property: "og:title", content: "Studio — Calm interfaces, intentional motion" },
      {
        property: "og:description",
        content: "Product systems, brand identities, and quiet motion.",
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
