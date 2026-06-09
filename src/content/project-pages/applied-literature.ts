import type { ProjectDetail } from "@/content/project-details";

export const appliedLiteratureDetail: ProjectDetail = {
  slug: "applied-literature",
  displayTitle: "Visual Language of Emotion — Film Analysis",
  course: "Applied Literature (Academic)",
  role: "Research, semiotic analysis, shot cataloging, color/lighting/sound breakdown",
  duration: "2021",
  deliverables: "Written study, palette & shot taxonomy boards, style map summary",
  tools: "Close reading, frame grabs, shot lists, lyric-sound-context notes",
  intro:
    "A comparative read of how Sanjay Leela Bhansali builds emotion through color, set, camera, and music — mapped across two films to show a repeatable directorial grammar.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "Analyze a director’s storytelling language beyond plot — surfacing reusable visual and sound systems and how they cue emotion.",
    audience:
      "Design faculty and peers evaluating semiotic rigor; transferable to editorial, brand moments, and product storytelling.",
    goals: [
      "Identify what visual and sound systems recur across films and how they cue emotion.",
      "Apply semiotics and Barthes (studium/punctum) to key frames.",
      "Compare two films that diverge in genre yet feel authored by the same hand.",
    ],
    outcome:
      "A style map matrix — color, lighting, set, camera, and sound × scene types (entry, confrontation, romance, lament) — with comparative synthesis across Ram-Leela and Bajirao Mastani.",
  },
  briefImages: ["director-intro.jpg"],
  sections: [
    {
      number: 2,
      title: "Method & Frameworks",
      blocks: [
        {
          label: "Method mix",
          text: "Close reading of sequences; frame grabs → palettes; shot lists; lyric-sound-context notes.",
        },
        {
          label: "Frameworks",
          bullets: [
            "Semiotics: sign / signifier / signified; icon–index–symbol.",
            "Barthes: studium (cultural ground) vs. punctum (the piercing detail).",
            "Form analysis: color harmony, light source, set scale, camera movement, music leitmotif.",
          ],
        },
        {
          label: "Style map",
          text: "Rows (color, lighting, set, camera, sound) × columns (entry, confrontation, romance, lament).",
        },
      ],
      images: ["ramleela-themes.jpg"],
      layout: "stack",
    },
    {
      number: 3,
      title: "Films & Narrative Spine",
      blocks: [
        {
          label: "Ram-Leela (2013)",
          text: "Romeo–Juliet in Gujarat: clan violence frames ecstatic romance; tone swings from festive to fatal.",
        },
        {
          label: "Bajirao Mastani (2015)",
          text: "Courtly epic: love vs. orthodoxy; power, ritual, and tragedy staged in grand interiors and battle edges.",
        },
        {
          label: "Why these two",
          text: "Different palettes and scales, yet the same operatic cadence — ideal for surfacing a director signature.",
        },
      ],
      images: ["ramleela-plot.jpg", "bajirao-plot.jpg"],
      layout: "stack",
    },
    {
      number: 4,
      title: "Visual Systems: Color · Set · Lighting",
      blocks: [
        {
          label: "Ram-Leela color",
          text: "Carnival brights — vermillion, ultramarine, marigold. Connotation: abundance, youthful defiance. Punctum: saturated powder bursts, mirrored ghagras.",
        },
        {
          label: "Bajirao color",
          text: "Courtly earths — saffron, emerald, indigo, brass. Connotation: empire, ritual gravity. Punctum: oil-lamp gold against indigo night.",
        },
        {
          label: "Set & lighting",
          bullets: [
            "Ram-Leela: open squares and ghats invite crowd choreography; porous boundaries heighten danger.",
            "Bajirao: deep axial halls enforce hierarchy; thresholds become moral lines.",
            "Both: high-key festival daylight vs. chiaroscuro interiors; flame-as-source turns lamps into emotional instruments.",
          ],
        },
      ],
      images: [
        "ramleela-colors.jpg",
        "bajirao-colors.jpg",
        "ramleela-lighting.jpg",
        "bajirao-lighting.jpg",
      ],
      layout: "stack",
    },
    {
      number: 5,
      title: "Camera Grammar & Blocking",
      blocks: [
        {
          label: "Recurring moves cataloged",
          bullets: [
            "Axial push-ins for emotional confession.",
            "Low-angle wides to confer power at entries and throne scenes.",
            "Symmetric tableaux for ritual; asymmetric tracking for rupture.",
            "Bird’s-eye establishes to reset geography before dance or battle.",
          ],
        },
        {
          label: "Sequence reads",
          bullets: [
            "Ram-Leela balcony: eye-level → slow dolly-in; color field behind faces eliminates distraction.",
            "Bajirao court: locked symmetry, shallow steps forward; costume glint and percussion carry tension.",
          ],
        },
      ],
      images: ["ramleela-shots.jpg", "bajirao-shots.jpg", "shot-taxonomy.jpg"],
      layout: "stack",
    },
    {
      number: 6,
      title: "Music, Lyrics & Semiotics",
      blocks: [
        {
          label: "Score as narrative glue",
          text: "Leitmotifs index characters and states; song-as-scene externalizes inner conflict.",
        },
        {
          label: "Ram-Leela",
          text: "Gujarati folk roots — celebratory rhythms masking dread; percussion cycles in dance sequences.",
        },
        {
          label: "Bajirao Mastani",
          text: "Classical and Sufi inflections — ragas, qawwali, and ghazal forms signal devotion, longing, and sanctity.",
        },
        {
          label: "Audio punctum",
          text: "Sudden drop to solo vocal, lamp crackle, or bell hit on cut — micro-cues that pierce and fix memory.",
        },
      ],
      images: ["ramleela-sound.jpg", "bajirao-sound.jpg"],
      layout: "stack",
    },
    {
      number: 7,
      title: "Synthesis & Takeaways",
      blocks: [
        {
          label: "Director signature",
          text: "Maximalist mise-en-scène where palette + flame-lit chiaroscuro + symmetric staging + axial camera + song-form cohere into operatic cadence.",
        },
        {
          label: "Comparative insight",
          bullets: [
            "Ram-Leela = extroverted color and porous spaces → passion as public spectacle.",
            "Bajirao = restrained metallic palette and axial halls → love as transgression within order.",
          ],
        },
        {
          label: "Transferable learnings",
          bullets: [
            "Build systems, not just scenes — define tokens (color roles, shot types, light sources, music motifs).",
            "Use punctum deliberately — one striking detail per frame aids recall in communication design.",
            "Align form with stakes: as stakes rise, narrow palette, deepen shadows, stabilize camera.",
          ],
        },
      ],
      images: ["ramleela-sequence.jpg", "bajirao-stills-grid.jpg", "comparative-synthesis.jpg"],
      layout: "stack",
    },
  ],
  layout: "editorial",
};
