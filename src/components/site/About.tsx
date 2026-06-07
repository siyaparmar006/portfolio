import { motion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";
import { Reveal } from "./motion";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-32">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
        style={{
          background:
            "radial-gradient(circle at 20% 30%, oklch(0.86 0.08 55 / 0.25), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.88 0.05 130 / 0.2), transparent 55%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div id="contact" className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            About · Contact
          </div>
          <h2 className="mt-4 font-display text-balance text-4xl leading-[1.05] md:text-5xl">
            A Product Designer with a visual communication edge.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7">
          <p className="text-lg leading-relaxed text-foreground/80">
            I'm Siya Parmar, a Product Designer and Visual Communication Designer based in
            Jersey City. My work blends human-centered design, UX/UI, branding, typography,
            layout, and storytelling to create experiences that are useful, clear, and visually
            memorable.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Let's create digital experiences that feel clear, human, and memorable.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
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
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
