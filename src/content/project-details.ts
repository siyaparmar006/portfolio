import { essenceOfGreenDetail } from "@/content/project-pages/essence-of-green";
import { publicCommunicationDetail } from "@/content/project-pages/public-communication";
import { environmentalDesignDetail } from "@/content/project-pages/environmental-design";
import { illustrationDetail } from "@/content/project-pages/illustration";
import { photographyDetail } from "@/content/project-pages/photography";
import { systemsThinkingDetail } from "@/content/project-pages/systems-thinking";

export type ProjectBrief = {
  ask: string;
  audience: string;
  goals: string[];
  outcome: string;
  successSignals?: string[];
};

export type ContentBlock = {
  label?: string;
  text?: string;
  bullets?: string[];
};

export type ProjectSection = {
  number?: number;
  title: string;
  blocks?: ContentBlock[];
  body?: string;
  bullets?: string[];
  layout?: "text" | "split-left" | "split-right" | "gallery" | "grid" | "stack";
  imageIndex?: number;
  images?: string[];
};

export type ProjectDetail = {
  slug: string;
  displayTitle?: string;
  course?: string;
  role: string;
  format?: string;
  coreSkills?: string;
  duration?: string;
  scope?: string;
  team?: string;
  deliverables?: string;
  tools?: string;
  intro: string;
  brief: ProjectBrief;
  briefImages?: string[];
  heroImage?: string;
  sections: ProjectSection[];
  layout?: "editorial" | "showcase" | "split";
};

import { projectGalleries } from "@/content/asset-manifest";

const ASSET_BASE = "/assets/projects";

export function getProjectGallery(slug: string): string[] {
  return projectGalleries[slug] ?? [];
}

export function getProjectImage(slug: string, file: string): string {
  return `${ASSET_BASE}/${slug}/${file}`;
}

export function getProjectImages(slug: string, files: string[]): string[] {
  return files.map((file) => getProjectImage(slug, file));
}

const details: Record<string, ProjectDetail> = {
  "essence-of-green": essenceOfGreenDetail,
  "public-communication": publicCommunicationDetail,
  "environmental-design": environmentalDesignDetail,
  illustration: illustrationDetail,
  photography: photographyDetail,
  "systems-thinking": systemsThinkingDetail,
  nnp: {
    slug: "nnp",
    course: "Outreach & Communications Internship",
    role: "Brand identity, style guide, print systems, referral guidelines, impact storytelling",
    duration: "2024–2025",
    intro:
      "A full communication ecosystem for New Neighbors Partnership — unifying brand, volunteer materials, partner guidelines, and impact reporting into one scalable visual system for a refugee-support nonprofit.",
    brief: {
      ask: "Create a cohesive communication system that helps NNP speak clearly to volunteers, partners, and refugee families across print and digital.",
      audience:
        "Volunteers, partner organizations, donors, and newly arrived families navigating resettlement in NYC.",
      goals: [
        "Establish a reusable brand and typography system",
        "Design partner-facing referral guidelines for clarity under pressure",
        "Make impact data feel human and trustworthy",
      ],
      outcome:
        "A modular suite of brand guidelines, handbooks, brochures, cultural primers, and an impact report — with referral guidelines later showcased at a UN General Assembly refugee employment event.",
    },
    sections: [
      {
        title: "Brand & Style Guide",
        body: "Defined color, type, layout rules, and usage examples so internal teams and volunteers could produce consistent materials without design support every time.",
        layout: "split-right",
        imageIndex: 0,
      },
      {
        title: "Service Communication",
        body: "Designed referral guidelines, volunteer handbook, and program brochure as connected touchpoints — each answering a specific question in the resettlement journey.",
      },
      {
        title: "Impact & Cultural Education",
        body: "Impact report and cultural primers translate complex program data and cross-cultural context into approachable, print-ready formats.",
        layout: "gallery",
      },
    ],
    layout: "editorial",
  },
  liveseeds: {
    slug: "liveseeds",
    course: "UI/UX App Design (Academic)",
    role: "Research, wireframing, UI design, visual interface, prototyping",
    duration: "Semester project",
    intro:
      "LiveSeeds is a plant-care mobile app that helps users understand what their plants need, when to act, and how to recover when something goes wrong — designed with clarity and warmth.",
    brief: {
      ask: "Design a mobile experience that makes plant care feel approachable for beginners without oversimplifying expert needs.",
      audience:
        "First-time plant owners and casual indoor gardeners who feel overwhelmed by conflicting care advice online.",
      goals: [
        "Reduce anxiety around plant health decisions",
        "Create scannable care schedules and reminders",
        "Use visual language that feels organic, not clinical",
      ],
      outcome:
        "End-to-end app flows from onboarding through daily care, diagnostics, and plant library — with paper wireframes, hi-fi UI screens, and interaction prototypes.",
    },
    sections: [
      {
        title: "Discovery & Wireframes",
        body: "Mapped core jobs-to-be-done: identify a plant, understand its needs, track watering/light, and get help when leaves change. Paper wireframes tested hierarchy before visual polish.",
        layout: "split-left",
        imageIndex: 0,
      },
      {
        title: "Interface Design",
        body: "Built a green-forward UI with clear cards, friendly iconography, and progressive disclosure so users aren't flooded on first open.",
        layout: "gallery",
      },
    ],
    layout: "showcase",
  },
  evair: {
    slug: "evair",
    course: "Agency — Zero Gravity Communications",
    role: "Brand identity, packaging structure, visual system, product storytelling",
    duration: "4 months",
    intro:
      "A contemporary rebrand and packaging system for Evair car fresheners — balancing shelf presence, brand recall, and functional packaging constraints.",
    brief: {
      ask: "Modernize Evair's visual identity and packaging to compete in a crowded car-care shelf environment.",
      audience: "Retail shoppers looking for affordable, visually distinctive car fresheners.",
      goals: [
        "Create a memorable logo and color system",
        "Design packaging that reads quickly at shelf distance",
        "Unify product variants under one brand architecture",
      ],
      outcome:
        "Logo explorations, color palette, typography, and structural packaging directions with mockups ready for production review.",
    },
    sections: [
      {
        title: "Identity Exploration",
        body: "Explored multiple logo directions before landing on a mark that feels contemporary, airy, and aligned with the product category.",
        layout: "split-right",
        imageIndex: 0,
      },
      {
        title: "Packaging System",
        body: "Developed dielines, variant color coding, and front-panel hierarchy optimized for retail visibility.",
      },
    ],
    layout: "split",
  },
  fluid: {
    slug: "fluid",
    course: "Product Design Studio",
    role: "Concept development, UX flows, visual design, presentation",
    duration: "Team project",
    intro:
      "Fluid is a digital companion concept for understanding and tracking water quality — translating complex environmental data into calm, actionable insights.",
    brief: {
      ask: "Help people understand what's in their water and what to do about it, without requiring a chemistry degree.",
      audience:
        "Health-conscious households and renters who can't easily change infrastructure but want transparency.",
      goals: [
        "Surface quality metrics in plain language",
        "Recommend next steps based on severity",
        "Build trust through calm, credible UI",
      ],
      outcome:
        "Concept flows, final report, and presentation slides for a water-quality companion app.",
    },
    sections: [
      {
        title: "Problem Framing",
        body: "Researched how people currently learn about water quality and where trust breaks down.",
      },
      {
        title: "Experience Concept",
        body: "Designed dashboard, alerts, and educational modules as a connected system.",
        layout: "split-right",
        imageIndex: 0,
      },
    ],
    layout: "editorial",
  },
  "cx-capstone": {
    slug: "cx-capstone",
    course: "CX by Design — Capstone Internship",
    role: "Journey mapping, service design, ecosystem diagram, client narrative dashboard",
    duration: "Sep–Dec 2025",
    intro:
      "Redesigned Cecil's 10-10-10 client journey at CX by Design — connecting HubSpot, Asana, and MailerLite into one clear, human service ecosystem.",
    brief: {
      ask: "Make a complex B2B client journey feel clear, consistent, and trustworthy while automating admin-heavy touchpoints.",
      audience:
        "CX by Design clients moving through onboarding, delivery, and post-project phases.",
      goals: [
        "Map owner → trigger → tool handoffs across the journey",
        "Design a client-facing status narrative",
        "Balance automation with essential human touch",
      ],
      outcome:
        "Future-state journey map, integrated ecosystem diagram, governance guardrails, and pilot-ready documentation.",
    },
    sections: [
      {
        title: "10-10-10 Journey",
        body: "Mapped Cecil's path across 10 days, 10 weeks, 10 months, and post-project — aligning research, content, and internal workflows.",
        layout: "split-left",
        imageIndex: 0,
      },
      {
        title: "Tool Ecosystem",
        body: "HubSpot (CRM) → Asana (delivery) → MailerLite (comms) with explicit ownership at every transition.",
      },
    ],
    layout: "editorial",
  },
  "monkey-fries": {
    slug: "monkey-fries",
    course: "Brand Systems (Academic)",
    role: "Identity, menu design, packaging, social templates",
    duration: "Studio project",
    intro:
      "Monkey Fries is a cloud-kitchen brand built for delivery-first audiences — playful identity, bold color, and systemized menu communication.",
    brief: {
      ask: "Create a distinctive cloud-kitchen brand that survives small screens and fast scrolling.",
      audience: "Late-night delivery customers and urban food-app users.",
      goals: [
        "Own a memorable visual personality",
        "Systemize menu and promo layouts",
        "Keep brand consistent across touchpoints",
      ],
      outcome:
        "Logo, color/type system, packaging, menu boards, and social templates documented in a brand deck.",
    },
    sections: [
      {
        title: "Brand World",
        body: "Built a playful, high-contrast identity with flexible layout components for campaigns.",
        layout: "gallery",
      },
    ],
    layout: "showcase",
  },
  zgc: {
    slug: "zgc",
    course: "Agency — Zero Gravity Communications",
    role: "Graphic design, campaign assets, digital marketing support",
    duration: "Jan–May 2023",
    intro:
      "Professional branding and campaign work at ZGC — supporting client accounts with social, print, and digital deliverables.",
    brief: {
      ask: "Deliver fast-turnaround design that matches each client's voice while maintaining studio quality.",
      audience: "Agency clients across consumer and lifestyle categories.",
      goals: [
        "Adapt quickly across brand guidelines",
        "Ship campaign-ready assets",
        "Maintain visual consistency at speed",
      ],
      outcome: "Multi-client design support including Evair and additional campaign materials.",
    },
    sections: [
      {
        title: "Agency Craft",
        body: "Worked within established workflows to produce brand-aligned assets under tight timelines.",
        layout: "split-right",
        imageIndex: 0,
      },
    ],
    layout: "editorial",
  },
  brim: {
    slug: "brim",
    course: "Design Internship — BRIM Advertising",
    role: "Social content, print collateral, real estate campaign design",
    duration: "May–Aug 2022",
    intro:
      "Internship at BRIM producing social, print, and campaign materials for real estate clients — 50+ social posts, brochures, stationery, and mock-ups.",
    brief: {
      ask: "Increase brand visibility and engagement for residential real estate accounts through consistent visual communication.",
      audience: "Homebuyers, agents, and developers promoting residential projects.",
      goals: [
        "Ship high-volume social content",
        "Design print collateral that feels premium",
        "Support multiple accounts in parallel",
      ],
      outcome:
        "Measurable engagement lift across managed accounts; full suite of brochures, logos, and campaign mock-ups.",
    },
    sections: [
      {
        title: "Campaign Output",
        body: "Social templates, brochures, and print stationery designed for repeat use across properties.",
        layout: "split-left",
        imageIndex: 0,
      },
    ],
    layout: "editorial",
  },
  "institute-of-design": {
    slug: "institute-of-design",
    course: "Identity Design (Academic)",
    role: "Logo, stationery system, brand guide, environmental applications",
    duration: "Semester project",
    intro:
      "Identity exploration for an academic design institution — logo, stationery, signage, and brand guide documenting usage rules.",
    brief: {
      ask: "Design an identity system worthy of a design-forward academic institution.",
      audience: "Prospective students, faculty, and campus visitors.",
      goals: [
        "Balance academic credibility with creative energy",
        "Build a scalable stationery system",
        "Document rules for long-term use",
      ],
      outcome: "Logo suite, stationery suite, environmental mockups, and brand guide PDF.",
    },
    sections: [
      {
        title: "System Applications",
        body: "Extended the mark across letterhead, signage, and environmental graphics.",
        layout: "gallery",
      },
    ],
    layout: "showcase",
  },
  packaging: {
    slug: "packaging",
    course: "Packaging Design (Academic)",
    role: "Structure, dielines, visual design, shelf mockups",
    duration: "Studio module",
    intro:
      "Packaging explorations focused on structure, shelf presence, and tactile appeal — including CurvD and consumer product mockups.",
    brief: {
      ask: "Design packaging that communicates product value before the box is opened.",
      audience: "Retail shoppers evaluating form, function, and trust at shelf.",
      goals: [
        "Resolve structure and graphics together",
        "Test shelf visibility",
        "Prototype with realistic mockups",
      ],
      outcome: "Multiple packaging directions with dielines, renders, and presentation boards.",
    },
    sections: [
      {
        title: "Form & Graphics",
        body: "Iterated structure and surface graphics as one decision — not two separate passes.",
        layout: "gallery",
      },
    ],
    layout: "showcase",
  },
};

function defaultDetail(
  slug: string,
  meta: { title: string; tagline: string; year?: string; category: string },
): ProjectDetail {
  return {
    slug,
    course: meta.category,
    role: "Research, visual design, layout, production",
    duration: "—",
    intro: meta.tagline,
    brief: {
      ask: `Explore and communicate the core idea behind ${meta.title} with clarity and visual craft.`,
      audience: "Design faculty, peers, and portfolio reviewers.",
      goals: [
        "Establish a clear visual concept",
        "Document process and decisions",
        "Deliver polished final artifacts",
      ],
      outcome: "Completed project documentation and visual deliverables as shown in the gallery.",
    },
    sections: [{ title: "Project Overview", body: meta.tagline, layout: "gallery" }],
    layout: "editorial",
  };
}

export function getProjectDetail(
  slug: string,
  fallback?: { title: string; tagline: string; year?: string; category: string },
): ProjectDetail | undefined {
  if (details[slug]) return details[slug];
  if (fallback) return defaultDetail(slug, fallback);
  return undefined;
}

export function enrichProjectDetails(
  projects: Array<{
    slug: string;
    title: string;
    tagline: string;
    year?: string;
    category: string;
  }>,
): Record<string, ProjectDetail> {
  const map: Record<string, ProjectDetail> = { ...details };
  for (const p of projects) {
    if (!map[p.slug]) map[p.slug] = defaultDetail(p.slug, p);
  }
  return map;
}
