import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";
import type { RefObject } from "react";
import { PortraitImage } from "@/components/site/PortraitImage";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * A single portrait card that travels across Hero → Work → DesignOS → About
 * as the user scrolls. Position, scale, rotation and a 3D Y-flip are all
 * driven by scroll progress over a wrapping ref.
 */
export function FloatingPortraitCard({ trackRef }: { trackRef: RefObject<HTMLDivElement | null> }) {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();

  // Compute progress across the whole "journey" wrapper (Hero → About)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Soften the input a touch so transitions feel cinematic, not snappy
  const p = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  // Progress keyframes:
  // 0.00  hero
  // 0.22  services / work
  // 0.42  flip start
  // 0.50  edge-on (rotateY 90)
  // 0.58  flip end
  // 0.78  about
  // 1.00  exit upward, fade
  const stops = [0, 0.22, 0.42, 0.5, 0.58, 0.78, 1];

  const x = useTransform(p, stops, ["32vw", "36vw", "37vw", "38vw", "37vw", "34vw", "30vw"]);
  const y = useTransform(p, stops, ["0vh", "4vh", "1vh", "-2vh", "1vh", "0vh", "-32vh"]);
  const scale = useTransform(p, stops, [0.85, 0.72, 0.7, 0.68, 0.7, 0.78, 0.62]);
  const rotateZ = useTransform(p, stops, [-3, 6, 2, -4, 2, 4, -6]);
  const rotateY = useTransform(p, stops, [0, 0, 45, 90, 45, 0, 0]);
  const opacity = useTransform(p, stops, [1, 0.15, 0, 0, 0, 1, 0.3]);
  // Show only while the journey wrapper is on screen
  const visibility = useTransform(p, (v) => (v < 0 || v >= 1.05 ? 0 : 1));
  const radius = useTransform(p, stops, [
    "2rem",
    "1.5rem",
    "1.25rem",
    "1.25rem",
    "1.25rem",
    "1.75rem",
    "1.5rem",
  ]);

  // Mobile: skip the floating piece entirely; sections render their own
  // inline visuals (Hero handles its own mobile portrait below).
  if (isMobile) return null;

  // Reduced motion: render a still card pinned in the hero area, no flip / travel.
  if (reduced) {
    return (
      <div className="pointer-events-none fixed inset-0 z-[5] hidden items-center justify-center md:flex">
        <div
          style={{ transform: "translateX(18vw) rotate(-2deg)" }}
          className="w-[300px] overflow-hidden rounded-[2rem] border border-[var(--clay-1)]/40 bg-card p-3 shadow-lift"
        >
          <PortraitImage
            alt="Portrait of Siya Parmar"
            className="block aspect-[4/5] w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden
      style={{ opacity: visibility }}
      className="pointer-events-none fixed inset-0 z-[5] hidden items-center justify-center md:flex"
    >
      <motion.div
        style={{
          x,
          y,
          scale,
          rotateZ,
          rotateY,
          opacity,
          borderRadius: radius,
          transformStyle: "preserve-3d",
          transformPerspective: 1400,
        }}
        className="relative w-[320px] border border-[var(--clay-1)]/40 bg-card p-3 shadow-lift lg:w-[360px]"
      >
        {/* Front face */}
        <div
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          className="relative overflow-hidden rounded-[1.5rem]"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{ background: "var(--gradient-soft)" }}
          />
          <PortraitImage
            alt="Portrait of Siya Parmar"
            className="relative block aspect-[4/5] w-full object-cover"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 55%, oklch(0.18 0.015 50 / 0.2) 100%)",
            }}
          />
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-medium text-foreground/80 shadow-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            siya.parmar
          </div>
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl bg-background/85 px-3 py-2 shadow-soft backdrop-blur">
            <div>
              <div className="font-display text-sm leading-none">Siya Parmar</div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                Product Designer · Jersey City
              </div>
            </div>
          </div>
        </div>

        {/* Hi! waving-hand badge — overlaps the bottom-left corner */}
        <div
          className="absolute -bottom-5 -left-5 flex h-20 w-20 items-center justify-center rounded-full text-2xl shadow-lift ring-4 ring-background"
          style={{
            background: "var(--accent)",
            color: "var(--accent-foreground)",
            transform: "rotate(-8deg)",
          }}
          aria-label="Hi"
        >
          <span className="flex flex-col items-center leading-none">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">Hi</span>
            <span className="mt-0.5 text-2xl" role="img" aria-hidden>
              👋
            </span>
          </span>
        </div>

        {/* Back face (visible during the 3D flip mid-journey) */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-3 flex flex-col items-center justify-center overflow-hidden rounded-[1.5rem] border border-border/40 bg-[var(--clay-1)]/20 p-6 text-center"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-80"
            style={{ background: "var(--gradient-soft)" }}
          />
          <div className="relative">
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Design OS
            </div>
            <div className="mt-3 font-display text-xl leading-tight">
              Clarity. Humanity. Visual Memory. Systems.
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-background/80 px-3 py-1 text-[10px] font-medium text-foreground/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              the principles behind the work
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
