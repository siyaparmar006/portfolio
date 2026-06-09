export type ProcessStep = {
  id: string;
  number: string;
  shortLabel: string;
  title: string;
  body: string[];
  focusLabel: string;
  focusItems: string[];
  quote: string;
};

export const processPills = [
  "Understand",
  "Structure",
  "Visualize",
  "Connect",
  "Refine",
] as const;

export const processOverview = [
  { id: "step-01", number: "01", title: "Understand the Ecosystem" },
  { id: "step-02", number: "02", title: "Structure the Information" },
  { id: "step-03", number: "03", title: "Build the Visual Language" },
  { id: "step-04", number: "04", title: "Design Across Touchpoints" },
  { id: "step-05", number: "05", title: "Refine for Trust" },
] as const;

export const processSteps: ProcessStep[] = [
  {
    id: "step-01",
    number: "01",
    shortLabel: "Understand",
    title: "Understand the Ecosystem",
    body: [
      "Every project exists within a larger ecosystem of people, goals, constraints, and touchpoints. Before I begin designing, I spend time understanding the environment surrounding the problem.",
      "Who are the people involved? What are they trying to achieve? What motivates them? What frustrations do they experience? What information do they need to make decisions confidently? What organizational goals, technical limitations, or operational realities need to be considered?",
      "I look beyond the immediate deliverable and try to understand the broader context. A website is rarely just a website. A mobile app is rarely just an interface. A report is rarely just a document. Each exists within a larger system of communication, behavior, expectations, and relationships.",
      "This stage often involves stakeholder conversations, user research, content reviews, journey mapping, competitive analysis, and observation. My goal is not simply to gather information but to identify patterns, tensions, opportunities, and gaps that may not be immediately visible.",
      "By understanding the ecosystem first, I can design solutions that respond to real needs rather than assumptions.",
    ],
    focusLabel: "Key questions I explore",
    focusItems: [
      "Who are the primary and secondary audiences?",
      "What problems are people actually trying to solve?",
      "Where do confusion, friction, or uncertainty occur?",
      "What business, organizational, or service goals need support?",
      "What constraints must be respected?",
      "What opportunities exist beyond the original brief?",
    ],
    quote: "For me, design begins with understanding before making.",
  },
  {
    id: "step-02",
    number: "02",
    shortLabel: "Structure",
    title: "Structure the Information",
    body: [
      "Once I understand the context, I focus on creating order.",
      "Many design challenges are fundamentally information challenges. People often struggle not because information is missing, but because it is fragmented, overwhelming, inconsistent, or difficult to navigate.",
      "This stage is about transforming complexity into structure.",
      "I organize content, define hierarchy, map journeys, identify relationships, and create systems that help people move through information with confidence. Depending on the project, this may involve information architecture, user flows, content frameworks, navigation systems, service blueprints, content audits, or interaction models.",
      "I pay close attention to how information is introduced, grouped, prioritized, and revealed. Every decision influences how easily someone can understand what they are seeing and what action they should take next.",
      "My visual communication background has taught me that hierarchy is not only a UX principle — it is also a communication principle. Good structure reduces cognitive load. It helps people focus on what matters most.",
    ],
    focusLabel: "Key questions I explore",
    focusItems: [
      "What information is essential?",
      "What can be simplified or removed?",
      "How should content be grouped?",
      "What sequence feels most intuitive?",
      "Where might users become overwhelmed?",
      "How can the experience feel clearer and more predictable?",
    ],
    quote: "A strong structure creates confidence before visual design even begins.",
  },
  {
    id: "step-03",
    number: "03",
    shortLabel: "Visualize",
    title: "Build the Visual Language",
    body: [
      "Once the foundation is clear, I begin shaping the visual system.",
      "This is where strategy, communication, and aesthetics come together. I use visual design not as decoration, but as a tool for meaning-making. Every visual decision should support understanding, reinforce trust, and strengthen the overall experience.",
      "Typography, color, spacing, layout, imagery, iconography, motion, and brand elements all contribute to how people interpret information. Visual language influences what people notice first, how they navigate content, and how they emotionally connect with an experience.",
      "My background in visual communication gives me a strong appreciation for detail. I think carefully about rhythm, proportion, readability, consistency, and tone. I want interfaces and communication materials to feel intentional, approachable, and memorable.",
      "At this stage, I focus on creating systems rather than isolated screens or assets. A visual language should be flexible enough to scale while remaining recognizable and coherent.",
    ],
    focusLabel: "At this stage, I focus on",
    focusItems: [
      "What visual cues support comprehension?",
      "How can hierarchy be reinforced visually?",
      "What emotional tone should the experience communicate?",
      "How can the design feel distinctive without sacrificing usability?",
      "What patterns can be repeated consistently across touchpoints?",
    ],
    quote:
      "The goal is to create a visual system that helps people understand, trust, and remember the experience.",
  },
  {
    id: "step-04",
    number: "04",
    shortLabel: "Connect",
    title: "Design Across Touchpoints",
    body: [
      "One of the defining characteristics of my work is thinking beyond a single medium.",
      "People rarely experience organizations, products, or services through one touchpoint alone. They move between websites, mobile interfaces, reports, presentations, social media, printed materials, onboarding documents, emails, events, and physical environments.",
      "Because of this, I approach design as a connected system rather than a collection of separate outputs.",
      "I think about how information, branding, and user experience translate across different contexts. A visual language should feel cohesive whether it appears on a mobile screen, inside a handbook, within a presentation deck, or across a social campaign.",
      "This systems-oriented perspective comes from working across product design, communication design, branding, editorial design, and service-oriented projects. It allows me to identify opportunities for consistency while respecting the unique requirements of each medium.",
    ],
    focusLabel: "At this stage, I focus on",
    focusItems: [
      "Creating reusable design patterns",
      "Maintaining consistency across channels",
      "Adapting content for different audiences and contexts",
      "Building scalable templates and frameworks",
      "Ensuring accessibility and usability across formats",
      "Strengthening recognition and trust through coherence",
    ],
    quote: "When touchpoints work together, people experience less friction and greater clarity.",
  },
  {
    id: "step-05",
    number: "05",
    shortLabel: "Refine",
    title: "Refine for Trust",
    body: [
      "The final stage is refinement.",
      "This is where I step back and evaluate the experience as a whole. I look for opportunities to simplify, clarify, strengthen, and polish.",
      "Refinement is often less about adding and more about removing. It involves reducing unnecessary complexity, improving readability, tightening hierarchy, aligning details, and ensuring consistency throughout the system.",
      "I review both the functional and emotional dimensions of the experience. Does it make sense? Does it feel intuitive? Does it communicate credibility? Does it respect people's time and attention? Does it create confidence?",
      "Small details matter. The spacing between elements, the clarity of a label, the consistency of a component, the tone of a message, or the pacing of an interaction can significantly influence how people perceive an experience.",
    ],
    focusLabel: "At this stage, I focus on",
    focusItems: [
      "Improving clarity and usability",
      "Strengthening consistency across the system",
      "Refining visual hierarchy",
      "Simplifying language and interactions",
      "Identifying edge cases and gaps",
      "Ensuring the experience feels trustworthy and complete",
    ],
    quote: "Refinement is where good design becomes thoughtful design.",
  },
];

export const corePrinciples = [
  {
    title: "Clarity over complexity",
    body: "I believe design should reduce confusion, not create it.",
  },
  {
    title: "Systems over isolated outputs",
    body: "I focus on creating frameworks that can scale and adapt over time.",
  },
  {
    title: "People before interfaces",
    body: "Technology, visuals, and deliverables are only meaningful when they serve human needs.",
  },
  {
    title: "Communication is part of the experience",
    body: "Every interaction communicates something. Structure, language, visuals, and behavior should work together.",
  },
  {
    title: "Consistency builds trust",
    body: "People feel more confident when experiences are coherent, predictable, and intentional.",
  },
  {
    title: "Design should be both useful and memorable",
    body: "The best experiences solve problems while creating a lasting impression.",
  },
] as const;

export const heroIntro = [
  "My process sits at the intersection of product thinking, service design, and visual communication. Over time, I have realized that the most meaningful design work rarely begins with screens, colors, or interfaces. It begins with understanding people, uncovering patterns, and creating clarity where complexity exists.",
  "Whether I am designing a digital product, a service experience, a publication, a brand system, or a communication toolkit, I follow a consistent way of thinking. It is not a rigid framework, but a set of principles that help me move from ambiguity to clarity while keeping human needs at the center of every decision.",
  "I think of this as my Design OS: the operating system behind how I approach problems, structure information, build visual systems, and create experiences that feel both useful and memorable.",
] as const;
