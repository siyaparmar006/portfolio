import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export function Atlas() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduced ? [1, 1, 1] : [0.94, 1, 0.98],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    reduced ? [1, 1, 1] : [0.4, 1, 0.9],
  );

  return (
    <section className="relative px-4 py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          style={{ scale, opacity }}
          className="relative overflow-hidden rounded-[2.25rem] border border-border/60 bg-card p-10 text-center shadow-lift md:p-16"
        >
          {/* portal glow */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: "var(--gradient-soft)" }}
          />
          <motion.div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, oklch(0.72 0.13 50 / 0.25), transparent 65%)",
            }}
            animate={reduced ? undefined : { scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative">
            <div className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Beyond the case studies
            </div>
            <h3 className="mx-auto max-w-2xl text-balance font-display text-3xl leading-tight md:text-5xl">
              A floating universe of every project, sketch and system.
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Explore a categorized archive of product, brand, communication, print, spatial,
              and visual design work.
            </p>

            <div className="relative mt-12 flex justify-center">
              {/* orbit ring */}
              <motion.div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/10"
                animate={reduced ? undefined : { rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              >
                <span
                  className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              </motion.div>
              <motion.div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/[0.06]"
                animate={reduced ? undefined : { rotate: -360 }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-foreground/30" />
              </motion.div>

              <motion.a
                href="#"
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative z-10 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background"
              >
                <motion.span
                  aria-hidden
                  variants={{
                    rest: { opacity: 0, scale: 0.9 },
                    hover: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute -inset-2 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, oklch(0.72 0.13 50 / 0.45), transparent 70%)",
                  }}
                />
                <span className="relative">Explore Design Atlas</span>
                <motion.span
                  variants={{ rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative inline-flex"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </motion.span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
