import { motion } from "framer-motion";
import { Mail, Calendar } from "lucide-react";
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
            Building quiet products with deliberate teams.
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7">
          <p className="text-lg leading-relaxed text-foreground/80">
            I've spent the last decade designing software for founders, studios and
            small product teams. My favourite work lives at the intersection of
            systems thinking and craft — where the interface disappears and the
            idea takes the stage.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Currently taking on one or two engagements per quarter. If you're
            shipping something you care about, I'd love to hear from you.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:hello@example.com"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <Mail className="h-4 w-4" />
              hello@studio.com
            </a>
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors duration-300 hover:text-background"
            >
              <span className="absolute inset-0 -z-0 translate-y-full bg-foreground transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <Calendar className="relative h-4 w-4" />
              <span className="relative">Book an intro</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
