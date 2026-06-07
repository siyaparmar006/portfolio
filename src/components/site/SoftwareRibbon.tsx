import { Heart, Sparkles } from "lucide-react";

type Software = {
  name: string;
  slug?: string;
  icon?: "heart" | "sparkles";
};

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
  if (item.icon === "heart")
    return <Heart className="h-5 w-5 shrink-0" strokeWidth={2.2} />;
  if (item.icon === "sparkles")
    return <Sparkles className="h-5 w-5 shrink-0" strokeWidth={2.2} />;
  return (
    <img
      src={`https://cdn.simpleicons.org/${item.slug}/ffffff`}
      alt=""
      aria-hidden
      width={20}
      height={20}
      loading="lazy"
      className="h-5 w-5 shrink-0 opacity-90"
    />
  );
}

export function SoftwareRibbon() {
  const loop = [...softwares, ...softwares];

  return (
    <section
      aria-label="Tools and software I use"
      className="relative overflow-hidden border-y border-foreground/10 bg-foreground py-5 text-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-foreground to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-foreground to-transparent"
      />

      <div className="flex w-max animate-[ribbon_60s_linear_infinite] gap-10 whitespace-nowrap will-change-transform">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <Icon item={item} />
            <span className="font-display text-2xl tracking-wide md:text-3xl">
              {item.name}
            </span>
            <span className="ml-10 inline-block h-1.5 w-1.5 rounded-full bg-background/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
