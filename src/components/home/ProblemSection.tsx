"use client";

import type { ReactNode } from "react";

import { EXPERIENCE_SECTIONS } from "@/config/experience";
import { getExperienceSection } from "@/lib/experienceSections";
import { getSectionProgress } from "@/lib/progress";
import { useExperienceStore } from "@/store/experience";

export function ProblemSection() {
  const scrollProgress = useExperienceStore(
    (state) => state.scrollProgress,
  );

  const config =
    getExperienceSection("problem");

  const progress =
    getSectionProgress(
      scrollProgress,
      EXPERIENCE_SECTIONS.problem.start,
      EXPERIENCE_SECTIONS.problem.end,
    );

  return (
    <section
      id="problem"
      className="home-section problem-section"
      data-experience-section="problem"
      style={{
        minHeight: `${config.heightVh}svh`,
      }}
    >
      <div className="problem-sticky">
        <ProblemMessage
          progress={progress}
          start={0}
          end={0.35}
        >
          <>
            İçerik var.
            <br />
            Etki yok.
          </>
        </ProblemMessage>

        <ProblemMessage
          progress={progress}
          start={0.3}
          end={0.68}
        >
          <>
            Reklam var.
            <br />
            Dönüş yok.
          </>
        </ProblemMessage>

        <ProblemMessage
          progress={progress}
          start={0.62}
          end={1}
        >
          <>
            Görünürlük var.
            <br />
            Hatırlanırlık yok.
          </>
        </ProblemMessage>
      </div>
    </section>
  );
}

type ProblemMessageProps = {
  progress: number;
  start: number;
  end: number;
  children: ReactNode;
};

function ProblemMessage({
  progress,
  start,
  end,
  children,
}: ProblemMessageProps) {
  const midpoint =
    (start + end) / 2;

  const halfRange =
    (end - start) / 2;

  const distance =
    Math.abs(progress - midpoint);

  const visibility =
    Math.max(
      0,
      1 - distance / halfRange,
    );

  return (
    <h2
      className="problem-message"
      style={{
        opacity: visibility,
        transform: `
          translateY(
            ${(1 - visibility) * 30}px
          )
        `,
      }}
    >
      {children}
    </h2>
  );
}