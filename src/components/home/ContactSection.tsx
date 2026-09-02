"use client";

import { EXPERIENCE_SECTIONS } from "@/config/experience";

import { getExperienceSection } from "@/lib/experienceSections";
import { getSectionProgress } from "@/lib/progress";

import { useExperienceStore } from "@/store/experience";

const WHATSAPP_NUMBER =
  "905056435398";

const WHATSAPP_MESSAGE =
  "Merhaba Fion Medya, markam için sizinle çalışmak istiyorum.";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

export function ContactSection() {
  const scrollProgress =
    useExperienceStore(
      (state) => state.scrollProgress,
    );

  const config =
    getExperienceSection("contact");

  const progress =
    getSectionProgress(
      scrollProgress,
      EXPERIENCE_SECTIONS.contact.start,
      EXPERIENCE_SECTIONS.contact.end,
    );

  /**
   * İlk CTA sahnesi.
   */
  const introIn =
    clamp01(
      progress / 0.18,
    );

  const introOut =
    clamp01(
      (progress - 0.38) /
        0.16,
    );

  const introVisibility =
    introIn *
    (1 - introOut);

  /**
   * Final sahne.
   */
  const finalReveal =
    clamp01(
      (progress - 0.46) /
        0.2,
    );

  /**
   * FION logosunun soldan
   * sağa dolması.
   */
  const logoFill =
    clamp01(
      (progress - 0.52) /
        0.38,
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
      <div className="contact-final-sticky">
        {/* CTA SCENE */}
        <div
          className="contact-intro"
          style={{
            opacity:
              introVisibility,

            transform: `
              translateY(
                ${introOut * -30}px
              )
            `,

            pointerEvents:
              introVisibility > 0.4
                ? "auto"
                : "none",
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
            Gerisini birlikte düşünelim.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="contact-whatsapp"
          >
            WhatsApp&apos;tan konuşalım

            <span aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        {/* FINAL SCENE */}
        <div
          className="contact-final"
          style={{
            opacity:
              finalReveal,

            pointerEvents:
              finalReveal > 0.35
                ? "auto"
                : "none",
          }}
        >
          <div className="final-brand">
            <div className="final-logo-ghost" />

            <div
              className="final-logo-fill"
              style={{
                clipPath: `
                  inset(
                    0
                    ${
                      (1 - logoFill) *
                      100
                    }%
                    0
                    0
                  )
                `,
              }}
            />
          </div>

          <div className="final-meta final-meta-top-left">
            FION MEDYA
          </div>

          <div className="final-meta final-meta-top-right">
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM ↗
            </a>
          </div>

          <div className="final-meta final-meta-bottom-left">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="final-whatsapp"
            >
              WHATSAPP&apos;TAN KONUŞALIM ↗
            </a>
          </div>

          <div className="final-meta final-meta-bottom-center">
            KUŞADASI / AYDIN
          </div>

          <div className="final-meta final-meta-bottom-right">
            © 2026
          </div>
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