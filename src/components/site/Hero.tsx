import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

function ClayShapes() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "var(--clay-1)", opacity: 0.55 }}
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-120px] top-40 h-[360px] w-[360px] rounded-full blur-3xl"
        style={{ background: "var(--clay-3)", opacity: 0.5 }}
        animate={{ x: [0, -25, 15, 0], y: [0, 25, -10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-80px] left-1/3 h-[300px] w-[300px] rounded-full blur-3xl"
        style={{ background: "var(--clay-2)", opacity: 0.35 }}
        animate={{ x: [0, 20, -20, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function FloatingCard({
  className,
  delay = 0,
  parallax,
  children,
}: {
  className?: string;
  delay?: number;
  parallax: { x: number; y: number };
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className={`absolute hidden rounded-2xl border border-border/70 bg-card/90 p-4 shadow-soft backdrop-blur-md md:block ${className ?? ""}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        x: parallax.x,
        translateY: parallax.y,
      }}
      transition={{
        opacity: { duration: 1, delay, ease },
        y: { duration: 6 + delay, repeat: Infinity, ease: "easeInOut" },
        x: { type: "spring", stiffness: 40, damping: 20 },
        translateY: { type: "spring", stiffness: 40, damping: 20 },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const [m, setM] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setM({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  const headingLines = ["Designing calm", "interfaces with", "intentional motion."];

  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden pt-32 pb-24">
      {!reduced && <ClayShapes />}
      <div className="absolute inset-0 grain" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Available for select projects · 2026
        </motion.div>

        <h1 className="font-display text-balance text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-tight">
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
          className="max-w-xl text-balance text-lg text-muted-foreground"
        >
          I'm an independent designer crafting product systems, brand identities,
          and the quiet animations that hold them together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.05, ease }}
          className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground"
        >
          <span className="opacity-60">Skills —</span>
          {["Product Design", "Design Systems", "Motion", "Brand"].map((s) => (
            <span key={s} className="rounded-full border border-border/60 px-3 py-1">
              {s}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          className="flex flex-wrap gap-3 pt-2"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            View selected work
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:text-background"
          >
            <span className="absolute inset-0 -z-0 translate-y-full bg-foreground transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <span className="relative">Start a project</span>
          </a>
        </motion.div>
      </div>

      {/* Floating mini UI cards */}
      <FloatingCard
        className="right-[8%] top-[22%] w-56"
        delay={0.6}
        parallax={{ x: m.x * 0.6, y: m.y * 0.6 }}
      >
        <div className="mb-3 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full" style={{ background: "var(--clay-2)" }} />
          <span className="text-xs text-muted-foreground">Atlas / Case 04</span>
        </div>
        <div className="font-display text-lg leading-tight">Field Notes OS</div>
        <div className="mt-2 flex gap-1">
          <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px]">Brand</span>
          <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px]">Web</span>
        </div>
      </FloatingCard>

      <FloatingCard
        className="right-[18%] bottom-[12%] w-44"
        delay={1.0}
        parallax={{ x: m.x * -0.4, y: m.y * -0.4 }}
      >
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Now playing
        </div>
        <div className="mt-1 text-sm font-medium">Motion principles v2.4</div>
        <div className="mt-3 h-1 w-full rounded-full bg-secondary">
          <div className="h-1 w-2/3 rounded-full" style={{ background: "var(--foreground)" }} />
        </div>
      </FloatingCard>

      <FloatingCard
        className="left-[6%] bottom-[18%] w-40"
        delay={1.3}
        parallax={{ x: m.x * 0.3, y: m.y * 0.3 }}
      >
        <div className="font-display text-2xl">12</div>
        <div className="text-xs text-muted-foreground">shipped systems · 2025</div>
      </FloatingCard>
    </section>
  );
}
