import type { ServiceItem } from "./services.types";

export const services: readonly ServiceItem[] = [
  {
    number: "01",
    title: "Sosyal Medya Yönetimi",
    description:
      "Kaydırılıp geçilmek için değil, durup bakılmak için.",
    tags: ["Strateji", "Kreatif", "Yönetim"],
    mockup: "social",
    align: "left",
  },
  {
    number: "02",
    title: "Grafik Tasarım",
    description:
      "Markanın nasıl göründüğünü ve hatırlandığını tasarlıyoruz.",
    tags: ["Kimlik", "Sosyal", "Tasarım"],
    mockup: "design",
    align: "right",
  },
  {
    number: "03",
    title: "Reklam Yönetimi",
    description:
      "İyi fikri doğru insanlarla buluşturuyoruz.",
    tags: ["Meta Ads", "Hedefleme", "Optimizasyon"],
    mockup: "ads",
    align: "left",
  },
] as const;