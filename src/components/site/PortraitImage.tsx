const logoUrl = "/assets/brand/siya-logo.png";

export function PortraitImage({ alt, className }: { alt: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-secondary ${className ?? ""}`}
      aria-label={alt}
    >
      <img src={logoUrl} alt="" className="h-1/3 w-auto opacity-80 dark:invert" />
    </div>
  );
}
