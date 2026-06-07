import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import portrait from "@/assets/siya-portrait.jpg.asset.json";

const ease = [0.22, 1, 0.36, 1] as const;

const portraitTags = [
  { label: "Product Design", x: "-8%", y: "10%", drift: -18 },
  { label: "Visual Systems", x: "94%", y: "20%", drift: 22 },
  { label: "Brand Thinking", x: "-12%", y: "72%", drift: -14 },
  { label: "Human-Centered", x: "92%", y: "80%", drift: 18 },
];

function ClayShapes({
  progress,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const reduced = useReducedMotion();
  const x1 = useTransform(progress, [0, 1], reduced ? [0, 0] : [0, -40]);
  const x2 = useTransform(progress, [0, 1], reduced ? [0, 0] : [0, 50]);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ x: x1, background: "var(--clay-1)", opacity: 0.45 }}
        className="absolute -left-32 top-10 h-[460px] w-[460px] rounded-full blur-3xl"
      />
      <motion.div
        style={{ x: x2, background: "var(--clay-3)", opacity: 0.4 }}
        className="absolute right-[-140px] top-32 h-[400px] w-[400px] rounded-full blur-3xl"
      />
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  // Scroll progress across the tall section to drive sticky stage exit
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Stage exit (content fades + lifts up as user scrolls past hero)
  const stageY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -120]);
  const stageOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const stageScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 0.96]);

  // Portrait scroll motion (scale + slight rotate as you scroll)
  const portraitScale = useTransform(
    scrollYProgress,
    [0, 0.5],
    reduced ? [1, 1] : [1, 1.04],
  );
  const portraitRotate = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [-1.2, 1.2],
  );

  // Mouse parallax on portrait (desktop only)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 10);
      my.set((e.clientY / window.innerHeight - 0.5) * 10);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduced]);

  const headingLines = [
    "Product Designer",
    "crafting human-centered",
    "digital experiences.",
  ];

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <ClayShapes progress={scrollYProgress} />
        <div className="absolute inset-0 grain" aria-hidden />

        <motion.div
          style={{ y: stageY, opacity: stageOpacity, scale: stageScale }}
          className="relative mx-auto grid h-full max-w-6xl items-center gap-10 px-6 pt-24 md:grid-cols-12 md:gap-10 md:pt-20"
        >
          {/* Left column */}
          <div className="flex flex-col gap-6 md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Open to select projects · 2026
            </motion.div>

            <h1 className="font-display text-balance text-[clamp(2.25rem,6vw,4.75rem)] leading-[1.02] tracking-tight">
              {headingLines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease }}
              className="max-w-xl text-balance text-base text-muted-foreground md:text-lg"
            >
              I design digital experiences that feel clear, human, and visually memorable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.95, ease }}
              className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-muted-foreground md:text-sm"
            >
              {[
                "UX/UI",
                "Visual Systems",
                "Brand Thinking",
                "Information Architecture",
                "Typography",
                "Communication Design",
              ].map((s, i, arr) => (
                <span key={s} className="inline-flex items-center gap-2">
                  <span>{s}</span>
                  {i < arr.length - 1 && (
                    <span className="opacity-40">·</span>
                  )}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15, ease }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href="#work"
                className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                View Selected Work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/resume.pdf"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:text-background"
              >
                <span className="absolute inset-0 -z-0 translate-y-full bg-foreground transition-transform duration-500 ease-out group-hover:translate-y-0" />
                <span className="relative">Download Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Right column — portrait */}
          <div className="md:col-span-5">
            <motion.div
              ref={portraitRef}
              style={{ scale: portraitScale, rotate: portraitRotate }}
              initial={{ opacity: 0, scale: 0.94, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: -1 }}
              transition={{ duration: 1.1, ease, delay: 0.35 }}
              className="relative mx-auto w-full max-w-[380px]"
            >
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2.5rem] blur-2xl"
                style={{ background: "var(--gradient-soft)" }}
              />
              <motion.div
                style={{ x: sx, y: sy }}
                className="relative overflow-hidden rounded-[2rem] border border-[var(--clay-1)]/40 bg-card p-3 shadow-lift"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-60"
                  style={{ background: "var(--gradient-soft)" }}
                />
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={portrait.url}
                    alt="Portrait of Siya Parmar"
                    width={832}
                    height={1024}
                    className="block aspect-[4/5] w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 55%, oklch(0.18 0.015 50 / 0.2) 100%)",
                    }}
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-medium text-foreground/80 shadow-soft backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    siya.parmar — portfolio
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-background/85 px-4 py-3 shadow-soft backdrop-blur">
                    <div>
                      <div className="font-display text-base leading-none">Siya Parmar</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Product Designer · Jersey City
                      </div>
                    </div>
                    <span className="text-[10px] text-muted-foreground">2026</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating skill pills — desktop only */}
              {portraitTags.map((t, i) => {
                const driftY = useTransform(
                  scrollYProgress,
                  [0, 1],
                  reduced ? [0, 0] : [0, t.drift],
                );
                return (
                  <motion.div
                    key={t.label}
                    style={{ y: driftY }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.8 + i * 0.1 }}
                    className="absolute hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-card/90 px-3 py-1.5 text-[11px] font-medium text-foreground/80 shadow-soft backdrop-blur md:block"
                  >
                    <span
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{
                        position: "absolute",
                      }}
                    />
                    <span style={{ position: "relative" }}>{t.label}</span>
                  </motion.div>
                );
              }).map((node, i) => (
                <span
                  key={portraitTags[i].label}
                  style={{
                    position: "absolute",
                    left: portraitTags[i].x,
                    top: portraitTags[i].y,
                  }}
                  className="hidden md:block"
                >
                  {node}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
