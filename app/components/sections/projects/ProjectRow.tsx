import ProjectCopy from "./ProjectCopy";
import ProjectVisual from "./ProjectVisual";
import type { Project } from "./projects.types";

type ProjectRowProps = { project: Project };

export default function ProjectRow({ project }: ProjectRowProps) {
  const copyOnLeft = project.align === "left";

  return (
    <article
      aria-labelledby={`project-${project.number}`}
      className="border-t border-white/10 pt-12"
    >
      <div className="grid gap-12 xl:hidden">
        <ProjectCopy project={project} />
        <ProjectVisual project={project} />
      </div>

      <div className="hidden min-h-[720px] xl:grid xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)] xl:items-center xl:gap-10">
        <div className={`flex ${copyOnLeft ? "justify-start" : "justify-end"}`}>
          {copyOnLeft ? (
            <ProjectCopy project={project} />
          ) : (
            <ProjectVisual project={project} />
          )}
        </div>
        <div aria-hidden="true" className="h-full" />
        <div className={`flex ${copyOnLeft ? "justify-start" : "justify-end"}`}>
          {copyOnLeft ? (
            <ProjectVisual project={project} />
          ) : (
            <ProjectCopy project={project} />
          )}
        </div>
      </div>
    </article>
  );
}
