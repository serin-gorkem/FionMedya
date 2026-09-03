import type { Project } from "./projects.types";

export const projects: readonly Project[] = [
  {
    number: "01",
    client: "FUYAPI",
    eyebrow: "Sosyal Medya + Dijital Reklam",
    headline: "Reklamdan ev satışına.",
    description:
      "FUYAPI için sosyal medya içerikleri ve dijital reklam çalışmalarını aynı satış hedefi etrafında kurguladık.",
    result: "Reklam kaynaklı ev satışı",
    tags: ["Sosyal Medya", "Meta Reklam", "Kreatif"],
    images: ["/projects/fuyapi-01.jpg", "/projects/fuyapi-02.jpg"],
    align: "left",
    accent: "camera",
  },
  {
    number: "02",
    client: "MOTO EXPRESS",
    eyebrow: "Sosyal Medya + Reklam Yönetimi",
    headline: "Dikkati harekete dönüştürdük.",
    description:
      "Moto Express için hazırladığımız sosyal medya kreatifleri ve reklam çalışmaları etkileşimi güçlendirirken satışlara katkı sağladı.",
    result: "Etkileşim ve satış artışına katkı",
    tags: ["İçerik", "Reklam", "Kreatif"],
    images: ["/projects/moto-01.jpg", "/projects/moto-02.jpg"],
    align: "right",
    accent: "record",
  },
  {
    number: "03",
    client: "CAFE ROMA",
    eyebrow: "Dijital Menü Tasarımı",
    headline: "Fiziksel deneyim, dijital dokunuş.",
    description:
      "Cafe Roma için marka deneyimini masadan telefona taşıyan sade ve kullanışlı bir QR menü sistemi tasarladık.",
    result: "QR menü deneyimi",
    tags: ["Web Tasarım", "QR Menü", "UI"],
    images: ["/projects/cafe-roma-01.jpg", "/projects/cafe-roma-02.jpg"],
    align: "left",
    accent: "frame",
  },
] as const;
