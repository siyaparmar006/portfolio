import { motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";

export function About() {
  const reduced = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-15% 0px" },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, oklch(0.576 0.190 275.7 / 0.12), transparent 55%), radial-gradient(circle at 80% 70%, oklch(0.4 0.02 80 / 0.35), transparent 55%)",
        }}
      />

      <div id="contact" className="relative mx-auto max-w-4xl text-center">
        <motion.div
          {...fadeUp(0)}
          className="text-xs uppercase tracking-[0.22em] text-muted-foreground"
        >
          About · Contact
        </motion.div>

        <motion.h2
          {...fadeUp(0.05)}
          className="mt-4 font-display text-balance text-3xl leading-[1.05] md:text-5xl"
        >
          A Product Designer with a visual communication edge.
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg"
        >
          I'm Siya Parmar, a Product Designer and Visual Communication Designer based in
          Jersey City. My work blends human-centered design, UX/UI, branding, typography,
          layout, and storytelling to create experiences that are useful, clear, and
          visually memorable.
        </motion.p>

        <motion.p
          {...fadeUp(0.15)}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Let's create digital experiences that feel clear, human, and memorable.
        </motion.p>

        <motion.div {...fadeUp(0.2)} className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:siyaparmar@example.com"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/siyaparmar"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-foreground/5"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-foreground/5"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
