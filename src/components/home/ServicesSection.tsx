"use client";

import { EXPERIENCE_SECTIONS } from "@/config/experience";
import { getExperienceSection } from "@/lib/experienceSections";
import { getSectionProgress } from "@/lib/progress";
import { useExperienceStore } from "@/store/experience";

const services = [
  {
    number: "01",
    name: "MARKA",
    description:
      "Nasıl göründüğünüzden önce, ne ifade ettiğinizi belirliyoruz.",
    items: [
      "Marka Stratejisi",
      "Kurumsal Kimlik",
      "Grafik Tasarım",
    ],
  },

  {
    number: "02",
    name: "İÇERİK",
    description:
      "Kaydırılıp geçilmek için değil, durup bakılmak için.",
    items: [
      "Sosyal Medya Yönetimi",
      "Kreatif İçerik",
      "Video Prodüksiyon",
    ],
  },

  {
    number: "03",
    name: "BÜYÜME",
    description:
      "İyi fikri doğru insanlarla buluşturuyoruz.",
    items: [
      "Meta Reklamları",
      "Google Çalışmaları",
      "Dijital Reklam",
    ],
  },
] as const;

export function ServicesSection() {
  const scrollProgress = useExperienceStore(
    (state) => state.scrollProgress,
  );

  const config =
    getExperienceSection("services");

  const progress =
    getSectionProgress(
      scrollProgress,
      EXPERIENCE_SECTIONS.services.start,
      EXPERIENCE_SECTIONS.services.end,
    );

  return (
    <section
      id="services"
      className="home-section services-section"
      data-experience-section="services"
      style={{
        minHeight: `${config.heightVh}svh`,
      }}
    >
      <div className="services-sticky">
        <div className="services-header">
          <span className="section-eyebrow">
            NE YAPIYORUZ
          </span>

          <h2>
            Fikri görünür,
            <br />
            hatırlanır ve
            <br />
            etkili hale getiriyoruz.
          </h2>
        </div>

        <div className="services-list">
          {services.map(
            (service, index) => {
              const start =
                index / services.length;

              const end =
                (index + 1) /
                services.length;

              const visibility =
                getServiceVisibility(
                  progress,
                  start,
                  end,
                );

              const isActive =
                progress >= start &&
                progress <= end;

              return (
                <article
                  className={`service-item ${
                    isActive
                      ? "service-item--active"
                      : ""
                  }`}
                  key={service.name}
                  style={{
                    opacity:
                      0.25 +
                      visibility * 0.75,
                    transform: `
                      translateX(
                        ${(1 - visibility) * 20}px
                      )
                    `,
                  }}
                >
                  <div className="service-heading">
                    <span>
                      {service.number}
                    </span>

                    <h3>
                      {service.name}
                    </h3>
                  </div>

                  <p>
                    {service.description}
                  </p>

                  <ul>
                    {service.items.map(
                      (item) => (
                        <li key={item}>
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </article>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}

function getServiceVisibility(
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
    Math.abs(
      progress - midpoint,
    );

  return Math.max(
    0,
    Math.min(
      1,
      1 - distance / halfRange,
    ),
  );
}