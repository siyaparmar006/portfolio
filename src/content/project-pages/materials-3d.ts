import type { ProjectDetail } from "@/content/project-details";

export const materials3dDetail: ProjectDetail = {
  slug: "materials-3d",
  displayTitle: "The Canvas — 3D Chocolate Window Display",
  course: "Introduction to Materials & 3D Modelling (Academic)",
  role: "Concept storytelling, Blender 3D modeling, physical material testing",
  team: "The Canvas — team of 5 (Shashwat Dalal, Siya Parmar, Rishita Bhadauria, Kashmi Shah, Sakshi Shah)",
  duration: "Fall 2021 · Ahmedabad",
  deliverables:
    "Window display concept, 1:5 scale physical mockup, SketchUp storefront model, Blender renders, animated walkthrough",
  tools: "Foam, resin, MDF, plaster, Blender (Eevee), SketchUp, hand prototyping",
  intro:
    "A narrative-rich window display for Huber & Holly’s new chocolate collection — blending storytelling, material play, and 3D visualization to immerse viewers in the journey from cocoa bean to chocolate bar.",
  heroImage: "hero-cover.jpg",
  compactImages: true,
  brief: {
    ask: "Design a window display for Huber & Holly’s in-house chocolate launch that stops passersby, tells the chocolate-making story, and reflects the brand’s cheerful spirit — within defined physical limits (257×130×82 cm) and build feasibility.",
    audience:
      "Café passersby and window shoppers — people who pause for a few seconds and should leave understanding how chocolate is made and wanting to step inside.",
    goals: [
      "Turn the storefront into a storytelling medium for the bean-to-bar journey.",
      "Balance narrative clarity with build feasibility inside tight dimensions.",
      "Use tactile materials and warm lighting to evoke sensory recall.",
      "Deliver research, sketches, modeling, prototyping, and documentation as a team.",
    ],
    outcome:
      "The Canvas — a staged visual narrative where viewers trace seven miniature scenes from cocoa pod to wrapped bar, framed inside a real café window and validated through scale mockup, SketchUp planning, and Blender visualization.",
  },
  briefImages: ["brand-context.jpg", "process-diagram.jpg"],
  sections: [
    {
      number: 2,
      title: "Research & Insights",
      blocks: [
        {
          label: "Retail display research",
          text: "We studied how brands like Thorntons and Godiva use immersive displays to spark emotion and draw foot traffic.",
        },
        {
          label: "Key findings",
          bullets: [
            "Narrative sells — displays that unfold a process keep viewers engaged longer.",
            "Material realism evokes emotion — tactile textures trigger sensory memory.",
            "Warm lighting and playful elements support visibility and brand consistency.",
          ],
        },
        {
          label: "Mood direction",
          text: "A visual moodboard pinned down a tone that was whimsical, earthy, and educational — aligned with Huber & Holly’s identity.",
        },
      ],
      images: ["ideation.jpg"],
      layout: "grid",
    },
    {
      number: 3,
      title: "Concept & Story",
      blocks: [
        {
          label: "Core concept",
          text: "“From Cocoa Bean to Chocolate Bar” — a staged visual narrative where viewers trace the process through seven miniature scenes.",
        },
        {
          label: "Narrative flow",
          text: "Starting with a cocoa pod and ending with glossy wrapped bars, props flow in sequence using slides, trays, and grinders to suggest transformation.",
        },
        {
          label: "Form language",
          text: "Each prop was designed to feel handcrafted yet stylized — oversized inviting shapes and layered textures so people pause, smile, and say “oh, that’s how it’s made!”",
        },
      ],
      images: ["concept-sketch.jpg", "concept-illustration.jpg"],
      layout: "grid",
    },
    {
      number: 4,
      title: "Material Exploration & Mockups",
      blocks: [
        {
          label: "Materials",
          bullets: [
            "Foam + resin for cocoa pods",
            "Painted rudraksha seeds to mimic fermenting beans",
            "MDF trays and faux leaves for realism and depth",
            "Plaster-coated foam for stone grinders",
          ],
        },
        {
          label: "Scale testing",
          text: "We built a 1:5 scale mockup, tested lighting with desk lamps, and prototyped textures to understand visual hierarchy — balancing crafted realism with playful abstraction.",
        },
      ],
      images: ["prototype-collage.jpg", "process-flatlay.jpg"],
      layout: "grid",
    },
    {
      number: 5,
      title: "3D Modeling & Rendering",
      blocks: [
        {
          label: "SketchUp planning",
          text: "A storefront model established window dimensions, sightlines, and how the display reads from the street.",
        },
        {
          label: "Blender visualization",
          text: "I translated the physical concept into Blender for high-fidelity renders — modeling each stage from pods to molds with procedural shaders for chocolate gloss and warm lighting simulations.",
        },
        {
          label: "Stills from the walkthrough",
          text: "Frames from the Eevee animation show how the story unfolds as a viewer walks past the café.",
        },
      ],
      images: [
        "sketchup-model.jpg",
        "blender-workspace.jpg",
        "render-wide.jpg",
        "render-slide.jpg",
        "render-chocolate-bowl.jpg",
      ],
      layout: "grid",
    },
    {
      number: 6,
      title: "Final Design & Impact",
      blocks: [
        {
          label: "Spatial story",
          text: "The final layout captured a tactile journey — lush greenery, flowing slides, rustic tools, and finished bars inside one seamless scene. Visitors read the story left to right; each prop acts as a chapter.",
        },
        {
          label: "Feedback",
          text: "Faculty highlighted storytelling strength, brand alignment, and creative use of scale and materials. One peer called it a “mini chocolate museum inside a window.”",
        },
      ],
      images: ["physical-storefront.jpg", "physical-detail.jpg", "prototype-lighting.jpg"],
      layout: "grid",
    },
    {
      number: 7,
      title: "Reflection & Next Steps",
      blocks: [
        {
          label: "What I learned",
          bullets: [
            "Environmental storytelling shapes how customers perceive a brand before they ever taste the product.",
            "Material choices carry narrative weight as much as form.",
            "Moving between physical mockup and digital render catches proportion issues early.",
          ],
        },
        {
          label: "Future directions",
          text: "Interactive motion, scent cues, or AR storytelling layers could deepen engagement — but even in analog form, The Canvas achieved what every great display does: make people stop, feel, and want more.",
        },
      ],
      video: "walkthrough.mp4",
      layout: "grid",
    },
  ],
  layout: "editorial",
};
