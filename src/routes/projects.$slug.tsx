import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectDetailPage } from "@/components/site/ProjectDetailPage";
import { getProjectDetail } from "@/content/project-details";
import { atlasProjects } from "@/content/projects";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectRoute,
  head: ({ params }) => {
    const project = atlasProjects.find((p) => p.slug === params.slug);
    return {
      meta: project
        ? [
            { title: `${project.title} — Siya Parmar` },
            { name: "description", content: project.tagline },
          ]
        : [{ title: "Project not found" }],
    };
  },
});

function ProjectRoute() {
  const { slug } = Route.useParams();
  const project = atlasProjects.find((p) => p.slug === slug);

  if (!project) throw notFound();

  const detail =
    getProjectDetail(slug, {
      title: project.title,
      tagline: project.tagline,
      year: project.year,
      category: project.category,
    }) ?? getProjectDetail(slug)!;

  return <ProjectDetailPage project={project} detail={detail} />;
}
