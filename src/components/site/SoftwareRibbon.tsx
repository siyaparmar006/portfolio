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

type IconCmp = (props: { className?: string }) => JSX.Element;

/** Letter-monogram fallback icon (used for brands not in react-icons/si). */
const Mono =
  (letters: string): IconCmp =>
  ({ className }) =>
    (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="1.5"
          y="1.5"
          width="21"
          height="21"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="700"
          fontSize={letters.length > 2 ? "8" : "10"}
          fill="currentColor"
        >
          {letters}
        </text>
      </svg>
    );

const Lovable: IconCmp = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M12 21s-7.5-4.6-9.4-9.1C1 8 3.5 4 7.3 4c2 0 3.6 1.1 4.7 2.7C13.1 5.1 14.7 4 16.7 4c3.8 0 6.3 4 4.7 7.9C19.5 16.4 12 21 12 21z" />
  </svg>
);

type Software = { name: string; Icon: IconCmp };

const softwares: Software[] = [
  { name: "Figma", Icon: SiFigma as unknown as IconCmp },
  { name: "Canva", Icon: SiCanva as unknown as IconCmp },
  { name: "Photoshop", Icon: Mono("Ps") },
  { name: "Illustrator", Icon: Mono("Ai") },
  { name: "InDesign", Icon: Mono("Id") },
  { name: "Premiere Pro", Icon: Mono("Pr") },
  { name: "Lightroom", Icon: Mono("Lr") },
  { name: "Procreate", Icon: Mono("Pc") },
  { name: "Claude", Icon: SiClaude as unknown as IconCmp },
  { name: "ChatGPT", Icon: SiOpenai as unknown as IconCmp },
  { name: "Framer", Icon: SiFramer as unknown as IconCmp },
  { name: "Lovable", Icon: Lovable },
  { name: "SketchUp", Icon: SiSketchup as unknown as IconCmp },
  { name: "Blender", Icon: SiBlender as unknown as IconCmp },
  { name: "MailerLite", Icon: Mono("ML") },
  { name: "Asana", Icon: SiAsana as unknown as IconCmp },
  { name: "HubSpot", Icon: SiHubspot as unknown as IconCmp },
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
            <Icon className="h-4 w-4 shrink-0" />
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
