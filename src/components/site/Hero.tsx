import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
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
      {/* Soft purple gradient ball blur behind portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[60vw] max-h-[640px] w-[60vw] max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.576 0.190 275.7 / 0.55), transparent 65%)",
        }}
      />

      <div aria-hidden className="absolute inset-0 grain-noise opacity-60" />

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col items-center justify-center px-6 pt-28 pb-20 md:pt-32">
        {/* Main row: PRODUCT · portrait · DESIGNER */}
        <div className="relative grid w-full grid-cols-1 items-center gap-x-4 gap-y-8 md:grid-cols-[1fr_auto_1fr] md:gap-x-6">
          <motion.h1
            {...anim(0.1)}
            className="order-2 whitespace-nowrap text-center font-display text-foreground md:order-1 md:text-right"
            style={{
              fontSize: "clamp(2.75rem, 11vw, 8.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.005em",
            }}
          >
            PRODUCT
          </motion.h1>

          {/* Portrait card — centered design object */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="relative order-1 mx-auto w-[55vw] max-w-[260px] md:order-2 md:w-[20vw] md:min-w-[210px] md:max-w-[250px]"
            style={{ rotate: "-2.5deg" }}
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-[oklch(0.92_0.01_70)] shadow-lift">
              <img
                src={portrait.url}
                alt="Portrait of Siya Parmar, Product Designer"
                width={832}
                height={1024}
                className="block aspect-[4/5.2] w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            {...anim(0.18)}
            className="order-3 whitespace-nowrap text-center font-display text-foreground md:text-left"
            style={{
              fontSize: "clamp(2.75rem, 11vw, 8.5rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.005em",
            }}
          >
            DESIGNER
          </motion.h1>
        </div>

        {/* Headline */}
        <motion.p
          {...anim(0.35)}
          className="mt-12 max-w-2xl text-balance text-center text-base leading-relaxed text-foreground/85 md:text-lg"
        >
          Product Designer crafting human-centered digital experiences with strong
          visual systems and brand thinking.
        </motion.p>

        {/* Subheading */}
        <motion.p
          {...anim(0.42)}
          className="mt-3 max-w-xl text-center text-sm leading-relaxed text-muted-foreground md:text-[15px]"
        >
          I design digital experiences that feel clear, human, and visually memorable.
        </motion.p>


        {/* CTAs */}
        <motion.div
          {...anim(0.6)}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            View Signature Work
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a
            href="/resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-foreground/5"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
