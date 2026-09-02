export const EXPERIENCE_MANIFEST = {
  hero: {
    start: 0,
    end: 0.12,
    heightVh: 120,
  },

  reveal: {
    start: 0.12,
    end: 0.22,
    heightVh: 100,
  },

  problem: {
    start: 0.22,
    end: 0.34,
    heightVh: 180,
  },

  answer: {
    start: 0.34,
    end: 0.44,
    heightVh: 120,
  },

  works: {
    start: 0.44,
    end: 0.66,
    heightVh: 200,
  },

  services: {
    start: 0.66,
    end: 0.76,
    heightVh: 120,
  },

  trust: {
    start: 0.76,
    end: 0.83,
    heightVh: 100,
  },

  about: {
    start: 0.83,
    end: 0.91,
    heightVh: 110,
  },

  contact: {
    start: 0.91,
    end: 1,
    heightVh: 120,
  },
} as const;

export type ExperienceSection =
  keyof typeof EXPERIENCE_MANIFEST;

/**
 * Eski kodlarımız EXPERIENCE_SECTIONS kullandığı için
 * şimdilik alias bırakıyoruz.
 *
 * İleride istersek tamamen kaldırabiliriz.
 */
export const EXPERIENCE_SECTIONS =
  EXPERIENCE_MANIFEST;