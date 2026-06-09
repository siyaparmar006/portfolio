import type { Metadata } from "next";
import { DesignOSPage } from "@/components/site/DesignOSPage";

export const metadata: Metadata = {
  title: "Design OS",
  description:
    "How Siya Parmar moves from messy context to clear, human-centered design systems — product thinking, service design, and visual communication.",
};

export default function Page() {
  return <DesignOSPage />;
}
