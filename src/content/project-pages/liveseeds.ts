import type { ProjectDetail } from "@/content/project-details";

export const liveseedsDetail: ProjectDetail = {
  slug: "liveseeds",
  displayTitle: "LiveSeeds — Plant Care & Diagnosis App",
  course: "Mobile App / UI-UX Design Project",
  role: "UX Research, UI Design, Wireframing, User Flow, Visual Design, Prototyping",
  tools: "Figma, Adobe Illustrator, Photoshop",
  format: "Mobile app screens, wireframes, high-fidelity mockups, user flows",
  coreSkills:
    "Product design, UX/UI design, plant care, information architecture, mobile interaction, visual design",
  deliverables: "Mobile Application Design",
  duration: "Academic Project",
  intro:
    "Designed LiveSeeds, a plant-care mobile app that helps users diagnose plant infections, learn care procedures, find nearby nurseries, track reminders, earn points, and build a more consistent plant-care routine.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "Create a digital platform that acts as a simple plant-care companion — combining guidance, diagnosis, reminders, learning content, nursery discovery, and a reward-based system into one mobile experience. Plant care should feel less confusing and more accessible.",
    audience:
      "People who want to take better care of their plants but may not know what their plants need, what problem they are facing, or where to get the right help — especially beginner plant owners.",
    goals: [
      "Make plant care feel approachable without oversimplifying expert needs",
      "Support diagnosis, remedies, reminders, and nursery discovery in one app",
      "Build consistent care habits through reminders and a reward system",
      "Create clear navigation across learning, tracking, and diagnostic tools",
      "Use a calm, nature-inspired visual language — supportive, not intimidating",
    ],
    outcome:
      "A plant-care mobile app design that helps users diagnose plant problems, understand care needs, follow remedies, save useful information, find nearby nurseries, and stay consistent with plant-care habits.",
  },
  sections: [
    {
      number: 2,
      title: "Project Context & Purpose",
      blocks: [
        {
          text: "LiveSeeds was designed for people who want to take better care of their plants but may struggle with watering, light requirements, cleaning, fertilizing, identifying infections, and understanding plant-specific needs.",
        },
        {
          text: "Instead of making users search across multiple sources, LiveSeeds brings key plant-care actions into one organized app experience.",
        },
      ],
      layout: "grid",
      images: ["gallery-02.jpg", "gallery-03.jpg"],
    },
    {
      number: 3,
      title: "Problem & User Need",
      blocks: [
        {
          text: "The core problem was that many plant owners want to care for their plants but lack structured, reliable, and easy-to-follow guidance. Another need was motivation — plant care requires consistency, and many users forget small but important tasks.",
        },
        {
          label: "Key user needs",
          bullets: [
            "Clear plant-care information and easy infection diagnosis",
            "Step-by-step remedies and personal reminders for watering, cleaning, misting, and fertilizing",
            "Nearby nursery discovery and saved bookmarks",
            "Simple onboarding, account system, and reward system to motivate regular care",
          ],
        },
      ],
      layout: "grid",
    },
    {
      number: 4,
      title: "UX Strategy & Information Architecture",
      blocks: [
        {
          text: "The app structure was organized around major actions a plant owner may need: learning, diagnosing, tracking, saving, locating, and managing plant care.",
        },
        {
          label: "Information architecture",
          bullets: [
            "Sign in / sign up and onboarding flows",
            "Home dashboard with weather, reminders, and plant categories",
            "Camera-based diagnosis flow with infection report and recommended remedies",
            "Video and procedure learning, user uploads, bookmarks",
            "Nearby nursery discovery, points and rewards, profile and settings",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-04.jpg", "gallery-05.jpg"],
    },
    {
      number: 5,
      title: "Key Features & User Flows",
      blocks: [
        {
          label: "Diagnosis & reminders",
          text: "Users can scan or upload a plant image, receive a diagnosis, view similar photos, understand causes, and download a report connecting to recommended remedies. The reminders system tracks watering, misting, fertilizing, and cleaning.",
        },
        {
          label: "Additional features",
          bullets: [
            "Plant categories: house plants, climbers, wild plants, flowering plants",
            "Plant detail pages with weather, water, and light requirements",
            "Video tutorials, written procedures, and community uploads",
            "Nearby nursery listings with call, WhatsApp, and direction options",
            "Points and rewards where users can earn and claim plant gifts",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-06.jpg", "gallery-07.jpg", "gallery-08.jpg"],
    },
    {
      number: 6,
      title: "Wireframes, Screen Design & Interaction",
      blocks: [
        {
          text: "The project began with low-fidelity wireframes to map structure, screen hierarchy, and core interactions — login, onboarding, home, diagnosis, remedies, videos, profile, points, and nursery pages.",
        },
        {
          label: "High-fidelity UI",
          bullets: [
            "Soft green palette, rounded card layouts, plant illustrations, calm typography",
            "Large touch-friendly buttons and minimal visual clutter",
            "Green accent color for nature and action states",
            "Consistent bottom navigation for repeated app movement",
          ],
        },
      ],
      layout: "grid",
      images: ["wireframes.jpg", "gallery-09.jpg", "gallery-10.jpg"],
    },
    {
      number: 7,
      title: "Visual Design & Brand Direction",
      blocks: [
        {
          text: "The visual direction was inspired by nature, calmness, and everyday plant-care routines. Green became the primary identity color — natural, fresh, and trustworthy. The design avoids a clinical look even with diagnosis features.",
        },
        {
          label: "Visual elements",
          bullets: [
            "Soft cream backgrounds, dark green typography, light green dividers",
            "Plant and gardening illustrations with clean serif and sans-serif type pairing",
            "Card-based content blocks and image-led plant grids",
            "Simple icon system for camera, bookmarks, share, location, and profile",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-11.jpg", "gallery-12.jpg", "gallery-13.jpg"],
    },
    {
      number: 8,
      title: "Outcome & Reflection",
      blocks: [
        {
          text: "The final outcome was a complete mobile app concept for plant care, diagnosis, reminders, nursery discovery, and learning support. The strongest part of LiveSeeds is that it does not treat plant care as only information — it turns it into an interactive routine through reminders, diagnosis, procedures, rewards, and community uploads.",
        },
        {
          label: "Reflection",
          text: "This project strengthened my understanding of mobile UX, user flows, information architecture, wireframing, visual hierarchy, and feature-based product design. It helped me explore how design can make environmental awareness and plant care more accessible to everyday users.",
        },
      ],
      layout: "grid",
      images: ["gallery-14.jpg", "gallery-15.jpg"],
    },
  ],
  layout: "editorial",
};
