import type {
  ExperienceSection,
} from "@/config/experience";

import { getExperienceSection } from "@/lib/experienceSections";

import { AboutSection } from "./AboutSection";
import { AnswerSection } from "./AnswerSection";
import { ContactSection } from "./ContactSection";
import { ProblemSection } from "./ProblemSection";
import { ServicesSection } from "./ServicesSection";
import { TrustSection } from "./TrustSection";
import { WorksSection } from "./WorksSection";

type SectionData = {
  id: ExperienceSection;
  eyebrow: string;
  title: string;
  text?: string;
};

const introSections: SectionData[] = [
  {
    id: "hero",
    eyebrow: "FION MEDYA",
    title:
      "Sıradan Olanı Unut.",
    text:
      "Markaların sadece görünmesini değil, fark edilmesini sağlayan fikirler üretiyoruz.",
  },

  {
    id: "reveal",
    eyebrow: "FION",
    title:
      "Her marka görünebilir. Pek azı hatırlanır.",
  },
];

function GenericSection({
  section,
}: {
  section: SectionData;
}) {
  const config =
    getExperienceSection(
      section.id,
    );

  return (
    <section
      className={`home-section home-section--${section.id}`}
      id={section.id}
      data-experience-section={
        section.id
      }
      style={{
        minHeight:
          `${config.heightVh}svh`,
      }}
    >
      <div className="section-content">
        <span className="section-eyebrow">
          {section.eyebrow}
        </span>

        <h2>
          {section.title}
        </h2>

        {section.text && (
          <p>
            {section.text}
          </p>
        )}
      </div>
    </section>
  );
}

export function HomeContent() {
  return (
    <main className="home-content">
      {introSections.map(
        (section) => (
          <GenericSection
            key={section.id}
            section={section}
          />
        ),
      )}

      <ProblemSection />

      <AnswerSection />

      <WorksSection />

      <ServicesSection />

      <TrustSection />

      <AboutSection />

      <ContactSection />
    </main>
  );
}