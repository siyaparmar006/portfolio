import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
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
  featured?: boolean;
};

const projects: Project[] = [
  // PRODUCT EXPERIENCES
  { title: "LiveSeeds Plant-Care App", category: "Product Experiences", tagline: "Mobile product experience for plant care, guidance, and approachable UI.", status: "Case Study", featured: true },
  { title: "Fluid Water Quality Companion", category: "Product Experiences", tagline: "Digital companion concept for understanding and tracking water quality.", status: "Project Card" },
  { title: "UX Capstone — CX by Design", category: "Product Experiences", tagline: "Service design and workflow improvement through research, journey mapping, and experience prototyping.", status: "Project Card" },
  { title: "UI-UX Website", category: "Product Experiences", tagline: "Website design exploration focused on structure, interface, and digital navigation.", status: "Project Card" },
  { title: "Information Architecture", category: "Product Experiences", tagline: "Structural design work exploring navigation, hierarchy, and content organization.", status: "Archive" },
  { title: "Cognitive Science", category: "Product Experiences", tagline: "Research-informed design exploration connected to cognition and user behavior.", status: "Archive" },
  { title: "ELL Experience — TCS", category: "Product Experiences", tagline: "Experience design project focused on learning, language, and service interaction.", status: "Archive" },
  { title: "Systems Thinking", category: "Product Experiences", tagline: "Process and systems mapping exploration for understanding complex relationships.", status: "Archive" },

  // BRAND SYSTEMS
  { title: "Monkey Fries — Cloud Kitchen", category: "Brand Systems", tagline: "Cloud kitchen brand identity and communication system.", status: "Project Card" },
  { title: "Institute of Design", category: "Brand Systems", tagline: "Identity system exploration for an academic design institution.", status: "Project Card" },
  { title: "Packaging Design", category: "Brand Systems", tagline: "Product packaging design exploration with structure, visual appeal, and shelf presence.", status: "Project Card" },
  { title: "Evair Product Branding & Packaging System", category: "Brand Systems", tagline: "Product identity and packaging direction for a car freshener brand.", status: "Case Study", featured: true },
  { title: "ZGC Projects", category: "Brand Systems", tagline: "Professional branding and digital marketing work developed during agency experience.", status: "Project Card" },
  { title: "BRIM Projects", category: "Brand Systems", tagline: "Real estate and agency design work across social, campaign, and print materials.", status: "Project Card" },
  { title: "Navya Baheti", category: "Brand Systems", tagline: "Visual identity and personal brand project.", status: "Archive" },
  { title: "NNP Branding & Style Guide", category: "Brand Systems", tagline: "Brand colors, typography, and visual system for New Neighbors Partnership.", status: "Part of NNP Case Study" },

  // COMMUNICATION SYSTEMS
  { title: "New Neighbors Partnership Communication System", category: "Communication Systems", tagline: "Scalable nonprofit communication ecosystem across referral guidelines, handbook, report, brochure, cultural primer, and brand materials.", status: "Case Study", featured: true },
  { title: "NNP Volunteer Handbook", category: "Communication Systems", tagline: "Volunteer onboarding handbook designed for clarity, trust, and consistency.", status: "Part of NNP Case Study" },
  { title: "NNP Impact Report", category: "Communication Systems", tagline: "Impact storytelling and data communication for nonprofit audiences.", status: "Part of NNP Case Study" },
  { title: "NNP Referral Guidelines", category: "Communication Systems", tagline: "Partner-facing referral guidelines later showcased during a UN General Assembly refugee employment event.", status: "Part of NNP Case Study" },
  { title: "NNP Brochure", category: "Communication Systems", tagline: "Public-facing program brochure explaining NNP's mission and support model.", status: "Part of NNP Case Study" },
  { title: "NNP Cultural Primer", category: "Communication Systems", tagline: "Cultural education material designed to make community understanding more accessible.", status: "Part of NNP Case Study" },
  { title: "Public Communication", category: "Communication Systems", tagline: "Social communication project exploring public messaging and visual advocacy.", status: "Project Card" },
  { title: "Communication Theory", category: "Communication Systems", tagline: "Visual communication studies through posters, analysis, and media interpretation.", status: "Archive" },
  { title: "Poster Design", category: "Communication Systems", tagline: "Poster-based visual communication and layout exploration.", status: "Archive" },

  // PRINT & EDITORIAL
  { title: "Essence of Green", category: "Print & Editorial", tagline: "Botanical publication design exploring editorial layout, typography, and print storytelling.", status: "Project Card" },
  { title: "Applied Literature", category: "Print & Editorial", tagline: "Literature-based visual and editorial design exploration.", status: "Archive" },

  // SPATIAL & VISUAL EXPERIMENTS
  { title: "Environmental Design", category: "Spatial & Visual Experiments", tagline: "Environmental graphics and spatial communication design.", status: "Project Card" },
  { title: "Design of Wayfinding Systems", category: "Spatial & Visual Experiments", tagline: "Navigation and signage system exploration for physical environments.", status: "Project Card" },
  { title: "Space Design", category: "Spatial & Visual Experiments", tagline: "Spatial design exploration using form, layout, and physical experience.", status: "Archive" },
  { title: "Introduction to Materials & 3D Modelling", category: "Spatial & Visual Experiments", tagline: "Material and 3D form exploration.", status: "Archive" },
  { title: "Illustration Design", category: "Spatial & Visual Experiments", tagline: "Illustration and visual storytelling exploration.", status: "Archive" },
  { title: "Character Design", category: "Spatial & Visual Experiments", tagline: "Character development and expressive visual design.", status: "Archive" },
  { title: "Animation Video", category: "Spatial & Visual Experiments", tagline: "Motion and animation exploration.", status: "Archive" },
];

const filters: Array<"All" | Category> = [
  "All",
  "Product Experiences",
  "Brand Systems",
  "Communication Systems",
  "Print & Editorial",
  "Spatial & Visual Experiments",
];

const categoryGradient: Record<Category, string> = {
  "Product Experiences":
    "radial-gradient(circle at 30% 25%, oklch(0.78 0.12 150 / 0.55), oklch(0.24 0.01 80) 75%)",
  "Brand Systems":
    "radial-gradient(circle at 70% 30%, oklch(0.84 0.12 70 / 0.55), oklch(0.24 0.01 80) 75%)",
  "Communication Systems":
    "radial-gradient(circle at 25% 70%, oklch(0.6 0.20 275 / 0.55), oklch(0.24 0.01 80) 75%)",
  "Print & Editorial":
    "radial-gradient(circle at 65% 65%, oklch(0.78 0.13 25 / 0.5), oklch(0.24 0.01 80) 75%)",
  "Spatial & Visual Experiments":
    "radial-gradient(circle at 50% 30%, oklch(0.72 0.13 200 / 0.5), oklch(0.24 0.01 80) 75%)",
};

const categoryShort: Record<Category, string> = {
  "Product Experiences": "Product",
  "Brand Systems": "Brand",
  "Communication Systems": "Communication",
  "Print & Editorial": "Print",
  "Spatial & Visual Experiments": "Spatial",
};

export const Route = createFileRoute("/atlas")({
  head: () => ({
    meta: [
      { title: "Design Atlas — Siya Parmar" },
      {
        name: "description",
        content:
          "A floating archive of 32 projects across product design, brand systems, communication, print, spatial, and visual storytelling by Siya Parmar.",
      },
      { property: "og:title", content: "Design Atlas — Siya Parmar" },
      {
        property: "og:description",
        content:
          "Explore Siya Parmar's full archive of product, brand, communication, print, and spatial design work.",
      },
    ],
  }),
  component: AtlasPage,
});

function AtlasPage() {
  const [active, setActive] = useState<"All" | Category>("All");
  const [view, setView] = useState<"constellation" | "grid">("constellation");
  const reduced = useReducedMotion();

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <main className="relative overflow-x-clip">
      <ScrollProgress />
      <Nav />

      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "var(--gradient-soft)" }}
        />
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              Design Atlas
            </div>
            <h1 className="max-w-4xl text-balance font-display text-4xl leading-[1.02] md:text-7xl">
              A floating archive of projects, systems, and visual experiments.
            </h1>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Explore {projects.length} projects across product design, brand systems,
              communication design, print, spatial design, and visual storytelling.
            </p>
          </motion.div>

          {/* Filters + view toggle */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => {
                const isActive = active === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                      isActive
                        ? "border-foreground bg-foreground text-background shadow-soft"
                        : "border-border/60 bg-secondary/30 text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>

            <div className="hidden items-center gap-1 rounded-full border border-border/60 bg-secondary/30 p-1 md:flex">
              {(["constellation", "grid"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`rounded-full px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                    view === v
                      ? "bg-foreground text-background"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {v === "constellation" ? "Constellation" : "Grid"}
                </button>
              ))}
            </div>
          </motion.div>
          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">
            Showing {filtered.length} of {projects.length}
          </p>
        </div>
      </section>

      {/* Atlas — constellation (desktop) / grid */}
      <section className="relative pb-24 md:pb-32">
        {/* Starfield backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, color-mix(in oklab, var(--foreground) 22%, transparent) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />

        <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
          {view === "grid" ? (
            <div className="[column-fill:_balance] gap-5 space-y-5 columns-1 sm:columns-2 md:gap-6 md:space-y-6 lg:columns-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((p, i) => (
                  <AtlasCard key={p.title} p={p} index={i} reduced={!!reduced} variant="grid" />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <>
              {/* Mobile: clean stack */}
              <div className="flex flex-col gap-5 md:hidden">
                <AnimatePresence mode="popLayout">
                  {filtered.map((p, i) => (
                    <AtlasCard key={p.title} p={p} index={i} reduced={!!reduced} variant="grid" />
                  ))}
                </AnimatePresence>
              </div>

              {/* Desktop: floating constellation */}
              <div className="relative hidden md:block">
                <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-10">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((p, i) => (
                      <FloatingNode
                        key={p.title}
                        p={p}
                        index={i}
                        reduced={!!reduced}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </>
          )}
        </div>
      </section>


      {/* CTA */}
      <section className="relative pb-28 md:pb-36">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-border/60 bg-card p-8 text-center shadow-lift md:p-16">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "var(--gradient-soft)" }}
            />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Deeper Story
              </div>
              <h2 className="mx-auto mt-3 max-w-2xl text-balance font-display text-3xl leading-tight md:text-5xl">
                Want the deeper story?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                Start with the three signature case studies that define my product, service,
                and brand design approach.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {[
                  { label: "View NNP Case Study", href: "/projects/nnp" },
                  { label: "View LiveSeeds", href: "/projects/liveseeds" },
                  { label: "View Evair", href: "/projects/evair" },
                ].map((b) => (
                  <a
                    key={b.label}
                    href={b.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/40 px-5 py-2.5 text-sm text-foreground/90 backdrop-blur transition-all duration-300 hover:border-foreground/50 hover:bg-foreground hover:text-background"
                  >
                    {b.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

// Pseudo-random but stable per-index offsets for the floating constellation.
const widths = ["w-[220px]", "w-[250px]", "w-[280px]", "w-[230px]", "w-[260px]"];
const yOffsets = [0, 24, 48, 12, 36, 56, 8, 40];
const rotations = [-0.8, 0.5, -0.4, 1.0, -0.7, 0.3, 0.8, -0.5];
const floatDurations = [7, 8.5, 9, 7.8, 8.2, 9.4, 7.4, 8.8];

function FloatingNode({
  p,
  index,
  reduced,
}: {
  p: Project;
  index: number;
  reduced: boolean;
}) {
  const featured = p.featured;
  const w = featured ? "w-[320px]" : widths[index % widths.length];
  const yOff = featured ? 0 : yOffsets[index % yOffsets.length];
  const rot = featured ? 0 : rotations[index % rotations.length];
  const dur = floatDurations[index % floatDurations.length];
  const delay = (index % 6) * 0.4;

  return (
    <motion.div
      layout
      initial={reduced ? false : { opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
      transition={{
        duration: 0.55,
        delay: reduced ? 0 : Math.min(index * 0.03, 0.35),
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ marginTop: yOff, rotate: `${rot}deg` }}
      className={`${w} shrink-0`}
    >
      <motion.div
        animate={reduced ? undefined : { y: [0, -10, 0] }}
        transition={{
          duration: dur,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <AtlasCard p={p} index={index} reduced={reduced} variant="float" />
      </motion.div>
    </motion.div>
  );
}


function AtlasCard({
  p,
  index,
  reduced,
  variant = "grid",
}: {
  p: Project;
  index: number;
  reduced: boolean;
  variant?: "grid" | "float";
}) {
  const featured = p.featured;
  const isCase = p.status === "Case Study";

  const href =
    p.title.startsWith("New Neighbors Partnership") || p.status === "Part of NNP Case Study"
      ? "/projects/nnp"
      : p.title.startsWith("LiveSeeds")
        ? "/projects/liveseeds"
        : p.title.startsWith("Evair")
          ? "/projects/evair"
          : `/projects/${slugify(p.title)}`;

  return (
    <motion.article
      layout
      initial={reduced ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduced ? undefined : { opacity: 0, y: -8 }}
      transition={{
        duration: 0.5,
        delay: reduced ? 0 : Math.min(index * 0.025, 0.25),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduced ? undefined : { y: -4, scale: 1.005 }}
      className={`group relative mb-5 inline-block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] border bg-card/70 p-4 shadow-soft transition-all duration-500 hover:shadow-lift md:mb-6 md:p-5 ${
        featured
          ? "border-foreground/25 ring-1 ring-primary/40"
          : "border-border/60 hover:border-foreground/30"
      }`}
    >
      {/* Visual */}
      <div
        className={`relative overflow-hidden rounded-[1.1rem] ${
          featured ? "aspect-[4/3.4]" : "aspect-[4/3]"
        }`}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.06]"
          style={{ background: categoryGradient[p.category] }}
        />
        <div className="absolute inset-0 grain-noise opacity-40" />
        <div className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/85 backdrop-blur">
          {categoryShort[p.category]}
        </div>
        {featured && (
          <div
            className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-background"
            style={{ background: "var(--accent)" }}
          >
            <Sparkles className="h-3 w-3" />
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-1 pt-4 md:pt-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {p.category}
          </span>
          <span
            className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] ${
              isCase
                ? "bg-foreground text-background"
                : p.status === "Archive"
                  ? "border border-border/70 text-muted-foreground"
                  : p.status === "Part of NNP Case Study"
                    ? "border border-primary/40 text-primary"
                    : "border border-border/70 text-foreground/75"
            }`}
          >
            {p.status === "Part of NNP Case Study" ? "Part of NNP" : p.status}
          </span>
        </div>

        <h3
          className={`mt-2 font-display leading-[1.05] ${
            featured ? "text-2xl md:text-3xl" : "text-xl md:text-[1.4rem]"
          }`}
        >
          {p.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
          {p.tagline}
        </p>

        <Link
          to="/atlas"
          onClick={(e) => {
            e.preventDefault();
            // placeholder until project pages exist
            window.location.hash = href;
          }}
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-foreground transition-all duration-300 group-hover:gap-2"
        >
          Explore
          <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
        </Link>
      </div>

      {/* Hover glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
        style={{ background: "var(--gradient-warm)" }}
      />
    </motion.article>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
