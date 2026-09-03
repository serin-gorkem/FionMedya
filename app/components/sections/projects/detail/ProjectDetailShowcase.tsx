import Image from "next/image";

import PillList from "@/app/components/ui/PillList";

import type { Project } from "../projects.types";

type ProjectDetailShowcaseProps = {
  project: Project;
};

export default function ProjectDetailShowcase({
  project,
}: ProjectDetailShowcaseProps) {
  return (
    <article
      className="
        border-t
        border-white/10

        py-20

        sm:py-28
      "
    >
      {/* =================================================
          PROJECT INTRO
      ================================================== */}

      <div
        className="
          grid
          gap-10

          lg:grid-cols-[100px_minmax(0,1fr)_360px]
          lg:gap-12
        "
      >
        {/* NUMBER */}

        <div>
          <span
            className="
              font-serif
              text-4xl
              tracking-[-0.05em]
              text-white/25
            "
          >
            {project.number}
          </span>
        </div>

        {/* HEADLINE */}

        <div>
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.32em]
              text-wine-light
            "
          >
            {project.client}
          </p>

          <h2
            className="
              mt-6
              max-w-3xl

              font-serif
              text-[clamp(3.5rem,6vw,7rem)]
              leading-[0.84]
              tracking-[-0.06em]

              text-ivory
            "
          >
            {project.headline}
          </h2>
        </div>

        {/* PROJECT INFO */}

        <div
          className="
            border-t
            border-white/10

            pt-7

            lg:border-l
            lg:border-t-0
            lg:pl-8
            lg:pt-0
          "
        >
          <p
            className="
              text-sm
              leading-7
              text-white/62
            "
          >
            {project.description}
          </p>

          <PillList items={[...project.tags]} className="mt-7" />
        </div>
      </div>

      {/* =================================================
          HERO IMAGE
      ================================================== */}

      <figure
        className="
            group
            relative
            mt-16
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-black/20
            backdrop-blur-sm
            sm:mt-20
        "
      >
        <div className="relative aspect-[16/10] sm:aspect-[16/9]">
          <Image
            src={project.images[0]}
            alt={`${project.client} projesi`}
            fill
            sizes="(max-width: 1500px) 100vw, 1400px"
            className="
              object-cover

              transition-transform
              duration-1000

              group-hover:scale-[1.02]
            "
          />

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t

              from-black/65
              via-transparent
              to-transparent
            "
          />

          <figcaption
            className="
              absolute
              inset-x-0
              bottom-0

              flex
              items-end
              justify-between
              gap-6

              p-6

              sm:p-8
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-wine-light
                "
              >
                Selected Work
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-2xl
                  tracking-[-0.04em]
                  text-ivory

                  sm:text-3xl
                "
              >
                {project.client}
              </p>
            </div>

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.24em]
                text-white/45
              "
            >
              Fion / {project.number}
            </span>
          </figcaption>
        </div>
      </figure>

      {/* =================================================
          RESULT
      ================================================== */}

      <div
        className="
          grid

          border-b
          border-white/10

          lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)]
        "
      >
        <div
          className="
            flex
            min-h-48
            flex-col
            justify-between

            border-b
            border-white/10

            py-8

            lg:border-b-0
            lg:border-r
            lg:pr-10
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/35
            "
          >
            Sonuç
          </span>

          <span
            className="
              mt-12
              max-w-md

              font-serif
              text-[clamp(2rem,3vw,3.8rem)]
              leading-[0.92]
              tracking-[-0.05em]

              text-ivory
            "
          >
            {project.result}
          </span>
        </div>

        {/* SECOND IMAGE */}

        <div
          className="
            py-8

            lg:pl-10
          "
        >
          <div
            className="
              relative

              overflow-hidden
              rounded-2xl

              border
              border-white/10

              bg-black/30
            "
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={project.images[1]}
                alt={`${project.client} projesinden ikinci çalışma`}
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
