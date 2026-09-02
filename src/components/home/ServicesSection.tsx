"use client";

import {
  EXPERIENCE_SECTIONS,
} from "@/config/experience";

import {
  SERVICES,
  type ServiceDefinition,
} from "@/config/services";

import {
  getExperienceSection,
} from "@/lib/experienceSections";

import {
  getSectionProgress,
} from "@/lib/progress";

import {
  useExperienceStore,
} from "@/store/experience";

export function ServicesSection() {
  const scrollProgress =
    useExperienceStore(
      (state) =>
        state.scrollProgress,
    );

  const config =
    getExperienceSection(
      "services",
    );

  const progress =
    getSectionProgress(
      scrollProgress,

      EXPERIENCE_SECTIONS.services.start,
      EXPERIENCE_SECTIONS.services.end,
    );

  const introProgress =
    clamp01(
      progress / 0.18,
    );

  return (
    <section
      id="services"
      className="home-section services-section"
      data-experience-section="services"
      style={{
        minHeight:
          `${config.heightVh}svh`,
      }}
    >
      <div className="services-sticky">
        <header
          className="services-header"
          style={{
            opacity:
              introProgress,

            transform: `
              translateY(
                ${
                  (1 -
                    introProgress) *
                  24
                }px
              )
            `,
          }}
        >
          <span className="section-eyebrow">
            NE YAPIYORUZ
          </span>

          <h2>
            Fikri görünür,
            <br />
            hatırlanır ve etkili
            <br />
            hale getiriyoruz.
          </h2>
        </header>

        <div className="services-list">
          {SERVICES.map(
            (service) => (
              <ServiceItem
                key={service.id}
                service={
                  service
                }
                progress={
                  progress
                }
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

type ServiceItemProps = {
  service:
    ServiceDefinition;

  progress: number;
};

function ServiceItem({
  service,
  progress,
}: ServiceItemProps) {
  const reveal =
    getServiceProgress(
      progress,
      service.revealAt,
    );

  return (
    <article
      className={`service-item ${
        reveal > 0.55
          ? "is-active"
          : ""
      }`}
      style={{
        opacity:
          0.25 +
          reveal * 0.75,

        transform: `
          translateY(
            ${
              (1 - reveal) *
              18
            }px
          )
        `,
      }}
    >
      <div className="service-index">
        {service.number}
      </div>

      <div className="service-main">
        <h3>
          {service.name}
        </h3>

        <p>
          {service.description}
        </p>
      </div>

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
}

function getServiceProgress(
  progress: number,
  revealAt: number,
) {
  return clamp01(
    (
      progress -
      revealAt
    ) /
      0.2,
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