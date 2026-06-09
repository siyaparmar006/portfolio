"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  getProjectGallery,
  getProjectImage,
  getProjectImages,
  type ContentBlock,
  type ProjectDetail,
  type ProjectSection,
} from "@/content/project-details";
import { getProjectCover, type PortfolioProject } from "@/content/projects";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

const ease = [0.22, 1, 0.36, 1] as const;

/** Portrait booklet page — full page visible, no crop */
function PublicationPageImage({
  src,
  alt,
  className,
  style,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}) {
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt}
        className="block w-full rounded-2xl shadow-soft md:rounded-[1.75rem]"
        style={style}
        loading={priority ? "eager" : "lazy"}
      />
    </figure>
  );
}

/** Full-width hero — fills rounded frame edge-to-edge (reference PDF). */
function HeroImage({
  src,
  alt,
  publication = false,
  scale,
}: {
  src: string;
  alt: string;
  publication?: boolean;
  scale?: number;
}) {
  const zoomStyle = scale ? { transform: `scale(${scale})`, transformOrigin: "center" as const } : undefined;
  if (publication) {
    return <PublicationPageImage src={src} alt={alt} className="w-full" style={zoomStyle} priority />;
  }
  return (
    <img
      src={src}
      alt={alt}
      className="w-full rounded-2xl shadow-soft ring-1 ring-border md:rounded-[1.75rem]"
      style={zoomStyle}
      loading="eager"
    />
  );
}

/** Publication spread — natural aspect, no letterboxing or crop. */
function SpreadImage({
  src,
  alt = "",
  className,
  compact = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  compact?: boolean;
}) {
  if (compact) {
    return <PublicationPageImage src={src} alt={alt} className={className} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full rounded-xl ring-1 ring-border md:rounded-2xl${className ? ` ${className}` : ""}`}
      loading="lazy"
    />
  );
}

type Props = {
  project: PortfolioProject;
  detail: ProjectDetail;
};

export function ProjectDetailPage({ project, detail }: Props) {
  const reduced = useReducedMotion();
  const slug = project.slug;
  const cover = getProjectCover(slug);
  const hero =
    (detail.heroImage && getProjectImage(slug, detail.heroImage)) ||
    cover ||
    getProjectGallery(slug)[0];

  const fade = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease, delay },
        };

  const title = detail.displayTitle ?? project.title;
  const briefImages = detail.briefImages ? getProjectImages(slug, detail.briefImages) : [];
  const description = detail.scope ?? detail.intro;
  const projectDuration = detail.duration ?? "—";
  const compactImages = detail.compactImages ?? detail.hubSlug === "nnp";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Nav />

      <article className="mx-auto max-w-5xl px-5 pt-28 pb-20 md:px-8 md:pt-32">
        <motion.div {...fade(0)}>
          <Link
            href={detail.hubSlug ? `/projects/${detail.hubSlug}` : "/#work"}
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {detail.hubSlug ? "Back to NNP ecosystem" : "Back to work"}
          </Link>
        </motion.div>

        <motion.header {...fade(0.05)} className="max-w-3xl">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium tracking-[0.12em] text-primary uppercase">
            {project.category}
          </span>
          <h1 className="mt-5 font-display text-3xl leading-[1.05] tracking-tight uppercase md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-foreground/75 md:text-lg">
              {description}
            </p>
          )}
        </motion.header>

        <motion.dl
          {...fade(0.12)}
          className="mt-10 grid gap-x-8 gap-y-8 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <MetaItem label="Year" value={project.year ?? "—"} />
          <MetaItem
            label={detail.hubSlug ? "Focus" : "Course"}
            value={detail.course ?? project.status}
          />
          <MetaItem label="Role" value={detail.role} />
          <MetaItem label="Project Duration" value={projectDuration} />
        </motion.dl>

        {hero && (
          <motion.div
            {...fade(0.18)}
            className={`${compactImages ? "mx-auto mt-10 w-full max-w-md" : "mt-10"} ${
              project.coverScale ? "overflow-hidden rounded-2xl md:rounded-[1.75rem]" : ""
            }`}
          >
            <HeroImage
              src={hero}
              alt={`${title} — cover`}
              publication={compactImages}
              scale={project.coverScale}
            />
          </motion.div>
        )}

        <motion.section {...fade(0.24)} className="mt-16 md:mt-20">
          <SectionHeading number={1} title="Brief & Objectives" />
          <div className="mt-8 space-y-8 text-[15px] leading-relaxed md:text-base">
            {detail.team && (
              <BriefBlock
                label={detail.hubSlug ? "Client / Organization" : "Team"}
                text={detail.team}
              />
            )}
            {detail.deliverables && <BriefBlock label="Deliverables" text={detail.deliverables} />}
            {detail.tools && <BriefBlock label="Tools" text={detail.tools} />}
            <BriefBlock label="The ask" text={detail.brief.ask} />
            {!detail.brief.successSignals && (
              <BriefBlock label="Audience" text={detail.brief.audience} />
            )}
            {detail.format && <BriefBlock label="Format" text={detail.format} />}
            {detail.coreSkills && <BriefBlock label="Core skills" text={detail.coreSkills} />}
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase">
                {detail.brief.successSignals ? "Objectives" : "Goals"}
              </p>
              <ul className="mt-3 space-y-2">
                {detail.brief.goals.map((g) => (
                  <li key={g} className="flex gap-2 text-foreground/80">
                    <span className="text-primary">•</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
            {detail.brief.successSignals && detail.brief.successSignals.length > 0 && (
              <div>
                <p className="text-sm font-semibold tracking-wide uppercase">Success signals</p>
                <ul className="mt-3 space-y-2">
                  {detail.brief.successSignals.map((s) => (
                    <li key={s} className="flex gap-2 text-foreground/80">
                      <span className="text-primary">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!detail.brief.successSignals && (
              <BriefBlock label="Outcome snapshot" text={detail.brief.outcome} />
            )}
          </div>
          {briefImages.length > 0 && (
            <SectionImages images={briefImages} layout="grid" compact={compactImages} />
          )}
        </motion.section>

        {detail.sections.map((section, i) => (
          <RichSectionBlock
            key={section.title}
            section={section}
            slug={slug}
            index={i}
            compactImages={compactImages}
          />
        ))}

        {project.documentUrl && (
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mt-16 flex flex-wrap gap-3"
          >
            <a
              href={project.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Flip through the full book
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              href="/atlas"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/5"
            >
              Explore Design Atlas
            </Link>
          </motion.div>
        )}
      </article>

      <Footer />
    </div>
  );
}

function SectionHeading({ number, title }: { number?: number; title: string }) {
  return (
    <h2 className="font-display text-xl tracking-wide uppercase md:text-2xl">
      {number !== undefined && <span className="mr-2 text-primary">{number})</span>}
      {title}
    </h2>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm font-semibold text-foreground">{label} :</dt>
      <dd className="mt-2 text-sm leading-relaxed text-primary">{value}</dd>
    </div>
  );
}

function BriefBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-wide uppercase">{label}</p>
      <p className="mt-2 text-foreground/80">{text}</p>
    </div>
  );
}

function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block) => (
        <div key={block.label ?? block.text?.slice(0, 24) ?? "block"}>
          {block.label && (
            <p className="text-sm font-semibold tracking-wide text-foreground uppercase">
              {block.label}
            </p>
          )}
          {block.text && (
            <p
              className={`text-[15px] leading-relaxed text-foreground/75 md:text-base ${block.label ? "mt-2" : ""}`}
            >
              {block.text}
            </p>
          )}
          {block.bullets && (
            <ul className={`space-y-2 ${block.label || block.text ? "mt-3" : ""}`}>
              {block.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-[15px] leading-relaxed text-foreground/80">
                  <span className="mt-0.5 shrink-0 text-primary">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

function SectionImages({
  images,
  layout,
  compact = false,
}: {
  images: string[];
  layout?: ProjectSection["layout"];
  compact?: boolean;
}) {
  if (images.length === 0) return null;

  const count = images.length;
  const useStack = layout === "stack" && !compact;

  const gridClass = compact
    ? count === 1
      ? "mx-auto max-w-md grid-cols-1"
      : "grid-cols-2"
    : useStack || count === 1
      ? "grid-cols-1"
      : count === 3
        ? "grid-cols-1"
        : count === 5
          ? "grid-cols-1 sm:grid-cols-2"
          : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`mt-8 grid gap-4 md:mt-10 md:gap-5 ${gridClass}`}>
      {images.map((src, i) => {
        const oddLast =
          compact && count > 1 && count % 2 === 1 && i === count - 1;
        return (
          <div
            key={src}
            className={oddLast ? "col-span-2 mx-auto w-full max-w-md" : undefined}
          >
            <SpreadImage
              src={src}
              compact={compact}
              className={
                !compact && count === 5 && i === count - 1
                  ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-2xl"
                  : undefined
              }
            />
          </div>
        );
      })}
    </div>
  );
}

function RichSectionBlock({
  section,
  slug,
  index,
  compactImages = false,
}: {
  section: ProjectSection;
  slug: string;
  index: number;
  compactImages?: boolean;
}) {
  const reduced = useReducedMotion();
  const images = section.images ? getProjectImages(slug, section.images) : [];
  const legacyImage =
    section.imageIndex !== undefined ? getProjectGallery(slug)[section.imageIndex] : undefined;
  const allImages = images.length > 0 ? images : legacyImage ? [legacyImage] : [];

  const layout =
    section.layout === "split-left" || section.layout === "split-right" ? "stack" : section.layout;

  if (section.layout === "gallery" && allImages.length === 0) {
    const gallery = getProjectGallery(slug);
    return (
      <motion.section
        initial={reduced ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease }}
        className="mt-16 md:mt-20"
      >
        <SectionHeading number={section.number} title={section.title} />
        {section.body && (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/75">
            {section.body}
          </p>
        )}
        <SectionImages images={gallery.slice(0, 4)} layout="grid" compact={compactImages} />
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease, delay: index * 0.04 }}
      className="mt-16 md:mt-20"
    >
      <SectionHeading number={section.number} title={section.title} />
      <div className="mt-6">
        {section.blocks ? (
          <ContentBlocks blocks={section.blocks} />
        ) : (
          <>
            {section.body && (
              <p className="text-[15px] leading-relaxed text-foreground/75 md:text-base">
                {section.body}
              </p>
            )}
            {section.bullets && (
              <ul className="mt-4 space-y-2">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-foreground/80">
                    <span className="text-primary">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
      <SectionImages images={allImages} layout={layout} compact={compactImages} />
      {section.video && (
        <figure className="mt-10">
          <video
            src={getProjectImage(slug, section.video)}
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-2xl shadow-soft ring-1 ring-border md:rounded-[1.75rem]"
          />
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">
            Animated walkthrough — Blender Eevee
          </figcaption>
        </figure>
      )}
    </motion.section>
  );
}
