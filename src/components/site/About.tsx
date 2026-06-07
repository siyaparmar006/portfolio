import { motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";
import portrait from "@/assets/siya-portrait.jpg.asset.json";

const skills = [
  "UX/UI Design",
  "Visual Systems",
  "Brand Thinking",
  "Information Architecture",
  "Typography",
  "Communication Design",
  "Editorial Layout",
  "Print & Packaging",
];

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
    <section id="about" className="relative overflow-hidden px-6 py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, oklch(0.576 0.190 275.7 / 0.18), transparent 55%), radial-gradient(circle at 85% 80%, oklch(0.4 0.02 80 / 0.4), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section label */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-foreground/30" />
          About · 01
        </motion.div>

        {/* Editorial headline grid */}
        <div className="mt-10 grid grid-cols-12 gap-y-12 gap-x-6 md:gap-x-10">
          {/* Portrait + meta column */}
          <motion.aside
            {...fadeUp(0.05)}
            className="col-span-12 md:col-span-4"
          >
            <div className="relative">
              <div
                className="overflow-hidden rounded-[1.5rem] border border-foreground/10 shadow-lift"
                style={{ rotate: "-2deg" } as React.CSSProperties}
              >
                <img
                  src={portrait.url}
                  alt="Portrait of Siya Parmar"
                  className="block aspect-[4/5] w-full object-cover"
                />
              </div>
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-[1.75rem]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.576 0.190 275.7 / 0.35), transparent 60%)",
                }}
              />
            </div>

            <dl className="mt-8 space-y-3 text-sm">
              <div className="flex justify-between border-b border-foreground/10 pb-2">
                <dt className="text-muted-foreground">Based in</dt>
                <dd className="font-medium">Jersey City, NJ</dd>
              </div>
              <div className="flex justify-between border-b border-foreground/10 pb-2">
                <dt className="text-muted-foreground">Focus</dt>
                <dd className="font-medium">Product · Brand</dd>
              </div>
              <div className="flex justify-between border-b border-foreground/10 pb-2">
                <dt className="text-muted-foreground">Available</dt>
                <dd className="font-medium text-[oklch(0.576_0.190_275.7)]">
                  Open · 2026
                </dd>
              </div>
            </dl>
          </motion.aside>

          {/* Story + skills column */}
          <div className="col-span-12 md:col-span-8 md:pl-6">
            <motion.h2
              {...fadeUp(0.08)}
              className="font-display text-balance text-4xl leading-[0.95] md:text-6xl lg:text-7xl"
            >
              Designing the <em className="font-serif italic text-[oklch(0.576_0.190_275.7)]">quiet</em> details
              that make products feel <em className="font-serif italic">human.</em>
            </motion.h2>

            <motion.p
              {...fadeUp(0.14)}
              className="mt-8 max-w-xl text-base leading-relaxed text-foreground/85 md:text-lg"
            >
              I'm <strong className="font-semibold">Siya Parmar</strong> — a Product
              Designer with roots in visual communication, branding, typography, and
              print. I move fluently between systems thinking and the craft of a
              single screen, headline, or grid.
            </motion.p>

            <motion.p
              {...fadeUp(0.18)}
              className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              My work blends UX/UI with storytelling — building experiences that
              feel clear, intentional, and visually memorable.
            </motion.p>

            {/* Skills as editorial chips */}
            <motion.div {...fadeUp(0.24)} className="mt-10">
              <div className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                <span className="h-px w-6 bg-foreground/30" />
                Disciplines
              </div>
              <ul className="flex flex-wrap gap-2">
                {skills.map((s, i) => (
                  <li
                    key={s}
                    className="group rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-sm transition-colors hover:border-[oklch(0.576_0.190_275.7)] hover:text-[oklch(0.576_0.190_275.7)]"
                  >
                    <span className="mr-2 text-[10px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              id="contact"
              {...fadeUp(0.32)}
              className="mt-12 flex flex-wrap items-center gap-3 border-t border-foreground/10 pt-8"
            >
              <span className="mr-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Let's talk →
              </span>
              <a
                href="mailto:siyaparmar@example.com"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href="https://linkedin.com/in/siyaparmar"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-foreground/5"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-foreground/5"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
