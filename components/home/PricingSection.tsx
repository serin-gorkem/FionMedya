import { ArrowUpRight, Plus } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description:
      "İlk dijital görünümünü güçlendirmek isteyen işletmeler için.",
    details: [
      "Temel içerik planı",
      "Sosyal medya görsel dili",
      "Başlangıç seviye video / tasarım üretimi",
    ],
  },
  {
    name: "Growth",
    description:
      "Düzenli içerik ve kampanya üretimi isteyen markalar için.",
    details: [
      "Aylık içerik planı",
      "Reels / story üretimi",
      "Reklam kreatifi ve kampanya desteği",
    ],
  },
  {
    name: "Premium",
    description:
      "Video, web ve reklamı tek çatı altında planlamak isteyen işletmeler için.",
    details: [
      "Video prodüksiyon",
      "Web / landing page tasarımı",
      "Kreatif reklam konsepti",
    ],
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/H_BG.png')] bg-cover bg-center bg-no-repeat opacity-10 md:bg-[url('/images/V_BG.png')]" />
      <div className="absolute inset-0 bg-[#030303]/92" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030303] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#030303]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--red)]">
            Fiyatlandırma
          </p>

          <h2 className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight tracking-[-0.03em] text-white md:text-6xl">
            Her Proje İhtiyaca Göre Planlanır.
          </h2>

          <p className="mt-5 max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            İşletmenizin hedeflerine, sektörüne ve ihtiyaçlarına göre en uygun
            kapsamı birlikte belirliyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-5">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.018] transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-500/[0.035]"
            >
              <details className="group/details">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 md:p-8">
                  <div>
                    <h3 className="font-[var(--font-inter)] text-sm font-bold uppercase tracking-[0.28em] text-[var(--red)]">
                      {plan.name}
                    </h3>

                    <p className="mt-4 max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                      {plan.description}
                    </p>
                  </div>

                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-[var(--red)] transition duration-300 group-hover:border-red-500/50 group-hover:bg-red-500/10 group-open/details:rotate-45">
                    <Plus size={18} strokeWidth={1.6} />
                  </span>
                </summary>

                <div className="border-t border-white/10 px-6 pb-6 md:px-8 md:pb-8">
                  <ul className="grid gap-3 pt-6 md:grid-cols-3">
                    {plan.details.map((detail) => (
                      <li
                        key={detail}
                        className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 font-[var(--font-inter)] text-sm leading-6 text-zinc-500"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-red-500/20 bg-black/25 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-[var(--font-inter)] text-[10px] font-bold uppercase tracking-[0.28em] text-zinc-500">
                Detaylı teklif almak için
              </p>

              <h3 className="mt-3 font-[var(--font-playfair)] text-3xl leading-tight tracking-[-0.03em] text-white md:text-4xl">
                Projeni Anlatalım.
              </h3>
            </div>

            <a
              href="#contact"
              className="group inline-flex h-14 items-center justify-center gap-3 border border-red-500/50 bg-red-500/10 px-6 font-[var(--font-inter)] text-xs font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-red-500/80 hover:bg-red-500/20"
            >
              Projeni Anlatalım
              <ArrowUpRight
                size={16}
                className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}