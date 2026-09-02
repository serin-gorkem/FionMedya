"use client";

import { EXPERIENCE_SECTIONS } from "@/config/experience";
import { getExperienceSection } from "@/lib/experienceSections";
import { getSectionProgress } from "@/lib/progress";
import { useExperienceStore } from "@/store/experience";

export function HeroSection() {
  const scrollProgress = useExperienceStore((state) => state.scrollProgress);

  const config = getExperienceSection("hero");

  const progress = getSectionProgress(
    scrollProgress,
    EXPERIENCE_SECTIONS.hero.start,
    EXPERIENCE_SECTIONS.hero.end,
  );

  /**
   * Hero aşağı kayarken copy çok hafif geri çekiliyor.
   * Fine tuning değil; temel choreography.
   */
  const exitProgress = Math.min(Math.max((progress - 0.55) / 0.45, 0), 1);

  return (
    <section
      id="hero"
      className="home-section hero-section"
      data-experience-section="hero"
      style={{
        minHeight: `${config.heightVh}svh`,
      }}
    >
      <div
        className="hero-content"
        style={{
          opacity: 1 - exitProgress * 0.65,

          transform: `
            translateY(
              ${exitProgress * -30}px
            )
          `,
        }}
      >
        <span className="section-eyebrow">FION MEDYA</span>

        <h1>
          Sıradan
          <br />
          Olanı
          <br />
          Unut.
        </h1>

        <div className="hero-bottom">
          <p>
            Markaların sadece görünmesini değil, fark edilmesini sağlayan
            fikirler üretiyoruz.
          </p>

          <div className="hero-cta" aria-hidden="true">
            Keşfet
            <span>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
