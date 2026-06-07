import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  type PanInfo,
} from "framer-motion";
import { ArrowUpRight, Orbit, GalleryHorizontal, Move, Layers } from "lucide-react";
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

// Midnight neon palette
const HUE = {
  bg: "#08070C",
  ink: "#E8E6F5",
  violet: "#7C5CFF",
  mint: "#00E0B8",
} as const;

const categoryColor: Record<Category, string> = {
  "Product Experiences": "#00E0B8",
  "Brand Systems": "#FFB86B",
  "Communication Systems": "#7C5CFF",
  "Print & Editorial": "#FF6B9A",
  "Spatial & Visual Experiments": "#5AC8FF",
};

const categoryShort: Record<Category, string> = {
  "Product Experiences": "Product",
  "Brand Systems": "Brand",
  "Communication Systems": "Comms",
  "Print & Editorial": "Print",
  "Spatial & Visual Experiments": "Spatial",
};

type Mode = "constellation" | "carousel" | "canvas" | "gallery";

const modes: Array<{ id: Mode; label: string; Icon: typeof Orbit }> = [
  { id: "constellation", label: "Constellation", Icon: Orbit },
  { id: "carousel", label: "Carousel", Icon: Layers },
  { id: "canvas", label: "Canvas", Icon: Move },
  { id: "gallery", label: "Gallery", Icon: GalleryHorizontal },
];

export const Route = createFileRoute("/atlas")({
  head: () => ({
    meta: [
      { title: "Design Atlas — Siya Parmar" },
      { name: "description", content: "Every project — product, brand, communication, print, and spatial — explored four ways: constellation, carousel, canvas, and gallery." },
      { property: "og:title", content: "Design Atlas — Siya Parmar" },
      { property: "og:description", content: "An interactive atlas of every project by Siya Parmar." },
    ],
  }),
  component: AtlasPage,
});

function AtlasPage() {
  const [mode, setMode] = useState<Mode>("constellation");
  const [active, setActive] = useState<Project | null>(null);

  return (
    <div
      className="min-h-screen"
      style={{
        background: HUE.bg,
        color: HUE.ink,
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <ScrollProgress />
      <Nav />

      {/* Ambient glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            `radial-gradient(60% 50% at 20% 10%, ${HUE.violet}22, transparent 60%),` +
            `radial-gradient(50% 40% at 90% 80%, ${HUE.mint}1f, transparent 65%),` +
            `radial-gradient(120% 80% at 50% 120%, #0F0B22 0%, transparent 70%)`,
        }}
      />
      <Starfield />

      <main className="relative pt-28">
        <Header />
        <ModeSwitcher mode={mode} setMode={setMode} />

        <section className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {mode === "constellation" && <ConstellationView onOpen={setActive} />}
              {mode === "carousel" && <CarouselView onOpen={setActive} />}
              {mode === "canvas" && <CanvasView onOpen={setActive} />}
              {mode === "gallery" && <GalleryView onOpen={setActive} />}
            </motion.div>
          </AnimatePresence>
        </section>

        <Legend />
      </main>

      <ProjectDrawer project={active} onClose={() => setActive(null)} />

      <Footer />
    </div>
  );
}

/* ---------- Header & chrome ---------- */

function Header() {
  return (
    <header className="mx-auto w-full max-w-7xl px-4 pb-8 md:px-8">
      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <div
            className="mb-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em]"
            style={{ color: `${HUE.ink}99` }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: HUE.mint, boxShadow: `0 0 12px ${HUE.mint}` }}
            />
            Design Atlas · {projects.length} works
          </div>
          <h1
            className="text-5xl leading-[0.95] md:text-7xl"
            style={{
              fontFamily: '"Instrument Serif", ui-serif, Georgia, serif',
              letterSpacing: "-0.02em",
            }}
          >
            Every project,
            <br />
            <em
              style={{
                background: `linear-gradient(95deg, ${HUE.violet}, ${HUE.mint})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              four ways to look.
            </em>
          </h1>
        </div>
        <p className="max-w-sm text-sm leading-relaxed" style={{ color: `${HUE.ink}aa` }}>
          A living atlas. Switch the lens — orbit them as a constellation, flip through them as a deck, drift across an open canvas, or scroll them as a filmstrip. Same works, different gravity.
        </p>
      </div>
    </header>
  );
}

function ModeSwitcher({ mode, setMode }: { mode: Mode; setMode: (m: Mode) => void }) {
  return (
    <div className="sticky top-20 z-30 mx-auto mb-10 w-full max-w-7xl px-4 md:px-8">
      <div
        className="mx-auto flex w-full max-w-2xl items-center justify-center gap-1 rounded-full border p-1.5 backdrop-blur-xl"
        style={{
          borderColor: `${HUE.ink}1a`,
          background: `${HUE.bg}cc`,
          boxShadow: `0 10px 40px -10px ${HUE.violet}33`,
        }}
      >
        {modes.map(({ id, label, Icon }) => {
          const active = mode === id;
          return (
            <button
              key={id}
              onClick={() => setMode(id)}
              className="relative flex-1 rounded-full px-3 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors"
              style={{ color: active ? HUE.bg : `${HUE.ink}b0` }}
            >
              {active && (
                <motion.span
                  layoutId="mode-pill"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${HUE.mint}, ${HUE.violet})`,
                    boxShadow: `0 0 24px ${HUE.violet}66`,
                  }}
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
              <span className="relative z-10 inline-flex items-center justify-center gap-1.5">
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="mx-auto mt-16 mb-24 w-full max-w-7xl px-4 md:px-8">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.22em]" style={{ color: `${HUE.ink}80` }}>
        <span>Legend</span>
        {(Object.keys(categoryColor) as Category[]).map((c) => (
          <span key={c} className="inline-flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: categoryColor[c], boxShadow: `0 0 10px ${categoryColor[c]}` }}
            />
            {categoryShort[c]}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Starfield (subtle CSS) ---------- */

function Starfield() {
  const reduced = useReducedMotion();
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            `radial-gradient(1px 1px at 12% 22%, ${HUE.ink}cc, transparent 60%),` +
            `radial-gradient(1px 1px at 78% 64%, ${HUE.ink}aa, transparent 60%),` +
            `radial-gradient(1.5px 1.5px at 35% 78%, ${HUE.mint}aa, transparent 60%),` +
            `radial-gradient(1px 1px at 60% 12%, ${HUE.violet}cc, transparent 60%),` +
            `radial-gradient(1px 1px at 88% 30%, ${HUE.ink}88, transparent 60%),` +
            `radial-gradient(1px 1px at 22% 55%, ${HUE.ink}88, transparent 60%)`,
        }}
        animate={reduced ? undefined : { opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ---------- VIEW 1: Constellation ---------- */

function ConstellationView({ onOpen }: { onOpen: (p: Project) => void }) {
  const reduced = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  // Deterministic positions on a unit field, grouped loosely by category.
  const nodes = useMemo(() => {
    const groups: Record<Category, Project[]> = {
      "Product Experiences": [],
      "Brand Systems": [],
      "Communication Systems": [],
      "Print & Editorial": [],
      "Spatial & Visual Experiments": [],
    };
    projects.forEach((p) => groups[p.category].push(p));
    const cats = Object.keys(groups) as Category[];
    const placed: Array<{ p: Project; x: number; y: number; r: number }> = [];
    cats.forEach((cat, ci) => {
      const angle0 = (ci / cats.length) * Math.PI * 2;
      const cx = 0.5 + Math.cos(angle0) * 0.32;
      const cy = 0.5 + Math.sin(angle0) * 0.32;
      groups[cat].forEach((p, i) => {
        const n = groups[cat].length;
        const a = (i / n) * Math.PI * 2 + ci;
        const radius = 0.08 + ((i * 37) % 70) / 700;
        placed.push({
          p,
          x: cx + Math.cos(a) * radius,
          y: cy + Math.sin(a) * radius,
          r: p.featured ? 28 : p.status === "Case Study" ? 22 : 14,
        });
      });
    });
    return placed;
  }, []);

  return (
    <div
      ref={stageRef}
      onMouseMove={(e) => {
        const r = stageRef.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl border md:aspect-[16/9]"
      style={{
        borderColor: `${HUE.ink}14`,
        background: `radial-gradient(80% 60% at 50% 50%, #110D24 0%, ${HUE.bg} 75%)`,
      }}
    >
      {/* Orbit rings */}
      {[0.2, 0.32, 0.46].map((r, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{
            width: `${r * 200}%`,
            height: `${r * 200}%`,
            borderColor: `${HUE.ink}0c`,
            x: "-50%",
            y: "-50%",
          }}
          animate={reduced ? undefined : { rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 80 + i * 40, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Cursor halo */}
      <CursorHalo mx={mx} my={my} />

      {/* Nodes */}
      {nodes.map(({ p, x, y, r }, i) => (
        <ConstellationNode
          key={p.title}
          project={p}
          x={x}
          y={y}
          r={r}
          mx={mx}
          my={my}
          onOpen={() => onOpen(p)}
          i={i}
        />
      ))}

      {/* Hint */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em]"
        style={{ color: `${HUE.ink}55` }}
      >
        Move cursor — nodes drift · click to open
      </div>
    </div>
  );
}

function CursorHalo({ mx, my }: { mx: ReturnType<typeof useMotionValue<number>>; my: ReturnType<typeof useMotionValue<number>> }) {
  const x = useTransform(mx, (v) => `${v * 100}%`);
  const y = useTransform(my, (v) => `${v * 100}%`);
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      style={{
        left: x,
        top: y,
        background: `radial-gradient(circle, ${HUE.violet}55, transparent 65%)`,
      }}
    />
  );
}

function ConstellationNode({
  project,
  x,
  y,
  r,
  mx,
  my,
  onOpen,
  i,
}: {
  project: Project;
  x: number;
  y: number;
  r: number;
  mx: ReturnType<typeof useMotionValue<number>>;
  my: ReturnType<typeof useMotionValue<number>>;
  onOpen: () => void;
  i: number;
}) {
  const reduced = useReducedMotion();
  const color = categoryColor[project.category];

  // Magnetic offset based on cursor proximity
  const ox = useTransform([mx, my], ([cx, cy]) => {
    const dx = (cx as number) - x;
    const dy = (cy as number) - y;
    const d = Math.hypot(dx, dy);
    if (d > 0.18) return 0;
    return dx * (1 - d / 0.18) * 60;
  });
  const oy = useTransform([mx, my], ([cx, cy]) => {
    const dx = (cx as number) - x;
    const dy = (cy as number) - y;
    const d = Math.hypot(dx, dy);
    if (d > 0.18) return 0;
    return dy * (1 - d / 0.18) * 60;
  });
  const sx = useSpring(ox, { stiffness: 140, damping: 18 });
  const sy = useSpring(oy, { stiffness: 140, damping: 18 });

  const [hover, setHover] = useState(false);

  return (
    <motion.button
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="absolute -translate-x-1/2 -translate-y-1/2 outline-none"
      style={{ left: `${x * 100}%`, top: `${y * 100}%`, x: sx, y: sy }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.02 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse */}
      {!reduced && (
        <motion.span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ width: r * 2, height: r * 2, background: color }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 3 + (i % 5) * 0.4, repeat: Infinity, ease: "easeOut" }}
        />
      )}
      <span
        className="relative block rounded-full"
        style={{
          width: r,
          height: r,
          background: color,
          boxShadow: `0 0 ${r * 0.8}px ${color}, 0 0 ${r * 1.6}px ${color}55`,
        }}
      />
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border p-3 text-left backdrop-blur-xl"
            style={{
              borderColor: `${HUE.ink}1f`,
              background: `${HUE.bg}e6`,
              boxShadow: `0 20px 60px -20px ${color}88`,
            }}
          >
            <div
              className="text-[10px] uppercase tracking-[0.22em]"
              style={{ color }}
            >
              {categoryShort[project.category]} · {project.year ?? "—"}
            </div>
            <div
              className="mt-1 text-sm leading-snug"
              style={{ fontFamily: '"Instrument Serif", serif', fontSize: 16 }}
            >
              {project.title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

/* ---------- VIEW 2: Carousel (3D cover-flow) ---------- */

function CarouselView({ onOpen }: { onOpen: (p: Project) => void }) {
  const [index, setIndex] = useState(0);
  const list = projects;
  const len = list.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % len);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + len) % len);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [len]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) setIndex((i) => (i + 1) % len);
    else if (info.offset.x > 60) setIndex((i) => (i - 1 + len) % len);
  };

  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl border md:aspect-[16/9]"
      style={{ borderColor: `${HUE.ink}14`, background: `radial-gradient(80% 60% at 50% 30%, #14102A 0%, ${HUE.bg} 75%)` }}
    >
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: 1400 }}>
        <motion.div
          className="relative h-full w-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {list.map((p, i) => {
            const offset = ((i - index + len) % len);
            const o = offset > len / 2 ? offset - len : offset;
            const abs = Math.abs(o);
            if (abs > 3) return null;
            return (
              <motion.button
                key={p.title}
                onClick={() => (i === index ? onOpen(p) : setIndex(i))}
                className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-5 text-left md:w-80"
                style={{
                  borderColor: `${HUE.ink}1a`,
                  background: `linear-gradient(160deg, #1A1530, #0C0A1C)`,
                  boxShadow: i === index
                    ? `0 30px 80px -20px ${categoryColor[p.category]}66, 0 0 0 1px ${categoryColor[p.category]}55 inset`
                    : `0 20px 60px -30px #000`,
                }}
                animate={{
                  x: o * 180,
                  rotateY: o * -22,
                  scale: i === index ? 1 : 0.82 - abs * 0.05,
                  opacity: 1 - abs * 0.28,
                  zIndex: 10 - abs,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
              >
                <div
                  className="text-[10px] uppercase tracking-[0.24em]"
                  style={{ color: categoryColor[p.category] }}
                >
                  {categoryShort[p.category]} · {p.year ?? "—"}
                </div>
                <div
                  className="mt-3 leading-[1.05]"
                  style={{ fontFamily: '"Instrument Serif", serif', fontSize: 28 }}
                >
                  {p.title}
                </div>
                <p className="mt-3 text-xs leading-relaxed" style={{ color: `${HUE.ink}99` }}>
                  {p.tagline}
                </p>
                <div className="mt-5 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em]" style={{ color: HUE.ink }}>
                  Open <ArrowUpRight className="h-3 w-3" />
                </div>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Counter */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.3em]" style={{ color: `${HUE.ink}80` }}>
        {String(index + 1).padStart(2, "0")} <span style={{ color: `${HUE.ink}40` }}>/ {String(len).padStart(2, "0")}</span> · ← → or drag
      </div>
    </div>
  );
}

/* ---------- VIEW 3: Canvas (pannable infinite plane) ---------- */

function CanvasView({ onOpen }: { onOpen: (p: Project) => void }) {
  // Pre-scattered positions on a 1600x1000 plane
  const placed = useMemo(() => {
    const out: Array<{ p: Project; x: number; y: number; tilt: number }> = [];
    projects.forEach((p, i) => {
      const seed = (i * 9301 + 49297) % 233280;
      const r = seed / 233280;
      const r2 = ((i * 17) % 100) / 100;
      out.push({
        p,
        x: 80 + r * 1400,
        y: 80 + r2 * 820,
        tilt: (((i * 13) % 9) - 4),
      });
    });
    return out;
  }, []);

  return (
    <div
      className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-3xl border md:aspect-[16/9]"
      style={{
        borderColor: `${HUE.ink}14`,
        background:
          `linear-gradient(${HUE.ink}06 1px, transparent 1px), ` +
          `linear-gradient(90deg, ${HUE.ink}06 1px, transparent 1px), ` +
          HUE.bg,
        backgroundSize: "48px 48px, 48px 48px, auto",
      }}
    >
      <motion.div
        className="absolute left-0 top-0 cursor-grab active:cursor-grabbing"
        style={{ width: 1600, height: 1000 }}
        drag
        dragConstraints={{ left: -800, right: 100, top: -400, bottom: 100 }}
        dragMomentum
      >
        {placed.map(({ p, x, y, tilt }, i) => {
          const color = categoryColor[p.category];
          return (
            <motion.button
              key={p.title}
              onClick={() => onOpen(p)}
              className="absolute w-44 rounded-xl border p-3 text-left backdrop-blur-sm"
              style={{
                left: x,
                top: y,
                rotate: `${tilt}deg`,
                borderColor: `${HUE.ink}14`,
                background: `linear-gradient(160deg, #15112A, #0A0816)`,
                boxShadow: `0 12px 40px -16px ${color}55`,
              }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.015, duration: 0.5 }}
              whileHover={{ scale: 1.06, zIndex: 50, rotate: 0, boxShadow: `0 24px 60px -10px ${color}aa` }}
            >
              <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.22em]" style={{ color }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
                {categoryShort[p.category]}
              </div>
              <div className="mt-2 leading-tight" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 17 }}>
                {p.title}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.18em]" style={{ color: `${HUE.ink}55` }}>
                {p.year ?? "—"}
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] backdrop-blur" style={{ borderColor: `${HUE.ink}1f`, background: `${HUE.bg}cc`, color: `${HUE.ink}80` }}>
        Drag to explore the plane
      </div>
    </div>
  );
}

/* ---------- VIEW 4: Gallery (scroll-driven parallax filmstrip) ---------- */

function GalleryView({ onOpen }: { onOpen: (p: Project) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);

  return (
    <div ref={ref} style={{ height: `${projects.length * 50}vh` }} className="relative">
      <div className="sticky top-32 h-[78vh] overflow-hidden rounded-3xl border" style={{ borderColor: `${HUE.ink}14`, background: `radial-gradient(60% 80% at 50% 50%, #110D24, ${HUE.bg})` }}>
        <motion.div className="flex h-full items-center gap-8 px-[10vw]" style={{ x }}>
          {projects.map((p, i) => {
            const color = categoryColor[p.category];
            const depth = (i % 3) - 1; // -1, 0, 1
            return (
              <motion.button
                key={p.title}
                onClick={() => onOpen(p)}
                className="group relative h-[60%] w-[28vw] shrink-0 overflow-hidden rounded-2xl border p-6 text-left"
                style={{
                  borderColor: `${HUE.ink}18`,
                  background: `linear-gradient(160deg, #14102A, #08070C)`,
                  marginTop: depth * 60,
                }}
                whileHover={{ y: -8, boxShadow: `0 40px 80px -20px ${color}88` }}
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: color }}
                />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.28em]" style={{ color }}>
                      № {String(i + 1).padStart(2, "0")} · {categoryShort[p.category]}
                    </div>
                    <div className="mt-6 leading-[1] text-balance" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 36 }}>
                      {p.title}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs leading-relaxed" style={{ color: `${HUE.ink}99` }}>
                      {p.tagline}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.22em]">
                      Open <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>
        <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em]" style={{ color: `${HUE.ink}55` }}>
          Scroll ↓ to glide through
        </div>
      </div>
    </div>
  );
}

/* ---------- Project drawer ---------- */

function ProjectDrawer({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
            style={{ background: `${HUE.bg}cc`, backdropFilter: "blur(8px)" }}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 32 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto border-l p-8"
            style={{ borderColor: `${HUE.ink}1a`, background: `linear-gradient(180deg, #110D24, ${HUE.bg})`, color: HUE.ink }}
          >
            <button
              onClick={onClose}
              className="text-[10px] uppercase tracking-[0.3em]"
              style={{ color: `${HUE.ink}80` }}
            >
              ← Close
            </button>
            <div
              className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em]"
              style={{ color: categoryColor[project.category] }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: categoryColor[project.category], boxShadow: `0 0 10px ${categoryColor[project.category]}` }} />
              {project.category} · {project.year ?? "—"}
            </div>
            <h2 className="mt-4 leading-[1.02]" style={{ fontFamily: '"Instrument Serif", serif', fontSize: 44 }}>
              {project.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed" style={{ color: `${HUE.ink}b0` }}>
              {project.tagline}
            </p>
            <div className="mt-6 text-[11px] uppercase tracking-[0.22em]" style={{ color: `${HUE.ink}70` }}>
              {project.status}
            </div>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm"
              style={{
                background: `linear-gradient(135deg, ${HUE.mint}, ${HUE.violet})`,
                color: HUE.bg,
                boxShadow: `0 20px 50px -10px ${HUE.violet}88`,
              }}
            >
              View Full Project <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
