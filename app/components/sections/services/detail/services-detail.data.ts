import type {
  ServiceMockupType,
} from "../services.types";

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

export const serviceDetails:
  readonly ServiceDetailItem[] = [
  {
    number: "01",
    eyebrow:
      "Sosyal Medya Yönetimi",

    title:
      "Kaydırılıp geçilmek için değil.",

    statement:
      "Durup bakılmak için.",

    description:
      "Markanın sosyal medyada yalnızca var olmasıyla ilgilenmiyoruz. Ne söyleyeceğini, nasıl görüneceğini ve insanlarda nasıl bir iz bırakacağını birlikte kurguluyoruz.",

    tags: [
      "Strateji",
      "İçerik",
      "Kreatif",
      "Yönetim",
    ],

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
    eyebrow:
      "Grafik Tasarım",

    title:
      "Görünmek yetmez.",

    statement:
      "Hatırlanmak gerekir.",

    description:
      "Renkten tipografiye, sosyal medya görsellerinden marka materyallerine kadar her temasın aynı karakteri taşımasını sağlıyoruz.",

    tags: [
      "Marka",
      "Kimlik",
      "Sosyal",
      "Tasarım",
    ],

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
    eyebrow:
      "Reklam Yönetimi",

    title:
      "İyi fikir.",

    statement:
      "Doğru insan.",

    description:
      "Reklamı yalnızca bütçe harcanan bir alan olarak görmüyoruz. Kreatif, hedef kitle ve optimizasyonu aynı amaç etrafında çalıştırıyoruz.",

    tags: [
      "Meta Ads",
      "Hedefleme",
      "Kreatif",
      "Optimizasyon",
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