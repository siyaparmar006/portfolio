import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#os", label: "Design OS" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60 py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="Home">
          <span className="font-display text-lg tracking-tight">Siya Parmar</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                <span className="absolute inset-0 -z-10 scale-90 rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-foreground/15 px-4 py-2 text-sm text-foreground/80 transition-all duration-300 hover:border-foreground/40 hover:bg-foreground hover:text-background md:inline-flex"
        >
          Let's talk
        </a>
      </nav>
    </motion.header>
  );
}
