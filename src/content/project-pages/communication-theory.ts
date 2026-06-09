import type { ProjectDetail } from "@/content/project-details";

export const communicationTheoryDetail: ProjectDetail = {
  slug: "communication-theory",
  displayTitle: "Lights, Camera, Corona — Communication Theory Project",
  course: "Communication Theory",
  role: "Researcher · Visual/Semiotic Analyst · Writer",
  scope: "Poster + meme deconstructions, video analyses, framework building",
  tools:
    "Semiotics (sign/signifier/signified; studium/punctum), denotation/connotation, typography & color theory, composition analysis",
  deliverables:
    "E-book style documentation, comparative analysis grids, key insights for designing public messages",
  format: "Semester project",
  duration: "Semester project",
  intro:
    "Decoding how Bollywood posters, memes, and videos reframed public messages during COVID-19 — a research-driven exploration of how Indian popular culture became public communication during the pandemic.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "During COVID-19, information fatigue and fear were high, while attention spans were low. How can mass culture artifacts (posters, memes, clips) translate health guidance into messages that feel relatable, memorable, and shareable — without losing accuracy or empathy?",
    audience:
      "Communication designers, students, social media teams, and public-info campaigners.",
    goals: [
      "Analyze manipulated posters, memes, and awareness videos for visual and linguistic cues",
      "Understand why these formats spread quickly and how effectively they nudged behavior",
      "Apply semiotics, typography, color, and composition frameworks to each artifact",
      "Distill reusable principles for designing culture-aware public messages",
    ],
    outcome:
      "A structured e-book with side-by-side analyses, a reusable critique template for future communication audits, and distilled principles for designing culture-aware public messages.",
  },
  sections: [
    {
      number: 2,
      title: "Overview",
      blocks: [
        {
          text: "I analyzed manipulated posters, social media memes, and awareness videos to understand why these formats spread quickly, what visual and linguistic cues they used, and how effectively they nudged behavior around masking, distancing, and hygiene.",
        },
      ],
      layout: "grid",
      images: ["gallery-02.jpg", "gallery-03.jpg"],
    },
    {
      number: 3,
      title: "Problem Statement",
      blocks: [
        {
          text: "During COVID-19, information fatigue and fear were high, while attention spans were low. The central question: how can mass culture artifacts translate health guidance into messages that feel relatable, memorable, and shareable — without losing accuracy or empathy?",
        },
      ],
      layout: "grid",
    },
    {
      number: 4,
      title: "Mind-map & Scope",
      blocks: [
        {
          label: "Themes studied",
          bullets: [
            "Comic relief",
            "Lifestyle shifts (WFH, weddings, social distancing)",
            "Civic advisories",
            "Celebrity initiatives",
          ],
        },
        {
          label: "Mediums & targets",
          bullets: [
            "Poster remixes, stills with overlaid copy, police/brand awareness creatives, stand-up/comedy shows, tribute songs",
            "General public on Instagram/Twitter/YouTube; fans of specific films/TV; city police initiatives and news outlets",
            "Selection criteria: cultural recall value, clarity of call-to-action, typographic legibility, color/contrast, and remix ethics",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-04.jpg", "gallery-05.jpg"],
    },
    {
      number: 5,
      title: "Methodology",
      blocks: [
        {
          text: "For each artifact I evaluated typography, color strategy, composition, semiotics, audience fit, and effectiveness.",
        },
        {
          label: "Analysis template",
          bullets: [
            "Typography: family, case, emphasis, hierarchy, readability",
            "Color strategy: palette temperature, contrast, cultural connotation (e.g., red = alert)",
            "Composition: focal path, balance, grid/rule-of-thirds, cropping",
            "Semiotics: denotation/connotation; sign/signifier/signified; studium/punctum; icon/index/symbol",
            "Audience fit and behavioral effectiveness",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-06.jpg", "gallery-07.jpg"],
    },
    {
      number: 6,
      title: "Selected Analyses",
      blocks: [
        {
          label: "Poster remixes",
          text: "Ghajini, Andaz Apna Apna, 3 Idiots, Mother India — masks/sanitizers inserted as punctum; titles/dialogues tweaked into CTAs; high-contrast type for quick legibility; warm palettes for urgency vs. cool accents for \"medical\" tone.",
        },
        {
          label: "Police & meme culture",
          bullets: [
            "Nagpur & Mumbai Police: regional language + pop-culture recall → instant comprehension; bold uppercase sans + red/black danger coding",
            "Kapil Sharma Show, Rasode Mein Kaun Tha?: cardboard audiences/PPE visuals index \"new normal\"; humor lowers resistance and aids recall of rules",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-08.jpg", "gallery-09.jpg", "gallery-10.jpg"],
    },
    {
      number: 7,
      title: "Key Insights",
      blocks: [
        {
          bullets: [
            "Borrowed familiarity wins: reframing cult dialogues/posters compresses explanation time — audiences \"get it\" in one glance",
            "Humor as entry, clarity as exit: memes open the door; crisp typographic hierarchy and explicit CTAs tell people what to do",
            "Color codes behaviors: red/black signal alert; blue/white signal trust/care",
            "Punctum drives shares: a single striking element increases virality",
            "Ethics matter: avoid stigma/xenophobia; keep attribution/context; don't let humor dilute medical accuracy",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-11.jpg", "gallery-12.jpg"],
    },
    {
      number: 8,
      title: "Outcomes & Reflection",
      blocks: [
        {
          label: "Deliverables",
          text: "A structured e-book with side-by-side analyses; a reusable critique template for future communication audits; distilled principles for designing culture-aware public messages.",
        },
        {
          label: "What I learned",
          text: "Popular culture is a powerful carrier for health guidance when semiotics, typography, and empathy align. The most effective pieces balanced wit with responsibility and used design craft — contrast, rhythm, iconography — to convert attention into action.",
        },
      ],
      layout: "grid",
      images: ["gallery-13.jpg", "gallery-14.jpg"],
    },
  ],
  layout: "editorial",
};
