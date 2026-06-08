import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/site/ProjectDetailPage";
import { getProjectDetail } from "@/content/project-details";
import { atlasProjects } from "@/content/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return atlasProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = atlasProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = atlasProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const detail =
    getProjectDetail(slug, {
      title: project.title,
      tagline: project.tagline,
      year: project.year,
      category: project.category,
    }) ?? getProjectDetail(slug)!;

  return <ProjectDetailPage project={project} detail={detail} />;
}
