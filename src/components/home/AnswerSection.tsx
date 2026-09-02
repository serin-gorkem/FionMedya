"use client";

import { EXPERIENCE_SECTIONS } from "@/config/experience";
import { getExperienceSection } from "@/lib/experienceSections";
import { getSectionProgress } from "@/lib/progress";
import { useExperienceStore } from "@/store/experience";

export function AnswerSection() {
  const scrollProgress = useExperienceStore(
    (state) => state.scrollProgress,
  );

  const config =
    getExperienceSection("answer");

  const progress =
    getSectionProgress(
      scrollProgress,
      EXPERIENCE_SECTIONS.answer.start,
      EXPERIENCE_SECTIONS.answer.end,
    );

  const introProgress = Math.min(
    Math.max(progress / 0.25, 0),
    1,
  );

  const detailProgress = Math.min(
    Math.max(
      (progress - 0.45) / 0.3,
      0,
    ),
    1,
  );

  return (
    <section
      id="answer"
      className="home-section answer-section"
      data-experience-section="answer"
      style={{
        minHeight: `${config.heightVh}svh`,
      }}
    >
      <div className="answer-inner">
        <span
          className="section-eyebrow"
          style={{
            opacity: introProgress,
          }}
        >
          FION&apos;UN CEVABI
        </span>

        <h2
          className="answer-title"
          style={{
            opacity: introProgress,
            transform: `
              translateY(
                ${(1 - introProgress) * 30}px
              )
            `,
          }}
        >
          Daha fazla içerik değil.
          <br />

          <span>
            Daha iyi fikir.
          </span>
        </h2>

        <div
          className="answer-detail"
          style={{
            opacity: detailProgress,
            transform: `
              translateY(
                ${(1 - detailProgress) * 20}px
              )
            `,
          }}
        >
          <p>
            Strateji, kreatif ve reklamı
            aynı hedef etrafında
            buluşturuyoruz.
          </p>

          <strong>
            Takipçiden önce müşteriyi
            düşünüyoruz.
          </strong>
        </div>
      </div>
    </section>
  );
}