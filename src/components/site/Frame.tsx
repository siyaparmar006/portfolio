import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Frame — a soft rounded "viewport card" that scales and fades in
 * as the user scrolls into it. Used to make sections feel like
 * frames in a product walkthrough.
 */
export function Frame({
  children,
  className = "",
  tone = "card",
}: {
  children: ReactNode;
  className?: string;
  tone?: "card" | "warm" | "glow";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 0 -> 0.45 enter, 0.45 -> 0.55 hold, 0.55 -> 1 exit
  const scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    reduced ? [1, 1, 1, 1] : [0.96, 1, 1, 0.985],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    reduced ? [1, 1, 1, 1] : [0.4, 1, 1, 0.85],
  );
  const y = useTransform(scrollYProgress, [0, 0.5, 1], reduced ? [0, 0, 0] : [40, 0, -20]);

  const toneClass =
    tone === "warm" ? "bg-[var(--clay-1)]/15" : tone === "glow" ? "bg-card" : "bg-card/80";

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, y }}
      className={`relative overflow-hidden rounded-[2.25rem] border border-border/60 shadow-soft ${toneClass} ${className}`}
    >
      {tone === "glow" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ background: "var(--gradient-soft)" }}
        />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  );
}
