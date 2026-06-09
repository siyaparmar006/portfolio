"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Linkedin, FileText } from "lucide-react";
import { PortraitImage } from "@/components/site/PortraitImage";
import { site } from "@/content/site";

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
            "radial-gradient(circle at 15% 20%, color-mix(in oklch, var(--accent) 18%, transparent), transparent 55%), radial-gradient(circle at 85% 80%, color-mix(in oklch, var(--foreground) 10%, transparent), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-foreground/30" />
          About · 01
        </motion.div>

        <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-12 md:gap-x-10">
          <motion.aside {...fadeUp(0.05)} className="col-span-12 md:col-span-4">
            <div className="relative">
              <div
                className="overflow-hidden rounded-[1.5rem] border border-foreground/10 shadow-lift"
                style={{ rotate: "-2deg" } as React.CSSProperties}
              >
                <PortraitImage
                  alt={`Portrait of ${site.name}`}
                  className="block aspect-[4/5] w-full object-cover"
                />
              </div>
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-[1.75rem]"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklch, var(--accent) 35%, transparent), transparent 60%)",
                }}
              />
            </div>

            <dl className="mt-8 space-y-3 text-sm">
              <div className="flex justify-between border-b border-foreground/10 pb-2">
                <dt className="text-muted-foreground">Based in</dt>
                <dd className="font-medium">{site.location}</dd>
              </div>
              <div className="flex justify-between border-b border-foreground/10 pb-2">
                <dt className="text-muted-foreground">Focus</dt>
                <dd className="font-medium">{site.focus}</dd>
              </div>
              <div className="flex justify-between border-b border-foreground/10 pb-2">
                <dt className="text-muted-foreground">Available</dt>
                <dd className="font-medium text-primary">{site.availability}</dd>
              </div>
            </dl>
          </motion.aside>

          <div className="col-span-12 md:col-span-8 md:pl-6">
            <motion.h2
              {...fadeUp(0.08)}
              className="font-display text-4xl leading-[0.95] text-balance md:text-6xl lg:text-7xl"
            >
              Designing the <em className="font-serif text-primary italic">quiet</em> details that
              make products feel <em className="font-serif italic">human.</em>
            </motion.h2>

            {site.bio.map((paragraph, index) => (
              <motion.p
                key={paragraph.slice(0, 24)}
                {...fadeUp(0.14 + index * 0.04)}
                className={`max-w-xl text-base leading-relaxed md:text-lg ${
                  index === 0 ? "mt-8 text-foreground/85" : "mt-4 text-muted-foreground"
                }`}
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div {...fadeUp(0.24)} className="mt-10">
              <div className="mb-4 flex items-center gap-3 text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
                <span className="h-px w-6 bg-foreground/30" />
                Disciplines
              </div>
              <ul className="flex flex-wrap gap-2">
                {site.skills.map((s, i) => (
                  <li
                    key={s}
                    className="group rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
                  >
                    <span className="mr-2 text-[10px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              id="contact"
              {...fadeUp(0.32)}
              className="mt-12 flex flex-wrap items-center gap-3 border-t border-foreground/10 pt-8"
            >
              <span className="mr-2 text-xs tracking-[0.22em] text-muted-foreground uppercase">
                Let's talk →
              </span>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-foreground/5"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={site.resumePath}
                target="_blank"
                rel="noopener noreferrer"
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
