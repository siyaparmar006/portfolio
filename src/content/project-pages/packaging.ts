import type { ProjectDetail } from "@/content/project-details";

export const packagingDetail: ProjectDetail = {
  slug: "packaging",
  displayTitle: "CurvD — Packaging System",
  course: "Packaging Design (Academic)",
  role: "Research, concept, structure design, dielines, graphics, prototyping",
  duration: "2022",
  deliverables:
    "Structural concept (inner/outer), opening mechanism, dieline & material spec, brand graphics, usability notes",
  tools:
    "Hand prototyping (corrugated), cutter/ruler, Illustrator (dielines & art), basic photo mockups",
  intro:
    "A distinctive, ergonomic package for the CurvD mug that protects the handle, stacks efficiently, opens easily with a one-push slide, and doubles as a gift or display box.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "Design a protective, brand-forward package for the CurvD mug that prevents breakage, opens intuitively for all users, stands out on shelf, stacks cleanly in logistics, and extends life post-purchase as a giftable or displayable object.",
    audience:
      "All users including those with low grip strength — shoppers, gift buyers, and warehouse handlers who need stable stacking and handle-safe transit.",
    goals: [
      "Prevent breakage around the handle during storage, shipping, and retail handling.",
      "Open intuitively for single-hand or one-elbow use without twist or tear actions.",
      "Stand out on shelf and stack cleanly in back-of-house logistics.",
      "Extend life post-purchase as a giftable or displayable object.",
    ],
    outcome:
      "A hexagonal sleeve-and-tray system with handle-safe cradle, one-push slide opening, on-pack instructions, and graphics built around the CurvD handle curve.",
  },
  briefImages: ["product-context.jpg"],
  sections: [
    {
      number: 2,
      title: "Research & Constraints",
      blocks: [
        {
          label: "What wasn’t working",
          bullets: [
            "Existing square cartons blended into the shelf and didn’t protect the handle effectively.",
            "Unboxing had too many steps — extra insert card, unclear open points.",
            "Packaging needed to be cost-effective, material-light, and corrugated for strength.",
          ],
        },
        {
          label: "Accessibility lens",
          text: "Reduce fine motor demands; avoid twist/tear actions; make “how to open” obvious at first glance.",
        },
      ],
      layout: "text",
    },
    {
      number: 3,
      title: "Concept & Form",
      blocks: [
        {
          label: "Why a hexagon?",
          bullets: [
            "Shelf impact & recall — the hex silhouette differentiates instantly in a grid of cuboids.",
            "Stackability — hex faces align; stable columns and pallet patterns; reduced tip risk.",
            "Stability & strength — more edge length = better crush resistance with minimal board.",
            "Gift/display use — with the outer sleeve removed, the inner shows the mug elegantly.",
          ],
        },
      ],
      images: ["concept-rationale.jpg", "mockup-display.jpg"],
      layout: "stack",
    },
    {
      number: 4,
      title: "Structure & Mechanism",
      blocks: [
        {
          label: "Two parts working together",
          text: "Outer hex sleeve for branding, protection, and one-push opening; inner tray with profiled paper mold shaped to the CurvD mug.",
        },
        {
          label: "Slide motion",
          text: "User presses one hex face (hand or elbow) and the tray slides out — no ripping, twisting, or deep reach.",
        },
        {
          label: "Handle-safe geometry",
          text: "Mug lies horizontally so the handle sits in free space; cradle touches opposite hex edges to immobilize the cup body.",
        },
        {
          label: "Fewer steps",
          text: "Thank-you message and instructions printed on the sleeve face — no separate insert card.",
        },
      ],
      images: [
        "mechanism-explainer.jpg",
        "structure-cradle.jpg",
        "cradle-detail.jpg",
        "mockup-slide.jpg",
      ],
      layout: "stack",
    },
    {
      number: 5,
      title: "Materials, Dielines & Production",
      blocks: [
        {
          label: "Board",
          text: "Single-wall corrugated (kraft or white top) for strength and cost balance.",
        },
        {
          label: "Dielines",
          bullets: [
            "Outer: hex sleeve with glue tab; finger relief on the push-face.",
            "Inner: hex tray with dust flaps; die-cut paper mold glued/locked at base.",
          ],
        },
        {
          label: "Assembly & efficiency",
          text: "Glue outer seam; lock inner; place cradle; insert mug; slide close. Minimal offcuts; standardized flat size for bulk cutting; one-pass print before die-cut.",
        },
        {
          label: "Sustainability",
          text: "Mono-material paper system; removable small clear label if needed; clear disposal icons.",
        },
      ],
      images: ["dieline-graphics.jpg", "mockup-topdown.jpg"],
      layout: "stack",
    },
    {
      number: 6,
      title: "Graphics & Information Design",
      blocks: [
        {
          label: "Motif",
          text: "Embossed/debossed handle curve as primary graphic — echoing CurvD’s USP and the “D” in the logotype.",
        },
        {
          label: "Typography & panels",
          bullets: [
            "Bold, high-contrast front panel for product name.",
            "Small sides carry care info and thank-you note.",
            "Simple pictogram (press → slide) on the push-face with microcopy: “Press to open.”",
          ],
        },
        {
          label: "Gifting cue",
          text: "One face reserved for a short greeting line; inner tray printed with subtle pattern for display at home.",
        },
      ],
      images: ["panel-copy.jpg", "mockup-pair.jpg", "mockup-horizontal.jpg"],
      layout: "stack",
    },
    {
      number: 7,
      title: "Outcomes, Tests & Next Steps",
      blocks: [
        {
          label: "What improved",
          bullets: [
            "Protection — horizontal orientation + cradle eliminated handle contact; less rattle, better edge crush.",
            "Unboxing — one-gesture open; fewer components; clear instructions on-pack.",
            "Branding — iconic hex silhouette + handle-curve embossing for stronger shelf and photo recall.",
            "Reuse — inner tray premium enough to display the mug at home.",
          ],
        },
        {
          label: "Usability checks",
          bullets: [
            "Timed open/close with different users → reliable <3s open; no tearing.",
            "Drop/tilt mock tests → cradle held position; handle never struck sidewalls.",
          ],
        },
        {
          label: "Next steps",
          text: "Lock board grade after transit pilots; add QR to short wash-care video; explore gift-edition colorways and multi-pack hex “honeycomb” for retail stacks.",
        },
      ],
      images: ["cover.jpg"],
      layout: "stack",
    },
  ],
  layout: "editorial",
};
