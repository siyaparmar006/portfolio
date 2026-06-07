import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion";

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

export function Work() {
  return (
    <section id="work" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-2xl">
          <div>
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
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card p-5 shadow-soft transition-shadow duration-500 hover:shadow-lift"
              >
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl">
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: p.gradient }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 grain opacity-60" />
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
