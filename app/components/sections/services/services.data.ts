import type { ServiceItem } from "./services.types";

export const services: readonly ServiceItem[] = [
  {
    number: "01",
    title: "Sosyal Medya Yönetimi",
    label: "İçerik",
    description:
      "İçerik stratejisini, kreatif tasarımı ve yayın planını birlikte yönetiyoruz. Markanın sosyal medyada görünür, tutarlı ve akılda kalıcı olmasını sağlıyoruz.",
    tags: ["İçerik Stratejisi", "Kreatif", "Planlama", "Yönetim"],
    mockup: "social",
    align: "left",
  },
  {
    number: "02",
    title: "Grafik Tasarım",
    label: "Marka",
    description:
      "Kurumsal kimlikten sosyal medya tasarımlarına kadar markanın görsel dilini oluşturuyoruz. Her temas noktasında aynı marka algısını koruyoruz.",
    tags: ["Kurumsal Kimlik", "Sosyal Tasarım", "Basılı İşler", "Görsel Sistem"],
    mockup: "design",
    align: "right",
  },
  {
    number: "03",
    title: "Reklam Yönetimi",
    label: "Büyüme",
    description:
      "Meta reklam yönetimini doğru hedef kitle, güçlü kreatif ve ölçülebilir sonuç odağında yürütüyoruz. Reklam bütçesini yalnızca erişime değil, gerçek iş sonucuna yönlendiriyoruz.",
    tags: ["Meta Ads", "Hedef Kitle", "Optimizasyon", "Dönüşüm"],
    mockup: "ads",
    align: "left",
  },
] as const;
