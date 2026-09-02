"use client";

import { EXPERIENCE_SECTIONS } from "@/config/experience";
import { getExperienceSection } from "@/lib/experienceSections";
import { getSectionProgress } from "@/lib/progress";
import { useExperienceStore } from "@/store/experience";

export function AboutSection() {
  const scrollProgress =
    useExperienceStore(
      (state) => state.scrollProgress,
    );

  const config =
    getExperienceSection("about");

  const progress =
    getSectionProgress(
      scrollProgress,
      EXPERIENCE_SECTIONS.about.start,
      EXPERIENCE_SECTIONS.about.end,
    );

  const introProgress =
    Math.min(
      Math.max(
        progress / 0.3,
        0,
      ),
      1,
    );

  const detailProgress =
    Math.min(
      Math.max(
        (progress - 0.35) /
          0.35,
        0,
      ),
      1,
    );

  return (
    <section
      id="about"
      className="home-section about-section"
      data-experience-section="about"
      style={{
        minHeight: `${config.heightVh}svh`,
      }}
    >
      <div className="about-inner">
        <div
          className="about-title"
          style={{
            opacity:
              introProgress,
            transform: `
              translateY(
                ${
                  (1 -
                    introProgress) *
                  30
                }px
              )
            `,
          }}
        >
          <span className="section-eyebrow">
            BİZ KİMİZ?
          </span>

          <h2>
            Biz Fion&apos;uz.
          </h2>
        </div>

        <div
          className="about-content"
          style={{
            opacity:
              detailProgress,
            transform: `
              translateY(
                ${
                  (1 -
                    detailProgress) *
                  20
                }px
              )
            `,
          }}
        >
          <p>
            Markaların sıradan
            iletişimden sıyrılmasına
            yardımcı olan yaratıcı bir
            medya ekibiyiz.
          </p>

          <p>
            Stratejiden tasarıma,
            içerikten reklama kadar
            markanın aynı dili
            konuşmasını sağlıyoruz.
          </p>

          <div className="about-meta">
            <div>
              <span>
                KONUM
              </span>

              <strong>
                Kuşadası / Aydın
              </strong>
            </div>

            <div>
              <span>
                ÇALIŞMA ALANI
              </span>

              <strong>
                Aydın / İzmir
              </strong>
            </div>
          </div>

          <div className="about-name">
            <span>
              FION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}