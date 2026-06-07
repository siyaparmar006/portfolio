import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
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
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();
  const start = 0.25 + i * 0.13;
  const end = start + 0.2;
  const clip = useTransform(
    progress,
    [start, end],
    reduced
      ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
      : ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"],
  );
  const y = useTransform(progress, [start, end], reduced ? [0, 0] : [30, 0]);
  const opacity = useTransform(progress, [start, end], reduced ? [1, 1] : [0, 1]);
  const scale = useTransform(progress, [start, end], reduced ? [1, 1] : [0.96, 1]);

  return (
    <motion.div style={{ clipPath: clip, y, opacity, scale }} className="h-full">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card p-5 shadow-soft transition-shadow duration-500 hover:shadow-lift md:p-6"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: "var(--gradient-warm)" }}
        />
        <div className="relative">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground/80">
              <p.icon className="h-5 w-5" />
            </div>
            <span className="text-xs text-muted-foreground/60">0{i + 1}</span>
          </div>
          <div className="font-display text-xl leading-tight">{p.title}</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          <div className="mt-5 h-px w-full bg-border/60" />
          <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
            <span>principle</span>
            <span>os · 0{i + 1}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function DesignOS() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const frameScale = useTransform(
    scrollYProgress,
    [0, 0.2],
    reduced ? [1, 1] : [0.94, 1],
  );
  const frameOpacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    reduced ? [1, 1] : [0.5, 1],
  );
  const titleY = useTransform(scrollYProgress, [0, 0.2], reduced ? [0, 0] : [50, 0]);
  const stageY = useTransform(scrollYProgress, [0.85, 1], reduced ? [0, 0] : [0, -60]);
  const stageOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0.4]);

  // animated accent dot moving across progress bar
  const dotX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="os"
      ref={sectionRef}
      className="relative"
      style={{ height: "320vh" }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden px-4 md:px-6">
        <motion.div
          style={{ y: stageY, opacity: stageOpacity }}
          className="mx-auto w-full max-w-6xl"
        >
          <motion.div
            style={{ y: titleY }}
            className="mb-6 max-w-2xl px-2 md:mb-8"
          >
            <div className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              My Design OS
            </div>
            <h2 className="font-display text-balance text-3xl leading-[1.05] md:text-5xl">
              The principles that shape how I design products, systems, and visual experiences.
            </h2>
          </motion.div>

          <motion.div
            style={{ scale: frameScale, opacity: frameOpacity }}
            className="relative overflow-hidden rounded-[2.25rem] border border-border/60 bg-card/80 p-4 shadow-soft md:p-8"
          >
            <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--clay-2)]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--clay-1)]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--clay-3)]" />
                <span className="ml-3">os / principles</span>
              </div>
              <span>4 modules</span>
            </div>

            {/* progress line with accent dot */}
            <div className="relative mb-6 h-px w-full bg-border/60">
              <motion.span
                style={{ left: dotX }}
                className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              >
                <span
                  className="block h-full w-full rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              </motion.span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {principles.map((p, i) => (
                <PrincipleCard key={p.title} p={p} i={i} progress={scrollYProgress} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
