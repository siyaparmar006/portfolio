import { motion } from "framer-motion";
import { Compass, Layers, Waves, Anchor } from "lucide-react";
import { Reveal } from "./motion";

const principles = [
  {
    icon: Compass,
    title: "Direction over decoration",
    body: "Every layout decision earns its place by clarifying the path forward.",
  },
  {
    icon: Layers,
    title: "Systems, then surfaces",
    body: "Tokens, primitives, and rhythm before pixels — surfaces compose themselves.",
  },
  {
    icon: Waves,
    title: "Motion as meaning",
    body: "Animation carries hierarchy. If it doesn't, it's removed.",
  },
  {
    icon: Anchor,
    title: "Calm by default",
    body: "Restraint is a feature. Interfaces should breathe, not perform.",
  },
];

export function DesignOS() {
  return (
    <section id="os" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-2xl">
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Design OS
          </div>
          <h2 className="font-display text-balance text-4xl leading-[1.05] md:text-5xl">
            Four principles that hold the rest together.
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-3xl border border-border/60 bg-card p-6 shadow-soft transition-shadow duration-500 hover:shadow-lift"
              >
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: "var(--gradient-warm)" }}
                />
                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground/80">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-muted-foreground/60">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="font-display text-xl leading-tight">{p.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1 w-1 rounded-full bg-foreground/30"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          delay: d * 0.3,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
