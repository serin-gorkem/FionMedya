import Link from "next/link";

import PillList from "@/app/components/ui/PillList";
import TextLink from "@/app/components/ui/TextLink";

import type { Project } from "./projects.types";

type ProjectCopyProps = {
  project: Project;
};

export default function ProjectCopy({ project }: ProjectCopyProps) {
  return (
    <div className="w-full max-w-lg">
      {/* NUMBER */}

      <div
        className="
          mb-6
          flex
          items-center
          gap-4
        "
      >
        <span
          className="
            text-[10px]
            tracking-[0.3em]
            text-wine-light
          "
        >
          {project.number}
        </span>

        <span className="h-px flex-1 bg-white/10" />
      </div>

      {/* CLIENT */}

      <p
        className="
          text-[10px]
          uppercase
          tracking-[0.32em]
          text-wine-light
        "
      >
        {project.client}
      </p>

      {/* HEADLINE */}

      <h3
        id={`project-${project.number}`}
        className="
          mt-5

          font-serif
          text-[clamp(3rem,4.4vw,5.4rem)]
          leading-[0.88]
          tracking-[-0.055em]

          text-ivory
        "
      >
        {project.headline}
      </h3>

      {/* RESULT */}

      <div
        className="
          mt-7
          inline-flex
          items-center
          gap-3

          rounded-full

          border
          border-[#5c1a30]

          bg-[#16080d]

          px-4
          py-2.5
        "
      >
        <span
          className="
            size-1.5
            shrink-0
            rounded-full
            bg-wine-light
          "
        />

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.2em]
            text-[#d86a88]
          "
        >
          {project.result}
        </span>
      </div>

      {/* TAGS */}

      <PillList items={[...project.tags]} className="mt-6" />

      {/* ACTIONS */}

      <div
        className="
          mt-8
          flex
          flex-col
          items-start
          gap-4
        "
      >
        <TextLink href="#contact">Benzer bir proje konuşalım</TextLink>

        <Link
          href="/isler"
          className="
            group
            inline-flex
            items-center
            gap-3

            text-[9px]
            uppercase
            tracking-[0.22em]
            text-muted

            transition-colors
            duration-300

            hover:text-ivory
          "
        >
          Tüm işleri incele
          <span
            aria-hidden="true"
            className="
              transition-transform
              duration-300

              group-hover:translate-x-1
              group-hover:-translate-y-0.5
            "
          >
            ↗
          </span>
        </Link>
      </div>
    </div>
  );
}
