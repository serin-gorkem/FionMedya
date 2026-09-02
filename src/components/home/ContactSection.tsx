"use client";

import { EXPERIENCE_SECTIONS } from "@/config/experience";
import { getExperienceSection } from "@/lib/experienceSections";
import { getSectionProgress } from "@/lib/progress";
import { useExperienceStore } from "@/store/experience";

export function ContactSection() {
  const scrollProgress =
    useExperienceStore(
      (state) => state.scrollProgress,
    );

  const config =
    getExperienceSection(
      "contact",
    );

  const progress =
    getSectionProgress(
      scrollProgress,
      EXPERIENCE_SECTIONS.contact.start,
      EXPERIENCE_SECTIONS.contact.end,
    );

  const visibility =
    Math.min(
      Math.max(
        progress / 0.35,
        0,
      ),
      1,
    );

  return (
    <section
      id="contact"
      className="home-section contact-section"
      data-experience-section="contact"
      style={{
        minHeight:
          `${config.heightVh}svh`,
      }}
    >
      <div
        className="contact-inner"
        style={{
          opacity: visibility,
          transform: `
            translateY(
              ${
                (1 -
                  visibility) *
                30
              }px
            )
          `,
        }}
      >
        <span className="section-eyebrow">
          BİRLİKTE ÇALIŞALIM
        </span>

        <h2>
          Sıradan olanı
          <br />
          unutmaya
          <br />
          hazır mısın?
        </h2>

        <p>
          Bize markanı anlat.
          <br />
          Gerisini birlikte
          düşünelim.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:hello@fionmedya.com"
            className="contact-primary"
          >
            Fion&apos;la konuş
            <span aria-hidden="true">
              →
            </span>
          </a>

          <a
            href="#"
            className="contact-secondary"
          >
            Instagram
            <span aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}