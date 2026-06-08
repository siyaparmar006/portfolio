"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  featuredProjects,
  getProjectCover,
  getProjectLink,
  type PortfolioProject,
} from "@/content/projects";

function ProjectCard({ p, i }: { p: PortfolioProject; i: number }) {
  const reduced = useReducedMotion();
  const isFeatured = p.featured;
  const cover = getProjectCover(p.slug);
  const link = getProjectLink(p);

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
        className={`grid gap-6 md:items-center md:gap-10 ${
          isFeatured ? "md:grid-cols-[1.15fr_1fr]" : "md:grid-cols-[1.05fr_1fr]"
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-[1.5rem] ${
            isFeatured ? "aspect-[4/3.1]" : "aspect-[4/3]"
          }`}
        >
          {cover ? (
            <motion.img
              src={cover}
              alt={p.title}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          ) : (
            <motion.div
              className="absolute inset-0"
              style={{ background: p.gradient }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
          <div className="absolute inset-0 grain-noise opacity-40" />
          <div className="absolute left-4 top-4 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/80 backdrop-blur">
            {String(i + 1).padStart(2, "0")} · Signature
          </div>
        </div>

        <div className="px-1 md:px-2">
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{p.label}</div>
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
            {p.tags?.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-[11px] text-foreground/70"
              >
                {t}
              </span>
            ))}
          </div>
          {link && (
            <div className="mt-6">
              <Link
                href={link}
                className="group/link inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-foreground/80"
              >
                View Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          )}
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-60"
        style={{ background: "var(--gradient-warm)" }}
      />
      <span className="absolute bottom-4 right-5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">
        {String(i + 1).padStart(2, "0")} / {featuredProjects.length}
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
            Three projects that represent how I approach product thinking, service communication,
            brand systems, and human-centered visual design.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-8">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
