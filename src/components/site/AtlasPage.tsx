"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import {
  visibleAtlasProjects,
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

/** Clears fixed nav: pt-4 + pill height (~4.5rem) + breathing room */
const STICKY_TOP_REM = 7;
const STICKY_TOP = `${STICKY_TOP_REM}rem`;
/** Gap between cards — smaller = next card stacks sooner */
const STACK_GAP = "6vh";

function stickyTriggerY() {
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  return rem * STICKY_TOP_REM;
}
const ease = [0.22, 1, 0.36, 1] as const;

function cardGradient(p: PortfolioProject, i: number) {
  const c = categoryColor[p.category];
  const angle = (i * 37) % 360;
  return `linear-gradient(${angle}deg, ${c}18 0%, var(--card) 60%, var(--background) 100%)`;
}

export function AtlasPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<Array<HTMLElement | null>>([]);
  const projects = visibleAtlasProjects;

  const scrollToProject = (index: number) => {
    const el = sectionsRef.current[index];
    if (!el) return;

    const targetTop =
      window.scrollY + el.getBoundingClientRect().top - stickyTriggerY();

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const syncActiveFromScroll = () => {
      const triggerY = stickyTriggerY();
      let current = 0;

      for (let i = 0; i < sectionsRef.current.length; i++) {
        const el = sectionsRef.current[i];
        if (!el) continue;
        if (el.getBoundingClientRect().top <= triggerY) current = i;
      }

      setActiveIndex(current);
    };

    syncActiveFromScroll();
    window.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    window.addEventListener("resize", syncActiveFromScroll);
    return () => {
      window.removeEventListener("scroll", syncActiveFromScroll);
      window.removeEventListener("resize", syncActiveFromScroll);
    };
  }, []);

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
          {/* Cards as direct siblings — required for sticky stacking */}
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

          <aside className="relative z-50 hidden md:block">
            <div className="sticky top-[7rem] h-[calc(100vh-8.5rem)]">
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
                  className="relative flex-1 overflow-y-auto pr-1"
                  style={{ scrollbarWidth: "thin" }}
                >
                  <ul className="space-y-0.5">
                    {projects.map((p, i) => {
                      const active = i === activeIndex;
                      return (
                        <li key={p.slug}>
                          <button
                            type="button"
                            onClick={() => scrollToProject(i)}
                            className={`group relative flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors ${
                              active ? "bg-foreground/5" : "hover:bg-foreground/[0.03]"
                            }`}
                          >
                            <span
                              className="h-1.5 w-1.5 shrink-0 rounded-full transition-all"
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
                                  active
                                    ? "font-medium text-foreground"
                                    : "text-muted-foreground group-hover:text-foreground"
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
                              <span
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

        {/* Tail space so the last card can fully stick */}
        <div className="h-[50vh]" />
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
  const reduced = useReducedMotion();
  const cover = getProjectCover(p.slug);
  const link = getProjectLink(p);
  const accent = categoryColor[p.category];

  return (
    <article
      ref={setRef}
      id={`atlas-${p.slug}`}
      data-idx={i}
      className={`sticky overflow-hidden rounded-[2rem] bg-card ${
        active
          ? "pointer-events-auto border border-border/60"
          : "pointer-events-none border border-transparent"
      }`}
      style={{
        top: STICKY_TOP,
        height: "84vh",
        marginTop: i === 0 ? 0 : STACK_GAP,
        zIndex: i + 1,
        boxShadow: active
          ? "0 8px 32px -10px color-mix(in oklch, var(--foreground) 10%, transparent)"
          : "none",
      }}
    >
      {/* Animate inner content only — transform on sticky element breaks stacking */}
      <motion.div
        className="flex h-full flex-col"
        initial={reduced || i === 0 ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div
          className={`relative h-[62%] w-full overflow-hidden ${
            cover ? (p.coverFit === "contain" ? "bg-white" : "bg-muted") : ""
          }`}
          style={cover ? undefined : { background: cardGradient(p, i) }}
        >
          {cover ? (
            <img
              src={cover}
              alt={p.title}
              className={`absolute inset-0 h-full w-full ${
                p.coverFit === "contain" ? "object-contain" : "object-cover"
              }`}
              style={{
                ...(p.coverPosition ? { objectPosition: p.coverPosition } : {}),
                transform: p.coverScale ? `scale(${p.coverScale})` : undefined,
                transformOrigin: "center",
              }}
            />
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

        <div className="relative z-10 flex h-[38%] items-center justify-between gap-6 border-t border-border/40 px-8 py-6 md:px-12 md:py-8">
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
              className="group relative z-20 flex shrink-0 items-center gap-3 rounded-full border border-border bg-background px-4 py-3 text-foreground transition-all hover:scale-[1.02] hover:bg-secondary md:px-5 md:py-3.5"
              aria-label={`View ${p.title}`}
            >
              <span className="hidden text-sm font-medium md:inline">View project</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full md:h-11 md:w-11">
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
              </span>
            </Link>
          ) : null}
        </div>
      </motion.div>
    </article>
  );
}
