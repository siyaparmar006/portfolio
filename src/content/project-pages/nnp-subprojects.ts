import type { ProjectDetail } from "@/content/project-details";

const shared = {
  course: "Outreach & Communications Internship — New Neighbors Partnership",
  duration: "2024–2025",
  hubSlug: "nnp",
} as const;

export const nnpVolunteerHandbookDetail: ProjectDetail = {
  slug: "nnp-volunteer-handbook",
  displayTitle: "NNP Volunteer Handbook",
  ...shared,
  duration: "2025",
  course: "Publication Design · Nonprofit Communication · Volunteer Onboarding",
  role: "Design & Content Synthesis, Layout Design, Visual System Application, Image Placement",
  team: "New Neighbors Partnership",
  deliverables: "Volunteer Handbook / Nonprofit Communication Material",
  tools: "Canva, Figma, Google Docs, Brand System Assets",
  format: "16-page booklet / digital PDF",
  coreSkills:
    "Publication design, information hierarchy, volunteer onboarding, nonprofit storytelling, trauma-informed communication, visual identity application",
  intro:
    "Designed and synthesized a 16-page volunteer handbook for New Neighbors Partnership to help local partner families understand the clothing partnership model, follow donation guidelines, communicate respectfully, and support refugee families with dignity.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "New Neighbors Partnership needed a clear and welcoming handbook for volunteer partner families participating in its clothing partnership program. The organization connects refugee and newcomer families in New York City with local families who share hand-me-down clothing, seasonal packages, and long-term community support. The handbook guides volunteers through the full experience — from understanding NNP's mission to preparing clothing packages, writing welcome notes, coordinating deliveries, respecting privacy, and communicating with cultural humility.",
    audience:
      "Local partner families and volunteers who may be new to refugee support, donation guidelines, or direct communication with newcomer families.",
    goals: [
      "Make the volunteer journey feel simple, warm, and responsible while protecting dignity and safety",
      "Transform policy-heavy content into a visually readable, values-based guide",
      "Structure information so volunteers understand the “why” before the “how”",
      "Apply NNP's visual identity consistently across a practical onboarding tool",
      "Balance operational clarity with trauma-informed, dignity-centered storytelling",
    ],
    outcome:
      "A complete 16-page volunteer onboarding booklet — warm, structured, practical, and aligned with NNP's mission of building community-based support for refugee families.",
  },
  sections: [
    {
      number: 2,
      title: "Project Context & Purpose",
      blocks: [
        {
          text: "I designed the handbook as both an onboarding tool and a values-based communication piece. It needed to feel approachable enough for new volunteers, structured enough for program operations, and emotionally thoughtful enough for the sensitive context of refugee support.",
        },
      ],
      layout: "grid",
      images: ["gallery-02.jpg", "gallery-03.jpg"],
    },
    {
      number: 3,
      title: "My Role & Contribution",
      blocks: [
        {
          text: "My role included both design execution and content synthesis. I organized the provided program information into a clear handbook structure, refined the flow of information, placed relevant images, and designed the booklet using NNP's visual identity system.",
        },
        {
          label: "Contributions",
          bullets: [
            "Synthesizing handbook content into clear sections and page-by-page flow",
            "Designing the full booklet layout and visual structure",
            "Applying NNP's typography, colors, icons, and flower motif",
            "Placing images to support emotional warmth and real-world context",
            "Creating visual hierarchy for key terms, reminders, quotes, checklists, and guidelines",
            "Balancing practical instructions with dignity-centered storytelling",
            "Making the handbook easier for volunteers to read, follow, and return to when needed",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-04.jpg", "gallery-05.jpg"],
    },
    {
      number: 4,
      title: "Audience, Content Strategy & Information Architecture",
      blocks: [
        {
          text: "The handbook begins with an emotional welcome, then gradually moves into the program model, process instructions, quality expectations, communication guidelines, and frequently asked questions. This order helps volunteers first understand the “why,” then the “how.”",
        },
        {
          label: "Handbook structure",
          bullets: [
            "Welcome message",
            "NNP's mission and community model",
            "Clothing partnership overview",
            "Step-by-step getting started process",
            "Ongoing support and direct contact guidance",
            "Welcome note examples",
            "Clothing quality check",
            "Do's and don'ts",
            "Best practices for respectful communication",
            "In-person delivery guidelines",
            "Direct contact and privacy guidelines",
            "FAQs",
            "Refugee terminology glossary",
            "Closing thank-you page",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-06.jpg", "gallery-07.jpg"],
    },
    {
      number: 5,
      title: "Visual System & Design Direction",
      blocks: [
        {
          text: "The visual direction was built around NNP's existing identity: warm, human, soft, and community-focused. Since the handbook is meant for volunteers entering a relationship-based support model, the visual tone needed to feel welcoming, calm, and trustworthy — not like a formal policy document.",
        },
        {
          label: "Key design choices",
          bullets: [
            "Large serif headings for warmth and personality",
            "Soft cream background to reduce visual harshness",
            "Purple as the primary brand color for headings and emphasis",
            "Teal, orange, blue, and pink as supporting colors for icons and callouts",
            "Rounded cards and image frames to make content feel accessible",
            "Subtle flower motif backgrounds to reinforce brand identity",
            "Color-coded highlights for reminders, quotes, and process steps",
            "Icons to simplify abstract ideas — community, relationship, long-term support, delivery steps",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-08.jpg", "gallery-09.jpg", "gallery-10.jpg"],
    },
    {
      number: 6,
      title: "Layout, Hierarchy & Readability",
      blocks: [
        {
          text: "A major challenge was making a lot of instructional content readable in a small booklet format. I used section titles, subheadings, bullets, callout boxes, numbered steps, icons, and visual spacing to separate different kinds of information.",
        },
        {
          label: "Hierarchy decisions",
          bullets: [
            "Table of Contents gives volunteers a clear overview of handbook structure",
            "About NNP page uses cards and icons to explain community-driven, relationship-focused support",
            "Getting Started section uses numbered steps to simplify the volunteer journey",
            "Welcome Note Guidelines separate examples into welcome, validation, introduction, and warm closing",
            "Clothing Quality Check uses visual examples with check and cross marks",
            "Direct Contact Guidelines break sensitive communication rules into digestible blocks",
            "Glossary page makes refugee-related terms more understandable for volunteers",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-11.jpg", "gallery-12.jpg"],
    },
    {
      number: 7,
      title: "Key Pages & Design Highlights",
      blocks: [
        {
          label: "Cover & mission",
          text: "The handbook opens with a photo-based cover that creates warmth and human connection. The mission page explains who NNP is, what makes the model different, and why the program focuses on dignity, relationships, and long-term support.",
        },
        {
          label: "Partnership & getting started",
          text: "Clothing Partnership pages define key terms — New Neighbors Family, Local Partner Family, and Partnership — to create shared language. The Getting Started spread uses numbered markers, icons, and two-column layout for referral, matching, first package prep, seasonal support, and direct contact.",
        },
        {
          label: "Guidelines & closing",
          text: "Welcome Note Guidelines place real example language into sections so volunteers can write with warmth and cultural sensitivity. The Clothing Quality Check reinforces that quality is connected to dignity. The closing page returns to gratitude and community with contact details.",
        },
      ],
      layout: "grid",
      images: ["gallery-13.jpg", "gallery-14.jpg"],
    },
    {
      number: 8,
      title: "Outcome & Reflection",
      blocks: [
        {
          text: "The final outcome was a polished 16-page volunteer handbook that brings together NNP's mission, program process, communication expectations, and volunteer responsibilities into one cohesive guide.",
        },
        {
          text: "The handbook helped translate a complex, relationship-based nonprofit model into a resource volunteers can easily understand and use. It strengthened NNP's brand consistency by applying the visual identity across a practical, real-world communication material.",
        },
        {
          label: "Reflection",
          text: "This project shows my ability to work across content strategy, publication design, nonprofit communication, and visual systems — turning sensitive information into clear, respectful, and human-centered design. More than designing pages, I helped shape a tool that supports better volunteer behavior, more consistent program communication, and a more dignified experience for newcomer families.",
        },
      ],
      layout: "grid",
    },
  ],
  layout: "editorial",
};

export const nnpImpactReportDetail: ProjectDetail = {
  slug: "nnp-impact-report",
  displayTitle: "NNP 2025 Impact Report",
  ...shared,
  duration: "2025",
  course: "Impact Report · Nonprofit Communication · Data Storytelling",
  role: "Design, Content Synthesis, Layout Design, Data Visualization, Image Placement",
  team: "New Neighbors Partnership",
  deliverables: "Annual Impact Report / Nonprofit Communication Material",
  tools: "Canva, Figma, Google Docs, Brand System Assets",
  format: "Desktop PDF + Print Booklet Version",
  coreSkills:
    "Editorial design, nonprofit storytelling, impact communication, data visualization, brand consistency",
  intro:
    "Designed and synthesized New Neighbors Partnership's 2025 Impact Report across digital and print formats, turning program data, family stories, financials, and community outcomes into a warm, accessible, and donor-ready publication.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "New Neighbors Partnership needed a 2025 Impact Report to communicate the organization's yearly impact to donors, volunteers, partner organizations, board members, and community supporters. The report needed to clearly show the scale of NNP's work while keeping the emotional, human-centered nature of the organization — warm, personal, and community-driven rather than overly corporate.",
    audience:
      "Donors, volunteers, partner organizations, board members, and community supporters seeking both measurable impact and connection to NNP's mission.",
    goals: [
      "Communicate annual impact with warmth, clarity, and donor-ready professionalism",
      "Structure content as a journey from emotional storytelling to measurable outcomes",
      "Turn program statistics into visual data blocks that feel human, not corporate",
      "Produce both desktop PDF and print booklet versions from one design system",
      "Apply NNP's visual identity consistently across photography, quotes, and charts",
    ],
    outcome:
      "A donor-ready annual impact report that communicates NNP's 2025 community impact through clear data, warm storytelling, thoughtful photography, and a consistent visual identity across both digital and print formats.",
  },
  sections: [
    {
      number: 2,
      title: "Project Context & Purpose",
      blocks: [
        {
          text: "The report highlights NNP's work across clothing partnerships, school supplies, postpartum support, Ramadan care packages, emergency food support, information referrals, community dinners, welcome events, financials, partners, staff, and special thanks.",
        },
      ],
      layout: "grid",
      images: ["gallery-02.jpg", "gallery-03.jpg"],
    },
    {
      number: 3,
      title: "My Role & Contribution",
      blocks: [
        {
          text: "My role included both design and content synthesis. I helped organize the report content into a clear structure, designed the full visual layout, placed images, created data blocks, and adapted the report into two formats: one for desktop PDF viewing and one for printed booklet copies.",
        },
        {
          label: "Contributions",
          bullets: [
            "Synthesizing written content into a clear report flow",
            "Designing the full impact report layout",
            "Creating desktop PDF and print booklet versions",
            "Organizing program statistics into visual data blocks",
            "Placing photographs to support storytelling",
            "Applying NNP's visual identity consistently",
            "Designing quote callouts, icons, charts, and section layouts",
            "Balancing donor-facing professionalism with warmth and humanity",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-04.jpg", "gallery-05.jpg"],
    },
    {
      number: 4,
      title: "Audience, Structure & Story Flow",
      blocks: [
        {
          text: "The content was structured as a journey. It begins with an executive letter and mission overview, then moves into family stories, program impact, data, financial transparency, partner recognition, and community gratitude.",
        },
        {
          label: "Report flow",
          bullets: [
            "Opening letter from the Executive Director",
            "Mission and support model",
            "Overview of newcomer communities served",
            "Family story: Meet Mirian",
            "Clothing Partnership Program",
            "Ramadan, school supplies, postpartum, and emergency food support",
            "Information support and referrals",
            "Community welcome dinners and Summer Welcome Party",
            "Financials, partners, staff, board, and special thanks",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-06.jpg", "gallery-07.jpg"],
    },
    {
      number: 5,
      title: "Visual Direction & Brand System",
      blocks: [
        {
          text: "The visual direction followed NNP's warm, welcoming, and community-centered brand identity. The design needed to feel professional for donors and funders, but also personal enough to reflect NNP's relationship-based work.",
        },
        {
          label: "Key visual choices",
          bullets: [
            "Large editorial headings for clear section breaks",
            "Soft cream backgrounds for warmth and readability",
            "Purple as the main brand color for recognition",
            "Teal, orange, pink, and blue blocks for program statistics",
            "Rounded photo frames for a softer visual tone",
            "Quote callouts to highlight family voices",
            "Icons to explain program areas and benefits",
            "Donut charts for financial transparency",
            "Map visualization to show staff diversity and lived experience",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-08.jpg", "gallery-09.jpg"],
    },
    {
      number: 6,
      title: "Data Visualization & Information Design",
      blocks: [
        {
          text: "A major part of this project was turning program data into information that felt clear, readable, and meaningful. Instead of presenting all statistics as plain text, I used colorful data blocks, charts, grouped layouts, and strong hierarchy to help readers understand the impact quickly.",
        },
        {
          label: "Key outcomes highlighted",
          bullets: [
            "623 individuals served through the Clothing Partnership Program",
            "$108,000 value of in-kind clothing and supplies",
            "176 children receiving school supply packages",
            "20 new babies welcomed through postpartum support",
            "443 newcomer individuals supported through emergency food assistance",
            "$82,000 in direct cash assistance secured for NNP families",
            "320 community dinner attendees",
            "180 Summer Welcome Party attendees from 16 countries",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-10.jpg", "gallery-11.jpg"],
    },
    {
      number: 7,
      title: "Storytelling, Photography & Emotional Tone",
      blocks: [
        {
          text: 'The report uses photography, quotes, and family stories to keep the content human-centered. The "Meet Mirian" page adds a personal narrative, while program pages use photographs of clothing packages, handwritten notes, groceries, school supplies, babies, dinners, and community events to show the real outcomes of NNP\'s work.',
        },
        {
          label: "Emotional tone",
          text: "The tone is hopeful, grateful, and grounded. It acknowledges that 2025 was a difficult year for newcomers, while showing how the NNP community continued to provide care, dignity, and practical support. Family quotes serve as emotional anchors — feeling welcomed, supported, human, and part of a community.",
        },
      ],
      layout: "grid",
      images: ["gallery-12.jpg", "gallery-13.jpg"],
    },
    {
      number: 8,
      title: "Outcome & Reflection",
      blocks: [
        {
          text: "The final outcome was a complete 2025 Impact Report designed in two formats: a desktop PDF for digital sharing and a booklet version for printed copies. The report successfully brought together NNP's annual data, program updates, family stories, donor recognition, financial information, and community gratitude into one cohesive publication.",
        },
        {
          label: "Reflection",
          text: "This project strengthened my ability to design nonprofit communication materials that combine editorial design, content strategy, data visualization, and storytelling. It reflects my ability to synthesize large amounts of information and turn it into a clear, visually consistent, and emotionally meaningful report.",
        },
      ],
      layout: "grid",
      images: ["gallery-14.jpg", "gallery-15.jpg"],
    },
  ],
  layout: "editorial",
};

export const nnpCulturalPrimerDetail: ProjectDetail = {
  slug: "nnp-cultural-primer",
  displayTitle: "NNP Cultural Primer — Guinea",
  ...shared,
  duration: "2026",
  course: "Cultural Primer · Nonprofit Communication · Editorial Design",
  role: "Design, Content Synthesis, Layout Design, Image Placement, Information Organization",
  team: "New Neighbors Partnership",
  deliverables: "Cultural Education Guide / Volunteer Resource",
  tools: "Canva, Google Docs, Brand System Assets",
  format: "2-page digital and printable primer",
  coreSkills:
    "Editorial design, cross-cultural communication, nonprofit design, information design, community-centered storytelling",
  intro:
    "Designed and synthesized a two-page cultural primer on Guinea for New Neighbors Partnership, transforming historical, cultural, language, food, holiday, and best-practice information into an accessible guide for volunteers and community members.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "New Neighbors Partnership needed a simple, respectful, and easy-to-read cultural primer to help volunteers better understand families from Guinea. The goal was not to generalize an entire country, but to provide useful cultural context that could support more thoughtful communication, stronger trust-building, and more respectful interactions.",
    audience:
      "NNP volunteers, staff, and community supporters who may interact with Guinean families and may not have prior knowledge of Guinea.",
    goals: [
      "Introduce Guinea's background, languages, traditions, holidays, and food culture clearly",
      "Design a practical resource volunteers can read quickly before family interactions",
      "Present cultural context with sensitivity — useful without overgeneralizing",
      "Move readers from general understanding to practical communication guidance",
      "Apply NNP's warm visual identity to educational nonprofit content",
    ],
    outcome:
      "A concise cultural guide that helps volunteers better understand Guinean families through respectful design, practical communication tips, cultural context, and NNP's warm visual language.",
  },
  sections: [
    {
      number: 2,
      title: "Project Context & Purpose",
      blocks: [
        {
          text: "The primer introduces Guinea's background, languages, traditions, holidays, food culture, and communication practices. It was designed as a practical resource that volunteers could quickly read before meeting or supporting Guinean families.",
        },
        {
          label: "Content scope",
          bullets: [
            "Guinea's location, population, language, religion, and history",
            "Cultural values and key phrases in Fula/Fulani",
            "Food traditions and major holidays",
            "Best practices for respectful engagement",
          ],
        },
      ],
      layout: "grid",
    },
    {
      number: 3,
      title: "My Role & Contribution",
      blocks: [
        {
          text: "My role included both the design and content synthesis of the primer. I organized the provided research and community insights into a clear two-page structure, designed the visual layout, placed images and illustrations, and made sure the content felt accessible, warm, and aligned with NNP's visual identity.",
        },
        {
          label: "Contributions",
          bullets: [
            "Synthesizing cultural and historical information into concise sections",
            "Designing the full two-page layout",
            "Organizing content into readable blocks and categories",
            "Placing icons, visuals, and map elements",
            "Creating visual hierarchy for quick scanning",
            "Applying NNP's brand colors and typography",
            "Balancing educational content with sensitivity and respect",
          ],
        },
      ],
      layout: "grid",
    },
    {
      number: 4,
      title: "Audience & Information Structure",
      blocks: [
        {
          text: 'The first page introduces the country through a broad overview, historical background, language phrases, and "Did You Know?" facts. The second page focuses on cultural considerations, food, holidays, and best practices for communication.',
        },
        {
          label: "Reading flow",
          text: "This structure helps readers move from general understanding to practical application. Instead of overwhelming the audience with long paragraphs, the primer breaks information into sections that are easy to scan before a volunteer visit or family interaction.",
        },
      ],
      layout: "grid",
      images: ["gallery-01.jpg", "gallery-02.jpg"],
    },
    {
      number: 5,
      title: "Visual Direction & Layout Design",
      blocks: [
        {
          text: "The visual direction was warm, clean, and friendly. I used NNP's soft color palette, rounded shapes, illustrated icons, and organized information blocks to make the primer feel approachable rather than academic or formal.",
        },
        {
          label: "Key layout choices",
          bullets: [
            "Clear title block with the country name and flag",
            "Map-based visual cue to establish location",
            "Soft teal and peach color blocks for section separation",
            'Rounded cards for "Did You Know?" facts',
            "Icon-style illustrations for music, geography, food, and communication",
            "Consistent section headings for easy navigation",
            "Balanced text density across both pages",
          ],
        },
      ],
      layout: "grid",
    },
    {
      number: 6,
      title: "Content Synthesis & Cultural Sensitivity",
      blocks: [
        {
          text: "A major part of this project was simplifying detailed cultural information without losing nuance. The primer needed to be useful, but also careful not to present culture as fixed or universal.",
        },
        {
          label: "Sensitivity approach",
          bullets: [
            "Note that insights are based on experiences shared by Fulani families, while norms may vary across communities",
            "Acknowledge Guinea's ethnic diversity — Fulani, Malinke, and Susu groups",
            "Frame guidance around respect, patience, privacy, and listening",
            "Encourage simple language, avoiding idioms and sensitive assumptions",
            "Validate lived experiences and approach families with openness",
          ],
        },
      ],
      layout: "grid",
    },
    {
      number: 7,
      title: "Key Content Areas",
      blocks: [
        {
          label: "Page 1 — Overview & background",
          bullets: [
            "Guinea overview: population, location, capital, religion, and languages",
            "Historical background",
            "Key phrases in Fula / Fulani",
            "Facts about Guinea's rivers, music, and the Kora instrument",
          ],
        },
        {
          label: "Page 2 — Culture & practice",
          bullets: [
            "Cultural considerations: greetings, elders, family roles, hospitality, prayer, community decision-making",
            "Food traditions: Fufu, Maffé, Jollof rice, and Attaya tea",
            "Major holidays: Eid al-Fitr, Eid al-Adha, and Independence Day",
            "Best practices for communication, patience, privacy, and empathy",
          ],
        },
      ],
      layout: "grid",
    },
    {
      number: 8,
      title: "Outcome & Reflection",
      blocks: [
        {
          text: "The final outcome was a polished two-page cultural primer that supports NNP's volunteer training and family partnership work. It turns cultural research and community-based insights into a clear, visual, and respectful resource.",
        },
        {
          label: "Reflection",
          text: "This project strengthened my ability to design educational nonprofit materials that require sensitivity, clarity, and strong information hierarchy. It reflects my ability to synthesize content, design layouts, place visuals, and communicate complex cultural information in a way that feels human and accessible.",
        },
      ],
      layout: "grid",
    },
  ],
  layout: "editorial",
};

export const nnpReferralGuidelinesDetail: ProjectDetail = {
  slug: "nnp-referral-guidelines",
  displayTitle: "NNP Referral Guidelines",
  ...shared,
  duration: "2025",
  course: "Referral Guide · Nonprofit Communication · Information Design",
  role: "Design, Content Synthesis, Layout Design, Image Placement, Information Organization",
  team: "New Neighbors Partnership",
  deliverables: "Referral Guidelines / Partner Agency Resource",
  tools: "Canva, Google Docs, NNP Brand Assets",
  format: "11-page digital presentation-style guide",
  coreSkills:
    "Editorial design, information design, nonprofit communication, partner education, visual storytelling",
  intro:
    "Designed and synthesized an 11-page referral guidelines document for New Neighbors Partnership, helping partner agencies understand NNP's mission, program model, client eligibility, referral expectations, timeline, staff, and contact process. This work was later presented at the United Nations General Assembly in the context of refugee employment and community support.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "New Neighbors Partnership needed a clear referral guide for partner organizations and agency staff who refer newly arrived refugee and asylum-seeking families to NNP's clothing partnership program. The goal was to make the referral process easier to understand, while communicating the heart of NNP's work: building long-term, community-based support for families resettling in New York City.",
    audience:
      "Referral organization staff, social workers, nonprofit partners, and community organizations who may refer families to NNP.",
    goals: [
      "Explain NNP's mission, program model, eligibility, and referral process clearly",
      "Design for quick scanning in time-pressured partner environments",
      "Set accurate expectations about what NNP can and cannot guarantee",
      "Humanize the guide with photography and emotional storytelling",
      "Create a partner-facing resource polished enough for high-visibility contexts",
    ],
    outcome:
      "A clear, warm, and structured referral guide that helps partner agencies understand who to refer, how the process works, what families can expect, and how NNP builds long-term community support — later presented at the United Nations General Assembly in connection with refugee employment and support.",
  },
  sections: [
    {
      number: 2,
      title: "Project Context & Purpose",
      blocks: [
        {
          text: "The guide explains NNP's mission, clothing partnership model, community support initiatives, client eligibility, expectations, referral timeline, staff roles, and contact information. It was designed to be practical enough for referral partners, but still warm and human-centered in tone.",
        },
        {
          label: "UN General Assembly",
          text: "A key highlight of this project is that the final referral guidelines were later presented at the United Nations General Assembly in relation to refugee employment and support systems, making the work especially meaningful as a real-world nonprofit communication piece.",
        },
      ],
      layout: "grid",
      images: ["gallery-02.jpg", "gallery-03.jpg"],
    },
    {
      number: 3,
      title: "My Role & Contribution",
      blocks: [
        {
          text: "My role included both content synthesis and visual design. I organized the information into a clear flow, refined the content structure, designed the full layout, placed images, selected visual emphasis points, and applied NNP's updated brand direction throughout the guide.",
        },
        {
          label: "Contributions",
          bullets: [
            "Synthesizing referral information into clear sections",
            "Designing the full 11-page guide",
            "Structuring the content for easy partner understanding",
            "Placing family, program, and staff images throughout the document",
            "Creating visual hierarchy for eligibility, benefits, and timelines",
            "Applying brand colors, floral motifs, rounded image frames, and clean typography",
            "Turning dense operational information into a more approachable partner-facing resource",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-04.jpg", "gallery-05.jpg"],
    },
    {
      number: 4,
      title: "Audience & Communication Goal",
      blocks: [
        {
          text: "The document helps partners understand who is eligible, who is the best fit, what NNP can guarantee, what families should expect, and how long the process may take.",
        },
        {
          label: "Expectation-setting",
          text: "The guide avoids overpromising by clearly explaining that NNP can guarantee clothing support for children ages 0–10, while additional support may vary. This made the guide both informative and expectation-setting.",
        },
      ],
      layout: "grid",
    },
    {
      number: 5,
      title: "Content Structure & Information Design",
      blocks: [
        {
          text: "The document is structured like a guided narrative. It begins with NNP's identity and mission, then introduces the Clothing Partnership Program, explains the value of the model, and gradually moves into referral-specific details.",
        },
        {
          label: "Document flow",
          bullets: [
            "Cover and organization introduction",
            "Mission statement",
            "Clothing Partnership Program overview",
            "Program benefits and testimonial",
            "Other community-based support initiatives",
            "Referral eligibility",
            "Best-fit client characteristics",
            "Expectations for families and referral staff",
            "Referral timeline",
            "Program staff",
            "Contact information",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-06.jpg", "gallery-07.jpg"],
    },
    {
      number: 6,
      title: "Visual Direction & Brand Application",
      blocks: [
        {
          text: "Photography played a major role in humanizing the guide. Images of families, children, community events, care packages, and staff members help show that NNP's work is not just logistical — it is relational and emotionally supportive.",
        },
        {
          label: "Key visual choices",
          bullets: [
            "Large photo-led cover and closing pages",
            "Soft floral motifs in the background",
            "Rounded image corners for warmth",
            "Color-coded statistic cards",
            "Icon-based program benefits",
            "Spacious layouts to reduce text heaviness",
            "Staff portraits placed over a subtle world map to reflect global community",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-08.jpg", "gallery-09.jpg"],
    },
    {
      number: 7,
      title: "Key Content Highlights & External Recognition",
      blocks: [
        {
          label: "Program impact",
          text: "The guide highlights that NNP has served 400+ kids from 40 countries, shared 2,500+ clothing packages, and donated $350,000+ worth of clothing and supplies since 2018.",
        },
        {
          label: "Storytelling & advocacy",
          bullets: [
            "Explains the deeper value of the Clothing Partnership Program — donation quality, long-term support, environmental benefits, and mutual support over charity",
            "Features a quote from a mom from Chad on how handwritten notes made her feel treated as a human being",
            "Presented at the United Nations General Assembly as part of conversations around refugee employment, resettlement, and community support",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-10.jpg", "gallery-11.jpg"],
    },
    {
      number: 8,
      title: "Outcome & Reflection",
      blocks: [
        {
          text: "The final outcome was an 11-page referral guidelines document that made NNP's referral process more understandable, organized, and visually consistent. It helped translate program details into a partner-facing resource that could be shared with agencies and community organizations.",
        },
        {
          label: "Reflection",
          text: "This project strengthened my ability to design nonprofit communication materials that combine information clarity with emotional storytelling. The fact that this work was later presented at the United Nations General Assembly showed me that even a practical communication document can have a larger role in representing nonprofit work, refugee support, and community-centered systems.",
        },
      ],
      layout: "grid",
    },
  ],
  layout: "editorial",
};

export const nnpBrochureDetail: ProjectDetail = {
  slug: "nnp-brochure",
  displayTitle: "NNP Program Brochure",
  ...shared,
  duration: "2026",
  course: "Program Brochure · Nonprofit Communication · Information Design",
  role: "Design, Content Synthesis, Layout Design, Image Placement, Visual Hierarchy",
  team: "New Neighbors Partnership",
  deliverables: "Program Brochure / Family-Facing Resource",
  tools: "Canva, Google Docs, NNP Brand Assets",
  format: "Digital + printable brochure explorations",
  coreSkills:
    "Nonprofit communication, editorial design, information design, community support, visual storytelling",
  intro:
    "Designed and synthesized a family-facing program brochure for New Neighbors Partnership to explain the Clothing Partnership Program, support types, expectations, privacy guidelines, and contact resources in a clear and welcoming format.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "New Neighbors Partnership needed a clear and welcoming brochure for newly arrived refugee families joining the Clothing Partnership Program. The goal was to explain how the program works in simple language while making families feel supported, respected, and informed.",
    audience:
      "Refugee and asylum-seeking families resettling in New York City who may be receiving a lot of new information at once.",
    goals: [
      "Explain NNP's purpose and the Clothing Partnership Program in simple, welcoming language",
      "Help families understand material, social, and information support",
      "Set clear expectations around communication, privacy, and package coordination",
      "Make contact details and resources easy to find",
      "Create a warm, approachable brochure that feels supportive rather than overwhelming",
    ],
    outcome:
      "A warm and practical NNP program brochure that helps newcomer families understand the program, feel welcomed into the community, and know how to stay connected with their coordinator.",
  },
  sections: [
    {
      number: 2,
      title: "Project Context & Purpose",
      blocks: [
        {
          text: "The brochure introduces NNP's purpose, explains the three types of support offered, describes the clothing partnership process, and outlines important expectations around communication, privacy, and package coordination.",
        },
      ],
      layout: "grid",
      images: ["gallery-02.jpg", "gallery-03.jpg"],
    },
    {
      number: 3,
      title: "My Role & Contribution",
      blocks: [
        {
          text: "My role included both content synthesis and visual design. I organized the provided program information into a clear family-facing structure, refined the flow of content, designed the brochure layouts, placed images, and applied NNP's visual identity throughout.",
        },
        {
          label: "Contributions",
          bullets: [
            "Synthesizing program information into simple brochure content",
            "Designing multiple layout explorations",
            "Placing community, family, and event images",
            "Creating visual hierarchy for key points and instructions",
            "Highlighting material, social, and information support",
            "Structuring privacy, contact, and resource details clearly",
            "Making the brochure feel warm, approachable, and easy to understand",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-04.jpg", "gallery-05.jpg"],
    },
    {
      number: 4,
      title: "Audience & Communication Goal",
      blocks: [
        {
          text: "The communication goal was to help families understand what NNP offers, what they can expect from Local Partner Families, and when to contact their program coordinator.",
        },
        {
          label: "Key messaging",
          text: "The brochure clearly explains that NNP cannot offer direct financial support, while still providing access to trusted resources and partner organizations — keeping expectations honest and supportive.",
        },
      ],
      layout: "grid",
    },
    {
      number: 5,
      title: "Content Structure & Information Flow",
      blocks: [
        {
          text: "The brochure is structured around the family's first experience with NNP. It begins with a welcoming introduction, then explains the three main support areas: material support, social support, and information support.",
        },
        {
          label: "Content flow",
          bullets: [
            "Welcome to New Neighbors Partnership",
            "What NNP does",
            "Material, social, and information support",
            "Clothing Partnership Program overview",
            "How the matching process works",
            "Key points for families",
            "Important updates families should share",
            "Privacy expectations",
            "Contact details and QR code for more resources",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-06.jpg", "gallery-07.jpg"],
    },
    {
      number: 6,
      title: "Visual Direction & Brand Application",
      blocks: [
        {
          text: "The visual direction uses NNP's soft, community-centered identity. Photography from community events, care packages, and family gatherings adds emotional warmth and makes the program feel more human and real.",
        },
        {
          label: "Key visual choices",
          bullets: [
            "Friendly welcome-focused cover section",
            "Color-coded support cards",
            "Rounded image frames",
            "Soft floral background motifs",
            "Clear section headings",
            "QR code and contact information placement",
            "Warm event and care-package photography",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-08.jpg", "gallery-09.jpg"],
    },
    {
      number: 7,
      title: "Design Explorations & Refinement",
      blocks: [
        {
          text: "The file includes multiple brochure layout explorations, showing different approaches to organizing the same content. Some versions use a three-column brochure structure, while others use a more image-led square layout with stronger visual storytelling.",
        },
        {
          label: "Refinement process",
          text: "Through these explorations, the design tested different balances between readability, image placement, spacing, and program clarity. The final direction focused on making the information easy to follow while still creating a warm first impression for families.",
        },
      ],
      layout: "grid",
      images: ["gallery-10.jpg", "gallery-11.jpg"],
    },
    {
      number: 8,
      title: "Outcome & Reflection",
      blocks: [
        {
          text: "The final brochure became a clear, approachable, and visually consistent program resource for NNP families. It explains the Clothing Partnership Program, sets expectations around packages and communication, and gives families the contact information they need to stay connected.",
        },
        {
          label: "Reflection",
          text: "This project strengthened my ability to translate operational nonprofit information into a family-friendly communication piece. It reflects my skills in content synthesis, brochure layout, brand application, image placement, and designing materials for real community use.",
        },
      ],
      layout: "grid",
    },
  ],
  layout: "editorial",
};

export const nnpBrandingDetail: ProjectDetail = {
  slug: "nnp-branding",
  displayTitle: "NNP Brand Style Guide",
  ...shared,
  duration: "2025",
  course: "Brand System · Visual Identity · Nonprofit Design",
  role: "Visual Design, Content Synthesis, Brand System Organization, Layout Design, Image & Asset Placement",
  team: "New Neighbors Partnership",
  deliverables: "Brand Style Guide / Nonprofit Visual Identity System",
  tools: "Canva, Google Docs, NNP Brand Assets",
  format: "5-page digital brand guide",
  coreSkills:
    "Brand identity, color system, typography, social media design, visual consistency, nonprofit communication",
  intro:
    "Designed and synthesized a 5-page brand style guide for New Neighbors Partnership to create a consistent visual system across digital, print, social media, and partner-facing communication materials.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "New Neighbors Partnership needed a simple and practical brand style guide that could help the organization maintain visual consistency across its communication materials. Since NNP creates a wide range of assets — social media posts, referral guides, handbooks, brochures, donor materials, and event graphics — the goal was to make the brand easier to use and apply across different formats.",
    audience:
      "NNP team members, communications volunteers, designers, interns, and anyone creating visual content for the organization.",
    goals: [
      "Create a clear reference for colors, typography, social media templates, and content categories",
      "Turn NNP's warm, community-centered identity into an organized visual system",
      "Make brand decisions easier for both designers and non-designers",
      "Define practical color-coding for social media and communication types",
      "Support long-term consistency across print, digital, and partner materials",
    ],
    outcome:
      "A practical nonprofit brand style guide that helped New Neighbors Partnership maintain a consistent, warm, and recognizable visual identity across social media, print materials, partner resources, and community-facing communication.",
  },
  sections: [
    {
      number: 2,
      title: "Project Context & Purpose",
      blocks: [
        {
          text: "The guide was created to give the team a clear reference for colors, typography, social media templates, and content categories. It helped turn NNP's warm, community-centered identity into a more organized visual system.",
        },
      ],
      layout: "grid",
      images: ["gallery-02.jpg", "gallery-03.jpg"],
    },
    {
      number: 3,
      title: "My Role & Contribution",
      blocks: [
        {
          text: "My role included both design and content synthesis. I helped organize the brand information into a clear structure, designed the layout of the guide, placed visuals and brand assets, and made the content easy to understand for future use.",
        },
        {
          label: "Contributions",
          bullets: [
            "Synthesizing brand rules into a clear style guide format",
            "Designing the full digital guide layout",
            "Organizing the color palette and usage system",
            "Structuring typography guidance for headings and body text",
            "Placing visual examples and template references",
            "Creating a practical guide for social media and communication use",
            "Making the brand system easier for internal team members to apply consistently",
          ],
        },
      ],
      layout: "grid",
    },
    {
      number: 4,
      title: "Audience & Communication Goal",
      blocks: [
        {
          text: "The main goal was to make brand decisions easier and more consistent. Instead of creating a complex brand manual, the guide focused on practical usability.",
        },
        {
          label: "Practical focus",
          text: "It explains which colors to use for different types of content, what fonts define the brand voice, and how social media templates should be categorized — useful for both designers and non-designers.",
        },
      ],
      layout: "grid",
    },
    {
      number: 5,
      title: "Color System & Brand Usage",
      blocks: [
        {
          text: "The palette includes purple, blue, teal, orange, and red, along with darker, lighter, and hover variations for each color. These colors help NNP feel warm, welcoming, organized, and community-oriented.",
        },
        {
          label: "Color-coding by content type",
          bullets: [
            "Orange: Organization updates, volunteer calls-to-action, news, and general updates",
            "Teal: Profiles, interviews, client stories, volunteer features, and board member highlights",
            "Purple: Impact metrics, testimonial quotes, school supply updates, and outcome-focused posts",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-04.jpg", "gallery-05.jpg"],
    },
    {
      number: 6,
      title: "Typography & Visual Identity",
      blocks: [
        {
          label: "Type system",
          bullets: [
            "Playfair Display — warmth, elegance, and a human-centered tone for headings",
            "Montserrat — clean, professional structure for body text and section headings",
            "Quicksand — softness and approachability for lighter communication moments",
          ],
        },
        {
          text: "Together, the font system helped balance professionalism with the emotional warmth needed for a nonprofit working with families, volunteers, and community partners.",
        },
      ],
      layout: "grid",
    },
    {
      number: 7,
      title: "Social Media Templates & Content Categories",
      blocks: [
        {
          text: "The guide includes a social media template system organized by purpose so the team could quickly understand which format to use for which type of post.",
        },
        {
          label: "Template categories",
          bullets: [
            "Spotlight posts for volunteer, board member, or family interviews",
            "Quote and testimonial cards for community voices",
            "Announcement and campaign posts for events and recruitment",
            'Impact metrics and "Did You Know?" posts for statistics and awareness',
            "Cultural education and book/media recommendation posts",
            "New staff and grant announcement posts",
          ],
        },
      ],
      layout: "grid",
    },
    {
      number: 8,
      title: "Outcome & Reflection",
      blocks: [
        {
          text: "The final outcome was a clear and practical 5-page brand style guide that helped NNP organize its visual identity and apply it more consistently across different materials. It gave the organization a shared design language for colors, typography, social media, and communication assets.",
        },
        {
          label: "Reflection",
          text: "This project strengthened my ability to build brand systems that are not only visually appealing but also usable for real teams. It reflects my ability to synthesize brand content, organize design rules, place visuals thoughtfully, and create documentation that supports long-term consistency.",
        },
      ],
      layout: "grid",
    },
  ],
  layout: "editorial",
};

export const nnpSocialMediaDetail: ProjectDetail = {
  slug: "nnp-social-media",
  displayTitle: "NNP Social Media Templates",
  ...shared,
  duration: "2025",
  course: "Social Media Design · Nonprofit Communication · Brand Templates",
  role: "Visual Design, Content Synthesis, Template System Design, Image Placement, Layout Design",
  team: "New Neighbors Partnership",
  deliverables: "Social Media Template System / Instagram Story Design",
  tools: "Canva, NNP Brand Assets, Google Docs",
  format: "Branded Instagram story templates and campaign graphics",
  coreSkills:
    "Social media design, brand consistency, nonprofit communication, campaign design, visual storytelling",
  intro:
    "Designed and synthesized a branded social media template system for New Neighbors Partnership to support consistent Instagram stories, volunteer calls-to-action, donation campaigns, cultural content, and community updates.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "New Neighbors Partnership needed a more consistent visual system for social media communication. Since the organization shares many types of updates — volunteer opportunities, donation needs, school supply campaigns, family stories, cultural education, and community announcements — the goal was to create reusable templates that could make content easier to produce while keeping the brand visually recognizable.",
    audience:
      "NNP's community audience, including volunteers, donors, partner organizations, families, board members, and social media followers.",
    goals: [
      "Create reusable Instagram story templates aligned with NNP's updated brand",
      "Make each post easy to understand within a few seconds on mobile",
      "Organize templates by content type using orange, teal, and purple color coding",
      "Support campaign messaging, volunteer asks, and donation appeals clearly",
      "Build a system reusable by both designers and non-designers on the team",
    ],
    outcome:
      "A warm, flexible, and visually consistent social media template system that helped New Neighbors Partnership communicate donation needs, volunteer opportunities, community stories, and organizational updates more clearly across Instagram.",
  },
  sections: [
    {
      number: 2,
      title: "Project Context & Purpose",
      blocks: [
        {
          text: "The templates were created mainly for Instagram stories, using NNP's updated colors, floral motifs, simple icons, and clear text hierarchy.",
        },
      ],
      layout: "grid",
      images: ["gallery-02.jpg", "gallery-03.jpg"],
    },
    {
      number: 3,
      title: "My Role & Contribution",
      blocks: [
        {
          text: "My role included designing the visual template system and synthesizing the content structure for different social media needs. I organized the templates by purpose, created layouts, placed icons and visual elements, adjusted text hierarchy, and applied NNP's updated brand style.",
        },
        {
          label: "Contributions",
          bullets: [
            "Designing branded Instagram story templates",
            "Creating reusable layouts for announcements and calls-to-action",
            "Applying NNP's orange, teal, and purple brand colors",
            "Using floral motif backgrounds for visual consistency",
            "Synthesizing short campaign copy for quick social media reading",
            "Placing icons and visual assets to support the message",
            "Creating templates that could be reused by the team for future posts",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-04.jpg", "gallery-05.jpg"],
    },
    {
      number: 4,
      title: "Audience & Communication Goal",
      blocks: [
        {
          text: "The communication goal was to make each post easy to understand within a few seconds. Since Instagram stories are quick-view formats, the design needed to be bold, readable, and direct.",
        },
        {
          label: "Tone & clarity",
          text: "Each template had to clearly communicate what the audience should know or do — such as fulfilling a school supply wishlist, covering a student's list, or signing up for a volunteer opportunity. The tone needed to feel welcoming and community-centered while still creating urgency around support needs.",
        },
      ],
      layout: "grid",
    },
    {
      number: 5,
      title: "Visual Direction & Brand System",
      blocks: [
        {
          text: "The visual direction was built around NNP's warm and approachable identity. I used soft floral patterns, clean white linework, bold typography, and high-contrast layouts to create templates that felt friendly but still professional.",
        },
        {
          label: "Design system",
          bullets: [
            "Orange templates for organization updates, campaigns, volunteer calls-to-action, and general announcements",
            "Teal templates for profiles, interviews, and community-centered storytelling",
            "Purple templates for impact metrics, testimonials, and outcome-focused posts",
            "Floral background patterns to add warmth and visual identity",
            "Simple white icons to keep the message clear",
            "Spacious layout zones for short social media copy",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-06.jpg", "gallery-07.jpg"],
    },
    {
      number: 6,
      title: "Template Types & Content Structure",
      blocks: [
        {
          text: "The social media system included multiple template styles for recurring communication needs. Some templates were blank branded backgrounds, while others were designed as campaign-ready story graphics.",
        },
        {
          label: "Template examples",
          bullets: [
            'School supply campaign stories such as "Fulfill a School Supply Wishlist"',
            'Donation support stories such as "Cover a Student"',
            'Volunteer opportunity stories such as "Seeking Recipe Testers"',
            "Branded floral background templates for future updates",
            "Color variations for different categories of content",
            "Story frames with space for images, text, quotes, or calls-to-action",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-08.jpg", "gallery-09.jpg"],
    },
    {
      number: 7,
      title: "Key Design Decisions",
      blocks: [
        {
          text: "The templates were designed to work quickly on mobile screens. I kept the layouts bold, centered, and easy to read so viewers could understand the message without needing to pause for too long.",
        },
        {
          label: "Design choices",
          bullets: [
            "Large uppercase headlines for strong visibility",
            "Short explanatory copy for quick reading",
            "White icons to simplify complex messages",
            "Floral motifs to connect the visuals to NNP's updated identity",
            "Strong background colors to separate content categories",
            "Reusable empty-space layouts for flexible future content",
            "A warm, human tone instead of overly formal nonprofit graphics",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-10.jpg"],
    },
    {
      number: 8,
      title: "Outcome & Reflection",
      blocks: [
        {
          text: "The final outcome was a branded Instagram story template system that gave NNP a more consistent and reusable approach to social media design. The templates helped organize campaign messaging, volunteer asks, donation appeals, and community updates into a clear visual language.",
        },
        {
          label: "Reflection",
          text: "This project strengthened my ability to design for social media within a larger brand system. It also helped me practice turning nonprofit communication needs into flexible, reusable templates that can be used by both designers and non-designers.",
        },
      ],
      layout: "grid",
    },
  ],
  layout: "editorial",
};
