import SectionEyebrow from "@/app/components/ui/SectionEyebrow";

export default function ServicesIntro() {
  return (
    <div className="mb-28 xl:grid xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)] xl:items-end xl:gap-10">
      <div className="max-w-[540px]">
        <SectionEyebrow className="mb-6">Dijital Medya Hizmetleri</SectionEyebrow>

        <h2
          id="services-title"
          className="font-serif text-[clamp(3.5rem,6vw,6.8rem)] leading-[0.84] tracking-[-0.06em] text-[#f4efe9]"
        >
          Daha fazla
          <br />
          içerik değil.
          <br />
          <em className="text-white/72">Daha iyi fikir.</em>
        </h2>

        <p className="mt-8 max-w-[450px] text-sm leading-7 text-white/55">
          Kuşadası merkezli Fion Medya; Aydın ve İzmir başta olmak üzere markalara
          sosyal medya, tasarım ve dijital reklam çözümleri sunar.
        </p>
      </div>

      <div aria-hidden="true" className="hidden xl:block" />

      <div className="mt-16 xl:mt-0 xl:flex xl:justify-end">
        <div className="w-full max-w-[430px]">
          <p className="text-[9px] uppercase tracking-[0.34em] text-[#c45a78]">
            Yaklaşım
          </p>

          <div className="mt-6">
            <p className="text-[clamp(1.25rem,1.6vw,1.7rem)] leading-[1.08] tracking-[-0.035em] text-white/55">
              Sosyal medya,
              <span className="font-serif italic text-[#f4efe9]"> tasarım </span>
              ve reklamı
            </p>

            <p className="mt-2 font-serif text-[clamp(3rem,4.3vw,5rem)] italic leading-[0.84] tracking-[-0.065em] text-[#f4efe9]">
              aynı hedef
            </p>

            <p className="mt-3 max-w-[390px] text-[clamp(1.5rem,2vw,2.2rem)] leading-[1] tracking-[-0.045em] text-white/72">
              etrafında buluşturuyoruz.
            </p>

            <div className="my-7 h-px w-14 bg-[#c45a78]/60" />

            <p className="max-w-[340px] text-[clamp(1rem,1.2vw,1.2rem)] leading-7 text-white/45">
              Takipçiden önce
              <span className="font-serif text-[1.25em] text-white/85"> müşteriyi </span>
              düşünüyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
