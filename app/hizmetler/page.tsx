import {
  Bot,
  Clapperboard,
  Globe,
  Megaphone,
  Share2,
} from "lucide-react";
import { InnerPageShell } from "@/components/layout/InnerPageShell";

const services = [
  {
    icon: Clapperboard,
    title: "Video Prodüksiyon",
    description:
      "Markanızın ürününü, hizmetini veya atmosferini daha profesyonel gösterecek tanıtım videoları, reels içerikleri ve kampanya videoları üretiriz.",
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
      "Mobil uyumlu, hızlı ve güven veren web siteleriyle dijital vitrininizi güçlendiririz.",
  },
  {
    icon: Megaphone,
    title: "Reklam & Kampanya",
    description:
      "Satış, duyuru ve marka bilinirliği hedefleri için kreatif reklam fikirleri geliştiririz.",
  },
  {
    icon: Bot,
    title: "AI Destekli Üretim",
    description:
      "Yapay zekayı doğru yerde kullanarak konsept, görsel ve video ön üretim sürecini hızlandırırız.",
  },
];

export default function ServicesPage() {
  return (
    <InnerPageShell
      eyebrow="Hizmetler"
      title="Markanızın Dijital Algısını Güçlendiren Çözümler."
      description="Video, sosyal medya, reklam kreatifi, web tasarım ve AI destekli üretimi tek bir marka dili altında birleştiriyoruz."
      background="/images/home/BG_2_H.png"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--red-border)] hover:bg-[var(--red-soft)] md:p-8"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-[var(--red-bright)]">
                <Icon size={24} strokeWidth={1.5} />
              </div>

              <h2 className="mt-8 font-[var(--font-playfair)] text-3xl leading-tight tracking-[-0.03em] text-white">
                {service.title}
              </h2>

              <p className="mt-4 font-[var(--font-inter)] text-sm leading-7 text-zinc-400">
                {service.description}
              </p>
            </article>
          );
        })}
      </div>
    </InnerPageShell>
  );
}