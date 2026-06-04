import {
  ArrowUpRight,
  Bot,
  Clapperboard,
  Globe,
  Megaphone,
  Share2,
} from "lucide-react";

const services = [
  {
    icon: Clapperboard,
    title: "Video Prodüksiyon",
    description:
      "Markanı en iyi anlatan video içerikleri üretiriz.",
  },
  {
    icon: Share2,
    title: "Sosyal Medya İçerikleri",
    description:
      "Reels, story ve kısa video içerikleriyle etkileşimi artırırız.",
  },
  {
    icon: Globe,
    title: "Web Tasarım",
    description:
      "Modern, hızlı ve mobil uyumlu web siteleri tasarlarız.",
  },
  {
    icon: Megaphone,
    title: "Reklam & Kampanya",
    description:
      "Reklam performansını artıracak kreatif fikirler geliştiririz.",
  },
  {
    icon: Bot,
    title: "AI Destekli Üretim",
    description:
      "Yapay zeka ile süreci hızlandırır, yaratıcı gücü artırırız.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/H_BG.png')] bg-cover bg-center bg-no-repeat opacity-25" />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative z-10 pl-1 mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16">
          <p className="font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--red)]">
            Hizmetlerimiz
          </p>

          <h2 className="mt-5 max-w-2xl font-[var(--font-playfair)] text-4xl leading-tight tracking-[-0.03em] text-white md:text-6xl">
            Dijitalde Markanıza Değer Katan Çözümler
          </h2>
        </div>

        <div className="grid gap-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <a
                key={service.title}
                href="#contact"
                className="group grid grid-cols-[64px_1fr_32px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-red-500/50 hover:bg-red-500/[0.06] md:grid-cols-[80px_1fr_40px] md:p-6"
              >
                <div className="flex size-14 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-[var(--red)] transition group-hover:border-red-500/40 group-hover:bg-red-500/10 md:size-16">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="font-[var(--font-inter)] text-sm font-semibold uppercase tracking-[0.18em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 max-w-xl font-[var(--font-inter)] text-sm leading-6 text-zinc-500">
                    {service.description}
                  </p>
                </div>

                <div className="flex justify-end">
                  <span className="flex size-8 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition group-hover:border-red-500/50 group-hover:text-[var(--red)]">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}