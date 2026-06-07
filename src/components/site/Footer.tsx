export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display text-base tracking-tight">Siya Parmar</span>
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
