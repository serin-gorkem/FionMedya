import type { ServiceItem } from "./services.types";

export const services: readonly ServiceItem[] = [
  {
    number: "01",
    title: "Sosyal Medya Yönetimi",
    description: "Sadece görünür değil, iz bırakan markalar yaratıyoruz.",
    tags: ["Strateji", "Kreatif", "Yönetim"],
    mockup: "social",
    align: "left",
  },

  {
    number: "02",
    title: "Grafik Tasarım",
    description:
      "Markanızın karakterini tasarımla görünür kılıyor, estetik ve stratejiyi güçlü bir marka kimliğinde buluşturuyoruz.",
    tags: ["Kimlik", "Kreatif", "Tasarım"],
    mockup: "design",
    align: "right",
  },

  {
    number: "03",
    title: "Reklam Yönetimi",
    description:
      "Kreatif stratejiyi, doğru hedeflemeyi ve güçlü medya planlamasını dijitalden geleneksele uzanan bütüncül bir reklam yönetiminde birleştiriyoruz.",
    tags: ["Meta Ads", "Hedefleme", "Optimizasyon", "Geleneksel Reklam"],
    mockup: "ads",
    align: "left",
  },
] as const;
