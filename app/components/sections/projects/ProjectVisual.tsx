import Image from "next/image";
import ProjectAccent from "./ProjectAccent";
import type { Project } from "./projects.types";

type ProjectVisualProps = { project: Project };

export default function ProjectVisual({ project }: ProjectVisualProps) {
  return (
    <figure className="group/visual relative w-full max-w-[600px]">
      <div className="absolute -right-4 -top-7 z-30 hidden transition-transform duration-700 group-hover/visual:rotate-[-4deg] xl:block">
        <ProjectAccent type={project.accent} />
      </div>

      <div className="absolute -left-[7%] bottom-[6%] z-0 hidden w-[38%] -rotate-[5deg] overflow-hidden rounded-[20px] border border-[#4d1526] bg-black opacity-70 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/visual:-translate-x-2 group-hover/visual:-rotate-[8deg] xl:block">
        <div className="relative aspect-[4/5]">
          <Image src={project.images[1]} alt={`${project.client} projesinden ek çalışma`} fill sizes="240px" className="object-cover" />
        </div>
      </div>

      <div className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-[#090909] shadow-[0_28px_80px_rgba(0,0,0,0.32)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/visual:-translate-y-2">
        <div className="relative aspect-[4/5]">
          <Image
            src={project.images[0]}
            alt={`${project.client} için Fion Medya tarafından hazırlanan ${project.eyebrow.toLocaleLowerCase("tr-TR")} çalışması`}
            fill
            sizes="(max-width: 1280px) 100vw, 600px"
            className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/visual:scale-[1.025]"
          />

          <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-black/75 px-3 py-2 text-[7px] uppercase tracking-[0.2em] text-white/65 backdrop-blur-md">{tag}</span>
            ))}
          </div>

          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-black/80 px-5 py-4 backdrop-blur-md">
            <div><p className="text-[7px] uppercase tracking-[0.28em] text-[#c45a78]">Selected Work</p><p className="mt-2 text-xs font-medium text-[#f4efe9]">{project.client}</p></div>
            <span className="shrink-0 text-[7px] tracking-[0.25em] text-white/30">FION / {project.number}</span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
}
