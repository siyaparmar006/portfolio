import logo from "@/assets/siya-logo.svg.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="Siya Parmar" className="h-6 w-auto invert dark:invert-0" />
          <span>© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="mailto:siyaparmar@example.com" className="transition-colors hover:text-foreground">Email</a>
          <a href="https://linkedin.com/in/siyaparmar" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">LinkedIn</a>
          <a href="/resume.pdf" className="transition-colors hover:text-foreground">Resume</a>
        </div>
      </div>
    </footer>
  );
}
