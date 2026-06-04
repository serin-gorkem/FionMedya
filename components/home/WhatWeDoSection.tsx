import {
  ArrowUpRight,
  Clapperboard,
  Globe,
  Megaphone,
  Share2,
  Sparkles,
} from "lucide-react";

const items = [
  {
    icon: Clapperboard,
    title: "Video Prodüksiyon",
    description:
      "Markanızı daha profesyonel gösteren kısa video, reels ve tanıtım içerikleri üretiriz.",
  },
  {
    icon: Share2,
    title: "Sosyal Medya İçerikleri",
    description:
      "Düzenli, dikkat çeken ve marka algısını güçlendiren sosyal medya içerikleri hazırlarız.",
  },
  {
    icon: Globe,
    title: "Web Tasarım",
    description:
      "Mobil uyumlu, hızlı ve güven veren web arayüzleriyle dijital vitrininizi güçlendiririz.",
  },
  {
    icon: Megaphone,
    title: "Reklam Kreatifleri",
    description:
      "Kampanya, duyuru ve satış odaklı reklam fikirlerini daha etkili görsel dile çeviririz.",
  },
  {
    icon: Sparkles,
    title: "AI Destekli Üretim",
    description:
      "Yapay zekayı doğru yerde kullanarak üretim sürecini hızlandırır, fikirleri daha güçlü sunarız.",
  },
];

export function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/home/BG_2.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/home/BG_2_H.png')]" />

      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#030303] via-[#030303]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-[#030303]/70 to-[#030303]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--red)]">
              Ne Yapıyoruz?
            </p>

            <h2 className="mt-5 max-w-2xl font-[var(--font-playfair)] text-4xl leading-tight tracking-[-0.03em] text-white md:text-6xl">
              Markanızın Dijital Algısını Güçlendiren Sistemler Kuruyoruz.
            </h2>
          </div>

          <p className="max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-zinc-400 md:text-base md:leading-8 lg:ml-auto">
            Fion Medya; video, sosyal medya, reklam kreatifi ve web tasarımı tek
            bir marka dili altında birleştirir. Amaç sadece içerik üretmek
            değil, işletmenizin daha güvenilir ve tercih edilebilir görünmesini
            sağlamaktır.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-500/[0.05]"
              >
                <div className="pointer-events-none absolute right-[-50px] top-[-50px] h-32 w-32 rounded-full bg-red-500/0 blur-3xl transition duration-300 group-hover:bg-red-500/20" />

                <div className="relative z-10">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-[var(--red)] transition duration-300 group-hover:border-red-500/40 group-hover:bg-red-500/10">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-7 font-[var(--font-inter)] text-sm font-bold uppercase tracking-[0.18em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-[var(--font-inter)] text-sm leading-7 text-zinc-500">
                    {item.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-2 font-[var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 transition duration-300 group-hover:text-[var(--red)]">
                    Detay
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
