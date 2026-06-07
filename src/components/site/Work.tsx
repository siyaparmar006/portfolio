import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  tags: string[];
  description: string;
  cta: string;
  gradient: string;
  badge?: string;
};

const projects: Project[] = [
  {
    title: "Referral System for Newcomer Family Support",
    category: "Service Design",
    tags: ["Service Design", "Information Architecture", "Communication Design"],
    description:
      "Redesigned partner-facing referral guidelines for New Neighbors Partnership to make complex information clearer, more accessible, and easier to act on — later showcased during a UN General Assembly refugee employment event.",
    cta: "View Case Study",
    gradient:
      "radial-gradient(circle at 30% 30%, oklch(0.86 0.10 55), oklch(0.5 0.06 40))",
    badge: "01",
  },
  {
    title: "Product Experience Case Study",
    category: "UX / UI",
    tags: ["UX/UI", "Product Thinking", "Visual Interface Design"],
    description:
      "A digital product experience focused on clear flows, intuitive screens, and human-centered interaction.",
    cta: "Coming Soon",
    gradient:
      "radial-gradient(circle at 70% 40%, oklch(0.576 0.190 275.7 / 0.55), oklch(0.28 0.02 80))",
    badge: "02",
  },
  {
    title: "Brand-Led Product System",
    category: "Branding",
    tags: ["Branding", "Product Communication", "Visual System"],
    description:
      "A brand and product communication project exploring identity, packaging, storytelling, and visual consistency.",
    cta: "Coming Soon",
    gradient:
      "radial-gradient(circle at 30% 70%, oklch(0.94 0.018 75), oklch(0.7 0.10 50))",
    badge: "03",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      className="group relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/70 p-4 shadow-soft md:p-6"
    >
      <div className="grid gap-6 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-10">
        {/* Visual */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
          <motion.div
            className="absolute inset-0"
            style={{ background: p.gradient }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 grain opacity-50" />
          <div className="absolute left-4 top-4 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] text-foreground/80 backdrop-blur">
            {p.badge}
          </div>
        </div>

        {/* Content */}
        <div className="px-1 md:px-2">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {p.category}
          </div>
          <h3 className="mt-3 font-display text-2xl leading-[1.05] md:text-4xl">
            {p.title}
          </h3>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground md:text-[15px]">
            {p.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-[11px] text-foreground/70"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6">
            {p.cta === "Coming Soon" ? (
              <span className="text-sm text-muted-foreground">Coming Soon</span>
            ) : (
              <a
                href="#"
                className="group/link inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
              >
                {p.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
        style={{ background: "var(--gradient-warm)" }}
      />
      <span className="absolute bottom-4 right-5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">
        0{i + 1} / {projects.length}
      </span>
    </motion.article>
  );
}

export function Work() {
  const reduced = useReducedMotion();

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col gap-3 px-2 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
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

        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
