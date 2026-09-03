import PillList from "@/app/components/ui/PillList";
import TextLink from "@/app/components/ui/TextLink";
import type { Project } from "./projects.types";

type ProjectCopyProps = { project: Project };

export default function ProjectCopy({ project }: ProjectCopyProps) {
  return (
    <div className="w-full max-w-[520px]">
      <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-[10px] tracking-[0.3em] text-[#c45a78]">{project.number}</span>
        <span className="max-w-[70%] text-right text-[9px] uppercase tracking-[0.22em] text-white/42">{project.eyebrow}</span>
      </div>

      <p className="text-[10px] uppercase tracking-[0.38em] text-[#c45a78]">{project.client}</p>
      <h3 id={`project-${project.number}`} className="mt-5 font-serif text-[clamp(3rem,4.4vw,5.4rem)] leading-[0.88] tracking-[-0.055em] text-[#f4efe9]">{project.headline}</h3>

      <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#5c1a30] bg-[#16080d] px-4 py-2.5">
        <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#c45a78]" />
        <span className="text-[9px] uppercase tracking-[0.22em] text-[#d86a88]">{project.result}</span>
      </div>

      <p className="mt-7 max-w-[410px] text-sm leading-7 text-white/58">{project.description}</p>
      <PillList items={project.tags} variant="neutral" className="mt-7" />
      <TextLink href="#contact" className="mt-9">Benzer bir proje konuşalım</TextLink>
    </div>
  );
}
