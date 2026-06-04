import { ArrowUpRight, Plus } from "lucide-react";
import { InnerPageShell } from "@/components/layout/InnerPageShell";

const packages = [
  {
    name: "Starter",
    description:
      "İlk dijital görünümünü güçlendirmek isteyen işletmeler için.",
  },
  {
    name: "Growth",
    description:
      "Düzenli içerik ve kampanya üretimi isteyen markalar için.",
  },
  {
    name: "Premium",
    description:
      "Video, web ve reklamı tek çatı altında planlamak isteyen işletmeler için.",
  },
];

export default function PackagesPage() {
  return (
    <InnerPageShell
      eyebrow="Paketler"
      title="Her Proje İhtiyaca Göre Planlanır."
      description="Sabit ve ezbere fiyatlar yerine, işletmenizin hedeflerine ve ihtiyaçlarına göre en uygun kapsamı birlikte belirliyoruz."
      background="/images/home/BG_2_H.png"
    >
      <div className="grid gap-5">
        {packages.map((item) => (
          <article
            key={item.name}
            className="group flex items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--red-border)] hover:bg-[var(--red-soft)] md:p-8"
          >
            <div>
              <h2 className="font-[var(--font-inter)] text-sm font-bold uppercase tracking-[0.28em] text-[var(--red-bright)]">
                {item.name}
              </h2>

              <p className="mt-4 max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>

            <Plus className="shrink-0 text-[var(--red-bright)]" size={22} />
          </article>
        ))}
      </div>

      <a
        href="/iletisim"
        className="mt-10 inline-flex h-14 items-center justify-center gap-3 border border-[var(--red-border)] bg-[var(--red-soft)] px-6 font-[var(--font-inter)] text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[var(--red-bright)]"
      >
        Projeni Anlatalım
        <ArrowUpRight size={16} />
      </a>
    </InnerPageShell>
  );
}