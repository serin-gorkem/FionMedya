"use client";

import { EXPERIENCE_SECTIONS } from "@/config/experience";
import { getExperienceSection } from "@/lib/experienceSections";
import { getSectionProgress } from "@/lib/progress";
import { useExperienceStore } from "@/store/experience";

function clamp01(value: number) {
  return Math.min(
    Math.max(value, 0),
    1,
  );
}

export function RevealSection() {
  const scrollProgress =
    useExperienceStore(
      (state) =>
        state.scrollProgress,
    );

  const config =
    getExperienceSection(
      "reveal",
    );

  const progress =
    getSectionProgress(
      scrollProgress,

      EXPERIENCE_SECTIONS.reveal.start,
      EXPERIENCE_SECTIONS.reveal.end,
    );

  /**
   * İlk cümle biraz daha erken gelir.
   */
  const firstLineProgress =
    clamp01(
      progress / 0.42,
    );

  /**
   * İkinci cümle transition'ın ortasında
   * ortaya çıkar.
   */
  const secondLineProgress =
    clamp01(
      (progress - 0.18) /
        0.42,
    );

  /**
   * Reveal'in sonuna geldiğimizde
   * tüm copy sahneden çekilir.
   */
  const exitProgress =
    clamp01(
      (progress - 0.72) /
        0.28,
    );

  const containerOpacity =
    1 -
    exitProgress;

  return (
    <section
      id="reveal"
      className="home-section reveal-section"
      data-experience-section="reveal"
      style={{
        minHeight:
          `${config.heightVh}svh`,
      }}
    >
      <div
        className="reveal-content"
        style={{
          opacity:
            containerOpacity,

          transform: `
            translateY(
              ${exitProgress * -40}px
            )
          `,
        }}
      >
        <span
          className="reveal-kicker"
          style={{
            opacity:
              firstLineProgress,

            transform: `
              translateY(
                ${
                  (1 -
                    firstLineProgress) *
                  20
                }px
              )
            `,
          }}
        >
          FION
        </span>

        <h2 className="reveal-title">
          <span className="reveal-line-mask">
            <span
              className="reveal-line"
              style={{
                transform: `
                  translateY(
                    ${
                      (1 -
                        firstLineProgress) *
                      110
                    }%
                  )
                `,
              }}
            >
              Her marka
              görünebilir.
            </span>
          </span>

          <span className="reveal-line-mask">
            <span
              className="reveal-line reveal-line-accent"
              style={{
                transform: `
                  translateY(
                    ${
                      (1 -
                        secondLineProgress) *
                      110
                    }%
                  )
                `,
              }}
            >
              Pek azı
              hatırlanır.
            </span>
          </span>
        </h2>

        <div
          className="reveal-indicator"
          style={{
            opacity:
              secondLineProgress *
              (1 -
                exitProgress),
          }}
        >
          <span />

          <small>
            DEVAM ET
          </small>
        </div>
      </div>
    </section>
  );
}