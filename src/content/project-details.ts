import { essenceOfGreenDetail } from "@/content/project-pages/essence-of-green";
import { publicCommunicationDetail } from "@/content/project-pages/public-communication";
import { environmentalDesignDetail } from "@/content/project-pages/environmental-design";
import { illustrationDetail } from "@/content/project-pages/illustration";
import { photographyDetail } from "@/content/project-pages/photography";
import { systemsThinkingDetail } from "@/content/project-pages/systems-thinking";
import { materials3dDetail } from "@/content/project-pages/materials-3d";
import { wayfindingDetail } from "@/content/project-pages/wayfinding";
import { packagingDetail } from "@/content/project-pages/packaging";
import { appliedLiteratureDetail } from "@/content/project-pages/applied-literature";
import { characterDesignDetail } from "@/content/project-pages/character-design";
import { communicationTheoryDetail } from "@/content/project-pages/communication-theory";
import { instituteOfDesignDetail } from "@/content/project-pages/institute-of-design";
import { liveseedsDetail } from "@/content/project-pages/liveseeds";
import { monkeyFriesDetail } from "@/content/project-pages/monkey-fries";
import { fluidDetail } from "@/content/project-pages/fluid";
import { evairDetail } from "@/content/project-pages/evair";
import {
  nnpVolunteerHandbookDetail,
  nnpImpactReportDetail,
  nnpCulturalPrimerDetail,
  nnpReferralGuidelinesDetail,
  nnpBrochureDetail,
  nnpBrandingDetail,
  nnpSocialMediaDetail,
} from "@/content/project-pages/nnp-subprojects";

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
  video?: string;
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
  /** Parent hub slug — e.g. sub-projects link back to /projects/nnp */
  hubSlug?: string;
  /** Smaller publication-style images in a 2-column grid (no crop) */
  compactImages?: boolean;
  intro: string;
  brief: ProjectBrief;
  briefImages?: string[];
  heroImage?: string;
  sections: ProjectSection[];
  layout?: "editorial" | "showcase" | "split";
};

import { assetVersions, projectGalleries } from "@/content/asset-manifest";

const ASSET_BASE = "/assets/projects";

export function getProjectGallery(slug: string): string[] {
  return projectGalleries[slug] ?? [];
}

export function getProjectImage(slug: string, file: string): string {
  const v = assetVersions[`${slug}/${file}`];
  return v ? `${ASSET_BASE}/${slug}/${file}?v=${v}` : `${ASSET_BASE}/${slug}/${file}`;
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
  "materials-3d": materials3dDetail,
  wayfinding: wayfindingDetail,
  packaging: packagingDetail,
  "applied-literature": appliedLiteratureDetail,
  "character-design": characterDesignDetail,
  "communication-theory": communicationTheoryDetail,
  "institute-of-design": instituteOfDesignDetail,
  liveseeds: liveseedsDetail,
  evair: evairDetail,
  fluid: fluidDetail,
  "monkey-fries": monkeyFriesDetail,
  "nnp-volunteer-handbook": nnpVolunteerHandbookDetail,
  "nnp-impact-report": nnpImpactReportDetail,
  "nnp-cultural-primer": nnpCulturalPrimerDetail,
  "nnp-referral-guidelines": nnpReferralGuidelinesDetail,
  "nnp-brochure": nnpBrochureDetail,
  "nnp-branding": nnpBrandingDetail,
  "nnp-social-media": nnpSocialMediaDetail,
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
