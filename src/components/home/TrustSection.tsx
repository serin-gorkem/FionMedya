"use client";

import {
  EXPERIENCE_SECTIONS,
} from "@/config/experience";

import {
  TRUST_REFERENCES,
} from "@/config/trust";

import {
  getExperienceSection,
} from "@/lib/experienceSections";

import {
  getSectionProgress,
} from "@/lib/progress";

import {
  useExperienceStore,
} from "@/store/experience";

export function TrustSection() {
  const scrollProgress =
    useExperienceStore(
      (state) =>
        state.scrollProgress,
    );

  const config =
    getExperienceSection(
      "trust",
    );

  const progress =
    getSectionProgress(
      scrollProgress,

      EXPERIENCE_SECTIONS.trust.start,
      EXPERIENCE_SECTIONS.trust.end,
    );

  const intro =
    clamp01(
      progress / 0.25,
    );

  return (
    <section
      id="trust"
      className="home-section trust-section"
      data-experience-section="trust"
      style={{
        minHeight:
          `${config.heightVh}svh`,
      }}
    >
      <div className="trust-inner">
        <header
          className="trust-header"
          style={{
            opacity: intro,

            transform: `
              translateY(
                ${
                  (1 - intro) *
                  24
                }px
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
        </header>

        <div className="trust-list">
          {TRUST_REFERENCES.map(
            (reference) => {
              const reveal =
                clamp01(
                  (
                    progress -
                    reference.revealAt
                  ) /
                    0.18,
                );

              return (
                <div
                  key={
                    reference.id
                  }
                  className="trust-item"
                  style={{
                    opacity:
                      0.18 +
                      reveal *
                        0.82,

                    transform: `
                      translateX(
                        ${
                          (1 -
                            reveal) *
                          24
                        }px
                      )
                    `,
                  }}
                >
                  <span>
                    {
                      reference.name
                    }
                  </span>

                  <span
                    className="trust-item-line"
                    aria-hidden="true"
                  />
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
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