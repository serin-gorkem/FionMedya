import { getWhatsAppUrl } from "@/app/config/contact";

export default function ContactHero() {
  return (
    <div className="flex flex-1 flex-col justify-center py-20 xl:grid xl:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.55fr)] xl:items-end xl:gap-20 xl:py-24">
      <div>
        <p className="mb-7 text-[10px] uppercase tracking-[0.42em] text-white/55">
          Fion Medya / İletişim
        </p>
        <h2
          id="contact-title"
          className="max-w-[1050px] font-serif text-[clamp(4rem,8.2vw,9rem)] leading-[0.81] tracking-[-0.065em] text-[#f4efe9]"
        >
          Sıradan olanı
          <br />
          <em className="text-white/66">unutmaya</em>
          <br />
          hazır mısın?
        </h2>
      </div>

      <div className="mt-14 xl:mt-0 xl:pb-2">
        <p className="max-w-[390px] font-serif text-[clamp(1.75rem,2.3vw,2.7rem)] leading-[1.02] tracking-[-0.04em] text-[#f4efe9]">
          Bize markanı anlat.
          <br />
          <em className="text-white/58">Gerisini birlikte düşünelim.</em>
        </p>
        <p className="mt-7 max-w-[370px] text-sm leading-7 text-white/55">
          Sosyal medya, grafik tasarım veya reklam ihtiyacın için uzun bir brief
          hazırlamana gerek yok. Nerede olduğunu anlat, birlikte başlayalım.
        </p>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          aria-label="Fion Medya ile WhatsApp üzerinden iletişime geç"
          className="group mt-9 flex w-full max-w-[430px] items-center justify-between rounded-full border border-white/35 bg-[#f4efe9] px-6 py-5 text-[10px] font-medium uppercase tracking-[0.24em] text-[#591323] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white"
        >
          <span className="text-[#591323]">WhatsApp&apos;tan konuşalım</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-500 group-hover:translate-x-1 text-[#591323] group-hover:-translate-y-1"
          >
            ↗
          </span>
        </a>
        <p className="mt-3 text-[8px] uppercase tracking-[0.18em] text-white/35">
          Mesaj hazır geliyor. Sadece gönder.
        </p>
      </div>
    </div>
  );
}
