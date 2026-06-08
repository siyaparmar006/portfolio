import type { Metadata } from "next";
import { AtlasPage } from "@/components/site/AtlasPage";

export const metadata: Metadata = {
  title: "Design Atlas",
  description:
    "A complete archive of design projects — case studies, project cards, and explorations.",
};

export default function Page() {
  return <AtlasPage />;
}
