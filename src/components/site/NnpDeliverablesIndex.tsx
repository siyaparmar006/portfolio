"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProjectCover } from "@/content/projects";
import { nnpSubProjects } from "@/content/nnp-hub";

const categoryAccent: Record<string, string> = {
  Onboarding: "#7C5CFF",
  Impact: "#00E0B8",
  Education: "#FFB86B",
  Partners: "#FF6B9A",
  Outreach: "#5AC8FF",
  "Brand System": "#FFB86B",
  Digital: "#7C5CFF",
};

export function NnpDeliverablesIndex() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = nnpSubProjects[activeIndex];
  const activeCover = getProjectCover(active.slug);
  const activeAccent = categoryAccent[active.category] ?? "var(--accent)";

  return (
    <section className="relative mt-20 border-t border-border md:mt-24">
      {/* Section lead */}
      <div className="flex flex-col gap-3 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[10px] tracking-[0.32em] text-muted-foreground uppercase">
            Index · 07 parts
          </p>
          <h2 className="mt-3 font-display text-3xl uppercase md:text-5xl">The ecosystem</h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          One communication system, seven touchpoints. Hover a line to preview — click to open the
          case study.
        </p>
      </div>

      <div className="relative grid gap-12 pb-20 lg:grid-cols-[1fr_minmax(220px,280px)] lg:gap-16">
        {/* Watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-6 right-0 hidden font-display text-[10rem] leading-none text-foreground/[0.03] select-none lg:block"
        >
          07
        </span>

        {/* Typographic index */}
        <ol className="relative min-w-0 overflow-visible">
          {nnpSubProjects.map((sub, i) => {
            const accent = categoryAccent[sub.category] ?? "var(--accent)";
            const isActive = i === activeIndex;
            const cover = getProjectCover(sub.slug);

            return (
              <li key={sub.slug}>
                <Link
                  href={`/projects/${sub.slug}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  className={`group relative grid grid-cols-[3.25rem_minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 border-b border-border/50 py-6 pl-1 transition-colors sm:pl-0 md:grid-cols-[3.5rem_minmax(0,1fr)_auto] md:py-8 ${
                    isActive ? "bg-foreground/[0.02]" : "hover:bg-foreground/[0.015]"
                  }`}
                >
                  <span
                    aria-hidden
                    className="absolute top-0 bottom-0 left-0 w-[2px] origin-top transition-transform duration-500 sm:left-[3.25rem] md:left-[3.5rem]"
                    style={{
                      background: accent,
                      transform: isActive ? "scaleY(1)" : "scaleY(0)",
                    }}
                  />

                  <span
                    className={`shrink-0 font-mono text-xs tabular-nums tracking-[0.14em] transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <span className="text-[10px] tracking-[0.24em] text-muted-foreground uppercase">
                      {sub.category}
                    </span>
                    <h3
                      className={`mt-1 font-serif text-xl leading-tight transition-all duration-300 md:text-2xl lg:text-[1.65rem] ${
                        isActive ? "text-foreground" : "text-foreground/80"
                      }`}
                    >
                      {sub.shortTitle}
                    </h3>
                    <p
                      className={`mt-2 line-clamp-2 text-sm leading-relaxed transition-colors ${
                        isActive ? "text-muted-foreground" : "text-muted-foreground/70"
                      }`}
                    >
                      {sub.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {cover && (
                      <img
                        src={cover}
                        alt=""
                        className="h-11 w-8 shrink-0 rounded-sm object-cover ring-1 ring-border/60 lg:hidden"
                      />
                    )}
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "border-transparent text-background"
                          : "border-border/60 text-muted-foreground group-hover:border-border"
                      }`}
                      style={isActive ? { background: accent } : undefined}
                    >
                      <ArrowUpRight
                        className={`h-4 w-4 transition-transform duration-300 ${isActive ? "rotate-45" : "group-hover:rotate-12"}`}
                      />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>

        {/* Sticky preview — one frame, swaps on hover */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="relative overflow-hidden rounded-xl ring-1 ring-border/60">
              <div className="aspect-[3/4] bg-muted">
                {activeCover ? (
                  <img
                    key={active.slug}
                    src={activeCover}
                    alt={active.title}
                    className="h-full w-full object-cover animate-in fade-in duration-500"
                  />
                ) : (
                  <div
                    className="h-full w-full"
                    style={{
                      background: `radial-gradient(circle at 35% 30%, color-mix(in oklch, ${activeAccent} 35%, transparent), var(--muted) 70%)`,
                    }}
                  />
                )}
              </div>
              <div
                className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[0.14em] uppercase backdrop-blur-sm"
                style={{
                  background: "color-mix(in oklab, var(--background) 90%, transparent)",
                  color: activeAccent,
                }}
              >
                {active.category}
              </div>
            </div>
            <p className="mt-4 font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
              {String(activeIndex + 1).padStart(2, "0")} — {active.title}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
