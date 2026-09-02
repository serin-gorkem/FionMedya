"use client";

import { EXPERIENCE_SECTIONS } from "@/config/experience";
import { getExperienceSection } from "@/lib/experienceSections";
import { getSectionProgress } from "@/lib/progress";
import { useExperienceStore } from "@/store/experience";

const references = [
  "FUYAPI",
  "DOĞU BATI İNŞAAT",
  "MOTO EXPRESS09",
  "CAFE ROMA",
] as const;

export function TrustSection() {
  const scrollProgress = useExperienceStore(
    (state) => state.scrollProgress,
  );

  const config =
    getExperienceSection("trust");

  const progress =
    getSectionProgress(
      scrollProgress,
      EXPERIENCE_SECTIONS.trust.start,
      EXPERIENCE_SECTIONS.trust.end,
    );

  const introProgress = Math.min(
    Math.max(progress / 0.3, 0),
    1,
  );

  return (
    <section
      id="trust"
      className="home-section trust-section"
      data-experience-section="trust"
      style={{
        minHeight: `${config.heightVh}svh`,
      }}
    >
      <div className="trust-inner">
        <div
          className="trust-header"
          style={{
            opacity: introProgress,
            transform: `
              translateY(
                ${(1 - introProgress) * 30}px
              )
            `,
          }}
        >
          <span className="section-eyebrow">
            REFERANSLAR
          </span>

          <h2>
            Birlikte
            <br />
            iz bıraktıklarımız.
          </h2>
        </div>

        <div className="trust-list">
          {references.map(
            (reference, index) => {
              const delay =
                index *
                0.08;

              const visibility =
                Math.min(
                  Math.max(
                    (progress -
                      0.25 -
                      delay) /
                      0.2,
                    0,
                  ),
                  1,
                );

              return (
                <div
                  className="trust-item"
                  key={reference}
                  style={{
                    opacity:
                      visibility,
                    transform: `
                      translateY(
                        ${
                          (1 -
                            visibility) *
                          20
                        }px
                      )
                    `,
                  }}
                >
                  <span>
                    {String(
                      index + 1,
                    ).padStart(2, "0")}
                  </span>

                  <strong>
                    {reference}
                  </strong>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}