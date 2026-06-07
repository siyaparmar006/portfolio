import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
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

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.35"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [0.97, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }}>
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
          <div className="font-display text-2xl leading-tight">{p.title}</div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-secondary-foreground/70 transition-colors group-hover:bg-foreground/5 group-hover:text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {p.description}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-1 text-sm font-medium">
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
  const frameRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start 0.9", "start 0.2"],
  });
  const frameScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [1, 1] : [0.96, 1],
  );
  const frameOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [1, 1] : [0.5, 1],
  );

  return (
    <section id="work" className="relative px-4 py-32 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl px-2">
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Selected Work
          </div>
          <h2 className="font-display text-balance text-4xl leading-[1.05] md:text-5xl">
            A focused body of work,<br />carefully chosen.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Product, service, and brand systems designed across digital and physical touchpoints.
          </p>
        </div>

        <motion.div
          ref={frameRef}
          style={{ scale: frameScale, opacity: frameOpacity }}
          className="relative overflow-hidden rounded-[2.25rem] border border-border/60 bg-[var(--clay-1)]/12 p-5 shadow-soft md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: "var(--gradient-soft)" }}
          />
          <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} p={p} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
