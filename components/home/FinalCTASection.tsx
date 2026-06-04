import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp'tan Yazın",
    description: "Projenizi hızlıca anlatın, birlikte değerlendirelim.",
    href: "https://wa.me/",
  },
  {
    icon: Camera,
    label: "Instagram'dan Ulaşın",
    description: "İşlerimizi ve güncel içeriklerimizi takip edin.",
    href: "https://instagram.com/",
  },
  {
    icon: Phone,
    label: "Telefon ile Arayın",
    description: "Doğrudan görüşmek için bizimle iletişime geçin.",
    href: "tel:+905000000000",
  },
  {
    icon: Mail,
    label: "E-Posta Gönderin",
    description: "Teklif, iş birliği veya detaylı bilgi için yazın.",
    href: "mailto:info@fionmedya.com",
  },
];

export function FinalCTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/home/BG_5.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/images/home/BG_5_H.png')]" />

      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#030303] via-[#030303]/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--red)]">
              İletişime Geçelim
            </p>

            <h2 className="mt-5 max-w-3xl font-[var(--font-playfair)] text-5xl leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Projenizi Birlikte Gerçekleştirelim.
            </h2>

            <p className="mt-7 max-w-2xl font-[var(--font-inter)] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
              Markanız için nasıl bir video, web veya reklam stratejisi
              oluşturabileceğimizi konuşalım. İhtiyacınızı anlatın, en doğru
              üretim planını birlikte netleştirelim.
            </p>
          </div>

          <div className="grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-500/[0.06]"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/35 text-[var(--red)] transition duration-300 group-hover:border-red-500/40 group-hover:bg-red-500/10">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>

                    <span>
                      <span className="block font-[var(--font-inter)] text-xs font-bold uppercase tracking-[0.18em] text-white">
                        {item.label}
                      </span>

                      <span className="mt-2 block font-[var(--font-inter)] text-sm leading-6 text-white">
                        {item.description}
                      </span>
                    </span>
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-[var(--red)] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-2">
          <div className="flex items-start gap-4">
            <MapPin size={20} strokeWidth={1.5} className="mt-1 text-[var(--red)]" />

            <div>
              <p className="font-[var(--font-inter)] text-xs font-bold uppercase tracking-[0.18em] text-white">
                Konum
              </p>

              <p className="mt-2 font-[var(--font-inter)] text-sm leading-6 text-white">
                İzmir, Türkiye
              </p>
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-[var(--font-inter)] text-xs font-bold uppercase tracking-[0.18em] text-white">
              Çalışma Bölgesi
            </p>

            <p className="mt-2 font-[var(--font-inter)] text-sm leading-6 text-white">
              Türkiye Geneli
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
