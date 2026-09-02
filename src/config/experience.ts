export const EXPERIENCE_LAYOUT = {
  hero: {
    heightVh: 120,
  },

  reveal: {
    heightVh: 100,
  },

  problem: {
    heightVh: 180,
  },

  answer: {
    heightVh: 120,
  },

  works: {
    heightVh: 200,
  },

  services: {
    heightVh: 120,
  },

  trust: {
    heightVh: 100,
  },

  about: {
    heightVh: 110,
  },

  contact: {
    heightVh: 180,
  },
} as const;

export type ExperienceSection =
  keyof typeof EXPERIENCE_LAYOUT;

export const EXPERIENCE_SECTION_ORDER =
  Object.keys(
    EXPERIENCE_LAYOUT,
  ) as ExperienceSection[];

export type ExperienceSectionConfig = {
  heightVh: number;
  start: number;
  end: number;
};

export const EXPERIENCE_TOTAL_HEIGHT_VH =
  EXPERIENCE_SECTION_ORDER.reduce(
    (total, section) =>
      total +
      EXPERIENCE_LAYOUT[
        section
      ].heightVh,

    0,
  );

/**
 * Global scroll:
 *
 * scrollY /
 * (documentHeight - viewportHeight)
 *
 * kullandığı için timeline'ın denominator'ı
 * da toplam yükseklik - 100vh olmalı.
 */
export const EXPERIENCE_SCROLLABLE_HEIGHT_VH =
  Math.max(
    EXPERIENCE_TOTAL_HEIGHT_VH -
      100,

    1,
  );

function createExperienceTimeline() {
  const timeline =
    {} as Record<
      ExperienceSection,
      ExperienceSectionConfig
    >;

  let accumulatedHeight = 0;

  for (
    const section of
    EXPERIENCE_SECTION_ORDER
  ) {
    const heightVh =
      EXPERIENCE_LAYOUT[
        section
      ].heightVh;

    const start =
      Math.min(
        accumulatedHeight /
          EXPERIENCE_SCROLLABLE_HEIGHT_VH,

        1,
      );

    accumulatedHeight +=
      heightVh;

    const end =
      Math.min(
        accumulatedHeight /
          EXPERIENCE_SCROLLABLE_HEIGHT_VH,

        1,
      );

    timeline[section] = {
      heightVh,
      start,
      end,
    };
  }

  return timeline;
}

export const EXPERIENCE_SECTIONS =
  createExperienceTimeline();

export const EXPERIENCE_MANIFEST =
  EXPERIENCE_SECTIONS;