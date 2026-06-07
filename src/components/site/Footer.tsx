import logo from "@/assets/logo.svg.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo.url} alt="" className="h-5 w-auto opacity-70" />
          <span>© {new Date().getFullYear()} — Independent design studio.</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="transition-colors hover:text-foreground">Twitter</a>
          <a href="#" className="transition-colors hover:text-foreground">Read.cv</a>
          <a href="#" className="transition-colors hover:text-foreground">Email</a>
        </div>
      </div>
    </footer>
  );
}
