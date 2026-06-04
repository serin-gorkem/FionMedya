import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { InnerPageShell } from "@/components/layout/InnerPageShell";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp'tan Yazın",
    href: "https://wa.me/",
  },
  {
    icon: Camera,
    label: "Instagram'dan Ulaşın",
    href: "https://instagram.com/",
  },
  {
    icon: Phone,
    label: "Telefon ile Arayın",
    href: "tel:+905000000000",
  },
  {
    icon: Mail,
    label: "E-Posta Gönderin",
    href: "mailto:info@fionmedya.com",
  },
];

export default function ContactPage() {
  return (
    <InnerPageShell
      eyebrow="İletişim"
      title="Projenizi Birlikte Gerçekleştirelim."
      description="Markanız için nasıl bir video, web veya reklam stratejisi oluşturabileceğimizi konuşalım."
      background="/images/home/BG_5_H.png"
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--red-border)] hover:bg-[var(--red-soft)]"
            >
              <span className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-black/35 text-[var(--red-bright)]">
                  <Icon size={20} strokeWidth={1.5} />
                </span>

                <span className="font-[var(--font-inter)] text-xs font-bold uppercase tracking-[0.18em] text-white">
                  {item.label}
                </span>
              </span>

              <ArrowUpRight
                size={17}
                className="text-[var(--red-bright)] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-2">
        <div className="flex items-start gap-4">
          <MapPin
            size={20}
            strokeWidth={1.5}
            className="mt-1 text-[var(--red-bright)]"
          />

          <div>
            <p className="font-[var(--font-inter)] text-xs font-bold uppercase tracking-[0.18em] text-white">
              Konum
            </p>

            <p className="mt-2 font-[var(--font-inter)] text-sm leading-6 text-zinc-500">
              İzmir, Türkiye
            </p>
          </div>
        </div>

        <div className="md:text-right">
          <p className="font-[var(--font-inter)] text-xs font-bold uppercase tracking-[0.18em] text-white">
            Çalışma Bölgesi
          </p>

          <p className="mt-2 font-[var(--font-inter)] text-sm leading-6 text-zinc-500">
            Türkiye Geneli
          </p>
        </div>
      </div>
    </InnerPageShell>
  );
}