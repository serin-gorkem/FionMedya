export type ServiceDefinition = {
  id: "brand" | "content" | "growth";

  number: string;
  name: string;

  description: string;

  items: readonly string[];

  /**
   * Services section local progress'i.
   */
  revealAt: number;

  /**
   * Services anchor'una göre local branch.
   */
  branchPoints: readonly (
    readonly [
      number,
      number,
      number,
    ]
  )[];
};

export const SERVICES:
  readonly ServiceDefinition[] = [
  {
    id: "brand",

    number: "01",

    name: "MARKA",

    description:
      "Nasıl göründüğünüzden önce, ne ifade ettiğinizi belirliyoruz.",

    items: [
      "Marka Stratejisi",
      "Kurumsal Kimlik",
      "Grafik Tasarım",
    ],

    revealAt: 0.08,

    branchPoints: [
      [0, 0, 0],

      [-0.55, 0, -0.25],

      [-1.15, 0, -0.65],

      [-1.9, 0, -1.1],
    ],
  },

  {
    id: "content",

    number: "02",

    name: "İÇERİK",

    description:
      "Kaydırılıp geçilmek için değil, durup bakılmak için.",

    items: [
      "Sosyal Medya Yönetimi",
      "Kreatif İçerik",
      "Video Prodüksiyon",
    ],

    revealAt: 0.36,

    branchPoints: [
      [0, 0, 0],

      [0.65, 0, -0.08],

      [1.25, 0, -0.1],

      [2.05, 0, -0.15],
    ],
  },

  {
    id: "growth",

    number: "03",

    name: "BÜYÜME",

    description:
      "İyi fikri doğru insanlarla buluşturuyoruz.",

    items: [
      "Meta Reklamları",
      "Google Çalışmaları",
      "Dijital Reklam",
    ],

    revealAt: 0.64,

    branchPoints: [
      [0, 0, 0],

      [0.45, 0, 0.35],

      [0.95, 0, 0.75],

      [1.55, 0, 1.3],
    ],
  },
];