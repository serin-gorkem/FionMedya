export type ProjectMedia =
  | {
      type: "image";
      src: string;
      alt: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
    };

export type Project = {
  slug: string;

  number: string;

  client: string;

  service: string;

  year: string;

  title: string;

  description: string;

  results?: readonly string[];

  media?: ProjectMedia;
};

export const projects:
  readonly Project[] = [
  {
    slug: "fuyapi",

    number: "01",

    client: "FUYAPI",

    service:
      "SOSYAL MEDYA + REKLAM",

    year: "2026",

    title:
      "Reklamdan ev satışına.",

    description:
      "Sosyal medya yönetimi ve reklam çalışmalarıyla dikkat çeken kreatifler ürettik.",

    results: [
      "Reklam çalışmaları sonucunda bir ev satışı gerçekleşti.",
      "Sosyal medya etkileşimlerinde artış sağlandı.",
    ],
    media: {
      type: "image",
      src: "/projects/fuyapi/cover.webp",
      alt: "FUYAPI sosyal medya ve reklam çalışması",
    },
  },

  {
    slug: "moto-express09",

    number: "02",

    client:
      "MOTO EXPRESS09",

    service:
      "SOSYAL MEDYA + REKLAM",

    year: "2026",

    title:
      "Dikkati harekete dönüştürdük.",

    description:
      "Sosyal medya ve reklam çalışmalarında kreatif etkileşimini artırmaya odaklandık.",

    results: [
      "Satışlarda artış sağlandı.",
      "Sosyal medya etkileşimlerinde artış sağlandı.",
    ],

    // media: {
    //   type: "video",
    //   src: "/projects/moto-express09/reel.mp4",
    //   poster: "/projects/moto-express09/poster.webp",
    // },
  },
];

export function getProjectBySlug(
  slug: string,
) {
  return projects.find(
    (project) =>
      project.slug === slug,
  );
}