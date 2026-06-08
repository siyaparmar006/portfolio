import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, var(--accent) 0%, var(--foreground) 100%)",
      }}
    />
  );
}

export function ScrollMarker() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.3 });
  const pct = useTransform(smooth, (v) => `${Math.round(v * 100)}`);
  const rotate = useTransform(smooth, [0, 1], [0, 360]);

  return (
    <motion.div
      aria-hidden
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center md:flex"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* outer ring with rotating dot */}
      <motion.div
        className="absolute inset-0 rounded-full border border-foreground/15 bg-card/70 shadow-soft backdrop-blur"
        style={{ rotate }}
      >
        <span
          className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "var(--accent)" }}
        />
      </motion.div>
      {/* inner dot + label */}
      <div className="relative flex flex-col items-center justify-center">
        <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
        <motion.span className="mt-1 text-[9px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {pct}
        </motion.span>
      </div>
    </motion.div>
  );
}
