import type { Project } from "./projects.types";

export const projects: readonly Project[] = [
  {
    number: "01",

    client: "BYRON",

    eyebrow: "Sosyal Medya + Kreatif",

    headline:
      "Markanın karakterini dijitale taşıdık.",

    description:
      "Byron için sosyal medya iletişimini daha tutarlı, karakterli ve güçlü bir görsel dünya etrafında şekillendirdik.",

    result:
      "Tutarlı marka görünümü",

    tags: [
      "Sosyal Medya",
      "Kreatif",
      "Tasarım",
    ],

    images: [
      "/projects/clients/byron/01.webp",
      "/projects/clients/byron/02.webp",
    ],

    align: "left",

    accent: "camera",
  },

  {
    number: "02",

    client: "FUYAPI",

    eyebrow:
      "Sosyal Medya + Dijital Reklam",

    headline:
      "İçerikten reklama, reklamdan satışa.",

    description:
      "FUYAPI için sosyal medya kreatifleri ve reklam çalışmalarını aynı iletişim hedefi etrafında kurguladık.",

    result:
      "Reklam kaynaklı ev satışı",

    tags: [
      "Sosyal Medya",
      "Meta Reklam",
      "Kreatif",
    ],

    images: [
      "/projects/clients/fuyapi/01.webp",
      "/projects/clients/fuyapi/02.webp",
    ],

    align: "right",

    accent: "frame",
  },

  {
    number: "03",

    client: "KURYE PLUS",

    eyebrow:
      "Sosyal Medya + Dijital İletişim",

    headline:
      "Hızlı hizmete, hızlı bir iletişim dili.",

    description:
      "Kurye Plus için hizmetin hızını ve dinamizmini yansıtan, kolay algılanan ve dikkat çeken sosyal medya iletişimi oluşturduk.",

    result:
      "Daha güçlü dijital görünüm",

    tags: [
      "Sosyal Medya",
      "İçerik",
      "Kreatif",
    ],

    images: [
      "/projects/clients/kurye-plus/01.webp",
      "/projects/clients/kurye-plus/02.webp",
    ],

    align: "left",

    accent: "record",
  },
] as const;