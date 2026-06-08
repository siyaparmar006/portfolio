import type { ProjectDetail } from "@/content/project-details";

export const publicCommunicationDetail: ProjectDetail = {
  slug: "public-communication",
  displayTitle: "Exploitation of Interns — Poster Design",
  course: "Understanding Public Communication Systems (Academic Project)",
  scope:
    "Create an awareness campaign that challenges the normalization of unpaid / underpaid internships and the overwork culture around them.",
  team: "Siya Parmar — concept, copy, punchlines, poster design",
  role: "Research synthesis, message architecture, punchlines, visual language, poster series, social roll-outs",
  deliverables:
    "Poster series (print + OOH), social assets (IG, LinkedIn, FB), message playbook, rollout plan",
  tools: "Adobe Illustrator, InDesign, Photoshop",
  duration: "2 weeks",
  intro:
    "Create an awareness campaign that challenges the normalization of unpaid / underpaid internships and the overwork culture around them.",
  heroImage: "hero-cover.png",
  brief: {
    ask: "The brief was to study how public communication systems influence behavior and design a small but sharp intervention that could travel through everyday media. We chose the topic “Exploitation of Interns”—the widespread practice of unpaid/underpaid internships, excessive workloads, and the blanket defense of “experience/exposure.”",
    audience:
      "Primary: Interns & final-year students (empowerment, vocabulary, solidarity). Secondary: HR/managers & placement cells (reflection, reputational risk).",
    goals: [
      "Make interns recognize their labor value and speak up.",
      "Nudge MNCs/organizations to examine exploitative practices.",
      "Seed a conversation in college networks and professional platforms where internships are sourced.",
    ],
    outcome:
      "A cohesive intervention designed to travel through everyday media — posters, social assets, and a reusable message playbook for campus networks.",
    successSignals: [
      "Saves, shares, and comments that echo lived experience.",
      "Student clubs and placement cells re-sharing assets.",
      "Inquiries for using the posters during campus drives.",
    ],
  },
  briefImages: ["doc-07.png", "doc-08.png"],
  sections: [
    {
      number: 2,
      title: "Research Approach",
      blocks: [
        {
          label: "Primary research",
          text: "20–25 intern interviews across law, design, media, engineering, architecture, CA, content—probing pay, workload, recognition, and mental health.",
        },
        {
          label: "Pattern found",
          text: "The industry vocabulary of “experience” and “exposure” is used to rationalize no stipend/credit and long hours.",
        },
        {
          label: "Secondary research",
          bullets: [
            "Landscape scan on prevalence of unpaid internships, legal gray areas, and international contrasts.",
            "Noted the demand–supply gap and socio-economic barriers (unpaid work excludes those who can’t afford it).",
          ],
        },
        {
          label: "What this told us",
          text: "The issue is systemic (policy + culture), but the communication gap is immediate: interns often feel isolated, guilty for asking, and unsure what “fair” looks like.",
        },
      ],
      images: ["doc-09.png", "doc-10.png"],
      layout: "stack",
    },
    {
      number: 3,
      title: "Insights → Message Strategy",
      blocks: [
        {
          label: "Key insights",
          bullets: [
            "Normalization: “This is how the industry works” quiets dissent.",
            "Language trap: “Exposure” is used as currency to replace wages.",
            "Equity gap: Unpaid roles filter out less-privileged students.",
            "Mental load: Overwork + no pay = burnout + cynicism early in career.",
          ],
        },
        {
          label: "Strategic choices",
          bullets: [
            "Audience split: Primary — Interns & final-year students (empowerment, vocabulary, solidarity). Secondary — HR/managers & placement cells (reflection, reputational risk).",
            "Message north star: “Interns are not free labor.”",
            "Tone: Direct, shareable, a bit uncomfortable—short lines built for feeds and corridors.",
            "Call-to-action: Know your worth. Ask for stipend. Document hours. Push for written terms.",
          ],
        },
      ],
      images: ["doc-11.png"],
      layout: "stack",
    },
    {
      number: 4,
      title: "Concept & Visual Language",
      blocks: [
        {
          label: "Concept pillars",
          bullets: [
            "Value inversion: Replace “exposure” with “exploitation” to reframe the norm.",
            "Receipts of labor: Headlines that sound like invoices and time logs.",
            "Collective voice: First-person plural (“we”) to break isolation.",
          ],
        },
        {
          label: "Visual system",
          bullets: [
            "Typography: Heavy sans for headlines (impact/authority) + clean grotesk/humanist for body copy (legibility in print and screens).",
            "Color: High-contrast, bold grounds (black/charcoal, warning yellow, urgent red, electric blue) for scroll-stopping impact.",
            "Composition: Poster-first layouts with oversized, left-aligned headlines; secondary copy blocks for context; prominent CTA chips.",
            "Iconic devices: Time-cards, price tags, punch-clocks, progress bars—everyday symbols of labor/value.",
          ],
        },
      ],
      images: ["mockup-01.jpg", "mockup-03.jpg"],
      layout: "stack",
    },
    {
      number: 5,
      title: "Posters & Copy System",
      blocks: [
        {
          label: "Headline families (plug-and-play)",
          bullets: [
            "Value: “Exposure doesn’t pay rent.” · “Experience isn’t a stipend.”",
            "Time: “40 hours/week ≠ ₹0.” · “If it ships, it should pay.”",
            "Equity: “Unpaid internships are a filter— not an opportunity.”",
            "Consent: “You can’t ‘volunteer’ someone else’s wages.”",
            "Dignity: “Credit my work. Compensate my time.”",
          ],
        },
        {
          label: "Poster anatomy",
          text: "A1 / Instagram square variants with: Headline (impact), Subline (one-sentence context), CTA (e.g., “Ask for a stipend. Log your hours. Get terms in writing.”), Hashtags/handles for discoverability in campus networks.",
        },
        {
          label: "Examples (Siya Parmar)",
          bullets: [
            "H1: “Intern ≠ Free Trial.” — Sub: “Work results aren’t beta. Pay is not optional.”",
            "H1: “‘Exposure’ is a cost center— for us.” — Sub: “Travel, rent, data, time. Compensate labor.”",
            "H1: “If you need deliverables, we need a stipend.”",
            "H1: “Overtime without pay is not ‘passion’.”",
          ],
        },
      ],
      images: ["poster-01.jpg", "poster-02.jpg", "poster-03.jpg", "poster-04.jpg"],
      layout: "stack",
    },
    {
      number: 6,
      title: "Channels, Formats & Rollout",
      blocks: [
        {
          label: "Channels",
          bullets: [
            "On-ground: Department boards, placement office, canteens, hostel lobbies, metro notice walls near campuses.",
            "Digital: IG carousels, LinkedIn thought-posts, stories/reels with motion type, drive folders for student clubs.",
          ],
        },
        {
          label: "Formats",
          bullets: [
            "Print: A1/A3 posters, table-tents for fests, stickers with micro-copy (“Exposure ≠ Rent”).",
            "Social: Carousels (Hook → Context → Stat → CTA); Reels (kinetic type on beat; punchline lands on beat-drop); LinkedIn (case-style posts + questions to HR/educators).",
          ],
        },
        {
          label: "Activation ideas",
          bullets: [
            "“Know Your Worth” template (editable PDF/IG story) to log hours/skills.",
            "Office-hour Q&A on campus with alumni who negotiated stipends.",
            "Hashtag prompt: #PayYourInterns #InternsAreWorkers",
          ],
        },
      ],
      images: ["mockup-04.jpg", "mockup-05.jpg"],
      layout: "stack",
    },
    {
      number: 7,
      title: "Outcomes & Learnings",
      blocks: [
        {
          label: "What shipped",
          bullets: [
            "A cohesive poster set with a reusable copy system and color/typography guidelines, adapted for print and social.",
            "A lightweight rollout plan that student bodies can reuse each semester.",
          ],
        },
        {
          label: "Reflections",
          bullets: [
            "Systems change needs policy; comms can name the harm and shift norms.",
            "Framing pay as fair exchange (not entitlement) kept the tone persuasive, not combative.",
            "Short, declarative lines with strong contrast performed best (saves/shares, anecdotal feedback).",
          ],
        },
        {
          label: "Next steps",
          bullets: [
            "Partner with placement cells to attach the poster kit to internship mailers.",
            "Extend to a “Stipend Statement” one-pager template for interns to send before joining.",
            "Micro-site with resources: stipend ranges by city, sample emails, legal FAQs.",
          ],
        },
      ],
      images: ["doc-12.png", "mockup-02.jpg"],
      layout: "stack",
    },
  ],
  layout: "editorial",
};
