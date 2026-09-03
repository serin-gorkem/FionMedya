"use client";

import {
  getExperienceSection,
} from "@/lib/experienceSections";

export function HeroSection() {
  const config =
    getExperienceSection(
      "hero",
    );

  return (
    <section
      id="hero"
      className="home-section hero-section"
      data-experience-section="hero"
      style={{
        minHeight:
          `${config.heightVh}svh`,
      }}
    >
      <div className="hero-seo-copy">
        <h1>
          Sıradan Olanı Unut.
        </h1>

        <p>
          Markaların sadece
          görünmesini değil,
          fark edilmesini sağlayan
          fikirler üretiyoruz.
        </p>
      </div>
    </section>
  );
}