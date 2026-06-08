import type { ProjectDetail } from "@/content/project-details";

export const essenceOfGreenDetail: ProjectDetail = {
  slug: "essence-of-green",
  displayTitle: "Essence of Green — Publication Design",
  course: "Publication Design (Academic)",
  role: "Research, content architecture, grid & type system, illustration, layout, production",
  format: '8" × 8" square book, print + e-book ready, ~32 pages',
  coreSkills:
    "Editorial systems, information design, illustration, typographic hierarchy, production prep",
  duration: "3 weeks",
  intro:
    "A field-friendly book that helps first-time gardeners and plant lovers start, care for, and enjoy houseplants & climbers through clear guidance, accessible science, and calm editorial design.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "Design a publication that gets young readers and beginners to genuinely care for plants—linking daily care to long-term environmental awareness.",
    audience:
      "Plant enthusiasts, teen readers, beginners in gardening; also relevant to botanists looking for a concise quick-reference.",
    goals: [
      "Make plant care actionable (light, water, soil, season, height, uses).",
      "Make botany approachable via calm, uncluttered layouts and friendly tone.",
      "Balance beauty + utility through line illustrations and consistent card layouts.",
      "Deliver a print-ready system that also adapts to an e-book.",
    ],
    outcome:
      "A 32-page square book with two major chapters (House Plants, Climbers), a practical intro, and a species card system that repeats consistently for easy scanning.",
  },
  briefImages: ["0002.jpg", "0003.jpg"],
  sections: [
    {
      number: 2,
      title: "Research & Content Architecture",
      blocks: [
        {
          label: "Discovery → Structure",
          text: "I mapped publication variables (grid, margins, image strategy, typography, navigation, media, target audience) and converted that into a repeatable content model.",
        },
        {
          label: "Information model (per species card)",
          bullets: [
            "Scientific name (H1), Family, Common names",
            "Care at a glance: Height, Light, Water, Flower colour, Flowering season",
            "Uses: Everyday applications & interesting facts",
            "Photo plate + supporting illustration if needed",
          ],
        },
        {
          label: "Book structure",
          bullets: [
            "Acknowledgements (2 pp), Contents (2 pp)",
            "Introduction (4 pp): planning a garden, cultivation, what plants need, light & soil basics",
            "House Plants (10 cards) e.g., Aglaonema commutatum, Aphelandra squarrosa, Caladium hortulanum, Alocasia cuprea, Anthurium andreanum, Ctenanthe setosa, Dracaena fragrans …",
            "Climbers (10 cards) e.g., Allamanda cathartica, Jasminum auriculatum, Antigonon leptopus, Bougainvillea glabra, Clitoria ternatea, Ficus pumila, Passiflora caerulea, Quisqualis indica, Gloriosa superba, Jacquemontia violacea",
            "Bibliography (2 pp) and Back matter",
          ],
        },
        {
          label: "Voice & tone",
          text: "Plain-spoken, reassuring, and specific; minimal jargon with quick definitions.",
        },
      ],
      images: ["0004.jpg", "0005.jpg", "0006.jpg", "0007.jpg"],
      layout: "stack",
    },
    {
      number: 3,
      title: "Concept & Visual Strategy",
      blocks: [
        {
          label: "Concept",
          text: "Essence of Green — capture the serenity and discipline of plant care.",
        },
        {
          label: "Illustration language",
          text: "Crisp black-and-white line drawings (digital), used as quiet anchors on openers, dividers, and the cover (fern motif).",
        },
        {
          label: "Colour strategy",
          text: "Restrained, nature-adjacent tints for backgrounds (soft greens / warm neutrals) to separate metadata from narrative text; images carry the vibrancy.",
        },
        {
          label: "Cover system",
          text: 'Macro fern linework on deep black with a hand-script accent for "Green" → blends scientific clarity with a human touch.',
        },
        {
          label: "Why this works",
          bullets: [
            "High contrast + limited palette = legibility and print efficiency.",
            "Line art scales beautifully and keeps visual noise low.",
            "The fern motif threads identity across cover → chapter openers → back cover.",
          ],
        },
      ],
      images: ["0008.jpg", "0009.jpg"],
      layout: "stack",
    },
    {
      number: 4,
      title: "Typography & Grid System",
      blocks: [
        {
          label: "Grid",
          bullets: [
            "2-column grid + baseline grid for rhythm and repeatability",
            "Margins: Top/Bottom/Inner/Outer = 0.4724 in",
            "Gutter: 0.1875 in · Bleed: 3 mm",
            "Page size: 8 × 8 in square",
          ],
        },
        {
          label: "Type system",
          bullets: [
            "Headings: Times New Roman — 35 pt (chapter/species titles)",
            "Body: Bembo Std — 14 pt (main), 15 pt (alternate leading for image-heavy pages)",
            "Display (Cover): Spring LP Std — 70 pt / 32 pt",
            "Secondary language: Rasa (Gujarati) — 14/15 pt (where bilingual notes are used)",
          ],
        },
        {
          label: "Hierarchy",
          text: 'H1 (scientific name) → Family/Common name (small caps/italic) → "Care at a glance" labels (bold) → body notes. Baseline-aligned callouts keep multi-panel spreads tidy.',
        },
      ],
      images: ["0011.jpg", "0012.jpg"],
      layout: "stack",
    },
    {
      number: 5,
      title: "Layout Patterns & Components",
      blocks: [
        {
          label: "Chapter opener",
          text: "Full-bleed line illustration on one side; opposing page with title, short quote, and a one-paragraph chapter promise.",
        },
        {
          label: "Species card template",
          bullets: [
            "Photo plate top-left (house plants) or top-right (climbers) for variety with consistency.",
            "Fixed stack for Height / Light / Water / Flower colour / Season (scan line < 5 seconds).",
            "Uses block forms the narrative layer.",
          ],
        },
        {
          label: "Navigation & micro-details",
          bullets: [
            "Page numbers with a subtle flower mark.",
            "Stable running heads for chapters.",
            "Quotes (Beth Ditto, etc.) set in italic to break density.",
          ],
        },
        {
          label: "Image & illustration rules",
          bullets: [
            "Photos: natural light, true colour; avoid heavy filters.",
            "Line art: single-weight family for cohesion; vector for sharp print.",
          ],
        },
      ],
      images: ["0013.jpg", "0014.jpg"],
      layout: "stack",
    },
    {
      number: 6,
      title: "Production & Deliverables",
      blocks: [
        {
          label: "Primary deliverable",
          text: 'Print-ready PDF for offset/digital print (3 mm bleed, CMYK, embedded fonts). 32 pp (approx.), square 8" × 8".',
        },
        {
          label: "Assets created",
          bullets: [
            "30+ original line illustrations (flowers, foliage, dividers, cover/back motifs).",
            "20+ plant photo plates (Credits: Siya Parmar; additional photos by Dr. Tushar Parmar as cited).",
            "Accessible e-book export guidelines (reflow notes; alt-text model for images).",
          ],
        },
        {
          label: "Recommended paper (print suggestion)",
          bullets: [
            "120–140 gsm uncoated/text for interiors (readability, low glare).",
            "250–300 gsm cover with matte lamination to protect the black cover.",
          ],
        },
      ],
      images: ["0015.jpg", "0016.jpg"],
      layout: "stack",
    },
    {
      number: 7,
      title: "Impact, Reflections & Next Steps",
      blocks: [
        {
          label: "Why this matters",
          text: "A calm, credible handbook lowers the barrier to begin. Readers can act today: pick a plant, read one card, set light/water reminders, and see success quickly—turning curiosity into stewardship.",
        },
        {
          label: "What I learned",
          bullets: [
            "Editorial systems: once the card template was locked, throughput and quality both improved.",
            "Type on a baseline: crucial for visual calm, especially in a square format.",
            "Illustration restraint: line art lets information lead, aesthetics support.",
          ],
        },
        {
          label: "If I continue",
          bullets: [
            "Add seasonal care checklists, a starter-kit spread (tools, pots, soils), and a quick index by light level.",
            "Include QR codes linking to short care videos.",
            "Release a bilingual edition (Gujarati/English) using the existing Rasa pairing.",
            "Build a small companion poster (light × water matrix) for dorm rooms.",
          ],
        },
      ],
      images: ["0018.jpg", "0019.jpg"],
      layout: "stack",
    },
  ],
  layout: "editorial",
};
