import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform, MotionValue } from "framer-motion";
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
  { title: "New Neighbors Partnership Communication System", category: "Communication Systems", tagline: "Scalable nonprofit communication ecosystem across referral guidelines, handbook, report, brochure, cultural primer, and brand materials.", status: "Case Study", featured: true, year: "2024" },
  { title: "LiveSeeds Plant-Care App", category: "Product Experiences", tagline: "Mobile product experience for plant care, guidance, and approachable UI.", status: "Case Study", featured: true, year: "2024" },
  { title: "Evair Product Branding & Packaging System", category: "Brand Systems", tagline: "Product identity and packaging direction for a car freshener brand.", status: "Case Study", featured: true, year: "2024" },
  { title: "Fluid Water Quality Companion", category: "Product Experiences", tagline: "Digital companion concept for understanding and tracking water quality.", status: "Project Card", year: "2023" },
  { title: "UX Capstone — CX by Design", category: "Product Experiences", tagline: "Service design and workflow improvement through research, journey mapping, and experience prototyping.", status: "Project Card", year: "2023" },
  { title: "Monkey Fries — Cloud Kitchen", category: "Brand Systems", tagline: "Cloud kitchen brand identity and communication system.", status: "Project Card", year: "2023" },
  { title: "ZGC Projects", category: "Brand Systems", tagline: "Professional branding and digital marketing work developed during agency experience.", status: "Project Card", year: "2023" },
  { title: "BRIM Projects", category: "Brand Systems", tagline: "Real estate and agency design work across social, campaign, and print materials.", status: "Project Card", year: "2022" },
  { title: "Institute of Design", category: "Brand Systems", tagline: "Identity system exploration for an academic design institution.", status: "Project Card", year: "2022" },
  { title: "Packaging Design", category: "Brand Systems", tagline: "Product packaging design exploration with structure, visual appeal, and shelf presence.", status: "Project Card", year: "2022" },
  { title: "NNP Volunteer Handbook", category: "Communication Systems", tagline: "Volunteer onboarding handbook designed for clarity, trust, and consistency.", status: "Part of NNP Case Study", year: "2024" },
  { title: "NNP Impact Report", category: "Communication Systems", tagline: "Impact storytelling and data communication for nonprofit audiences.", status: "Part of NNP Case Study", year: "2024" },
  { title: "NNP Referral Guidelines", category: "Communication Systems", tagline: "Partner-facing referral guidelines later showcased during a UN General Assembly refugee employment event.", status: "Part of NNP Case Study", year: "2024" },
  { title: "NNP Brochure", category: "Communication Systems", tagline: "Public-facing program brochure explaining NNP's mission and support model.", status: "Part of NNP Case Study", year: "2024" },
  { title: "NNP Cultural Primer", category: "Communication Systems", tagline: "Cultural education material designed to make community understanding more accessible.", status: "Part of NNP Case Study", year: "2024" },
  { title: "NNP Branding & Style Guide", category: "Brand Systems", tagline: "Brand colors, typography, and visual system for New Neighbors Partnership.", status: "Part of NNP Case Study", year: "2024" },
  { title: "Essence of Green", category: "Print & Editorial", tagline: "Botanical publication design exploring editorial layout, typography, and print storytelling.", status: "Project Card", year: "2022" },
  { title: "UI-UX Website", category: "Product Experiences", tagline: "Website design exploration focused on structure, interface, and digital navigation.", status: "Project Card", year: "2022" },
  { title: "Environmental Design", category: "Spatial & Visual Experiments", tagline: "Environmental graphics and spatial communication design.", status: "Project Card", year: "2022" },
  { title: "Design of Wayfinding Systems", category: "Spatial & Visual Experiments", tagline: "Navigation and signage system exploration for physical environments.", status: "Project Card", year: "2022" },
  { title: "Public Communication", category: "Communication Systems", tagline: "Social communication project exploring public messaging and visual advocacy.", status: "Project Card", year: "2022" },
  { title: "Information Architecture", category: "Product Experiences", tagline: "Structural design work exploring navigation, hierarchy, and content organization.", status: "Archive", year: "2022" },
  { title: "Cognitive Science", category: "Product Experiences", tagline: "Research-informed design exploration connected to cognition and user behavior.", status: "Archive", year: "2021" },
  { title: "ELL Experience — TCS", category: "Product Experiences", tagline: "Experience design project focused on learning, language, and service interaction.", status: "Archive", year: "2021" },
  { title: "Systems Thinking", category: "Product Experiences", tagline: "Process and systems mapping exploration for understanding complex relationships.", status: "Archive", year: "2021" },
  { title: "Navya Baheti", category: "Brand Systems", tagline: "Visual identity and personal brand project.", status: "Archive", year: "2021" },
  { title: "Communication Theory", category: "Communication Systems", tagline: "Visual communication studies through posters, analysis, and media interpretation.", status: "Archive", year: "2021" },
  { title: "Poster Design", category: "Communication Systems", tagline: "Poster-based visual communication and layout exploration.", status: "Archive", year: "2021" },
  { title: "Applied Literature", category: "Print & Editorial", tagline: "Literature-based visual and editorial design exploration.", status: "Archive", year: "2021" },
  { title: "Space Design", category: "Spatial & Visual Experiments", tagline: "Spatial design exploration using form, layout, and physical experience.", status: "Archive", year: "2021" },
  { title: "Introduction to Materials & 3D Modelling", category: "Spatial & Visual Experiments", tagline: "Material and 3D form exploration.", status: "Archive", year: "2021" },
  { title: "Illustration Design", category: "Spatial & Visual Experiments", tagline: "Illustration and visual storytelling exploration.", status: "Archive", year: "2021" },
  { title: "Character Design", category: "Spatial & Visual Experiments", tagline: "Character development and expressive visual design.", status: "Archive", year: "2021" },
  { title: "Animation Video", category: "Spatial & Visual Experiments", tagline: "Motion and animation exploration.", status: "Archive", year: "2021" },
];

const categoryColor: Record<Category, string> = {
  "Product Experiences": "#00E0B8",
  "Brand Systems": "#FFB86B",
  "Communication Systems": "#7C5CFF",
  "Print & Editorial": "#FF6B9A",
  "Spatial & Visual Experiments": "#5AC8FF",
};

// Subtle gradient backgrounds per project (deterministic via index)
function cardGradient(p: Project, i: number) {
  const c = categoryColor[p.category];
  const angle = (i * 37) % 360;
  return `linear-gradient(${angle}deg, ${c}26 0%, #0E0B18 55%, #08070C 100%)`;
}

export const Route = createFileRoute("/atlas")({
  component: AtlasPage,
  head: () => ({
    meta: [
      { title: "Design Atlas — Siya" },
      { name: "description", content: "A complete archive of design projects — case studies, project cards, and explorations." },
    ],
  }),
});

function AtlasPage() {
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  const listRef = useRef<HTMLDivElement>(null);

  // Track which card is currently on top of the stack
  useEffect(() => {
    const handler = () => {
      const triggerY = window.innerHeight * 0.35;
      let current = 0;
      for (let i = 0; i < sectionsRef.current.length; i++) {
        const el = sectionsRef.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY) current = i;
      }
      setActiveIndex(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  // Auto-scroll the right-side list to keep active item in view
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const item = list.querySelector<HTMLElement>(`[data-idx="${activeIndex}"]`);
    if (item) {
      const itemTop = item.offsetTop;
      const itemH = item.offsetHeight;
      const listH = list.clientHeight;
      list.scrollTo({ top: itemTop - listH / 2 + itemH / 2, behavior: "smooth" });
    }
  }, [activeIndex]);

  const scrollToProject = (i: number) => {
    const el = sectionsRef.current[i];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + 8, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "#08070C", color: "#E8E6F5" }}>
      <ScrollProgress />
      <Nav />

      {/* Header */}
      <header className="mx-auto w-full max-w-7xl px-4 pt-28 pb-12 md:px-8 md:pt-32">
        <div className="text-[10px] uppercase tracking-[0.3em]" style={{ color: "#7C5CFF" }}>
          ◍ Design Atlas
        </div>
        <h1 className="mt-4 font-serif text-4xl leading-[1.02] md:text-6xl">
          Every project, stacked.
        </h1>
        <p className="mt-3 max-w-xl text-sm text-white/60">
          Scroll through {projects.length} projects — each one rises and rests on the last,
          like pages on a designer's desk.
        </p>
      </header>

      {/* Stacked stage */}
      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_280px]">
          {/* LEFT — sticky stack */}
          <div className="relative">
            {projects.map((p, i) => (
              <StackCard
                key={p.title}
                p={p}
                i={i}
                total={projects.length}
                setRef={(el) => { sectionsRef.current[i] = el; }}
                reduced={!!reduced}
              />
            ))}


          </div>

          {/* RIGHT — sticky project list */}
          <aside className="hidden md:block">
            <div
              className="sticky"
              style={{ top: "8vh", height: "78vh" }}
            >
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-4 backdrop-blur">
                <div className="mb-3 flex items-center justify-between px-2">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    Index
                  </div>
                  <div className="font-mono text-[10px] text-white/40">
                    {String(activeIndex + 1).padStart(2, "0")}/{projects.length}
                  </div>
                </div>
                <div
                  ref={listRef}
                  className="relative flex-1 overflow-y-auto pr-1"
                  style={{ scrollbarWidth: "thin" }}
                >
                  <ul className="space-y-0.5">
                    {projects.map((p, i) => {
                      const active = i === activeIndex;
                      return (
                        <li key={p.title} data-idx={i}>
                          <button
                            onClick={() => scrollToProject(i)}
                            className="group relative flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left transition-colors"
                            style={{
                              background: active ? "rgba(255,255,255,0.06)" : "transparent",
                            }}
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-all"
                              style={{
                                background: active ? categoryColor[p.category] : "rgba(255,255,255,0.2)",
                                boxShadow: active ? `0 0 12px ${categoryColor[p.category]}` : "none",
                              }}
                            />
                            <div className="min-w-0 flex-1">
                              <div
                                className="truncate text-xs leading-snug transition-colors"
                                style={{
                                  color: active ? "#fff" : "rgba(255,255,255,0.55)",
                                  fontWeight: active ? 500 : 400,
                                }}
                              >
                                {p.title}
                              </div>
                              {active && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40"
                                >
                                  {p.status}
                                </motion.div>
                              )}
                            </div>
                            {active && (
                              <motion.span
                                layoutId="active-indicator"
                                className="absolute left-0 top-1/2 h-6 w-[2px] -translate-y-1/2 rounded-r"
                                style={{ background: categoryColor[p.category] }}
                              />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* tail spacing so last card can settle */}
        <div style={{ height: "20vh" }} />
      </div>

      <Footer />
    </div>
  );
}

function StackCard({
  p,
  i,
  total,
  setRef,
  reduced,
}: {
  p: Project;
  i: number;
  total: number;
  setRef: (el: HTMLElement | null) => void;
  reduced: boolean;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // 0 = section just entered viewport bottom; 1 = section's top reached viewport top
    offset: ["start end", "start start"],
  });

  // As the NEXT section starts pushing this card out of view, shrink + fade slightly.
  const { scrollYProgress: outProgress } = useScroll({
    target: sectionRef,
    // 0 = card just stuck to top; 1 = card scrolled away
    offset: ["start start", "end start"],
  });

  const scale = useTransform(outProgress, [0, 1], reduced ? [1, 1] : [1, 0.92]);
  const opacity = useTransform(outProgress, [0, 0.7, 1], reduced ? [1, 1, 1] : [1, 0.85, 0.5]);
  // Entry: slide up from below
  const enterY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["8%", "0%"]);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
        setRef(el);
      }}
      data-idx={i}
      className="relative"
      style={{ height: "130vh", zIndex: i + 1 }}
    >
      <motion.article
        className="sticky overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.85)]"
        style={{
          top: "8vh",
          height: "84vh",
          background: "#0E0B18",
          scale,
          opacity,
          y: enterY,
          transformOrigin: "center top",
        }}
      >
        {/* Visual area */}
        <div
          className="relative h-[62%] w-full overflow-hidden"
          style={{ background: cardGradient(p, i) }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-50"
            style={{ background: categoryColor[p.category] }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full blur-3xl opacity-30"
            style={{ background: categoryColor[p.category] }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "3px 3px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-serif italic leading-none text-white/[0.07]"
              style={{ fontSize: "clamp(180px, 32vw, 420px)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: categoryColor[p.category],
                  boxShadow: `0 0 16px ${categoryColor[p.category]}`,
                }}
              />
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                {p.category}
              </span>
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-white/50">
              {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="relative flex h-[38%] items-center justify-between gap-6 px-8 py-6 md:px-12 md:py-8">
          <div className="min-w-0 flex-1">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              {p.year ?? ""} · {p.status}
            </div>
            <h2 className="mt-2 font-serif text-2xl leading-[1.05] md:text-4xl lg:text-5xl">
              {p.title}
            </h2>
            <p className="mt-2 line-clamp-2 max-w-2xl text-sm text-white/60">
              {p.tagline}
            </p>
          </div>
          <a
            href="#"
            className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:scale-105 hover:bg-white/10 md:h-16 md:w-16"
            style={{ boxShadow: `0 0 32px ${categoryColor[p.category]}30` }}
          >
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </motion.article>
    </section>
  );
}
