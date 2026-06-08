import logoUrl from "@/assets/brand/siya-logo.png";

const portraitModules = import.meta.glob<string>("../assets/portrait/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const portraitUrl = Object.values(portraitModules)[0];

export function PortraitImage({ alt, className }: { alt: string; className?: string }) {
  if (portraitUrl) {
    return <img src={portraitUrl} alt={alt} className={className} />;
  }

  return (
    <div
      className={`flex items-center justify-center bg-secondary ${className ?? ""}`}
      aria-label={alt}
    >
      <img src={logoUrl} alt="" className="h-1/3 w-auto opacity-80 dark:invert" />
    </div>
  );
}
