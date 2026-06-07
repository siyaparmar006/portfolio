import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import portrait from "@/assets/siya-portrait.jpg.asset.json";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();
  const { theme, toggle } = useTheme();
  const [hiToggle, setHiToggle] = useState(0); // 0 = "Hi", 1 = "👋"

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setHiToggle((v) => (v === 0 ? 1 : 0)), 2200);
    return () => clearInterval(id);
  }, [reduced]);

  const anim = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease, delay },
        };

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-background"
    >
      {/* Soft lime gradient ball blur behind portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[60vw] max-h-[640px] w-[60vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.50 0.36 219.4 / 0.6), transparent 65%)",
        }}
      />

      <div aria-hidden className="absolute inset-0 grain-noise opacity-60" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col items-center justify-center px-6 pt-28 pb-16 md:pt-32">
        {/* Main row: VISUAL · photo · DESIGNER */}
        <div className="relative grid w-full grid-cols-1 items-center gap-x-4 gap-y-6 md:grid-cols-[1fr_auto_1fr] md:gap-x-6">
          {/* Left word */}
          <motion.h1
            {...anim(0.1)}
            className="order-2 whitespace-nowrap text-right font-display text-foreground md:order-1"
            style={{
              fontSize: "clamp(2.75rem, 11vw, 8.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.005em",
            }}
          >
            VISUAL
          </motion.h1>

          {/* Portrait card */}
          <motion.div
            {...anim(0.2)}
            className="relative order-1 mx-auto w-[55vw] max-w-[260px] md:order-2 md:w-[20vw] md:min-w-[200px] md:max-w-[240px]"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[oklch(0.92_0.01_70)] shadow-lift">
              <img
                src={portrait.url}
                alt="Portrait of Siya Parmar"
                width={832}
                height={1024}
                className="block aspect-[4/5.2] w-full object-cover"
              />
            </div>

            {/* Hi! badge — bottom-left corner, toggles between text and wave */}
            <div
              aria-label="Hi"
              className="absolute -bottom-6 -left-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full shadow-lift ring-4 ring-background md:h-20 md:w-20"
              style={{
                background: "var(--accent)",
                color: "var(--accent-foreground)",
              }}
            >
              <div className="relative grid h-full w-full place-items-center">
                <motion.span
                  animate={{ opacity: hiToggle === 0 ? 1 : 0, scale: hiToggle === 0 ? 1 : 0.6 }}
                  transition={{ duration: 0.35, ease }}
                  className="col-start-1 row-start-1 font-display text-2xl leading-none md:text-3xl"
                >
                  Hi
                </motion.span>
                <motion.span
                  animate={{
                    opacity: hiToggle === 1 ? 1 : 0,
                    scale: hiToggle === 1 ? 1 : 0.6,
                    rotate: hiToggle === 1 && !reduced ? [0, 16, -8, 16, -4, 0] : 0,
                  }}
                  transition={{
                    opacity: { duration: 0.35, ease },
                    scale: { duration: 0.35, ease },
                    rotate: reduced
                      ? { duration: 0.25, ease }
                      : { duration: 1.1, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.4 },
                  }}
                  style={{ transformOrigin: "70% 75%" }}
                  className="col-start-1 row-start-1 inline-block text-2xl leading-none md:text-3xl"
                  role="img"
                  aria-label="waving hand"
                >
                  👋
                </motion.span>
              </div>

            </div>
          </motion.div>

          {/* Right word */}
          <motion.h1
            {...anim(0.15)}
            className="order-3 whitespace-nowrap text-left font-display text-foreground"
            style={{
              fontSize: "clamp(2.75rem, 11vw, 8.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.005em",
            }}
          >
            DESIGNER
          </motion.h1>
        </div>

        {/* Tagline — centered under portrait */}
        <motion.p
          {...anim(0.35)}
          className="mt-10 max-w-md text-center text-sm leading-relaxed text-muted-foreground md:max-w-lg md:text-base"
        >
          I design digital experiences that feel clear, human, and visually
          memorable — product UI, brand systems, and visual communication.
        </motion.p>

        {/* Theme toggle */}
        <motion.button
          {...anim(0.5)}
          onClick={toggle}
          type="button"
          aria-label="Toggle light and dark theme"
          aria-pressed={theme === "light"}
          className="mt-8 inline-flex h-7 w-14 items-center rounded-full p-1 transition-colors"
          style={{ background: "oklch(0.97 0.003 80 / 0.9)" }}
        >
          <motion.span
            animate={{ x: theme === "light" ? 28 : 0 }}
            transition={{ type: "spring", stiffness: 360, damping: 28 }}
            className="h-5 w-5 rounded-full shadow-soft"
            style={{ background: "var(--accent)" }}
          />
        </motion.button>
      </div>
    </section>
  );
}
