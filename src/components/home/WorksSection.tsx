"use client";

import type { ReactNode } from "react";

import { EXPERIENCE_SECTIONS } from "@/config/experience";
import { getExperienceSection } from "@/lib/experienceSections";
import { getSectionProgress } from "@/lib/progress";
import { useExperienceStore } from "@/store/experience";

export function WorksSection() {
  const scrollProgress = useExperienceStore(
    (state) => state.scrollProgress,
  );

  const config =
    getExperienceSection("works");

  const progress =
    getSectionProgress(
      scrollProgress,
      EXPERIENCE_SECTIONS.works.start,
      EXPERIENCE_SECTIONS.works.end,
    );

  /**
   * Section girişindeki başlık.
   */
  const introVisibility =
    getVisibility(
      progress,
      0,
      0.22,
    );

  /**
   * FUYAPI
   */
  const firstProjectVisibility =
    getVisibility(
      progress,
      0.15,
      0.58,
    );

  /**
   * Moto Express09
   */
  const secondProjectVisibility =
    getVisibility(
      progress,
      0.5,
      1,
    );

  return (
    <section
      id="works"
      className="home-section works-section"
      data-experience-section="works"
      style={{
        minHeight: `${config.heightVh}svh`,
      }}
    >
      <div className="works-sticky">
        <div
          className="works-intro"
          style={{
            opacity: introVisibility,
            transform: `
              translateY(
                ${(1 - introVisibility) * 30}px
              )
            `,
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

        <WorkSlide
          visibility={
            firstProjectVisibility
          }
          number="01"
          client="FUYAPI"
          service="SOSYAL MEDYA + REKLAM"
          title={
            <>
              Reklamdan
              <br />
              ev satışına.
            </>
          }
          description="Sosyal medya yönetimi ve reklam çalışmalarıyla dikkat çeken kreatifler ürettik. Çalışmalar sonucunda etkileşim artışı ve reklam kaynaklı bir ev satışı gerçekleşti."
        />

        <WorkSlide
          visibility={
            secondProjectVisibility
          }
          number="02"
          client="MOTO EXPRESS09"
          service="SOSYAL MEDYA + REKLAM"
          title={
            <>
              Dikkati harekete
              <br />
              dönüştürdük.
            </>
          }
          description="Sosyal medya ve reklam çalışmalarında kreatif etkileşimini artırırken reklamlar satış artışına katkı sağladı."
        />
      </div>
    </section>
  );
}

type WorkSlideProps = {
  visibility: number;
  number: string;
  client: string;
  service: string;
  title: ReactNode;
  description: string;
};

function WorkSlide({
  visibility,
  number,
  client,
  service,
  title,
  description,
}: WorkSlideProps) {
  return (
    <article
      className="work-slide"
      style={{
        opacity: visibility,
        pointerEvents:
          visibility > 0.5
            ? "auto"
            : "none",
        transform: `
          translateY(
            ${(1 - visibility) * 40}px
          )
        `,
      }}
    >
      <div className="work-slide-meta">
        <span>{number}</span>
        <span>{client}</span>
        <span>{service}</span>
      </div>

      <div className="work-slide-body">
        <h3>{title}</h3>

        <p>{description}</p>

        <button
          type="button"
          className="work-link"
        >
          Projeyi incele
          <span aria-hidden="true">
            →
          </span>
        </button>
      </div>
    </article>
  );
}

function getVisibility(
  progress: number,
  start: number,
  end: number,
) {
  const midpoint =
    (start + end) / 2;

  const halfRange =
    (end - start) / 2;

  if (halfRange <= 0) {
    return 0;
  }

  const distance =
    Math.abs(progress - midpoint);

  return Math.max(
    0,
    Math.min(
      1,
      1 - distance / halfRange,
    ),
  );
}