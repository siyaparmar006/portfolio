import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  label: string;
  tags: string[];
  description: string;
  cta: string;
  gradient: string;
  badge: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "New Neighbors Partnership Communication System",
    label: "Nonprofit Service + Communication Ecosystem",
    tags: [
      "Service Design",
      "Information Architecture",
      "Visual Systems",
      "Print + Digital",
    ],
    description:
      "Designed a scalable communication system for New Neighbors Partnership, unifying referral guidelines, volunteer onboarding, impact storytelling, cultural education, and brand materials into clearer, more accessible touchpoints — with the referral guidelines later showcased during a UN General Assembly refugee employment event.",
    cta: "View Case Study",
    gradient:
      "radial-gradient(circle at 25% 25%, oklch(0.576 0.190 275.7 / 0.55), oklch(0.22 0.01 80) 70%)",
    badge: "01 · Signature",
    featured: true,
  },
  {
    title: "LiveSeeds Plant-Care App",
    label: "Mobile Product Experience",
    tags: ["UX/UI", "Product Design", "Visual Interface Design"],
    description:
      "Designed a plant-care mobile app experience focused on helping users understand plant needs, follow care guidance, and navigate a clear, approachable digital interface.",
    cta: "View Case Study",
    gradient:
      "radial-gradient(circle at 70% 35%, oklch(0.78 0.12 150 / 0.45), oklch(0.24 0.01 80) 75%)",
    badge: "02",
  },
  {
    title: "Evair Product Branding & Packaging System",
    label: "Product Identity",
    tags: ["Branding", "Packaging", "Product Communication"],
    description:
      "Developed a brand and packaging direction for a car freshener product, combining market research, visual identity exploration, packaging structure, and product storytelling.",
    cta: "View Case Study",
    gradient:
      "radial-gradient(circle at 30% 70%, oklch(0.88 0.10 70), oklch(0.55 0.09 45) 75%)",
    badge: "03",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const reduced = useReducedMotion();
  const isFeatured = p.featured;

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced ? undefined : { y: -4 }}
      className={`group relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/70 p-4 shadow-soft transition-shadow duration-500 hover:shadow-lift md:p-6 ${
        isFeatured ? "ring-1 ring-primary/30" : ""
      }`}
    >
      <div
        className={`grid gap-6 md:gap-10 md:items-center ${
          isFeatured ? "md:grid-cols-[1.15fr_1fr]" : "md:grid-cols-[1.05fr_1fr]"
        }`}
      >
        {/* Visual */}
        <div
          className={`relative overflow-hidden rounded-[1.5rem] ${
            isFeatured ? "aspect-[4/3.1]" : "aspect-[4/3]"
          }`}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: p.gradient }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 grain-noise opacity-40" />
          <div className="absolute left-4 top-4 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/80 backdrop-blur">
            {p.badge}
          </div>
        </div>

        {/* Content */}
        <div className="px-1 md:px-2">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {p.label}
          </div>
          <h3
            className={`mt-3 font-display leading-[1.05] ${
              isFeatured ? "text-3xl md:text-5xl" : "text-2xl md:text-4xl"
            }`}
          >
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
            <a
              href="#"
              className="group/link inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
            >
              {p.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
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
          className="mb-10 flex flex-col gap-3 px-2 md:mb-14"
        >
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Signature Case Studies
          </div>
          <h2 className="max-w-3xl font-display text-balance text-3xl leading-[1.05] md:text-5xl">
            A focused body of work, built around clarity, systems, and visual memory.
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Three projects that represent how I approach product thinking, service
            communication, brand systems, and human-centered visual design.
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
