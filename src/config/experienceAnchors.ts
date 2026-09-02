export const EXPERIENCE_ANCHORS = {
  origin: 0,

  problem: 0.23,

  answer: 0.35,

  workOne: 0.47,

  workTwo: 0.6,

  services: 0.71,

  trust: 0.8,

  about: 0.89,

  contact: 0.98,
} as const;

export type ExperienceAnchor =
  keyof typeof EXPERIENCE_ANCHORS;