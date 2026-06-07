import { motion, useReducedMotion } from "framer-motion";
import portrait from "@/assets/siya-portrait.jpg.asset.json";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();
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
      <div aria-hidden className="absolute inset-0 grain-noise opacity-70" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col items-center justify-center px-6 pt-28 pb-16 md:pt-32">
        {/* Kicker */}
        <motion.div
          {...anim(0.05)}
          className="mb-2 self-start font-display text-xs tracking-[0.28em] text-foreground/80 md:mb-4 md:text-sm"
        >
          SIYA PARMAR
        </motion.div>

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

            {/* Hi! waving badge — bottom-left corner */}
            <div
              aria-label="Hi"
              className="absolute -bottom-6 -left-6 flex h-16 w-16 items-center justify-center rounded-full shadow-lift ring-4 ring-background md:h-20 md:w-20"
              style={{
                background: "var(--accent)",
                color: "var(--accent-foreground)",
              }}
            >
              <span className="text-2xl" role="img" aria-hidden>
                ✋
              </span>
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

        {/* Tagline */}
        <motion.p
          {...anim(0.35)}
          className="mt-8 max-w-md self-center text-center text-sm leading-relaxed text-muted-foreground md:mt-6 md:max-w-sm md:self-end md:text-right"
        >
          I design digital experiences that feel clear, human, and visually
          memorable — product UI, brand systems, and visual communication.
        </motion.p>

        {/* CTA toggle */}
        <motion.a
          {...anim(0.5)}
          href="#work"
          aria-label="Scroll to work"
          className="mt-10 inline-flex h-7 w-14 items-center rounded-full bg-foreground/10 p-1"
        >
          <span
            className="h-5 w-5 rounded-full shadow-soft"
            style={{ background: "var(--accent)" }}
          />
        </motion.a>
      </div>
    </section>
  );
}
