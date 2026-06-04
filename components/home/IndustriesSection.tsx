import {
  ArrowUpRight,
  Building2,
  Car,
  Coffee,
  Hotel,
  ShoppingBag,
  UserRound,
} from "lucide-react";

const industries = [
  {
    icon: Coffee,
    title: "Restoran & Kafe",
    description:
      "Menü, atmosfer, lezzet ve mekan deneyimini sosyal medyada daha iştah açıcı ve güven veren hale getiririz.",
    services: ["Reels", "Menü Çekimi", "Sosyal Medya"],
  },
  {
    icon: Building2,
    title: "Emlak & İnşaat",
    description:
      "Villa, konut ve ticari projeleri premium algıyla sunan video, fotoğraf ve kampanya içerikleri üretiriz.",
    services: ["Tanıtım Videosu", "Drone", "Landing Page"],
  },
  {
    icon: ShoppingBag,
    title: "Mağaza & Ürün",
    description:
      "Ürünlerinizi sadece göstermekle kalmaz, satın alma isteği oluşturacak şekilde konumlandırırız.",
    services: ["Ürün Videosu", "Story", "Reklam Kreatifi"],
  },
  {
    icon: Hotel,
    title: "Otel & Turizm",
    description:
      "Konaklama, transfer, tur ve deneyim odaklı işletmeler için güven veren dijital sunumlar hazırlarız.",
    services: ["Web Tasarım", "Video", "Rezervasyon Odaklı İçerik"],
  },
  {
    icon: Car,
    title: "Otomotiv & Servis",
    description:
      "Servis, bakım, aksesuar ve araç odaklı işletmeler için net, hızlı ve satışa dönük içerikler oluştururuz.",
    services: ["Reels", "Servis Tanıtımı", "Kampanya"],
  },
  {
    icon: UserRound,
    title: "Kişisel Marka",
    description:
      "Uzmanlığınızı, tarzınızı ve güvenilirliğinizi dijitalde daha güçlü gösterecek içerik dili tasarlarız.",
    services: ["Kısa Video", "Profil İçeriği", "Web Sayfası"],
  },
];

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/H_BG.png')] bg-cover bg-center bg-no-repeat opacity-10 md:bg-[url('/images/V_BG.png')]" />
      
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--red)]">
              Sektör Bazlı Hizmetler
            </p>

            <h2 className="mt-5 max-w-2xl font-[var(--font-playfair)] text-4xl leading-tight tracking-[-0.03em] text-white md:text-6xl">
              Her Sektör İçin Aynı İçerik Çalışmaz
            </h2>
          </div>

          <p className="max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-zinc-400 md:text-base md:leading-8 lg:ml-auto">
            Restoranla emlak projesinin, ürün mağazasıyla kişisel markanın
            ihtiyacı aynı değildir. İçerik dilini, görsel ritmi ve satış
            mesajını sektörün karar verme davranışına göre kurarız.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article
                key={industry.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-500/[0.04] md:p-7"
              >
                <div className="pointer-events-none absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-red-500/0 blur-3xl transition duration-300 group-hover:bg-red-500/15" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-[var(--red)] transition duration-300 group-hover:border-red-500/40 group-hover:bg-red-500/10">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-zinc-600 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--red)]"
                    />
                  </div>

                  <h3 className="mt-8 font-[var(--font-playfair)] text-3xl leading-tight tracking-[-0.03em] text-white">
                    {industry.title}
                  </h3>

                  <p className="mt-4 min-h-[84px] font-[var(--font-inter)] text-sm leading-7 text-zinc-500">
                    {industry.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {industry.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-lg border border-white/10 bg-black/30 px-3 py-1.5 font-[var(--font-inter)] text-[10px] font-medium text-zinc-400"
                      >
                        {service}
                      </span>
                    ))}
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