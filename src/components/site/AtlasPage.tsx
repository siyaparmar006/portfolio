"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import {
  atlasProjects,
  getProjectCover,
  getProjectLink,
  type PortfolioProject,
  type ProjectCategory,
} from "@/content/projects";

const categoryColor: Record<ProjectCategory, string> = {
  "Product Experiences": "#00E0B8",
  "Brand Systems": "#FFB86B",
  "Communication Systems": "#7C5CFF",
  "Print & Editorial": "#FF6B9A",
  "Spatial & Visual Experiments": "#5AC8FF",
};

function cardGradient(p: PortfolioProject, i: number) {
  const c = categoryColor[p.category];
  const angle = (i * 37) % 360;
  return `linear-gradient(${angle}deg, ${c}18 0%, var(--card) 60%, var(--background) 100%)`;
}

export function AtlasPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const projects = atlasProjects;

  useEffect(() => {
    const handler = () => {
      const triggerY = window.innerHeight * 0.35;
      let current = 0;
      for (let i = 0; i < sectionsRef.current.length; i++) {
        const el = sectionsRef.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY) current = i;
      }
      setActiveIndex(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const item = list.querySelector<HTMLElement>(`[data-idx="${activeIndex}"]`);
    if (item) {
      const itemTop = item.offsetTop;
      const itemH = item.offsetHeight;
      const listH = list.clientHeight;
      list.scrollTo({ top: itemTop - listH / 2 + itemH / 2, behavior: "smooth" });
    }
  }, [activeIndex]);

  const scrollToProject = (i: number) => {
    const el = sectionsRef.current[i];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + 8, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Nav />

      <header className="mx-auto w-full max-w-7xl px-4 pt-28 pb-12 md:px-8 md:pt-32">
        <div className="text-[10px] uppercase tracking-[0.3em] text-primary">◍ Design Atlas</div>
        <h1 className="mt-4 font-serif text-4xl leading-[1.02] md:text-6xl">
          Every project, stacked.
        </h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Scroll through {projects.length} projects — each one rises and rests on the last, like
          pages on a designer&apos;s desk.
        </p>
      </header>

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_280px]">
          <div className="relative">
            {projects.map((p, i) => (
              <StackCard
                key={p.slug}
                p={p}
                i={i}
                total={projects.length}
                active={i === activeIndex}
                setRef={(el) => {
                  sectionsRef.current[i] = el;
                }}
              />
            ))}
          </div>

          <aside className="hidden md:block">
            <div className="sticky top-[8vh] h-[78vh]">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card/60 p-4 backdrop-blur">
                <div className="mb-3 flex items-center justify-between px-2">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Index
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">
                    {String(activeIndex + 1).padStart(2, "0")}/{projects.length}
                  </div>
                </div>
                <div
                  ref={listRef}
                  className="relative flex-1 overflow-y-auto pr-1"
                  style={{ scrollbarWidth: "thin" }}
                >
                  <ul className="space-y-0.5">
                    {projects.map((p, i) => {
                      const active = i === activeIndex;
                      return (
                        <li key={p.slug} data-idx={i}>
                          <button
                            onClick={() => scrollToProject(i)}
                            className={`group relative flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                              active ? "bg-foreground/5" : "hover:bg-foreground/[0.03]"
                            }`}
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-all"
                              style={{
                                background: active
                                  ? categoryColor[p.category]
                                  : "color-mix(in oklab, var(--foreground) 25%, transparent)",
                                boxShadow: active
                                  ? `0 0 12px ${categoryColor[p.category]}`
                                  : "none",
                              }}
                            />
                            <div className="min-w-0 flex-1">
                              <div
                                className={`truncate text-xs leading-snug transition-colors ${
                                  active ? "font-medium text-foreground" : "text-muted-foreground"
                                }`}
                              >
                                {p.title}
                              </div>
                              {active && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
                                >
                                  {p.status}
                                </motion.div>
                              )}
                            </div>
                            {active && (
                              <motion.span
                                layoutId="active-indicator"
                                className="absolute top-1/2 left-0 h-6 w-[2px] -translate-y-1/2 rounded-r"
                                style={{ background: categoryColor[p.category] }}
                              />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="h-[20vh]" />
      </div>

      <Footer />
    </div>
  );
}

function StackCard({
  p,
  i,
  total,
  active,
  setRef,
}: {
  p: PortfolioProject;
  i: number;
  total: number;
  active: boolean;
  setRef: (el: HTMLElement | null) => void;
}) {
  const cover = getProjectCover(p.slug);
  const link = getProjectLink(p);
  const accent = categoryColor[p.category];

  return (
    <motion.article
      ref={(el) => setRef(el)}
      data-idx={i}
      className={`sticky top-[8vh] overflow-hidden rounded-[2rem] bg-card ${
        active ? "border border-border/60" : "border border-transparent"
      }`}
      style={{
        height: "84vh",
        marginTop: i === 0 ? 0 : "16vh",
        zIndex: i + 1,
        boxShadow: active
          ? "0 8px 32px -10px color-mix(in oklch, var(--foreground) 10%, transparent)"
          : "none",
      }}
    >
      <div
        className={`relative h-[62%] w-full overflow-hidden ${cover ? "bg-muted" : ""}`}
        style={cover ? undefined : { background: cardGradient(p, i) }}
      >
        {cover ? (
          <img src={cover} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
              style={{ background: accent }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-0 -left-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
              style={{ background: accent }}
            />
            <div aria-hidden className="absolute inset-0 opacity-[0.06] grain-noise" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-serif leading-none text-foreground/[0.07] italic"
                style={{ fontSize: "clamp(180px, 32vw, 420px)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </>
        )}
        <div className="absolute top-0 right-0 left-0 flex items-center justify-between p-6 md:p-8">
          <div className="flex items-center gap-3">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: accent,
                boxShadow: `0 0 10px ${accent}80`,
              }}
            />
            <span
              className={`text-[10px] tracking-[0.3em] uppercase ${
                cover
                  ? "rounded-full bg-background/75 px-2.5 py-1 text-foreground/80 backdrop-blur-sm"
                  : "text-foreground/70"
              }`}
            >
              {p.category}
            </span>
          </div>
          <div
            className={`font-mono text-[10px] tracking-[0.2em] ${
              cover
                ? "rounded-full bg-background/75 px-2.5 py-1 text-muted-foreground backdrop-blur-sm"
                : "text-muted-foreground"
            }`}
          >
            {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>
      </div>

      <div className="relative flex h-[38%] items-center justify-between gap-6 border-t border-border/40 px-8 py-6 md:px-12 md:py-8">
        <div className="min-w-0 flex-1">
          <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
            {p.year ?? ""} · {p.status}
          </div>
          <h2 className="mt-2 font-serif text-2xl leading-[1.05] md:text-4xl lg:text-5xl">
            {p.title}
          </h2>
          <p className="mt-2 line-clamp-2 max-w-2xl text-sm text-muted-foreground">{p.tagline}</p>
        </div>
        {link ? (
          <Link
            href={link}
            className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:scale-105 hover:bg-secondary md:h-16 md:w-16"
            aria-label={`View ${p.title}`}
          >
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}
