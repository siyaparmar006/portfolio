import type * as React from "react";
import {
  SiClaude,
  SiOpenai,
  SiFramer,
  SiSketchup,
  SiBlender,
  SiAsana,
  SiHubspot,
} from "react-icons/si";
import lovableLogo from "@/assets/lovable-logo.svg.asset.json";
import canvaLogo from "@/assets/canva.png.asset.json";
import procreateLogo from "@/assets/procreate.png.asset.json";
import mailerliteLogo from "@/assets/mailerlite.png.asset.json";

type IconCmp = (props: { className?: string }) => React.ReactElement;

/** Adobe-style CC tile: dark rounded square with bright letter glyph. */
const AdobeTile =
  (letters: string, bg: string, fg: string): IconCmp =>
  ({ className }) =>
    (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="1.5" y="1.5" width="21" height="21" rx="4.5" fill={bg} />
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize={letters.length > 2 ? "9" : "12"}
          fill={fg}
          style={{ letterSpacing: "-0.5px" }}
        >
          {letters}
        </text>
      </svg>
    );

/** Authentic multi-color filled Figma logo. */
const Figma: IconCmp = ({ className }) => (
  <svg viewBox="0 0 38 57" className={className} aria-hidden="true">
    <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
    <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
    <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
    <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
    <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
  </svg>
);

/** Procreate official mark — stylized P brushstroke. */
const Procreate: IconCmp = ({ className }) => (
  <img src={procreateLogo.url} alt="" className={className} />
);

const Canva: IconCmp = ({ className }) => (
  <img src={canvaLogo.url} alt="" className={className} />
);

const MailerLite: IconCmp = ({ className }) => (
  <img src={mailerliteLogo.url} alt="" className={className} />
);

const Lovable: IconCmp = ({ className }) => (
  <img src={lovableLogo.url} alt="" className={className} />
);

type Software = { name: string; Icon: IconCmp; color?: string };

const softwares: Software[] = [
  { name: "Figma", Icon: Figma },
  { name: "Canva", Icon: Canva },
  { name: "Photoshop", Icon: AdobeTile("Ps", "#001E36", "#31A8FF") },
  { name: "Illustrator", Icon: AdobeTile("Ai", "#330000", "#FF9A00") },
  { name: "InDesign", Icon: AdobeTile("Id", "#49021F", "#FD3F92") },
  { name: "Premiere Pro", Icon: AdobeTile("Pr", "#00005B", "#9999FF") },
  { name: "Lightroom", Icon: AdobeTile("Lr", "#001E36", "#31A8FF") },
  { name: "Procreate", Icon: Procreate },
  { name: "Claude", Icon: SiClaude as unknown as IconCmp, color: "#D97757" },
  { name: "ChatGPT", Icon: SiOpenai as unknown as IconCmp, color: "#10A37F" },
  { name: "Framer", Icon: SiFramer as unknown as IconCmp, color: "#0055FF" },
  { name: "Lovable", Icon: Lovable },
  { name: "SketchUp", Icon: SiSketchup as unknown as IconCmp, color: "#005F9E" },
  { name: "Blender", Icon: SiBlender as unknown as IconCmp, color: "#E87D0D" },
  { name: "MailerLite", Icon: AdobeTile("ML", "#09C269", "#ffffff") },
  { name: "Asana", Icon: SiAsana as unknown as IconCmp, color: "#F06A6A" },
  { name: "HubSpot", Icon: SiHubspot as unknown as IconCmp, color: "#FF7A59" },
];

export function SoftwareRibbon() {
  const loop = [...softwares, ...softwares];

  return (
    <section
      aria-label="Tools and software I use"
      className="relative overflow-hidden border-y border-foreground/10 bg-background py-3"
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
        {loop.map(({ name, Icon, color }, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center"
              style={color ? { color } : undefined}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/85 md:text-sm">
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
