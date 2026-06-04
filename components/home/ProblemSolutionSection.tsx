import { ArrowUpRight, CheckCircle2, CircleAlert, Sparkles } from "lucide-react";

const cards = [
  {
    icon: CircleAlert,
    eyebrow: "Problem",
    title: "İyi işletmeler dijitalde zayıf görünüyor.",
    description:
      "Ürün, hizmet veya ekip kaliteli olsa bile; zayıf görseller, düzensiz sosyal medya ve eski web sitesi markanın algısını aşağı çeker.",
  },
  {
    icon: Sparkles,
    eyebrow: "Çözüm",
    title: "Markanın görünüşünü stratejik şekilde yeniliyoruz.",
    description:
      "Video, sosyal medya, reklam kreatifi ve web tasarımı tek bir görsel dilde birleşir. Böylece marka daha profesyonel ve güvenilir görünür.",
  },
  {
    icon: CheckCircle2,
    eyebrow: "Sonuç",
    title: "Daha güçlü algı, daha net güven, daha fazla aksiyon.",
    description:
      "İnsanlar gördüklerine göre karar verir. Güçlü dijital görünüm; mesajlaşma, randevu, teklif ve satın alma ihtimalini artırır.",
  },
];

export function ProblemSolutionSection() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-10 md:py-32">
      <div className="absolute inset-0 bg-[url('/images/H_BG.png')] bg-cover bg-center bg-no-repeat opacity-10 md:bg-[url('/images/V_BG.png')]" />
      <div className="absolute inset-0 bg-[#030303]/90" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030303] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#030303]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--red)]">
              Yaklaşımımız
            </p>

            <h2 className="mt-5 max-w-2xl font-[var(--font-playfair)] text-4xl leading-tight tracking-[-0.03em] text-white md:text-6xl">
              Sadece İçerik Değil, Algı Tasarımı
            </h2>
          </div>

          <p className="max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-zinc-400 md:text-base md:leading-8 lg:ml-auto">
            Her markanın sorunu daha fazla paylaşım yapmak değildir. Bazen asıl
            sorun; markanın olduğundan daha amatör, daha dağınık veya daha az
            güvenilir görünmesidir. Biz bu görüntüyü düzeltiriz.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-500/[0.045] md:p-8"
              >
                <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-red-500/0 blur-3xl transition duration-300 group-hover:bg-red-500/15" />

                <div className="flex items-start justify-between gap-6">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-[var(--red)] transition duration-300 group-hover:border-red-500/40 group-hover:bg-red-500/10">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <span className="font-[var(--font-playfair)] text-5xl leading-none text-white/10">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-8 font-[var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--red)]">
                  {card.eyebrow}
                </p>

                <h3 className="mt-4 font-[var(--font-playfair)] text-3xl leading-tight tracking-[-0.03em] text-white">
                  {card.title}
                </h3>

                <p className="mt-5 font-[var(--font-inter)] text-sm leading-7 text-zinc-500">
                  {card.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 font-[var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 transition duration-300 group-hover:text-[var(--red)]">
                  Detay
                  <ArrowUpRight size={14} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}