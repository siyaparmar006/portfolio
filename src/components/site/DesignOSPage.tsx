"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  corePrinciples,
  heroIntro,
  processOverview,
  processPills,
  processSteps,
  type ProcessStep,
} from "@/content/design-os";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

const ease = [0.22, 1, 0.36, 1] as const;

function Fade({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.7, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ProcessDiagram() {
  return (
    <div
      aria-hidden
      className="relative mx-auto aspect-square w-full max-w-[280px] rounded-[2rem] border border-border/60 bg-card/50 p-8 shadow-soft"
    >
      <div
        className="absolute inset-0 rounded-[2rem] opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, color-mix(in oklch, var(--accent) 30%, transparent), transparent 70%)",
        }}
      />
      <svg viewBox="0 0 200 200" className="relative h-full w-full">
        <circle cx="100" cy="36" r="6" className="fill-primary" />
        <circle cx="164" cy="82" r="6" className="fill-foreground/40" />
        <circle cx="142" cy="158" r="6" className="fill-foreground/40" />
        <circle cx="58" cy="158" r="6" className="fill-foreground/40" />
        <circle cx="36" cy="82" r="6" className="fill-foreground/40" />
        <circle cx="100" cy="100" r="22" className="fill-none stroke-border stroke-[1.5]" />
        <path
          d="M100 58 L164 82 L142 158 L58 158 L36 82 Z"
          className="fill-none stroke-border/80 stroke-[1]"
        />
        <text x="100" y="104" textAnchor="middle" className="fill-foreground text-[9px] font-medium">
          OS
        </text>
      </svg>
      <div className="pointer-events-none absolute inset-x-0 bottom-5 text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        Context → System → Experience
      </div>
    </div>
  );
}

function scrollToStep(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function DesignOSPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Nav />

      <div className="mx-auto max-w-6xl px-4 pt-28 pb-8 md:px-8 md:pt-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-6xl px-4 pb-20 md:px-8 md:pb-28">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Fade>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Design OS</p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
              My Design OS
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/85 md:text-xl">
              A closer look at how I move from messy context to clear, human-centered design
              systems.
            </p>
            <div className="mt-8 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {heroIntro.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {processPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-border/70 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Fade>
          <Fade delay={0.1} className="lg:pt-8">
            <ProcessDiagram />
          </Fade>
        </div>
      </header>

      {/* Process overview */}
      <section className="border-y border-border/60 bg-card/30 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Fade>
            <h2 className="font-display text-2xl md:text-3xl">Process overview</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
              Five stages I return to across product, service, brand, and communication work.
            </p>
          </Fade>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {processOverview.map((step, i) => (
              <Fade key={step.id} delay={i * 0.05}>
                <button
                  type="button"
                  onClick={() => scrollToStep(step.id)}
                  className="group h-full w-full cursor-pointer rounded-2xl border border-border/60 bg-card p-4 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lift md:p-5"
                >
                  <span className="font-mono text-xs text-primary">{step.number}</span>
                  <p className="mt-2 font-display text-base leading-snug transition-colors group-hover:text-foreground md:text-lg">
                    {step.title}
                  </p>
                </button>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed steps + sticky index */}
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[200px_1fr] lg:gap-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                In this page
              </p>
              <ul className="space-y-1">
                {processSteps.map((step) => (
                  <li key={step.id}>
                    <button
                      type="button"
                      onClick={() => scrollToStep(step.id)}
                      className="w-full rounded-lg px-2 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                    >
                      <span className="font-mono text-primary">{step.number}</span>{" "}
                      {step.shortLabel}
                    </button>
                  </li>
                ))}
                <li className="pt-3">
                  <button
                    type="button"
                    onClick={() => scrollToStep("principles")}
                    className="w-full rounded-lg px-2 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                  >
                    Principles
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          <div className="space-y-28 md:space-y-36">
            {processSteps.map((step, i) => (
              <ProcessSection key={step.id} step={step} reversed={i % 2 === 1} />
            ))}
          </div>
        </div>
      </div>

      {/* Principles */}
      <section id="principles" className="border-t border-border/60 bg-card/20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Fade>
            <h2 className="font-display text-3xl md:text-4xl">The Principles Behind the Process</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              While every project is different, several principles consistently guide my decisions.
            </p>
          </Fade>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {corePrinciples.map((p, i) => (
              <Fade key={p.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-shadow duration-300 hover:shadow-lift md:p-6">
                  <h3 className="font-display text-lg leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Fade>
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card p-8 shadow-soft md:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{ background: "var(--gradient-soft)" }}
              />
              <div className="relative max-w-3xl">
                <p className="text-[15px] leading-relaxed text-foreground/85 md:text-lg">
                  Ultimately, my Design OS is about creating clarity. Whether I am designing a
                  product, a service, a publication, a brand system, or a communication experience,
                  my goal remains the same: to help people understand, navigate, and engage with
                  information more confidently through thoughtful, human-centered design.
                </p>
              </div>
            </div>
          </Fade>

          <Fade delay={0.1} className="mt-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl">See the system in action.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
              Explore the case studies where this process comes to life across product, service,
              brand, and communication design.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                View Signature Case Studies
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/atlas"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
              >
                Explore Design Atlas
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Fade>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProcessSection({ step, reversed }: { step: ProcessStep; reversed: boolean }) {
  return (
    <section id={step.id} className="scroll-mt-28">
      <Fade>
        <div
          className={`grid items-start gap-10 lg:gap-14 ${
            reversed ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
          }`}
        >
          <div className={reversed ? "lg:order-2" : undefined}>
            <span className="font-display text-6xl leading-none text-primary/25 md:text-8xl">
              {step.number}
            </span>
            <h2 className="mt-2 font-display text-3xl leading-tight md:text-4xl">{step.title}</h2>
            <div className="mt-6 max-w-prose space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              {step.body.map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 border-primary/50 pl-4 font-serif text-lg italic leading-relaxed text-foreground/90 md:text-xl">
              &ldquo;{step.quote}&rdquo;
            </blockquote>
          </div>

          <div className={reversed ? "lg:order-1" : undefined}>
            <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-soft md:p-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {step.focusLabel}
              </h3>
              <ul className="mt-4 space-y-3">
                {step.focusItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/85 md:text-[15px]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
