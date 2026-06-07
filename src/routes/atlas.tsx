import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

const chapters: { key: Category | "All"; label: string; sub: string }[] = [
  { key: "All", label: "Complete Index", sub: "Every project across every discipline." },
  { key: "Product Experiences", label: "Product Experiences", sub: "Interfaces, services, and systems for human use." },
  { key: "Brand Systems", label: "Brand Systems", sub: "Identities, packaging, and visual languages." },
  { key: "Communication Systems", label: "Communication Systems", sub: "Editorial frameworks and information ecosystems." },
  { key: "Print & Editorial", label: "Print & Editorial", sub: "Typography and layout for the printed page." },
  { key: "Spatial & Visual Experiments", label: "Spatial & Visual Experiments", sub: "Environments, illustration, and motion studies." },
];

export const Route = createFileRoute("/atlas")({
  head: () => ({
    meta: [
      { title: "Design Atlas — Siya Parmar" },
      { name: "description", content: "An interactive index of every project — product, brand, communication, print, and spatial design by Siya Parmar." },
      { property: "og:title", content: "Design Atlas — Siya Parmar" },
      { property: "og:description", content: "An interactive index of every project by Siya Parmar." },
    ],
  }),
  component: AtlasPage,
});

function AtlasPage() {
  const [active, setActive] = useState<Category | "All">("All");
  const [hover, setHover] = useState<number | null>(null);
  const reduced = useReducedMotion();

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  const total = projects.length;
  const hoverProject = hover !== null ? filtered[hover] : null;

  // cursor follower
  const [cursor, setCursor] = useState({ x: -100, y: -100, visible: false });
  const stageRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative overflow-x-clip">
      <ScrollProgress />
      <Nav />

      {/* ============ HERO / MASTHEAD ============ */}
      <section className="relative pt-36 md:pt-44">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
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
              <h1 className="mt-6 font-serif text-[14vw] leading-[0.88] tracking-tight md:text-[8.5rem]">
                Index<span style={{ color: "var(--accent)" }}>.</span>
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                A living catalog of every project, study, and experiment — bound, numbered,
                and arranged like the pages of a monograph.
              </p>
            </motion.div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-3 gap-8 text-left md:gap-12"
            >
              <Stat n={String(total).padStart(2, "0")} label="Total Works" />
              <Stat n="05" label="Disciplines" />
              <Stat n="04" label="Years" />
            </motion.div>
          </div>

          <div className="mt-16 h-px w-full bg-foreground/10" />
        </div>
      </section>

      {/* ============ INTERACTIVE INDEX STAGE ============ */}
      <section className="relative py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
          <div
            ref={stageRef}
            onMouseMove={(e) => {
              const r = stageRef.current?.getBoundingClientRect();
              if (!r) return;
              setCursor({ x: e.clientX - r.left, y: e.clientY - r.top, visible: true });
            }}
            onMouseLeave={() => setCursor((c) => ({ ...c, visible: false }))}
            className="relative grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr] md:gap-16 lg:grid-cols-[320px_1fr]"
          >
            {/* GHOST NUMBER backdrop */}
            <AnimatePresence>
              {hoverProject && !reduced && (
                <motion.div
                  key={hover}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-0 select-none font-serif italic leading-none"
                  style={{
                    fontSize: "clamp(12rem, 32vw, 28rem)",
                    color: "color-mix(in oklab, var(--foreground) 4%, transparent)",
                    lineHeight: 0.8,
                    transform: "translateY(-12%)",
                  }}
                >
                  {String((hover ?? 0) + 1).padStart(2, "0")}
                </motion.div>
              )}
            </AnimatePresence>

            {/* cursor accent */}
            <AnimatePresence>
              {cursor.visible && hoverProject && !reduced && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                  aria-hidden
                  className="pointer-events-none absolute hidden md:block"
                  style={{
                    left: cursor.x,
                    top: cursor.y,
                    transform: "translate(-50%, -50%)",
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, color-mix(in oklab, var(--accent) 35%, transparent), transparent 70%)",
                    filter: "blur(6px)",
                    zIndex: 1,
                  }}
                />
              )}
            </AnimatePresence>

            {/* ===== LEFT: CHAPTERS ===== */}
            <aside className="relative z-10">
              <div className="sticky top-28">
                <div className="mb-6 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  § Chapters
                </div>
                <ul className="flex flex-col">
                  {chapters.map((c, i) => {
                    const isActive = active === c.key;
                    const count =
                      c.key === "All"
                        ? projects.length
                        : projects.filter((p) => p.category === c.key).length;
                    return (
                      <li key={c.key}>
                        <button
                          onClick={() => {
                            setActive(c.key);
                            setHover(null);
                          }}
                          className="group relative block w-full py-3 text-left"
                        >
                          <div className="flex items-baseline gap-3">
                            <span
                              className={`font-mono text-[10px] tabular-nums transition-colors ${
                                isActive ? "text-foreground" : "text-muted-foreground/50"
                              }`}
                            >
                              {String(i).padStart(2, "0")}
                            </span>
                            <span
                              className={`font-serif text-lg leading-tight transition-all duration-500 ${
                                isActive
                                  ? "italic"
                                  : "text-foreground/55 group-hover:text-foreground"
                              }`}
                              style={isActive ? { color: "var(--accent)" } : undefined}
                            >
                              {c.label}
                            </span>
                            <span className="ml-auto font-mono text-[10px] tabular-nums text-muted-foreground/60">
                              {String(count).padStart(2, "0")}
                            </span>
                          </div>
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden pl-7 pt-2"
                              >
                                <p className="text-xs leading-relaxed text-muted-foreground">
                                  {c.sub}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </button>
                        {i < chapters.length - 1 && (
                          <div className="h-px w-full bg-foreground/10" />
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-10 rounded-2xl border border-border/50 bg-card/40 p-5 backdrop-blur">
                  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    Now Reading
                  </div>
                  <div className="mt-2 font-serif text-2xl italic" style={{ color: "var(--accent)" }}>
                    {active === "All" ? "All" : active.split(" ")[0]}
                  </div>
                  <div className="mt-1 font-mono text-[10px] tabular-nums text-muted-foreground">
                    {String(filtered.length).padStart(2, "0")} / {String(total).padStart(2, "0")} works
                  </div>
                </div>
              </div>
            </aside>

            {/* ===== RIGHT: PROJECT LEDGER ===== */}
            <div className="relative z-10 min-w-0">
              {/* column header */}
              <div className="mb-4 grid grid-cols-[44px_1fr_70px_90px] items-center gap-4 border-b border-foreground/15 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:grid-cols-[60px_1fr_90px_120px]">
                <span>No.</span>
                <span>Project</span>
                <span className="hidden md:inline">Year</span>
                <span>Type</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.ul
                  key={active}
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduced ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col"
                >
                  {filtered.map((p, i) => (
                    <LedgerRow
                      key={`${active}-${p.title}`}
                      p={p}
                      i={i}
                      reduced={!!reduced}
                      isHover={hover === i}
                      anyHover={hover !== null}
                      onHover={() => setHover(i)}
                      onLeave={() => setHover(null)}
                    />
                  ))}
                </motion.ul>
              </AnimatePresence>

              {/* footer rule */}
              <div className="mt-2 flex items-center justify-between border-t border-foreground/15 pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>End of selection</span>
                <span className="tabular-nums">
                  {String(filtered.length).padStart(2, "0")} entries · curated by SP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURED MARQUEE ============ */}
      <section className="relative overflow-hidden border-y border-foreground/10 py-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--background) 0%, transparent 8%, transparent 92%, var(--background) 100%)",
            zIndex: 2,
          }}
        />
        <div
          className="flex w-max gap-12 whitespace-nowrap"
          style={{ animation: reduced ? undefined : "ribbon 60s linear infinite" }}
        >
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12">
              {projects.filter((p) => p.featured).map((p) => (
                <span key={p.title + k} className="flex items-center gap-4">
                  <span className="font-serif text-3xl italic" style={{ color: "var(--accent)" }}>
                    ✦
                  </span>
                  <span className="font-serif text-2xl italic">{p.title}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                    Featured Case Study
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative py-28 md:py-36">
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

function LedgerRow({
  p,
  i,
  reduced,
  isHover,
  anyHover,
  onHover,
  onLeave,
}: {
  p: Project;
  i: number;
  reduced: boolean;
  isHover: boolean;
  anyHover: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const dim = anyHover && !isHover;
  return (
    <motion.li
      initial={reduced ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: i * 0.025, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative border-b border-foreground/10"
    >
      <a
        href="#"
        className="grid grid-cols-[44px_1fr_70px_90px] items-center gap-4 py-4 transition-all duration-500 md:grid-cols-[60px_1fr_90px_120px] md:py-5"
        style={{
          opacity: dim ? 0.35 : 1,
          transform: isHover ? "translateX(8px)" : "translateX(0)",
        }}
      >
        {/* number */}
        <span
          className="font-mono text-[11px] tabular-nums transition-colors"
          style={{ color: isHover ? "var(--accent)" : undefined }}
        >
          {String(i + 1).padStart(3, "0")}
        </span>

        {/* title + tagline */}
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            <h3
              className="truncate font-serif text-xl leading-tight transition-all duration-500 md:text-2xl"
              style={{
                fontStyle: isHover ? "italic" : "normal",
                color: isHover ? "var(--accent)" : undefined,
              }}
            >
              {p.title}
            </h3>
            {p.featured && (
              <span
                className="hidden shrink-0 font-serif text-base italic md:inline"
                style={{ color: "var(--accent)" }}
                aria-hidden
              >
                ✦
              </span>
            )}
          </div>
          <AnimatePresence>
            {isHover && !reduced && (
              <motion.p
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden text-sm leading-relaxed text-muted-foreground md:max-w-xl"
              >
                {p.tagline}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* year */}
        <span className="hidden font-mono text-[11px] tabular-nums text-muted-foreground md:inline">
          {p.year}
        </span>

        {/* status */}
        <div className="flex items-center justify-end gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground md:text-[10px]">
            {shortStatus(p.status)}
          </span>
          <motion.span
            animate={{ x: isHover ? 0 : -4, opacity: isHover ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex"
          >
            <ArrowUpRight className="h-4 w-4" style={{ color: "var(--accent)" }} />
          </motion.span>
        </div>
      </a>

      {/* hover hairline accent */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute bottom-[-1px] left-0 h-px"
        style={{ background: "var(--accent)" }}
        initial={{ width: 0 }}
        animate={{ width: isHover ? "100%" : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.li>
  );
}

function shortStatus(s: Status) {
  switch (s) {
    case "Case Study":
      return "Case Study";
    case "Project Card":
      return "Project";
    case "Archive":
      return "Archive";
    case "Part of NNP Case Study":
      return "NNP Series";
  }
}
