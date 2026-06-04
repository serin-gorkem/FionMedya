import {
  Building2,
  Car,
  Coffee,
  Hotel,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { InnerPageShell } from "@/components/layout/InnerPageShell";

const sectors = [
  {
    icon: Coffee,
    title: "Restoran & Kafe",
    description:
      "Mekan atmosferi, menü deneyimi ve lezzet algısını sosyal medyada daha davetkar hale getiririz.",
  },
  {
    icon: Building2,
    title: "Emlak & İnşaat",
    description:
      "Villa, konut ve ticari projeleri premium algıyla sunan video, fotoğraf ve web içerikleri üretiriz.",
  },
  {
    icon: ShoppingBag,
    title: "Mağaza & Ürün",
    description:
      "Ürünlerinizi sadece göstermekle kalmaz, satın alma isteği oluşturacak şekilde konumlandırırız.",
  },
  {
    icon: Hotel,
    title: "Otel & Turizm",
    description:
      "Konaklama, tur, transfer ve deneyim odaklı işletmeler için güven veren dijital sunumlar hazırlarız.",
  },
  {
    icon: Car,
    title: "Otomotiv & Servis",
    description:
      "Servis, bakım, aksesuar ve araç odaklı işletmeler için satışa dönük içerikler oluştururuz.",
  },
  {
    icon: UserRound,
    title: "Kişisel Marka",
    description:
      "Uzmanlığınızı ve güvenilirliğinizi dijitalde daha güçlü gösterecek içerik dili tasarlarız.",
  },
];

export default function SectorsPage() {
  return (
    <InnerPageShell
      eyebrow="Sektörler"
      title="Her Sektör İçin Aynı İçerik Çalışmaz."
      description="İçerik dilini, görsel ritmi ve satış mesajını sektörünüzün karar verme davranışına göre kurarız."
      background="/images/home/BG_3_H.png"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {sectors.map((sector) => {
          const Icon = sector.icon;

          return (
            <article
              key={sector.title}
              className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--red-border)] hover:bg-[var(--red-soft)] md:p-8"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-[var(--red-bright)]">
                <Icon size={24} strokeWidth={1.5} />
              </div>

              <h2 className="mt-8 font-[var(--font-playfair)] text-3xl leading-tight tracking-[-0.03em] text-white">
                {sector.title}
              </h2>

              <p className="mt-4 font-[var(--font-inter)] text-sm leading-7 text-zinc-400">
                {sector.description}
              </p>
            </article>
          );
        })}
      </div>
    </InnerPageShell>
  );
}