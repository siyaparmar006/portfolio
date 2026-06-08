import type { ProjectDetail } from "@/content/project-details";

export const environmentalDesignDetail: ProjectDetail = {
  slug: "environmental-design",
  displayTitle: "Environmental Graphics — Café Installation",
  course: "Environmental Graphics (Academic)",
  role: "Concept, research, spatial planning, prototyping, fabrication, install",
  tools: "SketchUp, Illustrator, hand prototyping, paint, thermocol, stapler, paper cups",
  deliverables:
    "Concept note, color explorations, SketchUp model, full-scale wall installation, process documentation",
  duration: "3 weeks",
  intro:
    "A modular, low-cost wall feature made from colored paper cups that gives a café a playful, memorable identity rooted in everyday Indian café culture.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "Design site-specific environmental graphics for a selected space. I chose a café and set these goals:",
    audience:
      "Café customers and passersby — a wall they remember and photograph: bold color, structured repetition, soft planting, and warm lighting.",
    goals: [
      "Create a distinct visual identity without using the usual “coffee word cloud” clichés (beans, cups, vinyl discs, random quotes).",
      "Use affordable, easily available materials and a repeatable module so it scales to different walls and budgets.",
      "Shape a multi-sensory experience (visual rhythm, color warmth, subtle greenery) that feels cozy by night and fresh by day.",
      "Deliver a full process: space study → concept → visual explorations → prototyping → 3D model → final build.",
    ],
    outcome:
      "A modular, low-cost wall feature — “Circle of Cups” — made from colored paper cups that gives a café a playful, memorable identity rooted in everyday Indian café culture.",
  },
  briefImages: ["site-before.jpg", "proto-clusters.jpg"],
  sections: [
    {
      number: 2,
      title: "Context & Insight",
      blocks: [
        {
          label: "Cultural insight",
          text: "In Indian street cafés and tea stalls, paper cups are everywhere—humble, iconic, and instantly relatable.",
        },
        {
          label: "Design opportunity",
          text: "Most café interiors lean on predictable graphics. A material-first, modular approach could stand out while staying cost-efficient and maintainable.",
        },
        {
          label: "Core inspiration",
          text: "The top view of a paper-cup forming machine inspired the core visual: three intersecting circles of different diameters—simple geometry with strong recall.",
        },
        {
          label: "Target experience",
          text: "A wall that customers remember and photograph: bold color, structured repetition, soft planting, and warm lighting—Instagrammable but purposeful.",
        },
      ],
      layout: "stack",
    },
    {
      number: 3,
      title: "Concept & Rationale",
      blocks: [
        {
          label: "Concept name",
          text: "“Circle of Cups”",
        },
        {
          label: "Core move",
          text: "Build three joined circular forms from painted paper cups and mount them onto a pre-colored thermocol base.",
        },
        {
          label: "Why it works",
          bullets: [
            "Material narrative: Elevates a quotidian object (paper cup) into a graphic system—craft meets culture.",
            "Geometry & rhythm: Circles = friendly, continuous, and dynamic; repetition gives order and impact at viewing distance.",
            "Scalability: Add/remove rings or change diameters and colors to fit new sites or seasonal themes.",
          ],
        },
        {
          label: "Circle set (final sizes)",
          bullets: ["Small: Ø 2 ft", "Medium (half circle): Ø 2.4 ft", "Large: Ø 3 ft"],
        },
      ],
      images: ["sketch-final.png"],
      layout: "stack",
    },
    {
      number: 4,
      title: "Visual Language & Materials",
      blocks: [
        {
          label: "Palette (final counts used)",
          bullets: [
            "Red: 115 cups (energy, focal draw)",
            "Blue: 66 cups (balance/coolth)",
            "Yellow: 45 cups (warmth/contrast)",
          ],
        },
        {
          label: "Materials",
          bullets: [
            "Paper cups (primary module)",
            "Thermocol base, pre-painted to match background tone",
            "Craft staples/adhesives for modular clusters",
            "Potted plants (side pockets) for a green accent and light aroma",
            "Warm lighting to enhance cup relief and evening mood",
          ],
        },
        {
          label: "Typography/graphics",
          text: "None on the wall—form and color do the talking. (Menu and wayfinding can pick up the circle motif elsewhere if needed.)",
        },
      ],
      images: ["paint-red-cups.jpg", "paint-blue-cups.jpg"],
      layout: "stack",
    },
    {
      number: 5,
      title: "Development: Explorations → Prototype → Model",
      blocks: [
        {
          label: "Sketch & mooding",
          bullets: [
            "Studied alternate café precedents but intentionally avoided literal coffee iconography.",
            "Explored line-art, foliage, and pattern references; settled on pure geometry + color + module.",
          ],
        },
        {
          label: "Prototyping (table-top scale)",
          bullets: [
            "Join 2 cups → add a 3rd → build two triads → staple together to form stable hex-like clusters.",
            "Tested ring curvature and packing to estimate cup counts per diameter.",
            "Paint tests to validate saturation, light falloff, and readability under warm LEDs.",
          ],
        },
        {
          label: "3D planning",
          text: "SketchUp model to test wall placement, circle overlap, and viewer sightlines from different café zones.",
        },
      ],
      images: ["prototype-board.jpg", "staple-triads.jpg"],
      layout: "stack",
    },
    {
      number: 6,
      title: "Fabrication & Installation",
      blocks: [
        {
          label: "Pre-build",
          bullets: [
            "Paint thermocol base; mark circle centers and ring guides.",
            "Paint cups in batches; dry and sort by color.",
          ],
        },
        {
          label: "Assembly",
          bullets: [
            "Build clusters with a stapler (fast, light, repairable).",
            "Form rings and fill circles from outer ring inwards for cleaner edges.",
            "Mount to base, then the base to wall (minimize on-site mess/time).",
            "Add planter pockets on side locations for greenery.",
            "Aim warm lights to rake across the relief, creating evening depth.",
          ],
        },
        {
          label: "On-site checks",
          bullets: [
            "Line quality, cup alignment, and color balance at 1–3 m and >5 m viewing distances.",
            "Verify plant placement doesn’t cast harsh shadows or obstruct service paths.",
          ],
        },
      ],
      images: ["install-wall.jpg", "hanging-modules.jpg"],
      layout: "stack",
    },
    {
      number: 7,
      title: "Outcome & Learnings",
      blocks: [
        {
          label: "What it achieves",
          bullets: [
            "A memorable focal wall that feels bespoke to café culture without text clichés.",
            "Low-cost, low-waste: off-the-shelf modules; easy to repair, recolor, or re-arrange seasonally.",
            "Photogenic relief and color blocking that encourages sharing (earned media).",
          ],
        },
        {
          label: "What I learned",
          bullets: [
            "End-to-end execution (space audit → system thinking → prototyping → install) is crucial—every small decision scales at wall size.",
            "Modularity wins for speed, cost, and maintenance.",
            "Lighting and planting are not afterthoughts; they complete the spatial story.",
            "SketchUp saved time by catching proportion issues before fabrication.",
          ],
        },
      ],
      images: [
        "final-day-wide.jpg",
        "final-day-detail.jpg",
        "final-night.jpg",
        "final-cup-light.jpg",
      ],
      layout: "stack",
    },
  ],
  layout: "editorial",
};
