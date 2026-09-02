"use client";

import {
  EXPERIENCE_SECTIONS,
} from "@/config/experience";

import {
  projects,
  type Project,
} from "@/data/projects";

import {
  getExperienceSection,
} from "@/lib/experienceSections";

import {
  getSectionProgress,
} from "@/lib/progress";

import {
  useExperienceStore,
} from "@/store/experience";

import {
  ProjectMedia,
} from "./ProjectMedia";

const PROJECTS_START = 0.16;

export function WorksSection() {
  const scrollProgress =
    useExperienceStore(
      (state) =>
        state.scrollProgress,
    );

  const config =
    getExperienceSection(
      "works",
    );

  const progress =
    getSectionProgress(
      scrollProgress,

      EXPERIENCE_SECTIONS.works.start,
      EXPERIENCE_SECTIONS.works.end,
    );

  /**
   * İlk bölüm Works intro.
   */
  const introOpacity =
    clamp01(
      (
        PROJECTS_START -
        progress
      ) /
        0.06,
    );

  /**
   * Intro bittikten sonra geri kalan
   * timeline'ı projeler arasında eşit böl.
   */
  const projectProgress =
    clamp01(
      (
        progress -
        PROJECTS_START
      ) /
        (
          1 -
          PROJECTS_START
        ),
    );

  const activeProjectIndex =
    progress <
    PROJECTS_START
      ? -1
      : Math.min(
          projects.length - 1,

          Math.floor(
            projectProgress *
              projects.length,
          ),
        );

  const activeProject =
    activeProjectIndex >= 0
      ? projects[
          activeProjectIndex
        ]
      : null;

  return (
    <section
      id="works"
      className="home-section works-section"
      data-experience-section="works"
      style={{
        minHeight:
          `${config.heightVh}svh`,
      }}
    >
      <div className="works-sticky">
        <div
          className="works-intro"
          style={{
            opacity:
              introOpacity,

            pointerEvents:
              introOpacity >
              0.5
                ? "auto"
                : "none",
          }}
        >
          <span className="section-eyebrow">
            SEÇİLİ İŞLER / 2026
          </span>

          <h2>
            Biz anlatmayalım.
            <br />
            İşler anlatsın.
          </h2>
        </div>

        {activeProject && (
          <ProjectSlide
            key={
              activeProject.slug
            }
            project={
              activeProject
            }
          />
        )}
      </div>
    </section>
  );
}

function ProjectSlide({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="work-slide">
      <div className="work-slide-meta">
        <span>
          {project.number}
        </span>

        <span>
          {project.client}
        </span>

        <span>
          {project.service}
        </span>
      </div>

      <div className="work-slide-body">
        <ProjectMedia
          media={
            project.media
          }
          client={
            project.client
          }
          visibility={1}
        />

        <div className="work-copy">
          <h3>
            {project.title}
          </h3>

          <p>
            {
              project.description
            }
          </p>

          <a
            href={`/isler/${project.slug}`}
            className="work-link"
          >
            Projeyi incele

            <span
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

function clamp01(
  value: number,
) {
  return Math.min(
    Math.max(value, 0),
    1,
  );
}