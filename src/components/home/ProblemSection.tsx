"use client";

import type {
  ReactNode,
} from "react";

import { EXPERIENCE_SECTIONS } from "@/config/experience";
import {
  PROBLEM_BEATS,
  type ProblemBeat,
} from "@/config/problemBeats";

import { getExperienceSection } from "@/lib/experienceSections";
import { getSectionProgress } from "@/lib/progress";

import { useExperienceStore } from "@/store/experience";

export function ProblemSection() {
  const scrollProgress =
    useExperienceStore(
      (state) =>
        state.scrollProgress,
    );

  const config =
    getExperienceSection(
      "problem",
    );

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
        minHeight:
          `${config.heightVh}svh`,
      }}
    >
      <div className="problem-sticky">
        {PROBLEM_BEATS.map(
          (beat) => (
            <ProblemMessage
              key={beat.id}
              beat={beat}
              progress={
                progress
              }
            >
              <>
                {beat.lineOne}

                <br />

                <span>
                  {beat.lineTwo}
                </span>
              </>
            </ProblemMessage>
          ),
        )}
      </div>
    </section>
  );
}

type ProblemMessageProps = {
  beat: ProblemBeat;
  progress: number;
  children: ReactNode;
};

function ProblemMessage({
  beat,
  progress,
  children,
}: ProblemMessageProps) {
  const visibility =
    getBeatVisibility(
      progress,
      beat,
    );

  return (
    <h2
      className="problem-message"
      style={{
        opacity:
          visibility,

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
      {children}
    </h2>
  );
}

function getBeatVisibility(
  progress: number,
  beat: ProblemBeat,
) {
  const {
    start,
    peak,
    end,
  } = beat.copy;

  if (
    progress <= start ||
    progress >= end
  ) {
    return 0;
  }

  if (progress <= peak) {
    return clamp01(
      (progress - start) /
        (peak - start),
    );
  }

  return clamp01(
    1 -
      (progress - peak) /
        (end - peak),
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