import Image from "next/image";

type Project = {
  number: string;
  client: string;
  eyebrow: string;
  headline: string;
  description: string;
  result: string;
  tags: string[];
  images: [string, string];
  align: "left" | "right";
  accent: "camera" | "record" | "frame";
};

const projects: Project[] = [
  {
    number: "01",
    client: "FUYAPI",
    eyebrow: "Sosyal Medya + Dijital Reklam",
    headline: "Reklamdan ev satışına.",
    description:
      "FUYAPI için sosyal medya içerikleri ve dijital reklam çalışmalarını aynı satış hedefi etrafında kurguladık.",
    result: "Reklam kaynaklı ev satışı",
    tags: [
      "Sosyal Medya",
      "Meta Reklam",
      "Kreatif",
    ],
    images: [
      "/projects/fuyapi-01.jpg",
      "/projects/fuyapi-02.jpg",
    ],
    align: "left",
    accent: "camera",
  },

  {
    number: "02",
    client: "MOTO EXPRESS",
    eyebrow: "Sosyal Medya + Reklam Yönetimi",
    headline: "Dikkati harekete dönüştürdük.",
    description:
      "Moto Express için hazırladığımız sosyal medya kreatifleri ve reklam çalışmaları etkileşimi güçlendirirken satışlara katkı sağladı.",
    result: "Etkileşim ve satış artışına katkı",
    tags: [
      "İçerik",
      "Reklam",
      "Kreatif",
    ],
    images: [
      "/projects/moto-01.jpg",
      "/projects/moto-02.jpg",
    ],
    align: "right",
    accent: "record",
  },

  {
    number: "03",
    client: "CAFE ROMA",
    eyebrow: "Dijital Menü Tasarımı",
    headline: "Fiziksel deneyim, dijital dokunuş.",
    description:
      "Cafe Roma için marka deneyimini masadan telefona taşıyan sade ve kullanışlı bir QR menü sistemi tasarladık.",
    result: "QR menü deneyimi",
    tags: [
      "Web Tasarım",
      "QR Menü",
      "UI",
    ],
    images: [
      "/projects/cafe-roma-01.jpg",
      "/projects/cafe-roma-02.jpg",
    ],
    align: "left",
    accent: "frame",
  },
];

/* =========================================================
   SMALL DECORATIVE OBJECTS
========================================================= */

function CameraMark() {
  return (
    <div
      aria-hidden="true"
      className="
        flex
        h-14
        w-16
        rotate-[5deg]
        items-center
        justify-center
        rounded-[14px]
        border
        border-[#5a1b30]
        bg-[#10070a]
      "
    >
      <div
        className="
          relative
          h-7
          w-9
          rounded-[6px]
          border
          border-[#c45a78]/65
        "
      >
        <span
          className="
            absolute
            left-1/2
            top-1/2
            h-3
            w-3
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#c45a78]/65
          "
        />

        <span
          className="
            absolute
            -top-[5px]
            left-[6px]
            h-[5px]
            w-[10px]
            rounded-t-[3px]
            bg-[#c45a78]/45
          "
        />
      </div>
    </div>
  );
}

function RecordMark() {
  return (
    <div
      aria-hidden="true"
      className="
        flex
        rotate-[-4deg]
        items-center
        gap-3
        rounded-full
        border
        border-[#5a1b30]
        bg-[#10070a]
        px-4
        py-3
      "
    >
      <span
        className="
          h-2
          w-2
          rounded-full
          bg-[#c45a78]
          shadow-[0_0_12px_rgba(196,90,120,0.55)]
        "
      />

      <span
        className="
          text-[8px]
          uppercase
          tracking-[0.3em]
          text-[#c45a78]
        "
      >
        REC
      </span>
    </div>
  );
}

function FrameMark() {
  return (
    <div
      aria-hidden="true"
      className="
        relative
        h-14
        w-14
        rotate-[8deg]
      "
    >
      <span className="absolute left-0 top-0 h-5 w-px bg-[#c45a78]/60" />
      <span className="absolute left-0 top-0 h-px w-5 bg-[#c45a78]/60" />

      <span className="absolute right-0 top-0 h-5 w-px bg-[#c45a78]/60" />
      <span className="absolute right-0 top-0 h-px w-5 bg-[#c45a78]/60" />

      <span className="absolute bottom-0 left-0 h-5 w-px bg-[#c45a78]/60" />
      <span className="absolute bottom-0 left-0 h-px w-5 bg-[#c45a78]/60" />

      <span className="absolute bottom-0 right-0 h-5 w-px bg-[#c45a78]/60" />
      <span className="absolute bottom-0 right-0 h-px w-5 bg-[#c45a78]/60" />
    </div>
  );
}

function ProjectAccent({
  type,
}: {
  type: Project["accent"];
}) {
  if (type === "camera") {
    return <CameraMark />;
  }

  if (type === "record") {
    return <RecordMark />;
  }

  return <FrameMark />;
}

/* =========================================================
   PROJECT COPY
========================================================= */

function ProjectCopy({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="w-full max-w-[520px]">
      {/* META */}

      <div
        className="
          mb-7
          flex
          items-center
          justify-between
          border-b
          border-white/10
          pb-4
        "
      >
        <span
          className="
            text-[10px]
            tracking-[0.3em]
            text-[#c45a78]
          "
        >
          {project.number}
        </span>

        <span
          className="
            max-w-[70%]
            text-right
            text-[9px]
            uppercase
            tracking-[0.22em]
            text-white/42
          "
        >
          {project.eyebrow}
        </span>
      </div>

      {/* CLIENT */}

      <p
        className="
          text-[10px]
          uppercase
          tracking-[0.38em]
          text-[#c45a78]
        "
      >
        {project.client}
      </p>

      {/* HEADLINE */}

      <h3
        className="
          mt-5
          font-serif
          text-[clamp(3rem,4.4vw,5.4rem)]
          leading-[0.88]
          tracking-[-0.055em]
          text-[#f4efe9]
        "
      >
        {project.headline}
      </h3>

      {/* RESULT FIRST */}

      <div
        className="
          mt-8
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
            h-[6px]
            w-[6px]
            shrink-0
            rounded-full
            bg-[#c45a78]
          "
        />

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.22em]
            text-[#d86a88]
          "
        >
          {project.result}
        </span>
      </div>

      {/* SHORT CASE DESCRIPTION */}

      <p
        className="
          mt-7
          max-w-[410px]
          text-sm
          leading-7
          text-white/58
        "
      >
        {project.description}
      </p>

      {/* SCAN TAGS */}

      <div className="mt-7 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-white/[0.08]
              bg-[#0d0d0d]
              px-3
              py-2
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-white/42
            "
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}

      <a
        href="#contact"
        className="
          group
          mt-9
          inline-flex
          items-center
          gap-3
          text-[9px]
          uppercase
          tracking-[0.27em]
          text-white/48
          transition-colors
          duration-300
          hover:text-white
        "
      >
        Benzer bir proje konuşalım

        <span
          className="
            transition-transform
            duration-500
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </a>
    </div>
  );
}

/* =========================================================
   REAL PROJECT VISUAL
========================================================= */

function ProjectVisual({
  project,
}: {
  project: Project;
}) {
  return (
    <figure
      className="
        group/visual
        relative
        w-full
        max-w-[600px]
      "
    >
      {/* RANDOM SMALL OBJECT */}

      <div
        className="
          absolute
          -right-4
          -top-7
          z-30
          hidden
          transition-transform
          duration-700
          group-hover/visual:rotate-[-4deg]
          xl:block
        "
      >
        <ProjectAccent
          type={project.accent}
        />
      </div>

      {/* SECONDARY REAL IMAGE */}

      <div
        className="
          absolute
          -left-[7%]
          bottom-[6%]
          z-0
          hidden
          w-[38%]
          -rotate-[5deg]
          overflow-hidden
          rounded-[20px]
          border
          border-[#4d1526]
          bg-black
          opacity-70
          shadow-[0_20px_50px_rgba(0,0,0,0.4)]
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover/visual:-translate-x-2
          group-hover/visual:-rotate-[8deg]

          xl:block
        "
      >
        <div className="relative aspect-[4/5]">
          <Image
            src={project.images[1]}
            alt={`${project.client} projesinden ek çalışma`}
            fill
            sizes="240px"
            className="object-cover"
          />
        </div>
      </div>

      {/* MAIN REAL IMAGE */}

      <div
        className="
          relative
          z-10
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-[#090909]
          shadow-[0_28px_80px_rgba(0,0,0,0.32)]
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover/visual:-translate-y-2
        "
      >
        <div className="relative aspect-[4/5]">
          <Image
            src={project.images[0]}
            alt={`${project.client} için Fion Medya tarafından hazırlanan ${project.eyebrow.toLocaleLowerCase(
              "tr-TR",
            )} çalışması`}
            fill
            sizes="
              (max-width: 1280px) 100vw,
              600px
            "
            className="
              object-cover
              transition-transform
              duration-[1200ms]
              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-hover/visual:scale-[1.025]
            "
          />

          {/* QUICK CONTEXT */}

          <div
            className="
              absolute
              left-4
              top-4
              z-20
              flex
              flex-wrap
              gap-2
            "
          >
            {project.tags.slice(0, 2).map(
              (tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-black/75
                    px-3
                    py-2
                    text-[7px]
                    uppercase
                    tracking-[0.2em]
                    text-white/65
                    backdrop-blur-md
                  "
                >
                  {tag}
                </span>
              ),
            )}
          </div>

          {/* BOTTOM INFO */}

          <figcaption
            className="
              absolute
              inset-x-0
              bottom-0

              flex
              items-end
              justify-between
              gap-4

              bg-black/80

              px-5
              py-4

              backdrop-blur-md
            "
          >
            <div>
              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.28em]
                  text-[#c45a78]
                "
              >
                Selected Work
              </p>

              <p
                className="
                  mt-2
                  text-xs
                  font-medium
                  text-[#f4efe9]
                "
              >
                {project.client}
              </p>
            </div>

            <span
              className="
                shrink-0
                text-[7px]
                tracking-[0.25em]
                text-white/30
              "
            >
              FION / {project.number}
            </span>
          </figcaption>
        </div>
      </div>
    </figure>
  );
}

/* =========================================================
   PROJECTS SECTION
========================================================= */

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#000000]
      "
    >
      {/* =====================================================
          LOCKED WINE LANE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          bottom-0
          left-1/2
          top-0

          z-[1]

          hidden

          w-[460px]
          -translate-x-1/2

          border-x
          border-[#35101d]

          xl:block
        "
      />

      <div
        className="
          relative
          z-20

          mx-auto
          max-w-[1600px]

          px-6
          py-24

          sm:px-10
          sm:py-32

          xl:py-40
        "
      >
        {/* =================================================
            INTRO
        ================================================== */}

        <div
          className="
            mb-28

            xl:grid
            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:items-end
            xl:gap-10
          "
        >
          {/* LEFT */}

          <div className="max-w-[570px]">
            <p
              className="
                mb-6

                text-[10px]
                uppercase
                tracking-[0.42em]

                text-[#c45a78]
              "
            >
              Seçili Projeler
            </p>

            <h2
              id="projects-title"
              className="
                font-serif

                text-[clamp(3.7rem,6.4vw,7rem)]

                leading-[0.84]
                tracking-[-0.06em]

                text-[#f4efe9]
              "
            >
              Biz
              <br />
              anlatmayalım.
              <br />

              <em className="text-white/65">
                İşler anlatsın.
              </em>
            </h2>
          </div>

          {/* WINE */}

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />

          {/* RIGHT SCAN-FIRST COPY */}

          <div
            className="
              mt-14

              xl:mt-0
              xl:flex
              xl:justify-end
            "
          >
            <div className="w-full max-w-[390px]">
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.32em]
                  text-[#c45a78]
                "
              >
                Portfolyo
              </p>

              <p
                className="
                  mt-5
                  font-serif

                  text-[clamp(2rem,2.9vw,3.5rem)]

                  leading-[0.95]
                  tracking-[-0.045em]

                  text-[#f4efe9]
                "
              >
                Gerçek markalar.
                <br />

                <span className="text-white/58">
                  Gerçek işler.
                </span>
                <br />

                <em className="text-[#c45a78]">
                  Gerçek sonuçlar.
                </em>
              </p>

              <p
                className="
                  mt-7
                  max-w-[340px]
                  text-sm
                  leading-7
                  text-white/45
                "
              >
                Sosyal medya yönetimi,
                reklam ve dijital deneyim
                çalışmalarımızdan seçilmiş
                projeler.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            PROJECT LIST
        ================================================== */}

        <div className="space-y-28 xl:space-y-40">
          {projects.map(
            (project) => {
              const copyOnLeft =
                project.align ===
                "left";

              return (
                <article
                  key={
                    project.number
                  }
                  className="
                    border-t
                    border-white/10
                    pt-12
                  "
                >
                  {/* =====================================
                      MOBILE
                  ====================================== */}

                  <div className="grid gap-12 xl:hidden">
                    <ProjectCopy
                      project={
                        project
                      }
                    />

                    <ProjectVisual
                      project={
                        project
                      }
                    />
                  </div>

                  {/* =====================================
                      DESKTOP
                  ====================================== */}

                  <div
                    className="
                      hidden

                      min-h-[720px]

                      xl:grid
                      xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
                      xl:items-center
                      xl:gap-10
                    "
                  >
                    {/* LEFT */}

                    <div
                      className={`
                        flex

                        ${
                          copyOnLeft
                            ? "justify-start"
                            : "justify-end"
                        }
                      `}
                    >
                      {copyOnLeft ? (
                        <ProjectCopy
                          project={
                            project
                          }
                        />
                      ) : (
                        <ProjectVisual
                          project={
                            project
                          }
                        />
                      )}
                    </div>

                    {/* STRICTLY EMPTY WINE LANE */}

                    <div
                      aria-hidden="true"
                      className="h-full"
                    />

                    {/* RIGHT */}

                    <div
                      className={`
                        flex

                        ${
                          copyOnLeft
                            ? "justify-start"
                            : "justify-end"
                        }
                      `}
                    >
                      {copyOnLeft ? (
                        <ProjectVisual
                          project={
                            project
                          }
                        />
                      ) : (
                        <ProjectCopy
                          project={
                            project
                          }
                        />
                      )}
                    </div>
                  </div>
                </article>
              );
            },
          )}
        </div>

        {/* =================================================
            SECTION EXIT
        ================================================== */}

        <div
          className="
            mt-28

            border-t
            border-white/10

            pt-10

            xl:grid
            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:items-end
            xl:gap-10
          "
        >
          {/* LEFT */}

          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/28
              "
            >
              Sıradaki proje
            </p>

            <p
              className="
                mt-5
                max-w-[440px]

                font-serif

                text-[clamp(2.1rem,3vw,3.7rem)]

                leading-[0.94]
                tracking-[-0.045em]

                text-[#f4efe9]
              "
            >
              Belki de
              <br />

              <em className="text-white/55">
                senin markan.
              </em>
            </p>
          </div>

          {/* WINE */}

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />

          {/* CTA */}

          <div
            className="
              mt-10

              xl:mt-0
              xl:flex
              xl:justify-end
            "
          >
            <a
              href="#contact"
              className="
                group

                flex
                w-full
                max-w-[380px]

                items-center
                justify-between

                border-b
                border-white/15

                pb-4

                text-[10px]
                uppercase
                tracking-[0.26em]

                text-white/58

                transition-colors
                duration-300

                hover:text-white
              "
            >
              Bir proje konuşalım

              <span
                className="
                  text-[#c45a78]

                  transition-transform
                  duration-500

                  group-hover:translate-x-2
                "
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}