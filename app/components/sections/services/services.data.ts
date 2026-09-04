import type { ServiceItem } from "./services.types";

export const services: readonly ServiceItem[] = [
  {
    number: "01",
    title: "Sosyal Medya Yönetimi",
    description:
      "Paylaşım yapmak için değil, markayı büyüten bir iletişim kurmak için.",
    tags: ["Strateji", "Kreatif", "Yönetim"],
    mockup: "social",
    align: "left",
  },

  {
    number: "02",
    title: "Grafik Tasarım",
    description:
      "Markanın her temas noktasında aynı karakteri taşımasını sağlıyoruz.",
    tags: ["Kimlik", "Kreatif", "Tasarım"],
    mockup: "design",
    align: "right",
  },

  {
    number: "03",
    title: "Reklam Yönetimi",
    description:
      "Kreatif, hedefleme ve optimizasyonu aynı sonuç hedefinde buluşturuyoruz.",
    tags: ["Meta Ads", "Hedefleme", "Optimizasyon"],
    mockup: "ads",
    align: "left",
  },
] as const;