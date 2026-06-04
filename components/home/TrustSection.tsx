import { ArrowUpRight, Quote, ShieldCheck, Star, Trophy } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: "120+",
    label: "Tamamlanan Proje",
  },
  {
    icon: Star,
    value: "50+",
    label: "Mutlu Marka",
  },
  {
    icon: ShieldCheck,
    value: "5+",
    label: "Yıl Deneyim",
  },
  {
    icon: Quote,
    value: "%100",
    label: "Marka Odaklılık",
  },
];

const testimonials = [
  {
    quote:
      "Fion Medya ile çalışmak markamızın dijital görünümünde ciddi fark yarattı. Video içeriklerimiz daha profesyonel ve güven veren bir hale geldi.",
    name: "Murat Ayın",
    role: "Cafe Roma / İşletme Sahibi",
  },
  {
    quote:
      "Sadece içerik üretmediler; markamızın nasıl görünmesi gerektiğini de doğru şekilde yönlendirdiler.",
    name: "Fion Medya Müşterisi",
    role: "Yerel İşletme",
  },
];

const brands = [
  "CAFE ROMA",
  "FU PALAZZO",
  "MOTO EXPRESS 09",
  "LA VISTA",
  "NEXORA",
  "STYLE",
];

export function TrustSection() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/home/BG_4.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/home/BG_4_H.png')]" />

      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#030303] via-[#030303]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-[#030303]/70 to-[#030303]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--red)]">
              Güven Kanıtları
            </p>

            <h2 className="mt-5 max-w-2xl font-[var(--font-playfair)] text-4xl leading-tight tracking-[-0.03em] text-white md:text-6xl">
              Markaların Güvendiği Dijital Partner.
            </h2>
          </div>

          <p className="max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-zinc-400 md:text-base md:leading-8 lg:ml-auto">
            İyi görünen içerikler üretmek yeterli değildir. Markanın daha
            güvenilir, daha profesyonel ve daha tercih edilebilir algılanması
            gerekir. Fion Medya bu algıyı tasarlar.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="group rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-500/[0.04]"
              >
                <Icon size={24} strokeWidth={1.5} className="text-[var(--red)]" />

                <p className="mt-8 font-[var(--font-playfair)] text-5xl leading-none text-white">
                  {item.value}
                </p>

                <p className="mt-4 max-w-40 font-[var(--font-inter)] text-[11px] font-semibold uppercase leading-5 tracking-[0.2em] text-zinc-500">
                  {item.label}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-sm md:p-8">
            <Quote size={28} strokeWidth={1.5} className="text-[var(--red)]" />

            <p className="mt-8 max-w-3xl font-[var(--font-playfair)] text-3xl leading-tight tracking-[-0.03em] text-white md:text-4xl">
              “{testimonials[0].quote}”
            </p>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-[var(--font-inter)] text-sm font-bold uppercase tracking-[0.18em] text-white">
                {testimonials[0].name}
              </p>

              <p className="mt-2 font-[var(--font-inter)] text-sm text-zinc-500">
                {testimonials[0].role}
              </p>
            </div>
          </article>

          <div className="rounded-3xl border border-white/10 bg-black/35 p-6 backdrop-blur-sm md:p-8">
            <p className="font-[var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
              Güvenen Markalar
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className="flex h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] px-4 text-center font-[var(--font-inter)] text-xs font-bold uppercase tracking-[0.18em] text-zinc-400"
                >
                  {brand}
                </div>
              ))}
            </div>

            <a
              href="/projeler"
              className="group mt-8 inline-flex h-12 w-full items-center justify-center gap-3 border border-red-500/30 bg-red-500/10 px-5 font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-red-500/70 hover:bg-red-500/20"
            >
              Tüm Yorumları Gör
              <ArrowUpRight
                size={15}
                className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
