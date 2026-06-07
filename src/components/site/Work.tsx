import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  tags: string[];
  description: string;
  cta: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Referral System for Newcomer Family Support",
    tags: ["Service Design", "Information Architecture", "Communication Design"],
    description:
      "Redesigned partner-facing referral guidelines for New Neighbors Partnership to make complex information clearer, more accessible, and easier to act on — later showcased during a UN General Assembly refugee employment event.",
    cta: "View Case Study",
    gradient: "linear-gradient(135deg, oklch(0.86 0.08 55), oklch(0.82 0.07 35))",
  },
  {
    title: "Product Experience Case Study",
    tags: ["UX/UI", "Product Thinking", "Visual Interface Design"],
    description:
      "A digital product experience focused on clear flows, intuitive screens, and human-centered interaction.",
    cta: "Coming Soon",
    gradient: "linear-gradient(135deg, oklch(0.88 0.05 130), oklch(0.78 0.07 150))",
  },
  {
    title: "Brand-Led Product System",
    tags: ["Branding", "Product Communication", "Visual System"],
    description:
      "A brand and product communication project exploring identity, packaging, storytelling, and visual consistency.",
    cta: "Coming Soon",
    gradient: "linear-gradient(135deg, oklch(0.94 0.018 75), oklch(0.86 0.08 55))",
  },
];

function ProjectCard({
  p,
  index,
  progress,
}: {
  p: Project;
  index: number;
  progress: MotionValue<number>;
}) {
  const reduced = useReducedMotion();
  // Stagger: each card reveals across a slice
  const start = 0.3 + index * 0.12;
  const end = start + 0.18;
  const y = useTransform(progress, [start, end], reduced ? [0, 0] : [80, 0]);
  const opacity = useTransform(progress, [start, end], reduced ? [1, 1] : [0, 1]);
  const scale = useTransform(progress, [start, end], reduced ? [1, 1] : [0.94, 1]);

  return (
    <motion.div style={{ y, opacity, scale }} className="h-full">
      <motion.div
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card p-5 shadow-soft transition-shadow duration-500 hover:shadow-lift"
      >
        <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl">
          <motion.div
            className="absolute inset-0"
            style={{ background: p.gradient }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.08, x: 8 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 grain opacity-60" />
          <div className="absolute left-3 top-3 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-medium text-foreground/70 backdrop-blur">
            0{index + 1}
          </div>
        </div>
        <div className="flex-1">
          <div className="font-display text-xl leading-tight md:text-2xl">{p.title}</div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-secondary-foreground/70 transition-colors group-hover:bg-foreground/5 group-hover:text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {p.description}
          </p>
        </div>
        <div className="mt-5 flex items-center gap-1 text-sm font-medium">
          {p.cta === "Coming Soon" ? (
            <span className="text-muted-foreground">Coming Soon</span>
          ) : (
            <a
              href="#"
              className="group/link inline-flex items-center gap-1 text-foreground transition-colors hover:text-foreground/80"
            >
              {p.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Stage entrance (scale frame up as you scroll in)
  const frameScale = useTransform(
    scrollYProgress,
    [0, 0.25],
    reduced ? [1, 1] : [0.92, 1],
  );
  const frameOpacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    reduced ? [1, 1] : [0.5, 1],
  );

  // Title slide-in from below
  const titleY = useTransform(scrollYProgress, [0, 0.2], reduced ? [0, 0] : [60, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Stage exit
  const stageY = useTransform(scrollYProgress, [0.85, 1], reduced ? [0, 0] : [0, -80]);
  const stageOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0.4]);

  return (
    <section
      id="work"
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
            style={{ y: titleY, opacity: titleOpacity }}
            className="mb-6 flex flex-col gap-2 px-2 md:mb-8 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-2xl">
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Selected Work
              </div>
              <h2 className="font-display text-balance text-3xl leading-[1.05] md:text-5xl">
                A focused body of work, carefully chosen.
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground md:text-base">
              Product, service, and brand systems designed across digital and physical touchpoints.
            </p>
          </motion.div>

          <motion.div
            style={{ scale: frameScale, opacity: frameOpacity }}
            className="relative overflow-hidden rounded-[2.25rem] border border-border/60 bg-[var(--clay-1)]/12 p-4 shadow-soft md:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{ background: "var(--gradient-soft)" }}
            />
            {/* dashboard chrome */}
            <div className="relative mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--clay-2)]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--clay-1)]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--clay-3)]" />
                <span className="ml-3">work / selected</span>
              </div>
              <span>3 projects</span>
            </div>
            <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <ProjectCard key={p.title} p={p} index={i} progress={scrollYProgress} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
