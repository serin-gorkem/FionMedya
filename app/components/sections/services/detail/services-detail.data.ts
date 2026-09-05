import type { ServiceMockupType } from "../services.types";

export type ServiceDetailItem = {
  number: string;
  eyebrow: string;
  title: string;
  statement: string;
  description: string;
  tags: readonly string[];
  scope: readonly string[];
  mockup: ServiceMockupType;
};

export const serviceDetails: readonly ServiceDetailItem[] = [
  {
    number: "01",
    eyebrow: "Sosyal Medya Yönetimi",

    title: "Akılda kalıcı, unutulmayan içerikler için.",

    statement: "",

    description:
      "Markanın sosyal medyada yalnızca görünür olmasını değil, hikayesinin ve hizmetinin hedef kitlesinde nasıl bir iz bırakacağını amaçlıyoruz.",

    tags: ["Strateji", "İçerik", "Kreatif", "Yönetim"],

    scope: [
      "İçerik stratejisi",
      "İçerik planlama",
      "Kreatif üretim",
      "Sosyal medya yönetimi",
    ],

    mockup: "social",
  },

  {
    number: "02",
    eyebrow: "Grafik Tasarım",

    title: "Görünmek yetmez.",

    statement: "Hatırlanmak gerekir.",

    description:
      "Logodan afişe, sosyal medya görsellerinden kurumsal kimliğe kadar her tasarımın bir karakter taşımasını sağlıyoruz.",

    tags: ["Marka", "Kimlik", "Sosyal", "Tasarım"],

    scope: [
      "Görsel kimlik",
      "Sosyal medya tasarımı",
      "Kampanya kreatifleri",
      "Dijital materyaller",
    ],

    mockup: "design",
  },

  {
    number: "03",
    eyebrow: "Reklam Yönetimi",

    title: "Doğru hedef,",

    statement: "İyi sonuç",

    description:
      "Markaların bütçelerini en iyi şekilde optimize ederek doğru hedefle iyi sonuç almalarını sağlıyoruz.",

    tags: [
      "Meta Ads",
      "Hedefleme",
      "Kreatif",
      "Optimizasyon",
      "Geleneksel Reklam",
    ],

    scope: [
      "Kampanya kurulumu",
      "Hedef kitle",
      "Reklam kreatifleri",
      "Optimizasyon",
    ],

    mockup: "ads",
  },
] as const;
