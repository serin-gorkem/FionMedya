export type ProblemBeat = {
  id: string;

  lineOne: string;
  lineTwo: string;

  copy: {
    start: number;
    peak: number;
    end: number;
  };

  /**
   * 3D stain'in problem timeline'ında
   * oluşmaya başlayacağı an.
   */
  stainRevealAt: number;

  /**
   * Problem anchor'una göre X / Z offset.
   */
  offset: readonly [
    number,
    number,
  ];

  scale: number;
  rotation: number;
};

export const PROBLEM_BEATS:
  readonly ProblemBeat[] = [
  {
    id: "content",

    lineOne: "İçerik var.",
    lineTwo: "Etki yok.",

    copy: {
      start: 0,
      peak: 0.18,
      end: 0.38,
    },

    stainRevealAt: 0.06,

    offset: [
      -0.85,
      0.2,
    ],

    scale: 1.25,

    rotation: -0.24,
  },

  {
    id: "advertising",

    lineOne: "Reklam var.",
    lineTwo: "Dönüş yok.",

    copy: {
      start: 0.29,
      peak: 0.48,
      end: 0.7,
    },

    stainRevealAt: 0.35,

    offset: [
      0.75,
      -0.25,
    ],

    scale: 1,

    rotation: 0.3,
  },

  {
    id: "visibility",

    lineOne: "Görünürlük var.",
    lineTwo:
      "Hatırlanırlık yok.",

    copy: {
      start: 0.6,
      peak: 0.8,
      end: 1,
    },

    stainRevealAt: 0.67,

    offset: [
      -0.1,
      -0.95,
    ],

    scale: 1.55,

    rotation: -0.12,
  },
];