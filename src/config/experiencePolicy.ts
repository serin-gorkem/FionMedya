export type ExperienceMode =
  | "desktop"
  | "tablet"
  | "mobile";

export type WorldPriority =
  | "essential"
  | "supporting"
  | "decorative";

export const EXPERIENCE_POLICIES = {
  desktop: {
    dpr: 1.5,

    camera: {
      topDownHeight: 13,
      topDownFov: 23,
      xInfluence: 0.45,
      zOffset: 2.8,
      lookAhead: 1.5,
    },

    worldPriorities: [
      "essential",
      "supporting",
      "decorative",
    ] as WorldPriority[],
  },

  tablet: {
    dpr: 1.25,

    camera: {
      topDownHeight: 12.5,
      topDownFov: 26,
      xInfluence: 0.35,
      zOffset: 2.6,
      lookAhead: 1.35,
    },

    worldPriorities: [
      "essential",
      "supporting",
    ] as WorldPriority[],
  },

  mobile: {
    dpr: 1,

    camera: {
      topDownHeight: 11,
      topDownFov: 31,
      xInfluence: 0.2,
      zOffset: 2.2,
      lookAhead: 1.1,
    },

    worldPriorities: [
      "essential",
    ] as WorldPriority[],
  },
} satisfies Record<
  ExperienceMode,
  {
    dpr: number;

    camera: {
      topDownHeight: number;
      topDownFov: number;
      xInfluence: number;
      zOffset: number;
      lookAhead: number;
    };

    worldPriorities:
      WorldPriority[];
  }
>;