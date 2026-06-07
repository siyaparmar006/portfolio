import { Heart } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobepremierepro,
  SiAdobelightroom,
  SiProcreate,
  SiClaude,
  SiOpenai,
  SiFramer,
  SiSketchup,
  SiBlender,
  SiMailerlite,
  SiAsana,
  SiHubspot,
} from "react-icons/si";

type Software = { name: string; Icon: IconType };

const softwares: Software[] = [
  { name: "Figma", Icon: SiFigma },
  { name: "Canva", Icon: SiCanva },
  { name: "Photoshop", Icon: SiAdobephotoshop },
  { name: "Illustrator", Icon: SiAdobeillustrator },
  { name: "InDesign", Icon: SiAdobeindesign },
  { name: "Premiere Pro", Icon: SiAdobepremierepro },
  { name: "Lightroom", Icon: SiAdobelightroom },
  { name: "Procreate", Icon: SiProcreate },
  { name: "Claude", Icon: SiClaude },
  { name: "ChatGPT", Icon: SiOpenai },
  { name: "Framer", Icon: SiFramer },
  { name: "Lovable", Icon: Heart as unknown as IconType },
  { name: "SketchUp", Icon: SiSketchup },
  { name: "Blender", Icon: SiBlender },
  { name: "MailerLite", Icon: SiMailerlite },
  { name: "Asana", Icon: SiAsana },
  { name: "HubSpot", Icon: SiHubspot },
];

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
        {loop.map(({ name, Icon }, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <Icon className="h-4 w-4 shrink-0" aria-hidden />
            <span className="text-xs uppercase tracking-[0.2em] md:text-sm">
              {name}
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
