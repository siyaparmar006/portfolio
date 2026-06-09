"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Eye, Heart, Palette, Layers } from "lucide-react";

const principles = [
  {
    icon: Eye,
    number: "01",
    title: "Structured Clarity",
    body: "I map the journey before styling the screen — turning complex services, app flows, and content-heavy materials into clear pathways people can understand and act on.",
  },
  {
    icon: Heart,
    number: "02",
    title: "Human Context",
    body: "I design for the people behind the interface: newcomers, volunteers, students, donors, and everyday users who need information to feel accessible, respectful, and calm.",
  },
  {
    icon: Palette,
    number: "03",
    title: "Visual Systems",
    body: "I use typography, color, rhythm, and brand language as functional tools — not decoration — to create experiences that feel memorable, trustworthy, and easy to navigate.",
  },
  {
    icon: Layers,
    number: "04",
    title: "Scalable Touchpoints",
    body: "I build systems that travel across screens, reports, handbooks, social templates, packaging, and print so every touchpoint feels connected, intentional, and usable.",
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
            <span className="font-mono text-xs text-muted-foreground/60">{p.number}</span>
          </div>
          <div className="font-display text-xl leading-tight">
            {p.number} — {p.title}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          <div className="mt-5 h-px w-full bg-border/60" />
          <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
            <span>principle</span>
            <span>os · {p.number}</span>
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
            How I turn complexity into clear, visual systems.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            A working framework shaped by product design, service communication, brand systems, and
            print-detail discipline.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <PrincipleCard key={p.number} p={p} i={i} />
          ))}
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-12 flex justify-center px-2"
        >
          <Link
            href="/design-os"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            Explore My Design OS
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
