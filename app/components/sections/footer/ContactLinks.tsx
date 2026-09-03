import { contactConfig } from "@/app/config/contact";

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
    >
      ↗
    </span>
  );
}

export default function ContactLinks() {
  const instagramEnabled = Boolean(contactConfig.instagram);

  return (
    <div className="grid border-t border-white/20 sm:grid-cols-3">
      <a
        href={`mailto:${contactConfig.email}`}
        className="group flex min-h-[130px] flex-col justify-between border-b border-white/20 py-6 transition-colors duration-300 hover:bg-black/[0.08] sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0"
      >
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/42">
          E-posta
        </span>
        <span className="flex items-end justify-between gap-4">
          <strong className="break-all font-serif text-[clamp(1.3rem,1.8vw,2rem)] font-normal tracking-[-0.035em] text-[#f4efe9]">
            {contactConfig.email}
          </strong>
          <Arrow />
        </span>
      </a>

      {instagramEnabled ? (
        <a
          href={contactConfig.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Fion Medya Instagram hesabı"
          className="group flex min-h-[130px] flex-col justify-between border-b border-white/20 py-6 transition-colors duration-300 hover:bg-black/[0.08] sm:border-b-0 sm:border-r sm:px-6"
        >
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/42">
            Sosyal
          </span>
          <span className="flex items-end justify-between">
            <strong className="font-serif text-[clamp(1.5rem,2vw,2.2rem)] font-normal tracking-[-0.04em] text-[#f4efe9]">
              Instagram
            </strong>
            <Arrow />
          </span>
        </a>
      ) : (
        <div className="flex min-h-[130px] flex-col justify-between border-b border-white/20 py-6 sm:border-b-0 sm:border-r sm:px-6">
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/42">
            Sosyal
          </span>
          <strong className="font-serif text-[clamp(1.5rem,2vw,2.2rem)] font-normal tracking-[-0.04em] text-white/45">
            Instagram
          </strong>
        </div>
      )}

      <div className="flex min-h-[130px] flex-col justify-between py-6 sm:px-6 sm:pr-0">
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/42">
          Çalışma Alanı
        </span>
        <p className="font-serif text-[clamp(1.5rem,2vw,2.2rem)] leading-[1] tracking-[-0.04em] text-[#f4efe9]">
          {contactConfig.locations.map((location, index) => (
            <span key={location}>
              {index > 0 && <span className="text-white/40"> / </span>}
              {location}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
