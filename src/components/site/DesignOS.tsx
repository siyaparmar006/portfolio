import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Eye, Heart, Palette, Layers } from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "Clarity",
    body: "I structure information so people can understand what matters, where to go, and what to do next.",
  },
  {
    icon: Heart,
    title: "Humanity",
    body: "I design with empathy, context, accessibility, and emotional clarity — especially for real people navigating complex systems.",
  },
  {
    icon: Palette,
    title: "Visual Memory",
    body: "I use typography, color, layout, and visual rhythm to make digital experiences feel distinct and memorable.",
  },
  {
    icon: Layers,
    title: "Systems",
    body: "I build reusable patterns across web, mobile, print, social, and brand touchpoints so design feels consistent and scalable.",
  },
];

function PrincipleCard({
  p,
  i,
  progress,
}: {
  p: (typeof principles)[number];
  i: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const reduced = useReducedMotion();
  // Stagger: each card reveals across a slice of the parent progress
  const start = 0.1 + i * 0.12;
  const end = start + 0.18;
  const clip = useTransform(
    progress,
    [start, end],
    reduced
      ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
      : ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"],
  );
  const y = useTransform(progress, [start, end], reduced ? [0, 0] : [24, 0]);
  const opacity = useTransform(progress, [start, end], reduced ? [1, 1] : [0, 1]);

  return (
    <motion.div
      style={{ clipPath: clip, y, opacity }}
      className="h-full"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition-shadow duration-500 hover:shadow-lift"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: "var(--gradient-warm)" }}
        />
        <div className="relative">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground/80">
              <p.icon className="h-5 w-5" />
            </div>
            <span className="text-xs text-muted-foreground/60">0{i + 1}</span>
          </div>
          <div className="font-display text-xl leading-tight">{p.title}</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          <div className="mt-6 h-px w-full bg-border/60" />
          <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
            <span>principle</span>
            <span>system · 0{i + 1}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function DesignOS() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: frameProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "start 0.2"],
  });
  const frameScale = useTransform(
    frameProgress,
    [0, 1],
    reduced ? [1, 1] : [0.96, 1],
  );
  const frameOpacity = useTransform(
    frameProgress,
    [0, 1],
    reduced ? [1, 1] : [0.45, 1],
  );

  return (
    <section
      ref={sectionRef}
      id="os"
      className="relative px-4 py-32 md:px-6"
      style={{ minHeight: "180vh" }}
    >
      <div className="sticky top-24 mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl px-2">
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Design OS
          </div>
          <h2 className="font-display text-balance text-4xl leading-[1.05] md:text-5xl">
            Four principles that hold the rest together.
          </h2>
        </div>

        <motion.div
          ref={frameRef}
          style={{ scale: frameScale, opacity: frameOpacity }}
          className="relative overflow-hidden rounded-[2.25rem] border border-border/60 bg-card/80 p-5 shadow-soft md:p-8"
        >
          {/* dashboard chrome */}
          <div className="mb-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--clay-2)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--clay-1)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--clay-3)]" />
              <span className="ml-3">os / principles</span>
            </div>
            <span>4 modules</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <PrincipleCard key={p.title} p={p} i={i} progress={scrollYProgress} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
