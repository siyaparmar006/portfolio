"use client";

import { motion, useReducedMotion } from "framer-motion";
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

function PrincipleCard({ p, i }: { p: (typeof principles)[number]; i: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
      className="h-full"
    >
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
  const reduced = useReducedMotion();

  return (
    <section id="os" className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-2xl px-2 md:mb-14"
        >
          <div className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Design OS
          </div>

          <h2 className="font-display text-balance text-3xl leading-[1.05] md:text-5xl">
            The principles that shape how I design products, systems, and visual experiences.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <PrincipleCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
