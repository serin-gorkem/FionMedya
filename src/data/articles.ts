export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;

  content: readonly string[];
};

export const articles:
  readonly Article[] = [
  {
    slug: "markalar-neden-hatirlanmaz",

    title:
      "Markalar neden görünür ama hatırlanmaz?",

    excerpt:
      "Görünür olmak ile akılda kalmak aynı şey değil. İyi iletişim, daha fazla içerikten önce daha net bir fikir ister.",

    category: "MARKA",

    date: "02.09.2026",

    readTime: "5 DK",

    content: [
      "Dijital dünyada görünür olmak artık tek başına bir avantaj değil. Her marka paylaşım yapabiliyor, reklam verebiliyor ve insanların ekranına çıkabiliyor.",

      "Asıl mesele, o temasın ardından geriye ne kaldığı. Kullanıcı markayı hatırlıyor mu? Ne söylediğini anlayabiliyor mu? Rakiplerinden neden farklı olduğunu biliyor mu?",

      "Bu yüzden iletişim stratejisini içerik adedi üzerinden kurmak çoğu zaman yanlış başlangıç noktasıdır. Önce markanın ne söylemek istediği, sonra bunu nasıl söyleyeceği belirlenmelidir.",

      "Hatırlanan markalar yalnızca daha fazla görünmez. Daha tutarlı, daha net ve daha karakterli görünür.",
    ],
  },

  {
    slug: "daha-fazla-icerik-degil",

    title:
      "Daha fazla içerik değil, daha iyi fikir.",

    excerpt:
      "İçerik üretim hızını artırmadan önce içeriğin neden üretildiğini netleştirmek gerekiyor.",

    category: "İÇERİK",

    date: "02.09.2026",

    readTime: "4 DK",

    content: [
      "Sosyal medyada sürekli paylaşım yapmak markanın sürekli iletişim kurduğu anlamına gelmez.",

      "Bir içeriğin görevi yalnızca takvimi doldurmak değil; dikkat çekmek, bir düşünce bırakmak veya kullanıcıyı belirli bir aksiyona taşımaktır.",

      "Bu nedenle kreatif süreçte önce fikir gelir. Format, görsel dil, video veya reklam kurgusu o fikrin taşıyıcısıdır.",

      "Daha az ama daha güçlü içerik, çoğu zaman daha fazla fakat birbirine benzeyen içerikten daha değerlidir.",
    ],
  },
];

export function getArticleBySlug(
  slug: string,
) {
  return articles.find(
    (article) =>
      article.slug === slug,
  );
}