import { Heart } from "lucide-react";

type Software = { name: string; slug?: string; icon?: "heart" };

const softwares: Software[] = [
  { name: "Figma", slug: "figma" },
  { name: "Canva", slug: "canva" },
  { name: "Photoshop", slug: "adobephotoshop" },
  { name: "Illustrator", slug: "adobeillustrator" },
  { name: "InDesign", slug: "adobeindesign" },
  { name: "Premiere Pro", slug: "adobepremierepro" },
  { name: "Lightroom", slug: "adobelightroom" },
  { name: "Procreate", slug: "procreate" },
  { name: "Claude", slug: "claude" },
  { name: "ChatGPT", slug: "openai" },
  { name: "Framer", slug: "framer" },
  { name: "Lovable", icon: "heart" },
  { name: "SketchUp", slug: "sketchup" },
  { name: "Blender", slug: "blender" },
  { name: "MailerLite", slug: "mailerlite" },
  { name: "Asana", slug: "asana" },
  { name: "HubSpot", slug: "hubspot" },
];

function Icon({ item }: { item: Software }) {
  if (item.icon === "heart") {
    return <Heart className="h-4 w-4 shrink-0" strokeWidth={2.2} />;
  }
  const url = `https://cdn.simpleicons.org/${item.slug}`;
  // Mask trick: icon color follows currentColor so it adapts to light/dark mode
  return (
    <span
      aria-hidden
      className="block h-4 w-4 shrink-0 bg-current"
      style={{
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

export function SoftwareRibbon() {
  const loop = [...softwares, ...softwares];

  return (
    <section
      aria-label="Tools and software I use"
      className="relative overflow-hidden border-y border-foreground/10 bg-background py-3 text-foreground/80"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent"
      />

      <div className="flex w-max animate-[ribbon_55s_linear_infinite] gap-8 whitespace-nowrap will-change-transform">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <Icon item={item} />
            <span className="text-xs uppercase tracking-[0.2em] md:text-sm">
              {item.name}
            </span>
            <span
              aria-hidden
              className="ml-6 inline-block h-1 w-1 rounded-full bg-foreground/25"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
