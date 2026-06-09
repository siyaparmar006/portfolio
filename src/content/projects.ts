export type ProjectCategory =
  | "Product Experiences"
  | "Brand Systems"
  | "Communication Systems"
  | "Print & Editorial"
  | "Spatial & Visual Experiments";

export type ProjectStatus = "Case Study" | "Project Card" | "Archive" | "Part of NNP Case Study";

export type PortfolioProject = {
  slug: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description?: string;
  label?: string;
  tags?: string[];
  status: ProjectStatus;
  year?: string;
  documentUrl?: string;
  gradient?: string;
  /** object-fit for project card / atlas cover */
  coverFit?: "cover" | "contain";
  /** CSS object-position for project card / atlas cover */
  coverPosition?: string;
  /** Slight zoom on cover image (1 = default) */
  coverScale?: number;
  /** Homepage signature cards only — does not affect Atlas or project pages */
  homepageCover?: {
    fit?: "cover" | "contain";
    position?: string;
    scale?: number;
    bg?: string;
  };
};

import { projectCovers } from "@/content/asset-manifest";

export { projectCovers };

export const atlasProjects: PortfolioProject[] = [
  {
    slug: "nnp",
    title: "New Neighbors Partnership Communication System",
    category: "Communication Systems",
    tagline:
      "Scalable nonprofit communication ecosystem across referral guidelines, handbook, impact report, brochure, cultural primer, and brand materials.",
    description:
      "Designed a scalable communication system for New Neighbors Partnership — unifying referral guidelines, volunteer onboarding, impact storytelling, cultural education, and brand materials into clearer, more accessible touchpoints. Referral guidelines were later showcased during a UN General Assembly refugee employment event.",
    label: "Nonprofit Service + Communication Ecosystem",
    tags: ["Service Design", "Information Architecture", "Visual Systems", "Print + Digital"],
    status: "Case Study",
    year: "2024",
    documentUrl: undefined,
    gradient:
      "radial-gradient(circle at 25% 25%, color-mix(in oklch, var(--accent) 55%, transparent), var(--card) 70%)",
    homepageCover: { fit: "cover", position: "22% center", scale: 1 },
  },
  {
    slug: "liveseeds",
    title: "LiveSeeds — Plant Care & Diagnosis App",
    category: "Product Experiences",
    tagline:
      "Plant-care mobile app — diagnosis, reminders, nursery discovery, and reward-based routines.",
    description:
      "Designed LiveSeeds, a plant-care mobile app that helps users diagnose plant infections, learn care procedures, find nearby nurseries, track reminders, earn points, and build a more consistent plant-care routine.",
    label: "Mobile App Design · UX/UI Design · Plant Care Platform",
    tags: ["UX/UI", "Product Design", "Mobile App", "Plant Care"],
    status: "Case Study",
    year: "2022",
    documentUrl: "/projects/liveseeds-app.pdf",
    gradient:
      "radial-gradient(circle at 70% 35%, color-mix(in oklch, var(--accent) 45%, transparent), var(--card) 75%)",
  },
  {
    slug: "evair",
    title: "Evair — Car Freshener Packaging System",
    category: "Brand Systems",
    tagline:
      "Real-client packaging system translating fragrance moods into visual packaging families.",
    description:
      "Designed a real-client packaging system for Evair car fresheners, translating fragrance moods into visual packaging families through research, client meetings, sample testing, and final print-ready designs.",
    label: "Packaging Design · Branding · Real Client Project · Fragrance Product",
    tags: ["Packaging", "Branding", "Fragrance", "Client Work", "Print Design"],
    status: "Case Study",
    year: "2021",
    documentUrl: "/projects/evair-branding.pdf",
    gradient:
      "radial-gradient(circle at 30% 70%, color-mix(in oklch, var(--accent) 40%, transparent), var(--secondary) 75%)",
    coverFit: "contain",
    coverPosition: "center",
    coverScale: 1.12,
  },
  {
    slug: "fluid",
    title: "Fluid — Water Quality Companion",
    category: "Product Experiences",
    tagline:
      "Mobile app that turns Hudson River water-quality data into clear, actionable safety guidance.",
    description:
      "Designed a mobile app that turns Hudson River water-quality data into clear, actionable safety guidance for swimmers, paddlers, boaters, and fishers.",
    label: "UI/UX Design · Environmental Data · Mobile App · Human-Centered Design",
    tags: ["UX Research", "Mobile UI", "Data Visualization", "Environmental Design", "Safety"],
    status: "Case Study",
    year: "2024",
    documentUrl: "/projects/fluid.pdf",
  },
  {
    slug: "cx-capstone",
    title: "UX Capstone — CX by Design",
    category: "Product Experiences",
    tagline:
      "Service design and workflow improvement through research, journey mapping, and experience prototyping.",
    description:
      "Redesigned Cecil's 10-10-10 client journey and built an integrated tool ecosystem connecting HubSpot → Asana → MailerLite with clear owner, trigger, and tool handoffs.",
    status: "Project Card",
    year: "2025",
    documentUrl: "/projects/cx-capstone.pdf",
  },
  {
    slug: "monkey-fries",
    title: "Monkey Fries — Brand Communication System",
    category: "Brand Systems",
    tagline:
      "Mascot-led cloud-kitchen brand — flavour system, packaging direction, and social media toolkit.",
    description:
      "Created a mischievous and memorable brand communication system for Monkey Fries using a bold logo, playful mascot, flavour-based visuals, packaging direction, and a scalable social media toolkit.",
    label: "Branding & Communication · Food Brand Identity · Packaging & Social Media",
    tags: ["Branding", "Mascot Design", "Packaging", "Social Media", "Food Branding"],
    status: "Case Study",
    year: "2021",
    documentUrl: "/projects/monkey-fries.pdf",
    coverFit: "contain",
    coverPosition: "center",
    coverScale: 1.14,
  },
  {
    slug: "zgc",
    title: "ZGC Projects",
    category: "Brand Systems",
    tagline: "Professional branding and digital marketing work developed during agency experience.",
    status: "Project Card",
    year: "2023",
    documentUrl: "/projects/evair-branding.pdf",
  },
  {
    slug: "brim",
    title: "BRIM Projects",
    category: "Brand Systems",
    tagline: "Real estate and agency design work across social, campaign, and print materials.",
    status: "Project Card",
    year: "2022",
    documentUrl: "/projects/brim.pdf",
  },
  {
    slug: "institute-of-design",
    title: "Institute of Design — DODNU",
    category: "Brand Systems",
    tagline:
      "Modular brand identity for Nirma University's Institute of Design — circles, arrows, and a system from favicon to façade.",
    description:
      "A refreshed identity for DODNU expressing young, collaborative design culture — distinctive mark, typography, patterns, sub-brands, and ready-to-use templates across print, space, and digital.",
    label: "Brand Identity · Visual System · Academic",
    tags: ["Brand Identity", "Visual System", "Wayfinding", "Guidelines"],
    status: "Case Study",
    year: "2021",
    documentUrl: "/projects/institute-of-design.pdf",
    coverScale: 1.1,
  },
  {
    slug: "packaging",
    title: "CurvD — Packaging System",
    category: "Brand Systems",
    tagline:
      "A hexagonal, handle-safe package for the CurvD mug — one-push slide opening, corrugated structure, and gift-ready display tray.",
    description:
      "Packaging Design — inclusive, reusable hex sleeve-and-tray system with dielines, cradle geometry, and handle-curve brand graphics.",
    label: "Packaging Design · Inclusive + Reusable",
    tags: ["Packaging", "Structure", "Dielines", "Accessibility"],
    status: "Case Study",
    year: "2022",
    documentUrl: undefined,
  },
  {
    slug: "nnp-volunteer-handbook",
    title: "NNP Volunteer Handbook",
    category: "Communication Systems",
    tagline:
      "16-page volunteer handbook for partner families — clothing partnership model, donation guidelines, and dignity-centered communication.",
    description:
      "Designed and synthesized a 16-page volunteer handbook for New Neighbors Partnership to help local partner families understand the clothing partnership model, follow donation guidelines, communicate respectfully, and support refugee families with dignity.",
    status: "Part of NNP Case Study",
    year: "2025",
    documentUrl: undefined,
  },
  {
    slug: "nnp-impact-report",
    title: "NNP 2025 Impact Report",
    category: "Communication Systems",
    tagline:
      "2025 annual impact report — program data, family stories, and community outcomes in digital and print formats.",
    description:
      "Designed and synthesized New Neighbors Partnership's 2025 Impact Report across digital and print formats, turning program data, family stories, financials, and community outcomes into a warm, accessible, and donor-ready publication.",
    status: "Part of NNP Case Study",
    year: "2025",
    documentUrl: undefined,
  },
  {
    slug: "nnp-referral-guidelines",
    title: "NNP Referral Guidelines",
    category: "Communication Systems",
    tagline:
      "11-page partner referral guide — eligibility, process, expectations, and UN General Assembly presentation.",
    description:
      "Designed and synthesized an 11-page referral guidelines document for New Neighbors Partnership, helping partner agencies understand NNP's mission, program model, client eligibility, referral expectations, timeline, staff, and contact process.",
    status: "Part of NNP Case Study",
    year: "2025",
    documentUrl: undefined,
  },
  {
    slug: "nnp-brochure",
    title: "NNP Program Brochure",
    category: "Communication Systems",
    tagline:
      "Family-facing brochure — Clothing Partnership Program, support types, and coordinator resources.",
    description:
      "Designed and synthesized a family-facing program brochure for New Neighbors Partnership to explain the Clothing Partnership Program, support types, expectations, privacy guidelines, and contact resources in a clear and welcoming format.",
    status: "Part of NNP Case Study",
    year: "2026",
    documentUrl: undefined,
  },
  {
    slug: "nnp-cultural-primer",
    title: "NNP Cultural Primer — Guinea",
    category: "Communication Systems",
    tagline:
      "Two-page cultural primer — Guinea overview, language, food, holidays, and volunteer best practices.",
    description:
      "Designed and synthesized a two-page cultural primer on Guinea for New Neighbors Partnership, transforming historical, cultural, language, food, holiday, and best-practice information into an accessible guide for volunteers and community members.",
    status: "Part of NNP Case Study",
    year: "2026",
    documentUrl: undefined,
  },
  {
    slug: "nnp-branding",
    title: "NNP Brand Style Guide",
    category: "Brand Systems",
    tagline:
      "5-page brand system — color coding, typography, and social media template categories.",
    description:
      "Designed and synthesized a 5-page brand style guide for New Neighbors Partnership to create a consistent visual system across digital, print, social media, and partner-facing communication materials.",
    status: "Part of NNP Case Study",
    year: "2025",
    documentUrl: undefined,
  },
  {
    slug: "nnp-social-media",
    title: "NNP Social Media Templates",
    category: "Communication Systems",
    tagline:
      "Instagram story template system — campaigns, volunteer CTAs, and community updates.",
    description:
      "Designed and synthesized a branded social media template system for New Neighbors Partnership to support consistent Instagram stories, volunteer calls-to-action, donation campaigns, cultural content, and community updates.",
    status: "Part of NNP Case Study",
    year: "2025",
    documentUrl: undefined,
  },
  {
    slug: "essence-of-green",
    title: "Essence of Green — Publication Design",
    category: "Print & Editorial",
    tagline:
      "Botanical publication design exploring editorial layout, typography, and print storytelling.",
    status: "Project Card",
    year: "2022",
    documentUrl: "/projects/essence-of-green.pdf",
  },
  {
    slug: "ui-ux-website",
    title: "UI-UX Website",
    category: "Product Experiences",
    tagline: "Website design exploration focused on structure, interface, and digital navigation.",
    status: "Project Card",
    year: "2022",
    documentUrl: "/projects/ui-ux-website.pdf",
  },
  {
    slug: "environmental-design",
    title: "Environmental Graphics — Café Installation",
    category: "Spatial & Visual Experiments",
    tagline:
      "A modular, low-cost wall feature made from colored paper cups — playful café identity rooted in everyday Indian café culture.",
    description:
      "Site-specific environmental graphics for a café: concept through fabrication of “Circle of Cups,” a thermocol-mounted paper cup installation with SketchUp planning and full-scale install.",
    label: "Environmental Graphics · Spatial Installation",
    tags: ["Spatial Design", "Prototyping", "SketchUp", "Fabrication"],
    status: "Case Study",
    year: "2021",
    documentUrl: "/projects/environmental-design.pdf",
  },
  {
    slug: "wayfinding",
    title: "Find Your Way — Old City",
    category: "Spatial & Visual Experiments",
    tagline:
      "A heritage-aware wayfinding system for Ahmedabad’s UNESCO Old City — bilingual signage, sign family architecture, and in-situ placement logic.",
    description:
      "Design of Wayfinding Systems — orientation boards, directional blades, interpretive plaques, and mobility signage for pols, markets, and monuments.",
    label: "Wayfinding · Urban Graphics",
    tags: ["Wayfinding", "Signage", "Urban Graphics", "Heritage"],
    status: "Case Study",
    year: "2022",
    documentUrl: undefined,
    coverFit: "contain",
    coverPosition: "center",
    coverScale: 1.14,
  },
  {
    slug: "public-communication",
    title: "Public Communication — Exploitation of Interns",
    category: "Communication Systems",
    tagline:
      "An awareness campaign challenging the normalization of unpaid internships and overwork culture — poster series, social roll-outs, and a reusable message playbook.",
    description:
      "Academic public communication project — research synthesis, message architecture, punchlines, visual language, poster series, and social assets targeting interns and placement networks.",
    label: "Public Communication · Advocacy Campaign",
    tags: ["Poster Design", "Copywriting", "Social Campaign", "Print + OOH"],
    status: "Case Study",
    year: "2023",
    documentUrl: "/projects/public-communication.pdf",
  },
  {
    slug: "information-architecture",
    title: "Information Architecture",
    category: "Product Experiences",
    tagline: "Structural design work exploring navigation, hierarchy, and content organization.",
    status: "Archive",
    year: "2022",
    documentUrl: "/projects/information-architecture.pdf",
  },
  {
    slug: "cognitive-science",
    title: "Cognitive Science",
    category: "Product Experiences",
    tagline: "Research-informed design exploration connected to cognition and user behavior.",
    status: "Archive",
    year: "2021",
    documentUrl: "/projects/cognitive-science.pdf",
  },
  {
    slug: "ell-tcs",
    title: "ELL Experience — TCS",
    category: "Product Experiences",
    tagline: "Experience design project focused on learning, language, and service interaction.",
    status: "Archive",
    year: "2021",
    documentUrl: "/projects/ell-tcs.pdf",
  },
  {
    slug: "systems-thinking",
    title: "The Bachelors — Housing Societies",
    category: "Product Experiences",
    tagline:
      "Systems intervention for integrating single tenants into family-oriented housing societies through norms, trials, and feedback loops.",
    status: "Archive",
    year: "2022",
    documentUrl: "/projects/systems-thinking.pdf",
  },
  {
    slug: "navya-baheti",
    title: "Navya Baheti",
    category: "Brand Systems",
    tagline: "Visual identity and personal brand project.",
    status: "Archive",
    year: "2021",
    documentUrl: "/projects/navya-baheti.pdf",
    coverFit: "contain",
    coverPosition: "center",
    coverScale: 1.12,
  },
  {
    slug: "communication-theory",
    title: "Lights, Camera, Corona",
    category: "Communication Systems",
    tagline:
      "Decoding how Bollywood posters, memes, and videos reframed public messages during COVID-19.",
    description:
      "A research-driven exploration of how Indian popular culture was reimagined as public communication during the pandemic — poster remixes, memes, and awareness videos analyzed through semiotics and visual design.",
    label: "Communication Theory · Semiotic Analysis · Public Health Messaging",
    tags: ["Communication Theory", "Semiotics", "Public Health", "Visual Analysis"],
    status: "Case Study",
    year: "2021",
    documentUrl: "/projects/communication-theory.pdf",
  },
  {
    slug: "poster-design",
    title: "Poster Design",
    category: "Communication Systems",
    tagline: "Poster-based visual communication and layout exploration.",
    status: "Archive",
    year: "2021",
    documentUrl: "/projects/poster-design.pdf",
  },
  {
    slug: "applied-literature",
    title: "Visual Language of Emotion — Film Analysis",
    category: "Print & Editorial",
    tagline:
      "A semiotic study of Sanjay Leela Bhansali’s directorial grammar across Ram-Leela and Bajirao Mastani — color, camera, sound, and style map.",
    description:
      "Applied Literature — director study mapping palette, shot taxonomy, and music leitmotifs to emotional cues in two authored films.",
    label: "Applied Literature · Director Study",
    tags: ["Film Analysis", "Semiotics", "Visual Research", "Editorial"],
    status: "Case Study",
    year: "2021",
    documentUrl: undefined,
  },
  {
    slug: "space-design",
    title: "Space Design",
    category: "Spatial & Visual Experiments",
    tagline: "Spatial design exploration using form, layout, and physical experience.",
    status: "Archive",
    year: "2021",
    documentUrl: undefined,
  },
  {
    slug: "materials-3d",
    title: "The Canvas — 3D Chocolate Window Display",
    category: "Spatial & Visual Experiments",
    tagline:
      "A narrative window display for Huber & Holly’s chocolate launch — material prototyping, SketchUp planning, and Blender visualization of the bean-to-bar journey.",
    description:
      "Introduction to Materials & 3D Modelling — team window display for Huber & Holly blending storytelling, tactile mockups, and 3D renders inside a real café frame.",
    label: "Materials & 3D · Window Display",
    tags: ["Materials", "3D Modeling", "Blender", "Spatial Design"],
    status: "Case Study",
    year: "2021",
    documentUrl: undefined,
    coverScale: 1.1,
  },
  {
    slug: "illustration",
    title: "Clouds and Waves — Book Cover",
    category: "Print & Editorial",
    tagline:
      "A lyrical, contemporary cover translating Tagore’s poem into a minimal, symbolic visual for young readers and parents.",
    description:
      "Illustration & jacket design for Rabindranath Tagore’s Clouds and Waves — concept through production with poetic metaphor, serif/sans hierarchy, and press-ready cover system.",
    label: "Illustration Design · Book Cover",
    tags: ["Illustration", "Book Cover", "Typography", "Print Production"],
    status: "Case Study",
    year: "2022",
    documentUrl: "/projects/illustration.pdf",
  },
  {
    slug: "photography",
    title: "Details — Old City, Ahmedabad",
    category: "Spatial & Visual Experiments",
    tagline:
      "A visual study of textures, craft and everyday rhythms across Ahmedabad’s old city—stone, light, pattern, food, color.",
    description:
      "Architectural & everyday detail photography from heritage walks through pols, lanes and Gandhi Ashram—morning light, night facades, and craft close-ups.",
    label: "Photography · Old City Details",
    tags: ["Photography", "Architecture", "Documentary", "Lightroom"],
    status: "Case Study",
    year: "2020",
  },
  {
    slug: "character-design",
    title: "Character Design: Snail Persona",
    category: "Spatial & Visual Experiments",
    tagline:
      "A whimsical, story-driven snail shaped through gesture, silhouette, and worldbuilding.",
    description:
      "Character design case study — a snail-mail carrier developed from research and thumbnails to turnarounds, expression studies, and production-ready key art.",
    label: "Illustration · Character Design · Visual Narrative",
    tags: ["Illustration", "Character Design", "Visual Narrative"],
    status: "Case Study",
    year: "2023",
    documentUrl: "/projects/character-design.pdf",
    coverFit: "contain",
    coverPosition: "center",
    coverScale: 1.14,
  },
  {
    slug: "animation",
    title: "Animation Video",
    category: "Spatial & Visual Experiments",
    tagline: "Motion and animation exploration.",
    status: "Archive",
    year: "2021",
    documentUrl: "/projects/animation.pdf",
  },
];

/** Homepage signature work — fixed trio */
const HOMEPAGE_FEATURED_SLUGS = ["nnp", "liveseeds", "evair"] as const;

/** Hidden from Atlas cards + index until case study content is ready */
const ATLAS_HIDDEN_SLUGS = new Set([
  "cx-capstone",
  "zgc",
  "brim",
  "nnp-volunteer-handbook",
  "nnp-impact-report",
  "nnp-cultural-primer",
  "nnp-brochure",
  "nnp-branding",
  "nnp-social-media",
  "nnp-referral-guidelines",
  "ui-ux-website",
  "cognitive-science",
  "ell-tcs",
  "animation",
  "space-design",
  "information-architecture",
  "poster-design",
]);

export const visibleAtlasProjects = atlasProjects.filter((p) => !ATLAS_HIDDEN_SLUGS.has(p.slug));

export const featuredProjects = atlasProjects.filter((p) =>
  (HOMEPAGE_FEATURED_SLUGS as readonly string[]).includes(p.slug),
);

export function getProjectCover(slug: string): string | undefined {
  return projectCovers[slug];
}

export function getProjectLink(project: PortfolioProject): string {
  return `/projects/${project.slug}`;
}
