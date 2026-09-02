import {
  EXPERIENCE_SECTION_ORDER,
  EXPERIENCE_SECTIONS,
  type ExperienceSection,
} from "@/config/experience";

export function getActiveExperienceSection(
  progress: number,
): ExperienceSection {
  const lastSection =
    EXPERIENCE_SECTION_ORDER[
      EXPERIENCE_SECTION_ORDER.length -
        1
    ];

  for (
    const section of
    EXPERIENCE_SECTION_ORDER
  ) {
    const config =
      EXPERIENCE_SECTIONS[
        section
      ];

    /**
     * Son section 1.0 değerini de kapsasın.
     */
    const isLast =
      section === lastSection;

    if (
      progress >=
        config.start &&
      (
        progress <
          config.end ||
        (
          isLast &&
          progress <=
            config.end
        )
      )
    ) {
      return section;
    }
  }

  return lastSection;
}