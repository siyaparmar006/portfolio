import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "@/hooks/use-theme";
import logo from "@/assets/siya-logo.svg.asset.json";

type NavLink = { href: string; label: string; to?: string };

const links: NavLink[] = [
  { href: "/#work", label: "Work" },
  { href: "/#os", label: "Design OS" },
  { href: "/atlas", label: "Atlas", to: "/atlas" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

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
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <motion.nav
        animate={{
          width: scrolled ? "min(820px, 96%)" : "min(1180px, 100%)",
          paddingTop: scrolled ? 8 : 14,
          paddingBottom: scrolled ? 8 : 14,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`relative flex items-center justify-between rounded-full px-3 transition-colors duration-500 md:px-4 ${
          scrolled
            ? "glass border border-border/60 shadow-soft"
            : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 pl-2" aria-label="Siya Parmar — Home">
          <img
            src={logo.url}
            alt="Siya Parmar"
            className="h-7 w-auto invert [.light_&]:invert-0"
          />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative rounded-full px-3 py-1.5 text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                <span className="absolute inset-0 -z-10 scale-90 rounded-full bg-secondary opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/15 bg-background/40 text-foreground/80 backdrop-blur transition-all duration-300 hover:border-foreground/40 hover:text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/40 px-3.5 py-1.5 text-xs text-foreground/85 backdrop-blur transition-all duration-300 hover:border-foreground/40 hover:bg-foreground hover:text-background md:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inset-0 animate-ping rounded-full opacity-75"
                style={{ background: "var(--accent)" }}
              />
              <span
                className="relative h-2 w-2 rounded-full"
                style={{ background: "var(--accent)" }}
              />
            </span>
            Let's talk
          </a>
        </div>
      </motion.nav>
    </motion.header>
  );
}
