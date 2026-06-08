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
  featured?: boolean;
  documentUrl?: string;
  gradient?: string;
};

const coverModules = import.meta.glob<string>("../assets/projects/*/cover.jpg", {
  eager: true,
  import: "default",
});

export const projectCovers: Record<string, string> = Object.fromEntries(
  Object.entries(coverModules)
    .map(([path, url]) => {
      const slug = path.match(/projects\/([^/]+)\//)?.[1];
      return slug ? ([slug, url] as const) : null;
    })
    .filter((entry): entry is [string, string] => entry !== null),
);

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
    featured: true,
    documentUrl: "/projects/nnp-brand-style-guide.pdf",
    gradient:
      "radial-gradient(circle at 25% 25%, color-mix(in oklch, var(--accent) 55%, transparent), var(--card) 70%)",
  },
  {
    slug: "liveseeds",
    title: "LiveSeeds Plant-Care App",
    category: "Product Experiences",
    tagline: "Mobile product experience for plant care, guidance, and approachable UI.",
    description:
      "Designed a plant-care mobile app experience focused on helping users understand plant needs, follow care guidance, and navigate a clear, approachable digital interface.",
    label: "Mobile Product Experience",
    tags: ["UX/UI", "Product Design", "Visual Interface Design"],
    status: "Case Study",
    year: "2024",
    featured: true,
    documentUrl: "/projects/liveseeds-app.pdf",
    gradient:
      "radial-gradient(circle at 70% 35%, color-mix(in oklch, var(--accent) 45%, transparent), var(--card) 75%)",
  },
  {
    slug: "evair",
    title: "Evair Product Branding & Packaging System",
    category: "Brand Systems",
    tagline: "Product identity and packaging direction for a car freshener brand.",
    description:
      "Developed brand and packaging direction for Evair at Zero Gravity Communications — combining market research, visual identity exploration, packaging structure, and product storytelling.",
    label: "Product Identity",
    tags: ["Branding", "Packaging", "Product Communication"],
    status: "Case Study",
    year: "2023",
    featured: true,
    documentUrl: "/projects/evair-branding.pdf",
    gradient:
      "radial-gradient(circle at 30% 70%, color-mix(in oklch, var(--accent) 40%, transparent), var(--secondary) 75%)",
  },
  {
    slug: "fluid",
    title: "Fluid Water Quality Companion",
    category: "Product Experiences",
    tagline: "Digital companion concept for understanding and tracking water quality.",
    status: "Project Card",
    year: "2023",
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
    title: "Monkey Fries — Cloud Kitchen",
    category: "Brand Systems",
    tagline: "Cloud kitchen brand identity and communication system.",
    status: "Project Card",
    year: "2023",
    documentUrl: "/projects/monkey-fries.pdf",
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
    title: "Institute of Design",
    category: "Brand Systems",
    tagline: "Identity system exploration for an academic design institution.",
    status: "Project Card",
    year: "2022",
    documentUrl: "/projects/institute-of-design.pdf",
  },
  {
    slug: "packaging",
    title: "Packaging Design",
    category: "Brand Systems",
    tagline:
      "Product packaging design exploration with structure, visual appeal, and shelf presence.",
    status: "Project Card",
    year: "2022",
    documentUrl: "/projects/packaging.pdf",
  },
  {
    slug: "nnp-volunteer-handbook",
    title: "NNP Volunteer Handbook",
    category: "Communication Systems",
    tagline: "Volunteer onboarding handbook designed for clarity, trust, and consistency.",
    status: "Part of NNP Case Study",
    year: "2024",
    documentUrl: "/projects/nnp-brand-style-guide.pdf",
  },
  {
    slug: "nnp-impact-report",
    title: "NNP Impact Report",
    category: "Communication Systems",
    tagline: "Impact storytelling and data communication for nonprofit audiences.",
    status: "Part of NNP Case Study",
    year: "2024",
    documentUrl: "/projects/nnp-impact-report.pdf",
  },
  {
    slug: "nnp-referral-guidelines",
    title: "NNP Referral Guidelines",
    category: "Communication Systems",
    tagline:
      "Partner-facing referral guidelines later showcased during a UN General Assembly refugee employment event.",
    status: "Part of NNP Case Study",
    year: "2024",
    documentUrl: "/projects/nnp-referral-guidelines.pdf",
  },
  {
    slug: "nnp-brochure",
    title: "NNP Brochure",
    category: "Communication Systems",
    tagline: "Public-facing program brochure explaining NNP's mission and support model.",
    status: "Part of NNP Case Study",
    year: "2024",
    documentUrl: "/projects/nnp-brand-style-guide.pdf",
  },
  {
    slug: "nnp-cultural-primer",
    title: "NNP Cultural Primer",
    category: "Communication Systems",
    tagline:
      "Cultural education material designed to make community understanding more accessible.",
    status: "Part of NNP Case Study",
    year: "2024",
    documentUrl: "/projects/nnp-brand-style-guide.pdf",
  },
  {
    slug: "nnp-branding",
    title: "NNP Branding & Style Guide",
    category: "Brand Systems",
    tagline: "Brand colors, typography, and visual system for New Neighbors Partnership.",
    status: "Part of NNP Case Study",
    year: "2024",
    documentUrl: "/projects/nnp-brand-style-guide.pdf",
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
    featured: true,
    documentUrl: "/projects/environmental-design.pdf",
  },
  {
    slug: "wayfinding",
    title: "Design of Wayfinding Systems",
    category: "Spatial & Visual Experiments",
    tagline: "Navigation and signage system exploration for physical environments.",
    status: "Project Card",
    year: "2022",
    documentUrl: "/projects/wayfinding.pdf",
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
    featured: true,
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
    title: "Systems Thinking",
    category: "Product Experiences",
    tagline: "Process and systems mapping exploration for understanding complex relationships.",
    status: "Archive",
    year: "2021",
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
  },
  {
    slug: "communication-theory",
    title: "Communication Theory",
    category: "Communication Systems",
    tagline: "Visual communication studies through posters, analysis, and media interpretation.",
    status: "Archive",
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
    title: "Applied Literature",
    category: "Print & Editorial",
    tagline: "Literature-based visual and editorial design exploration.",
    status: "Archive",
    year: "2021",
    documentUrl: "/projects/applied-literature.pdf",
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
    title: "Introduction to Materials & 3D Modelling",
    category: "Spatial & Visual Experiments",
    tagline: "Material and 3D form exploration.",
    status: "Archive",
    year: "2021",
    documentUrl: "/projects/materials-3d.pdf",
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
    featured: true,
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
    featured: true,
  },
  {
    slug: "character-design",
    title: "Character Design",
    category: "Spatial & Visual Experiments",
    tagline: "Character development and expressive visual design.",
    status: "Archive",
    year: "2021",
    documentUrl: "/projects/character-design.pdf",
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

export const featuredProjects = atlasProjects.filter((p) => p.featured);

export function getProjectCover(slug: string): string | undefined {
  return projectCovers[slug];
}

export function getProjectLink(project: PortfolioProject): string {
  return `/projects/${project.slug}`;
}
