import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, FileText } from "lucide-react";
import portrait from "@/assets/siya-portrait.jpg.asset.json";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.7"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [60, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden px-6 py-32">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={reduced ? undefined : { backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        style={{
          background:
            "radial-gradient(circle at 20% 30%, oklch(0.86 0.08 55 / 0.25), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.88 0.05 130 / 0.2), transparent 55%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div id="contact" className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12">
        {/* Mobile inline portrait — desktop uses the shared floating card */}
        <div className="md:hidden">
          <div className="relative mx-auto w-full max-w-[260px] overflow-hidden rounded-[1.75rem] border border-[var(--clay-1)]/40 bg-card p-2 shadow-lift">
            <img
              src={portrait.url}
              alt="Portrait of Siya Parmar"
              width={560}
              height={700}
              className="relative block aspect-[4/5] w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="md:col-span-7"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            About · Contact
          </div>
          <h2 className="mt-3 font-display text-balance text-3xl leading-[1.05] md:text-5xl">
            A Product Designer with a visual communication edge.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
            I'm Siya Parmar, a Product Designer and Visual Communication Designer based in
            Jersey City. My work blends human-centered design, UX/UI, branding, typography,
            layout, and storytelling to create experiences that are useful, clear, and visually
            memorable.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Let's create digital experiences that feel clear, human, and memorable.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
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
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background hover:shadow-lift"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background hover:shadow-lift"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Desktop right column reserved for the floating portrait card landing */}
        <div aria-hidden className="hidden md:col-span-5 md:block" style={{ height: "60vh" }} />
      </div>
    </section>
  );
}
