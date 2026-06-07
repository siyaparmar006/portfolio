import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, LayoutGroup } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

type Category =
  | "Product Experiences"
  | "Brand Systems"
  | "Communication Systems"
  | "Print & Editorial"
  | "Spatial & Visual Experiments";

type Status = "Case Study" | "Project Card" | "Archive" | "Part of NNP Case Study";

type Project = {
  title: string;
  category: Category;
  tagline: string;
  status: Status;
  year?: string;
  featured?: boolean;
};

const projects: Project[] = [
  { title: "LiveSeeds Plant-Care App", category: "Product Experiences", tagline: "Mobile product experience for plant care, guidance, and approachable UI.", status: "Case Study", featured: true, year: "2024" },
  { title: "Fluid Water Quality Companion", category: "Product Experiences", tagline: "Digital companion concept for understanding and tracking water quality.", status: "Project Card", year: "2023" },
  { title: "UX Capstone — CX by Design", category: "Product Experiences", tagline: "Service design and workflow improvement through research, journey mapping, and experience prototyping.", status: "Project Card", year: "2023" },
  { title: "UI-UX Website", category: "Product Experiences", tagline: "Website design exploration focused on structure, interface, and digital navigation.", status: "Project Card", year: "2022" },
  { title: "Information Architecture", category: "Product Experiences", tagline: "Structural design work exploring navigation, hierarchy, and content organization.", status: "Archive", year: "2022" },
  { title: "Cognitive Science", category: "Product Experiences", tagline: "Research-informed design exploration connected to cognition and user behavior.", status: "Archive", year: "2021" },
  { title: "ELL Experience — TCS", category: "Product Experiences", tagline: "Experience design project focused on learning, language, and service interaction.", status: "Archive", year: "2021" },
  { title: "Systems Thinking", category: "Product Experiences", tagline: "Process and systems mapping exploration for understanding complex relationships.", status: "Archive", year: "2021" },

  { title: "Monkey Fries — Cloud Kitchen", category: "Brand Systems", tagline: "Cloud kitchen brand identity and communication system.", status: "Project Card", year: "2023" },
  { title: "Institute of Design", category: "Brand Systems", tagline: "Identity system exploration for an academic design institution.", status: "Project Card", year: "2022" },
  { title: "Packaging Design", category: "Brand Systems", tagline: "Product packaging design exploration with structure, visual appeal, and shelf presence.", status: "Project Card", year: "2022" },
  { title: "Evair Product Branding & Packaging System", category: "Brand Systems", tagline: "Product identity and packaging direction for a car freshener brand.", status: "Case Study", featured: true, year: "2024" },
  { title: "ZGC Projects", category: "Brand Systems", tagline: "Professional branding and digital marketing work developed during agency experience.", status: "Project Card", year: "2023" },
  { title: "BRIM Projects", category: "Brand Systems", tagline: "Real estate and agency design work across social, campaign, and print materials.", status: "Project Card", year: "2022" },
  { title: "Navya Baheti", category: "Brand Systems", tagline: "Visual identity and personal brand project.", status: "Archive", year: "2021" },
  { title: "NNP Branding & Style Guide", category: "Brand Systems", tagline: "Brand colors, typography, and visual system for New Neighbors Partnership.", status: "Part of NNP Case Study", year: "2024" },

  { title: "New Neighbors Partnership Communication System", category: "Communication Systems", tagline: "Scalable nonprofit communication ecosystem across referral guidelines, handbook, report, brochure, cultural primer, and brand materials.", status: "Case Study", featured: true, year: "2024" },
  { title: "NNP Volunteer Handbook", category: "Communication Systems", tagline: "Volunteer onboarding handbook designed for clarity, trust, and consistency.", status: "Part of NNP Case Study", year: "2024" },
  { title: "NNP Impact Report", category: "Communication Systems", tagline: "Impact storytelling and data communication for nonprofit audiences.", status: "Part of NNP Case Study", year: "2024" },
  { title: "NNP Referral Guidelines", category: "Communication Systems", tagline: "Partner-facing referral guidelines later showcased during a UN General Assembly refugee employment event.", status: "Part of NNP Case Study", year: "2024" },
  { title: "NNP Brochure", category: "Communication Systems", tagline: "Public-facing program brochure explaining NNP's mission and support model.", status: "Part of NNP Case Study", year: "2024" },
  { title: "NNP Cultural Primer", category: "Communication Systems", tagline: "Cultural education material designed to make community understanding more accessible.", status: "Part of NNP Case Study", year: "2024" },
  { title: "Public Communication", category: "Communication Systems", tagline: "Social communication project exploring public messaging and visual advocacy.", status: "Project Card", year: "2022" },
  { title: "Communication Theory", category: "Communication Systems", tagline: "Visual communication studies through posters, analysis, and media interpretation.", status: "Archive", year: "2021" },
  { title: "Poster Design", category: "Communication Systems", tagline: "Poster-based visual communication and layout exploration.", status: "Archive", year: "2021" },

  { title: "Essence of Green", category: "Print & Editorial", tagline: "Botanical publication design exploring editorial layout, typography, and print storytelling.", status: "Project Card", year: "2022" },
  { title: "Applied Literature", category: "Print & Editorial", tagline: "Literature-based visual and editorial design exploration.", status: "Archive", year: "2021" },

  { title: "Environmental Design", category: "Spatial & Visual Experiments", tagline: "Environmental graphics and spatial communication design.", status: "Project Card", year: "2022" },
  { title: "Design of Wayfinding Systems", category: "Spatial & Visual Experiments", tagline: "Navigation and signage system exploration for physical environments.", status: "Project Card", year: "2022" },
  { title: "Space Design", category: "Spatial & Visual Experiments", tagline: "Spatial design exploration using form, layout, and physical experience.", status: "Archive", year: "2021" },
  { title: "Introduction to Materials & 3D Modelling", category: "Spatial & Visual Experiments", tagline: "Material and 3D form exploration.", status: "Archive", year: "2021" },
  { title: "Illustration Design", category: "Spatial & Visual Experiments", tagline: "Illustration and visual storytelling exploration.", status: "Archive", year: "2021" },
  { title: "Character Design", category: "Spatial & Visual Experiments", tagline: "Character development and expressive visual design.", status: "Archive", year: "2021" },
  { title: "Animation Video", category: "Spatial & Visual Experiments", tagline: "Motion and animation exploration.", status: "Archive", year: "2021" },
];

const filters: Array<"All" | Category> = [
  "All",
  "Product Experiences",
  "Brand Systems",
  "Communication Systems",
  "Print & Editorial",
  "Spatial & Visual Experiments",
];

const categoryAccent: Record<Category, string> = {
  "Product Experiences": "oklch(0.78 0.13 150)",
  "Brand Systems": "oklch(0.82 0.13 70)",
  "Communication Systems": "oklch(0.65 0.20 285)",
  "Print & Editorial": "oklch(0.74 0.16 25)",
  "Spatial & Visual Experiments": "oklch(0.72 0.13 200)",
};

const categoryGlyph: Record<Category, string> = {
  "Product Experiences": "◐",
  "Brand Systems": "✦",
  "Communication Systems": "❋",
  "Print & Editorial": "▦",
  "Spatial & Visual Experiments": "◇",
};

const categoryShort: Record<Category, string> = {
  "Product Experiences": "Product",
  "Brand Systems": "Brand",
  "Communication Systems": "Comms",
  "Print & Editorial": "Print",
  "Spatial & Visual Experiments": "Spatial",
};

export const Route = createFileRoute("/atlas")({
  head: () => ({
    meta: [
      { title: "Design Atlas — Siya Parmar" },
      { name: "description", content: "An interactive typographic mosaic of every project — product, brand, communication, print, and spatial design by Siya Parmar." },
      { property: "og:title", content: "Design Atlas — Siya Parmar" },
      { property: "og:description", content: "An interactive mosaic of every project by Siya Parmar." },
    ],
  }),
  component: AtlasPage,
});

// Tile size variants — Mondrian-style salon hang.
// span = grid column units (out of 12), rows = grid row units, h = approx height tier.
type Tile = { col: number; row: number; tier: "xs" | "s" | "m" | "l" | "xl" };

const TILE_VARIANTS: Tile[] = [
  { col: 4, row: 3, tier: "m" },
  { col: 3, row: 2, tier: "s" },
  { col: 5, row: 4, tier: "l" },
  { col: 4, row: 2, tier: "s" },
  { col: 3, row: 3, tier: "m" },
  { col: 5, row: 3, tier: "m" },
  { col: 4, row: 4, tier: "l" },
  { col: 3, row: 2, tier: "xs" },
  { col: 5, row: 2, tier: "s" },
  { col: 4, row: 3, tier: "m" },
  { col: 3, row: 4, tier: "l" },
  { col: 5, row: 3, tier: "m" },
];

function getTile(p: Project, i: number): Tile {
  if (p.featured) return { col: 6, row: 5, tier: "xl" };
  if (p.status === "Case Study") return { col: 5, row: 4, tier: "l" };
  return TILE_VARIANTS[i % TILE_VARIANTS.length];
}

function AtlasPage() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [hover, setHover] = useState<string | null>(null);
  const reduced = useReducedMotion();

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  const total = projects.length;

  return (
    <main className="relative overflow-x-clip">
      <ScrollProgress />
      <Nav />

      {/* ============ HERO ============ */}
      <section className="relative pt-36 md:pt-44">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                <span className="inline-block h-px w-10 bg-foreground/30" />
                Vol. 01 · The Design Atlas
              </div>
              <h1 className="mt-6 font-serif text-[13vw] leading-[0.86] tracking-tight md:text-[8.5rem]">
                Atlas<span style={{ color: "var(--accent)" }}>.</span>
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                A salon-hung mosaic of every project. Each tile a small poster. Each chapter a
                rearrangement of the wall.
              </p>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-end gap-10"
            >
              <Stat n={String(total).padStart(2, "0")} label="Works" />
              <Stat n="05" label="Disciplines" />
              <Stat n="04" label="Years" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ FILTER CHIPS ============ */}
      <section className="relative pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10">
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => {
              const isActive = active === f;
              const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="group relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors"
                  style={{
                    borderColor: isActive ? "var(--foreground)" : "color-mix(in oklab, var(--foreground) 15%, transparent)",
                    background: isActive ? "var(--foreground)" : "transparent",
                    color: isActive ? "var(--background)" : "color-mix(in oklab, var(--foreground) 75%, transparent)",
                  }}
                >
                  <span>{f === "All" ? "All Works" : (f as string)}</span>
                  <span className="font-mono text-[9px] tabular-nums opacity-70">
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ MOSAIC WALL ============ */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1500px] px-6 md:px-10">
          <LayoutGroup>
            <motion.div
              layout
              className="grid auto-rows-[68px] grid-cols-2 gap-3 sm:grid-cols-6 md:auto-rows-[78px] md:grid-cols-12 md:gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => {
                  const t = getTile(p, i);
                  return (
                    <MosaicTile
                      key={p.title}
                      p={p}
                      i={i}
                      t={t}
                      total={filtered.length}
                      isHover={hover === p.title}
                      anyHover={hover !== null}
                      onHover={() => setHover(p.title)}
                      onLeave={() => setHover(null)}
                      reduced={!!reduced}
                    />
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card p-10 text-center shadow-lift md:p-16">
            <div aria-hidden className="absolute inset-0" style={{ background: "var(--gradient-soft)" }} />
            <div className="relative">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                — Selected Volumes —
              </div>
              <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-3xl leading-tight md:text-5xl">
                Step into the three works that define the practice.
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {[
                  { label: "NNP Case Study", href: "/projects/nnp" },
                  { label: "LiveSeeds", href: "/projects/liveseeds" },
                  { label: "Evair", href: "/projects/evair" },
                ].map((b) => (
                  <a
                    key={b.label}
                    href={b.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/40 px-5 py-2.5 text-sm text-foreground/90 backdrop-blur transition-all duration-300 hover:border-foreground/50 hover:bg-foreground hover:text-background"
                  >
                    {b.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-4xl leading-none tabular-nums md:text-5xl">{n}</div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function MosaicTile({
  p,
  i,
  t,
  total,
  isHover,
  anyHover,
  onHover,
  onLeave,
  reduced,
}: {
  p: Project;
  i: number;
  t: Tile;
  total: number;
  isHover: boolean;
  anyHover: boolean;
  onHover: () => void;
  onLeave: () => void;
  reduced: boolean;
}) {
  const accent = categoryAccent[p.category];
  const glyph = categoryGlyph[p.category];

  // Tier drives typographic scale inside the tile
  const titleClass =
    t.tier === "xl"
      ? "text-3xl md:text-5xl"
      : t.tier === "l"
        ? "text-2xl md:text-4xl"
        : t.tier === "m"
          ? "text-xl md:text-3xl"
          : t.tier === "s"
            ? "text-lg md:text-2xl"
            : "text-base md:text-xl";

  // Alternate composition variants for asymmetry
  const variant = i % 4;

  // Map col/row to tailwind-safe inline grid spans
  const style: React.CSSProperties = {
    gridColumn: `span ${Math.min(t.col, 12)} / span ${Math.min(t.col, 12)}`,
    gridRow: `span ${t.row} / span ${t.row}`,
  };

  return (
    <motion.a
      layout
      href="#"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={reduced ? false : { opacity: 0, scale: 0.94 }}
      animate={{
        opacity: anyHover && !isHover ? 0.35 : 1,
        scale: 1,
      }}
      exit={reduced ? undefined : { opacity: 0, scale: 0.94 }}
      transition={{
        layout: { type: "spring", stiffness: 180, damping: 26 },
        opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      }}
      style={style}
      className="group relative col-span-2 overflow-hidden rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm sm:col-auto"
    >
      {/* category color flood on hover */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${accent}, transparent 70%)`,
        }}
        animate={{ opacity: isHover ? 0.22 : 0.05 }}
        transition={{ duration: 0.5 }}
      />

      {/* hairline frame accent on hover */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}` }}
        animate={{ opacity: isHover ? 0.7 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Inner composition */}
      <div className="relative flex h-full w-full flex-col justify-between p-4 md:p-5">
        {/* TOP META */}
        <div className="flex items-start justify-between gap-3">
          <span
            className="font-mono text-[9px] uppercase tracking-[0.22em]"
            style={{ color: isHover ? accent : "color-mix(in oklab, var(--foreground) 55%, transparent)" }}
          >
            {String(i + 1).padStart(3, "0")} / {String(total).padStart(3, "0")}
          </span>
          <span
            className="font-serif text-lg leading-none"
            style={{ color: accent, opacity: isHover ? 1 : 0.55 }}
          >
            {glyph}
          </span>
        </div>

        {/* CENTER OR EDGE TITLE depending on variant */}
        <div
          className={`flex flex-1 ${
            variant === 0 ? "items-end" : variant === 1 ? "items-start pt-3" : variant === 2 ? "items-center" : "items-end"
          }`}
        >
          <h3
            className={`font-serif leading-[0.95] tracking-tight ${titleClass}`}
            style={{
              fontStyle: isHover ? "italic" : "normal",
              color: isHover ? accent : "var(--foreground)",
              transition: "color 0.5s ease, font-style 0.5s ease",
            }}
          >
            {p.title}
          </h3>
        </div>

        {/* BOTTOM META — category + year + arrow */}
        <div className="mt-3 flex items-end justify-between gap-3">
          <div className="flex flex-col gap-1">
            <span
              className="font-mono text-[9px] uppercase tracking-[0.22em]"
              style={{ color: "color-mix(in oklab, var(--foreground) 55%, transparent)" }}
            >
              {categoryShort[p.category]}
              {p.year ? ` · ${p.year}` : ""}
            </span>
            <AnimatePresence>
              {isHover && t.tier !== "xs" && !reduced && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.3 }}
                  className="hidden max-w-[28ch] text-[11px] leading-snug text-muted-foreground md:line-clamp-2"
                >
                  {p.tagline}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <motion.span
            aria-hidden
            animate={{
              x: isHover ? 0 : -6,
              y: isHover ? 0 : 6,
              opacity: isHover ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
            style={{ background: accent, color: "var(--background)" }}
          >
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.span>
        </div>

        {/* Featured ribbon */}
        {p.featured && (
          <span
            className="absolute right-3 top-3 rounded-full px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.22em]"
            style={{ background: accent, color: "var(--background)" }}
          >
            Featured
          </span>
        )}
      </div>
    </motion.a>
  );
}
