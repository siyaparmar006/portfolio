import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion";

export function Atlas() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card p-10 text-center shadow-soft md:p-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-70"
              style={{ background: "var(--gradient-soft)" }}
            />
            <div className="relative">
              <div className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Beyond the case studies
              </div>
              <h3 className="mx-auto max-w-2xl text-balance font-display text-3xl leading-tight md:text-5xl">
                A floating universe of every project, sketch and system.
              </h3>

              <div className="mt-10 flex justify-center">
                <motion.a
                  href="#"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background"
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
                        "radial-gradient(circle, oklch(0.72 0.13 50 / 0.4), transparent 70%)",
                    }}
                  />
                  {/* orbiting dot */}
                  <motion.span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-accent"
                    style={{ marginLeft: -3, marginTop: -3 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  >
                    <span
                      className="absolute h-1.5 w-1.5 rounded-full bg-accent"
                      style={{ transform: "translateX(90px)" }}
                    />
                  </motion.span>
                  <span className="relative">Explore Design Atlas</span>
                  <motion.span
                    variants={{
                      rest: { x: 0, y: 0 },
                      hover: { x: 3, y: -3 },
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative inline-flex"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </motion.a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
