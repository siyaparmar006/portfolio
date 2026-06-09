import type { ProjectDetail } from "@/content/project-details";

export const instituteOfDesignDetail: ProjectDetail = {
  slug: "institute-of-design",
  displayTitle: "Institute of Design — DODNU Brand Identity",
  course: "Identity Design (Academic)",
  role: "Concept co-lead; logo construction; typography & color system; icon/pattern libraries; stationery; signage; merch; brand guidelines authoring",
  team: "5 students (academic project)",
  duration: "Semester project",
  intro:
    "A refreshed identity for Nirma University's Institute of Design (DODNU) — a distinctive, modular brand system expressing a young, collaborative design culture across print, space, and digital.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "Nirma University — Institute of Design (DODNU) needed a refreshed identity to express a young, collaborative design culture and to clearly differentiate the department on campus and in the wider community. Established in 2017, the department had an eclectic visual presence with low consistency across print, space, and digital. Create a distinctive, modular brand system with rules and ready-to-use assets so staff and students can deploy it correctly, fast.",
    audience:
      "Prospective students, faculty, campus visitors, and stakeholders who wanted the brand to feel playful and inventive while remaining credible within a university ecosystem.",
    goals: [
      "A recognisable symbol with a memorable idea — not just style",
      "A scalable grammar that works from favicon to façade",
      "Easy-to-apply templates for stationery, web/social, and wayfinding",
      "Clear do/don't rules to prevent drift and misuse",
    ],
    outcome:
      "A cohesive brand guideline and asset library covering mark, color, type, iconography, patterns, sub-brands, templates, and usage rules for print, space, and digital.",
  },
  sections: [
    {
      number: 2,
      title: "Research, Problem & Objectives",
      blocks: [
        {
          label: "What we audited",
          bullets: [
            "Legacy mark had multiple colorways and ad-hoc lockups; typography mixed styles; patterns were decorative rather than systematic",
            "Print, space, and digital were designed in silos — no shared tokens (type, spacing, color roles)",
          ],
        },
        {
          label: "Design objectives",
          bullets: [
            "Coherence: one underlying geometry to tie everything together",
            "Legibility: second-read personality that doesn't sacrifice clarity",
            "Extensibility: sub-brands for Communication Design, Industrial Design, and Foundation",
            "Usability: rules that a non-designer can follow",
            "Accessibility: color contrast and typographic rhythm suitable for long reads and signage",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-02.jpg", "gallery-03.jpg"],
    },
    {
      number: 3,
      title: "Concept & Design Language",
      blocks: [
        {
          label: "Big idea: Progress, together",
          text: "A 3×3 grid of circles cuts the word DESIGN into the negative space. The middle row houses three right-facing arrows — momentum, guidance, optimism. The device is abstract at first glance and rewarding on second read.",
        },
        {
          label: "Core elements",
          bullets: [
            "Mark & lockups: vertical (stacked) and horizontal; built on a circular grid",
            "Color roles: calm greens/teals (trust), vibrant marigolds/yellows (energy), plum/magenta and slate neutrals",
            "Type system: Prompt (logotype), Roboto (heads/subheads), ITC Franklin Gothic Std (body)",
            "Iconography: every pictogram lives inside a circle, with filled and outline variants",
            "Patterns: micro dot lattices and bold modular tiles built from circle-cuts",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-04.jpg", "gallery-05.jpg", "gallery-06.jpg"],
    },
    {
      number: 4,
      title: "System Architecture & Specifications",
      blocks: [
        {
          label: "Construction & spacing",
          text: "Clear space uses one circle unit around the mark. Minimum sizes set for print/web to protect legibility. Lockups cannot be stretched, re-composed, or placed on busy imagery.",
        },
        {
          label: "Sub-brands & governance",
          bullets: [
            "Communication Design, Industrial Design, Foundation inherit the master mark — only internal tile colors vary",
            "Palette is closed; only tints/tones of approved hues permitted",
            "Typography: left-align, no justification, hyphenation off, classic type scale",
            "Do/don't essentials: don't isolate letter pieces; don't apply photo fills inside the mark; don't place over complex photos",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-07.jpg", "gallery-08.jpg"],
    },
    {
      number: 5,
      title: "Applications & Touchpoints",
      blocks: [
        {
          label: "Business & environmental",
          bullets: [
            "Visiting cards, letterheads, envelopes, forms, certificates — standardized information hierarchy",
            "Studio/workshop plaques; interior directional signs; campus banners and façade signage",
            "Wall and floor graphics using the pattern library",
          ],
        },
        {
          label: "Digital, merch & templates",
          bullets: [
            "Website skins with circular image masks; program pages inherit sub-brand accents",
            "Apparel, totes, mugs, badges, keychains, portfolio bags, caps, aprons",
            "Editable masters for cards, posters, event banners, social posts, web heroes, and signage panels",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-09.jpg", "gallery-10.jpg", "gallery-11.jpg"],
    },
    {
      number: 6,
      title: "Process, Testing & Implementation",
      blocks: [
        {
          label: "Exploration & systemization",
          bullets: [
            'Started with the constraint "one geometry only" — circle cuts that read as DESIGN at multiple scales',
            "Quick print tests at 16–24 mm and 2–3 m to check counter shapes and arrow clarity",
            "Converted recurring decisions into tokens: color roles, spacing units, type scale, icon grid, pattern tiles",
          ],
        },
        {
          label: "Pilot builds & handoff",
          bullets: [
            "Stress-tested letterhead density, outdoor banners, and low-res social avatars",
            "Delivered structured asset kit: master logos, sub-brands, SVG icons, pattern tiles, InDesign/Illustrator/Canva templates",
            "Added a one-page Quick Start for non-designers and a troubleshooting page",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-12.jpg", "gallery-13.jpg", "gallery-14.jpg"],
    },
    {
      number: 7,
      title: "Outcome, Impact & Learnings",
      blocks: [
        {
          label: "Why it works",
          bullets: [
            "Single primitive → infinite family: circles power the logo, icons, patterns, and image masks",
            "Rules with reasons: each prohibition tied to readability or recognition",
            'Scalable delight: the second-read "DESIGN" moment rewards curiosity; arrows signal forward motion',
          ],
        },
        {
          label: "Personal learnings",
          bullets: [
            "Design the system (tokens + rules), not just the symbol",
            "Test legibility at the smallest and largest sizes early",
            "Accessibility shapes color, type, and contrast decisions from day one",
            "Adoption improves when non-designers get named templates and a 1-page cheat-sheet",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-15.jpg", "gallery-16.jpg"],
    },
  ],
  layout: "editorial",
};
