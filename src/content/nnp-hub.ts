export type NnpSubProject = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: string;
};

export const nnpHubIntro = {
  title: "New Neighbors Partnership Communication System",
  label: "Nonprofit Service + Communication Ecosystem",
  description:
    "A scalable communication ecosystem for New Neighbors Partnership — unifying referral guidelines, volunteer onboarding, impact storytelling, cultural education, brand systems, and social templates into clearer, more accessible touchpoints.",
  role: "Brand identity, style guide, print systems, referral guidelines, impact storytelling",
  year: "2024",
};

export const nnpSubProjects: NnpSubProject[] = [
  {
    slug: "nnp-volunteer-handbook",
    title: "NNP Volunteer Handbook",
    shortTitle: "Volunteer Handbook",
    tagline:
      "16-page onboarding booklet — clothing partnership model, donation guidelines, and dignity-centered volunteer communication.",
    category: "Onboarding",
  },
  {
    slug: "nnp-impact-report",
    title: "NNP 2025 Impact Report",
    shortTitle: "Impact Report",
    tagline:
      "Donor-ready 2025 report — data visualization, family stories, and brand-consistent editorial design.",
    category: "Impact",
  },
  {
    slug: "nnp-cultural-primer",
    title: "NNP Cultural Primer — Guinea",
    shortTitle: "Cultural Primer",
    tagline:
      "Two-page Guinea guide — cultural context, language, food, and respectful volunteer communication.",
    category: "Education",
  },
  {
    slug: "nnp-referral-guidelines",
    title: "NNP Referral Guidelines",
    shortTitle: "Referral Guidelines",
    tagline:
      "Partner agency guide — referral process, eligibility, and UN General Assembly presentation.",
    category: "Partners",
  },
  {
    slug: "nnp-brochure",
    title: "NNP Program Brochure",
    shortTitle: "Program Brochure",
    tagline:
      "Family-facing brochure — program overview, support types, privacy, and contact resources.",
    category: "Outreach",
  },
  {
    slug: "nnp-branding",
    title: "NNP Brand Style Guide",
    shortTitle: "Brand Style Guide",
    tagline: "5-page visual identity system — colors, typography, and social template categories.",
    category: "Brand System",
  },
  {
    slug: "nnp-social-media",
    title: "NNP Social Media Templates",
    shortTitle: "Social Media",
    tagline:
      "Branded Instagram story templates — campaigns, volunteer asks, and community updates.",
    category: "Digital",
  },
];
