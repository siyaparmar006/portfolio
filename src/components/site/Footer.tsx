import logoUrl from "@/assets/brand/siya-logo.png";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logoUrl} alt={site.name} className="h-7 w-auto dark:invert" />
          <span>© 2026 {site.name}</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-foreground">
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a href={site.resumePath} className="transition-colors hover:text-foreground">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
