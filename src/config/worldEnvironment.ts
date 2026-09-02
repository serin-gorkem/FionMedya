import type {
  ExperienceAnchor,
} from "@/config/experienceAnchors";

import type {
  WorldPriority,
} from "@/config/experiencePolicy";

export type WorldObjectType =
  | "platform"
  | "monolith"
  | "tile";

export type WorldObjectConfig = {
  id: string;

  anchor: ExperienceAnchor;

  type: WorldObjectType;

  priority: WorldPriority;

  offset: readonly [
    number,
    number,
  ];

  scale: readonly [
    number,
    number,
    number,
  ];

  rotation?: number;
};

export const WORLD_OBJECTS:
  readonly WorldObjectConfig[] = [
  // PROBLEM
  {
    id: "problem-platform",
    anchor: "problem",
    type: "platform",
    priority: "essential",
    offset: [-2.3, 0.7],
    scale: [2.2, 0.18, 1.4],
    rotation: -0.15,
  },

  {
    id: "problem-monolith",
    anchor: "problem",
    type: "monolith",
    priority: "decorative",
    offset: [2.2, -0.9],
    scale: [0.55, 1.7, 0.55],
  },

  // ANSWER
  {
    id: "answer-tile",
    anchor: "answer",
    type: "tile",
    priority: "essential",
    offset: [-2, -0.8],
    scale: [1.8, 0.1, 1.2],
    rotation: 0.18,
  },

  {
    id: "answer-monolith",
    anchor: "answer",
    type: "monolith",
    priority: "supporting",
    offset: [2.5, 1],
    scale: [0.45, 1.2, 0.45],
  },

  // WORK ONE
  {
    id: "work-one-platform",
    anchor: "workOne",
    type: "platform",
    priority: "essential",
    offset: [-2.8, 0.4],
    scale: [2.8, 0.2, 1.7],
    rotation: -0.08,
  },

  {
    id: "work-one-tile",
    anchor: "workOne",
    type: "tile",
    priority: "supporting",
    offset: [2.7, -0.5],
    scale: [1.5, 0.12, 2.1],
    rotation: 0.12,
  },

  // WORK TWO
  {
    id: "work-two-platform",
    anchor: "workTwo",
    type: "platform",
    priority: "essential",
    offset: [2.6, 0.6],
    scale: [2.3, 0.22, 1.5],
  },

  {
    id: "work-two-monolith",
    anchor: "workTwo",
    type: "monolith",
    priority: "supporting",
    offset: [-2.2, -0.8],
    scale: [0.7, 2.1, 0.7],
  },

  // SERVICES
  {
    id: "services-platform",
    anchor: "services",
    type: "platform",
    priority: "essential",
    offset: [-2.8, 0.5],
    scale: [2, 0.16, 1.2],
  },

  {
    id: "services-tile",
    anchor: "services",
    type: "tile",
    priority: "decorative",
    offset: [2.8, 0.4],
    scale: [1.6, 0.1, 1.6],
  },

  // TRUST
  {
    id: "trust-monolith-left",
    anchor: "trust",
    type: "monolith",
    priority: "supporting",
    offset: [-2, 0.5],
    scale: [0.45, 1.4, 0.45],
  },

  {
    id: "trust-monolith-right",
    anchor: "trust",
    type: "monolith",
    priority: "decorative",
    offset: [2.1, -0.4],
    scale: [0.45, 1.8, 0.45],
  },

  // ABOUT
  {
    id: "about-tile",
    anchor: "about",
    type: "tile",
    priority: "essential",
    offset: [2.4, 0],
    scale: [2, 0.1, 1.3],
    rotation: -0.15,
  },
];