import type { ProjectDetail } from "@/content/project-details";

export const photographyDetail: ProjectDetail = {
  slug: "photography",
  displayTitle: "Details — Old City, Ahmedabad",
  course: "Photography · Architectural & Everyday Details",
  role: "Photographer, editor",
  tools:
    "Canon DSLR, 50mm & 18–55mm lenses, natural light only, Lightroom/Photoshop (basic tonal edits)",
  deliverables:
    "Web gallery set (3000px long edge, sRGB), print proofs, optional 20-page zine sequence",
  duration: "2 weeks",
  intro:
    "A visual study of textures, craft and everyday rhythms across Ahmedabad’s old city—captured during multiple heritage walks through pols, lanes and Gandhi Ashram. The series isolates details—stone, light, pattern, food, color—to document how small things carry the city’s character.",
  heroImage: "hero-cover.jpg",
  brief: {
    ask: "Explore “details” as a way to read place: fragments that suggest the whole. Practice seeing beyond postcard views—work with tight crops, strong light, repetition, and materiality.",
    audience:
      "Viewers of a web gallery and small zine—anyone interested in architectural texture, craft economies, and the everyday visual language of a historic city.",
    goals: [
      "Deliver a cohesive set for a web gallery and a small zine (optional), prioritizing narrative flow over volume.",
      "Build observation discipline, exposure control in tricky light, and composing for pattern/texture with minimal post.",
      "Document how small things—stone, light, pattern, food, color—carry the city’s character.",
    ],
    outcome:
      "A curated detail-first series from Manek Chowk to Jama Masjid and Gandhi Ashram—morning light, night facades, and craft close-ups woven into a readable visual essay.",
  },
  briefImages: ["street-savouries.jpg", "cut-light-otla.jpg"],
  sections: [
    {
      number: 2,
      title: "Research & Route Planning",
      blocks: [
        {
          label: "Sites",
          text: "Manek Chowk markets, pol houses & otlas, Jama Masjid corridors, Teen Darwaza vicinity, local utensil/jari bead shops, Gandhi Ashram precinct.",
        },
        {
          label: "Why these",
          text: "Rich overlap of craft (carving, jaali, jharokha), food culture, and light corridors that change dramatically from morning to night.",
        },
        {
          label: "Approach",
          text: "Two loops—(a) early morning for oblique light & quiet lanes, (b) dusk-to-night for illuminated facades.",
        },
      ],
      layout: "stack",
    },
    {
      number: 3,
      title: "Visual Strategy",
      blocks: [
        {
          label: "Theme",
          text: "Texture & pattern as living archives.",
        },
        {
          label: "Motifs",
          bullets: [
            "Stone carvings, geometric repeats, hand-made food, jars & tools.",
            "Light slicing through lanes, festival pigment, signage glow.",
          ],
        },
        {
          label: "Compositional rules",
          bullets: [
            "Fill frame with pattern; let edges crop deliberately.",
            "Use contrast of rough/smooth and warm/cool to stage depth.",
            "Prefer single light direction (side light for relief on carvings).",
            "Keep people minimal—appear as scale or rhythm, not the subject.",
          ],
        },
      ],
      layout: "stack",
    },
    {
      number: 4,
      title: "Shoot Craft & Techniques",
      blocks: [
        {
          label: "Lenses",
          text: "50mm for isolation & low light; 18–55mm for context in corridors.",
        },
        {
          label: "Settings (typical)",
          text: "ISO 100–400 day / 800–1600 night; f/2.8–f/5.6 for shallow depth on textures; 1/125–1/250s hand-held; WB set to shade/tungsten as needed.",
        },
        {
          label: "Tactics",
          bullets: [
            "Expose for highlights to preserve marble/metal detail.",
            "Use architectural lines for leading perspective (arcades).",
            "Step off axis to avoid specular blown highlights on polished surfaces.",
            "Night shots: brace against pillars/railings; time for traffic lulls.",
          ],
        },
      ],
      layout: "stack",
    },
    {
      number: 5,
      title: "Feature Series — Morning & Markets",
      blocks: [
        {
          label: "Street Savouries, Manek Chowk",
          text: "Layers of fried pastry forms echo the city’s love for repetition and abundance.",
        },
        {
          label: "Cut-light Across an Otla",
          text: "Noon beam carving planes on stone steps; negative space as subject.",
        },
        {
          label: "Bead Jars, Relief & Color",
          text: "Studio-like still life found in a 2-ft shelf; warm lids vs cool granules.",
        },
        {
          label: "Jama Masjid Arcade",
          text: "Long shadow rhythm; one figure anchors scale and vanishing point.",
        },
      ],
      images: [
        "street-savouries.jpg",
        "cut-light-otla.jpg",
        "bead-jars.jpg",
        "corridor-of-arches.jpg",
      ],
      layout: "stack",
    },
    {
      number: 6,
      title: "Feature Series — Night & Craft",
      blocks: [
        {
          label: "Facade at Night, MG Road",
          text: "Signage glow and heritage ornament in contemporary neon dialogue.",
        },
        {
          label: "Pillar Capitals, Stone Grammar",
          text: "Square-to-circle transitions; chiselled geometry and wear.",
        },
        {
          label: "Brass Jaali, Soft Background",
          text: "Bokeh turns museum interior into pigment; foreground patina speaks age.",
        },
        {
          label: "Marble Relief, Concentric Bands",
          text: "Grazing light reveals tool marks; craft as topography.",
        },
        {
          label: "Gulal Wall, Tactile Color",
          text: "Festival residue as accidental abstraction; color = texture.",
        },
        {
          label: "Wood Carving, Pol House Column",
          text: "Narrative flora/fauna interlock; monochrome to honor form.",
        },
      ],
      images: [
        "facade-at-night.jpg",
        "pillar-capitals.jpg",
        "brass-jaali.jpg",
        "marble-relief.jpg",
        "gulal-wall.jpg",
        "wood-carving.jpg",
      ],
      layout: "stack",
    },
    {
      number: 7,
      title: "More from the Walk",
      blocks: [
        {
          label: "Extended series",
          text: "Additional frames from pol courtyards, market stalls, and heritage walls—each isolating a single material or rhythm.",
        },
      ],
      images: [
        "stone-filigree.jpg",
        "rudraksha-garland.jpg",
        "maruti-patina.jpg",
        "clay-roof-profiles.jpg",
        "threads-ribbons.jpg",
        "mini-paper-bags.jpg",
        "pol-courtyard.jpg",
        "bird-frieze.jpg",
      ],
      layout: "stack",
    },
    {
      number: 8,
      title: "Post-Processing & Output",
      blocks: [
        {
          label: "Edits",
          text: "Lens correction, gentle contrast curve, clarity on texture shots, HSL tweaks to protect stone neutrals, noise reduction on night facade.",
        },
        {
          label: "Color philosophy",
          text: "Respect ambient casts (amber sodium, teal shade); avoid over-neutralizing.",
        },
        {
          label: "Deliverables",
          bullets: [
            "Web set: 3000px long edge, sRGB, subtle watermark off.",
            "Print proofs: A4 luster for textures, matte for corridors.",
            "Optional 20-page zine sequence: Markets → Lanes → Craft → Night.",
          ],
        },
      ],
      layout: "stack",
    },
    {
      number: 9,
      title: "Outcomes & Reflection",
      blocks: [
        {
          label: "What worked",
          text: "The “detail first” constraint forced slower looking; textures became gateways to social stories (food economy, devotional craft, maintenance cycles).",
        },
        {
          label: "Skills sharpened",
          bullets: [
            "Highlight control on bright marble/brass.",
            "Composing for repetition.",
            "Silent hand-held at slow speeds.",
          ],
        },
        {
          label: "Next iteration",
          text: "Add audio snippets (market sound, azaan reverb in arcade) and short maker quotes; try a dawn fog set on the Sabarmati for softer palettes.",
        },
      ],
      layout: "stack",
    },
  ],
  layout: "editorial",
};
