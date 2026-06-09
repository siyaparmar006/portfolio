import type { ProjectDetail } from "@/content/project-details";

export const wayfindingDetail: ProjectDetail = {
  slug: "wayfinding",
  displayTitle: "Find Your Way — Old City",
  course: "Design of Wayfinding Systems (Academic)",
  role: "Field research, persona/journey mapping, visual direction (type, color, icons), sign form explorations, content hierarchy, materials & prototyping",
  team: "Studio team — Siya Parmar (research, moodboards, form development, physical model); Kashmi Shah, Sakshi Shah, Priyal Soni, Kavya Kanadia, Devanshi Shukla",
  duration: "Aug–Nov 2022 · Ahmedabad",
  deliverables:
    "Wayfinding handbook, sign family system, orientation map, bilingual content hierarchy, digital prototypes, placement & fabrication specs",
  tools:
    "Field audits, persona mapping, Illustrator, SketchUp, ACP + retro-reflective vinyl specs, foam/print mockups",
  intro:
    "A heritage-aware wayfinding system for Ahmedabad’s UNESCO Old City — turning dense pols, markets, and monuments into a legible experience for visitors and locals without diluting character.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "Design a unified wayfinding and sign identity for the Old City that respects heritage while improving legibility at gateways, intersections, and points of interest.",
    audience:
      "Heritage tourists on day trips, local shoppers parking-first, residents navigating pols, and drivers who need earlier parking diversion cues.",
    goals: [
      "Orientation first — clear “You Are Here” and landmark logic at gateways.",
      "Decision support — unmissable cues at forks and intersections.",
      "Mobility clarity — Park & Walk nudges; rickshaw and foot zones.",
      "Cultural fit — bilingual EN/GU, heritage-informed form, durable build.",
    ],
    outcome:
      "Heritage Clarity — a sign family spanning orientation boards, directional blades, interpretive plaques, and mobility signage with documented sizes, content grammar, and in-situ placement logic.",
  },
  briefImages: ["context-old-city.jpg"],
  sections: [
    {
      number: 2,
      title: "Users, Research & Pain Points",
      blocks: [
        {
          label: "Methods",
          text: "On-ground audits with photo logs and sightline notes, informal interviews with tourists, shop owners, and guards, and path tracing at peak and off-peak hours.",
        },
        {
          label: "Key findings",
          bullets: [
            "Visitors miss tucked-away POIs and rely on ad-hoc directions — they need simple maps plus time and distance cues.",
            "Drivers enter lanes too deep and need earlier parking diversion signage.",
            "Existing boards are tiny, low-contrast, or visually drowned in the streetscape.",
          ],
        },
        {
          label: "Personas & journeys",
          bullets: [
            "Heritage Tourist (day trip): entry → orient → 4–6 POIs → exit.",
            "Local Shopper (parking-first): car → parking → 2–3 stops → return.",
          ],
        },
      ],
      images: ["existing-signage.jpg", "persona-tourist.jpg"],
      layout: "stack",
    },
    {
      number: 3,
      title: "Concept & Visual Language",
      blocks: [
        {
          label: "Concept",
          text: "Heritage Clarity — modern legibility wrapped in old-city cues.",
        },
        {
          label: "Form & style",
          bullets: [
            "Silhouette & trim: arched window top; subtle jaali edge pattern.",
            "Typography: heritage-flavored display for headings + high-legibility sans for info; paired EN/GU with balanced hierarchy.",
            "Palette: terracotta header band, cream text for contrast, marigold accents for emphasis and POIs.",
            "Icons: geometric, low-detail pictograms tested for instant recognition.",
          ],
        },
        {
          label: "Result",
          text: "A system that reads fast but feels native to place.",
        },
      ],
      images: ["moodboard.jpg", "concept-render.jpg", "concept-sketches.jpg"],
      layout: "stack",
    },
    {
      number: 4,
      title: "System Architecture",
      blocks: [
        {
          label: "Orientation boards",
          text: "Gateways and parking — “You Are Here” map with 5–10 POIs, walking times, optional QR for a mobile guide.",
        },
        {
          label: "Directional blades",
          text: "Intersections — destination name, arrow, distance (m), walk time (min), and icon; primary vs. secondary destinations by type scale.",
        },
        {
          label: "ID & interpretive plaques",
          text: "At POIs — bilingual name plus 2–3 line story; consistent metadata strip with icon and area.",
        },
        {
          label: "Mobility & regulatory",
          text: "Pedestrian zone, auto stand, parking, one-way — friendly microcopy (“Explore on Foot”) over punitive tone.",
        },
        {
          label: "Rules documented",
          text: "Fixed header band, EN/GU pairing order, min sizes by viewing distance, arrow orientation validated in situ, contrast targets.",
        },
      ],
      images: ["sign-family.jpg", "size-chart.jpg", "pictograms.jpg"],
      layout: "stack",
    },
    {
      number: 5,
      title: "Content, Language & Accessibility",
      blocks: [
        {
          label: "Bilingual parity",
          text: "Gujarati not treated as secondary — equal prominence where native users dominate; mirrored emphasis in English at visitor nodes.",
        },
        {
          label: "Concise microcopy",
          text: "Verbs first (Visit, Turn, Walk), no jargon; distances and walk time for mental model.",
        },
        {
          label: "Accessibility",
          text: "Type sizes by sightline (pedestrian vs. vehicular), color contrast ≥ WCAG, reflective graphics for night legibility; mounting heights clear of street clutter; tactile/braille option at major boards.",
        },
      ],
      images: ["form-explorations.jpg", "interpretive-plaques.jpg", "sign-specs.jpg"],
      layout: "stack",
    },
    {
      number: 6,
      title: "Materials, Placement & Prototyping",
      blocks: [
        {
          label: "Materials",
          bullets: [
            "ACP (aluminum composite) with powder-coat — weather and stain resistant.",
            "Retro-reflective vinyl (traffic-grade) for night glow without power.",
            "UV-stable inks; tamper-friendly fixings.",
          ],
        },
        {
          label: "Placement logic",
          text: "Cones of vision, crowd density, façade setbacks; small/medium/large variants per street width.",
        },
        {
          label: "Prototyping",
          bullets: [
            "Scaled foam/print mock of a directional stack for legibility checks.",
            "Digital prototypes validated scale in context.",
            "Material swatches under noon vs. dusk light to lock contrast.",
          ],
        },
      ],
      images: ["materials-acp.jpg", "cone-of-vision.jpg", "digital-prototype.jpg"],
      layout: "stack",
    },
    {
      number: 7,
      title: "Outcomes, Impact & Next Steps",
      blocks: [
        {
          label: "Projected impact",
          bullets: [
            "Visitors build a quick mental map; fewer lost moments; hidden sites surfaced.",
            "Locals benefit from clearer parking and flow, reducing ad-hoc congestion.",
            "A consistent urban graphic identity that honors Old City character.",
          ],
        },
        {
          label: "What I learned",
          text: "Scale-in-context beats on-screen mockups; bilingual pairing needs typographic diplomacy; “invite, don’t police” improves compliance.",
        },
        {
          label: "Next steps",
          text: "Gateway kit (orientation + parking), intersection kit (2–3 blades), POI plaque set, fabrication specs; optional QR microsite mirroring icons and colors; tactile plates at high-traffic boards.",
        },
      ],
      images: ["signage-in-space.jpg"],
      layout: "stack",
    },
  ],
  layout: "editorial",
};
