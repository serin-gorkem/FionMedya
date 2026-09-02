export type TrustReference = {
  id: string;
  name: string;

  /**
   * Trust anchor'una göre
   * WebGL node offset.
   */
  offset: readonly [
    number,
    number,
  ];

  revealAt: number;
};

export const TRUST_REFERENCES:
  readonly TrustReference[] = [
  {
    id: "fuyapi",
    name: "FUYAPI",

    offset: [
      -1.15,
      0.45,
    ],

    revealAt: 0.1,
  },

  {
    id: "dogu-bati",
    name: "DOĞU BATI İNŞAAT",

    offset: [
      -0.35,
      -0.55,
    ],

    revealAt: 0.28,
  },

  {
    id: "moto-express09",
    name: "MOTO EXPRESS09",

    offset: [
      0.65,
      0.4,
    ],

    revealAt: 0.46,
  },

  {
    id: "cafe-roma",
    name: "CAFE ROMA",

    offset: [
      1.2,
      -0.5,
    ],

    revealAt: 0.64,
  },
];