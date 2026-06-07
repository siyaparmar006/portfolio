import type * as React from "react";
import {
  SiFigma,
  SiCanva,
  SiClaude,
  SiOpenai,
  SiFramer,
  SiSketchup,
  SiBlender,
  SiAsana,
  SiHubspot,
} from "react-icons/si";

type IconCmp = (props: { className?: string }) => React.ReactElement;

/** Letter-monogram fallback icon — colored tile with white letters (Adobe-style). */
const Mono =
  (letters: string, bg: string): IconCmp =>
  ({ className }) =>
    (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
        <rect x="1" y="1" width="22" height="22" rx="4" fill={bg} />
        <rect
          x="1"
          y="1"
          width="22"
          height="22"
          rx="4"
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
        />
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="800"
          fontStyle="italic"
          fontSize={letters.length > 2 ? "8.5" : "11"}
          fill={letters === "Ps" || letters === "Ai" || letters === "Id" || letters === "Pr" || letters === "Lr" ? "#fff" : "#fff"}
          style={{ letterSpacing: "-0.5px" }}
        >
          {letters}
        </text>
      </svg>
    );

const Lovable: IconCmp = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#FF4D6D" aria-hidden>
    <path d="M12 21s-7.5-4.6-9.4-9.1C1 8 3.5 4 7.3 4c2 0 3.6 1.1 4.7 2.7C13.1 5.1 14.7 4 16.7 4c3.8 0 6.3 4 4.7 7.9C19.5 16.4 12 21 12 21z" />
  </svg>
);

type Software = { name: string; Icon: IconCmp; color?: string };

// Brand colors sourced from simple-icons
const softwares: Software[] = [
  { name: "Figma", Icon: SiFigma as unknown as IconCmp, color: "#F24E1E" },
  { name: "Canva", Icon: SiCanva as unknown as IconCmp, color: "#00C4CC" },
  { name: "Photoshop", Icon: Mono("Ps", "#001E36") },
  { name: "Illustrator", Icon: Mono("Ai", "#330000") },
  { name: "InDesign", Icon: Mono("Id", "#49021F") },
  { name: "Premiere Pro", Icon: Mono("Pr", "#00005B") },
  { name: "Lightroom", Icon: Mono("Lr", "#001E36") },
  { name: "Procreate", Icon: Mono("Pc", "#000000") },
  { name: "Claude", Icon: SiClaude as unknown as IconCmp, color: "#D97757" },
  { name: "ChatGPT", Icon: SiOpenai as unknown as IconCmp, color: "#10A37F" },
  { name: "Framer", Icon: SiFramer as unknown as IconCmp, color: "#0055FF" },
  { name: "Lovable", Icon: Lovable },
  { name: "SketchUp", Icon: SiSketchup as unknown as IconCmp, color: "#005F9E" },
  { name: "Blender", Icon: SiBlender as unknown as IconCmp, color: "#E87D0D" },
  { name: "MailerLite", Icon: Mono("ML", "#09C269") },
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
