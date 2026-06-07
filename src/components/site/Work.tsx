import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion";

type Project = {
  title: string;
  kind: string;
  year: string;
  tags: string[];
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Field Notes OS",
    kind: "Product design · Design system",
    year: "2025",
    tags: ["Systems", "Web App", "Motion"],
    gradient: "linear-gradient(135deg, oklch(0.86 0.08 55), oklch(0.82 0.07 35))",
  },
  {
    title: "Northbound Studio",
    kind: "Brand identity · Site",
    year: "2025",
    tags: ["Brand", "Editorial"],
    gradient: "linear-gradient(135deg, oklch(0.22 0.02 50), oklch(0.4 0.04 60))",
  },
  {
    title: "Quiet Climate",
    kind: "Product · Narrative",
    year: "2024",
    tags: ["Web", "Story"],
    gradient: "linear-gradient(135deg, oklch(0.88 0.05 130), oklch(0.78 0.07 150))",
  },
  {
    title: "Atlas Reader",
    kind: "Native app",
    year: "2024",
    tags: ["Mobile", "Type"],
    gradient: "linear-gradient(135deg, oklch(0.94 0.018 75), oklch(0.86 0.08 55))",
  },
];

export function Work() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Selected Work
            </div>
            <h2 className="font-display text-balance text-4xl leading-[1.05] md:text-5xl">
              A small body of work,<br />carefully chosen.
            </h2>
          </div>
          <a
            href="#"
            className="group hidden items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            View archive
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.a
                href="#"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative block overflow-hidden rounded-3xl border border-border/60 bg-card p-5 shadow-soft transition-shadow duration-500 hover:shadow-lift"
              >
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl">
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: p.gradient }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 grain opacity-60" />
                  <div className="absolute left-5 top-5 rounded-full bg-background/80 px-2.5 py-1 text-[10px] uppercase tracking-widest text-foreground/70 backdrop-blur">
                    {p.year}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-2xl leading-tight">{p.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{p.kind}</div>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
                </div>
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
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
