import type { ProjectDetail } from "@/content/project-details";

export const characterDesignDetail: ProjectDetail = {
  slug: "character-design",
  displayTitle: "Character Design: Snail Persona",
  course: "Character Design (Academic)",
  role: "Concept, character design, illustration (solo)",
  tools: "Pencil & sketchbook, Photoshop",
  duration: "2023",
  intro:
    "A whimsical, story-driven snail shaped through gesture, silhouette, and worldbuilding — from research and thumbnails to a production-ready character sheet.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "Choose a non-human subject, research it, and develop a fully realized character from thumbnails to a final sheet. I picked a snail — less human-like than typical animal picks — so anatomy, posing, and expression needed extra invention.",
    audience:
      "Design faculty, peers, and portfolio reviewers evaluating character design process and craft.",
    goals: [
      'A readable silhouette that screams "snail" even at thumbnail size',
      "Expressive emotion using species-true features (eyestalks, shell posture)",
      "Narrative clarity — the look should imply story and role",
      "A production-ready sheet (turnarounds + key art) suitable for animation or editorial use",
    ],
    outcome:
      "A charming, legible snail-mail carrier with turnarounds, expression strips, pose studies, and color key art — grounded in research-driven shape language and gesture-first sketching.",
  },
  sections: [
    {
      number: 2,
      title: "Worldbuilding & Concept",
      blocks: [
        {
          text: "I built a tiny, cozy world to anchor choices: dew-wet moss, mushroom awnings, leaf umbrellas, twine mailboxes.",
        },
        {
          label: "Persona",
          text: 'A gentle, curious snail wayfarer / "snail-mail" carrier who wanders, collects stories, and delivers little notes between stump-side homes. Core traits: patient, optimistic, observant; resourceful rather than fast.',
        },
        {
          label: "Design drivers",
          bullets: [
            'Carrying "home" (shell) doubles as prop and symbol — safety, memory',
            "Small tool set (satchel, lantern, folded leaf) signals occupation and gives posing affordances",
            'Every decision should read "slow, kind, observant wanderer" at a glance',
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-02.jpg", "gallery-03.jpg"],
    },
    {
      number: 3,
      title: "Form & Shape Exploration",
      blocks: [
        {
          text: "Filled pages with quick silhouette thumbnails to test proportion and read.",
        },
        {
          label: "Exploration notes",
          bullets: [
            'Shell scale tests: very large shell → shy/hidden mood; mid-scale shell → balanced, plucky traveler; mini shell → lost the "snailness"',
            'Posture variants: low crawl (authentic but hard to emote), semi-upright (hybrid, best for acting), exaggerated "stretch" for reach moments',
            "Shape language: mostly round, flowing curves for warmth and approachability; avoided sharp angles that suggest threat",
            "Gesture passes: peek, tuck, reach, listen, lug, rest — ensured the silhouette stays legible in action and ¾ views",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-04.jpg", "gallery-05.jpg", "gallery-06.jpg"],
    },
    {
      number: 4,
      title: "Style & Visual Language",
      blocks: [
        {
          text: "Reference mix: real snail anatomy (shell spirals, tentacle motion) + storybook illustration (soft textures, friendly palettes).",
        },
        {
          label: "Face & palette",
          bullets: [
            'Eyestalks kept as species signal with subtle "brow" hints at the tips for micro-expressions; small mouth line for smiles/"ooh"',
            "Earthy greens and warm browns with soft marigold/teal accents; light gloss on body to imply moisture without feeling slimy",
            "Shell spiral as memory spiral — quiet linework implying collected journeys",
            "Satchel and leaf parasol as instant story cues; stamps and tiny letters as secondary props",
            "Soft edges, restrained texture, and gentle rim lights for readability on light or dark backgrounds",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-07.jpg", "gallery-08.jpg", "gallery-09.jpg"],
    },
    {
      number: 5,
      title: "Expressions & Pose Studies",
      blocks: [
        {
          text: "Built an expression strip (curiosity, pride, worry, joy, surprise, tired) and pose grid (8–12 actions). Emotion reads came mainly from eyestalk angle/spacing, shell posture (retreat vs. emerge), and body lean.",
        },
        {
          label: "Action beats & iteration",
          bullets: [
            "Determined crawl with a mailbag; rainy-day dawdle under a leaf; long stretch to a tall mushroom",
            "Shy peek from shell; celebratory wave after a delivery",
            "Slightly reduced shell size to keep faces clear in ¾; lengthened eyestalks by ~10% for better silhouette",
            "Added a small scarf for motion lines in stills",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-10.jpg", "gallery-11.jpg", "gallery-12.jpg"],
    },
    {
      number: 6,
      title: "Final Character Sheet",
      blocks: [
        {
          label: "Deliverables",
          bullets: [
            "Turnarounds: front / ¾ / side / back for modeling consistency",
            "Key art (color): hero pose with satchel and leaf parasol; warm shell (amber-brown), soft teal body",
            "Callouts: flexible eyestalks = emotion engine; shell spiral motif = memory; satchel scale guides",
            "Mini-vignettes: mail drop at a twine box; campfire storytelling panel — locks personality and scale against the environment",
          ],
        },
      ],
      layout: "grid",
      images: ["gallery-17.jpg", "gallery-18.jpg", "gallery-19.jpg"],
    },
    {
      number: 7,
      title: "Reflection & Next Steps",
      blocks: [
        {
          label: "What worked",
          text: "Research-driven shape language produced a charming, legible silhouette; species-true cues (stalks, shell behavior) kept the design believable while reading human emotion. Gesture-first sketching prevented stiffness.",
        },
        {
          label: "What I'd extend",
          bullets: [
            "Clean line version for rigging",
            "A 6-panel micro-comic (pickup → storm → delivery)",
            "Prop sheet (stamps, lantern, leaf tools)",
            "Brief color scripts for dusk/rain scenes to test palette range",
          ],
        },
        {
          label: "Takeaway",
          text: "Small anatomy tweaks (stalk tilt, shell scale) dramatically shift emotion and staging — a lesson I now apply to all character and icon work.",
        },
      ],
      layout: "grid",
      images: ["gallery-22.jpg", "gallery-23.jpg", "gallery-24.jpg"],
    },
  ],
  layout: "editorial",
};
