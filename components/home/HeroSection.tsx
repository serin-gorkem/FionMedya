import {
  ArrowUpRight,
  Play,
  BarChart3,
  Briefcase,
  Star,
  Trophy,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "120+",
    label: "Tamamlanan Proje",
  },
  {
    icon: Star,
    value: "50+",
    label: "Mutlu Marka",
  },
  {
    icon: Trophy,
    value: "5+",
    label: "Yıl Deneyim",
  },
  {
    icon: BarChart3,
    value: "%100",
    label: "Marka Odaklılık",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030303] px-6 pb-10 pt-32 text-white md:px-10 md:pt-40">
      <div className="absolute inset-0 bg-[url('/images/home/BG_1.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/home/BG_1_H.png')]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-[#030303]/70 to-[#030303]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-7xl flex-col justify-between">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-white/5" />

        <div className="w-full max-w-5xl">
          <p className="font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--red-bright)]">
            Dijital algınızı yükseltiniz
          </p>

          <h1 className="mt-7 max-w-5xl font-[var(--font-playfair)] text-[48px] leading-[0.95] tracking-[-0.04em] text-white sm:text-[64px] md:text-[82px] xl:text-[96px]">
            Markanızın Dijital Algısını{" "}
            <span className="italic text-[var(--red-bright)]">
              Tasarlıyoruz.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
            Video prodüksiyon, sosyal medya içerikleri, reklam kreatifleri ve
            web tasarım çözümleriyle işletmenizi daha güvenilir, daha
            profesyonel ve daha tercih edilebilir gösteririz.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex h-13 w-full items-center justify-center gap-3 border border-[var(--red-border)] bg-[var(--red-soft)] px-6 font-[var(--font-inter)] text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[var(--red-bright)] hover:bg-[rgba(209,58,74,0.18)] sm:w-auto"
            >
              Projeni Konuşalım
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#works"
              className="inline-flex h-13 items-center gap-3 font-[var(--font-inter)] text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 transition hover:text-white"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-white/20">
                <Play size={15} fill="currentColor" />
              </span>
              Showreel İzle
            </a>
          </div>
        </div>

        <div className="mt-16 grid w-full grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm md:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="border-b border-r border-white/10 p-5 last:border-r-0 md:border-b-0 md:p-6"
              >
                <Icon
                  className="mb-5 text-[var(--red-bright)]"
                  size={22}
                  strokeWidth={1.5}
                />

                <p className="font-[var(--font-playfair)] text-3xl text-white md:text-4xl">
                  {item.value}
                </p>

                <p className="mt-2 max-w-32 font-[var(--font-inter)] text-[10px] font-semibold uppercase leading-4 tracking-[0.18em] text-zinc-500">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#what-we-do"
            className="font-[var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-500 transition hover:text-[var(--red-bright)]"
          >
            Aşağı Kaydır
          </a>
        </div>
      </div>
    </section>
  );
}
