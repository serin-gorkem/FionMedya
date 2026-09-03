import SectionEyebrow from "@/app/components/ui/SectionEyebrow";

export default function ServicesIntro() {
  return (
    <div
      className="
        mb-24

        xl:grid
        xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
        xl:gap-10
      "
    >
      <div className="max-w-lg">
        <SectionEyebrow className="mb-6">
          Dijital Medya Hizmetleri
        </SectionEyebrow>

        <h2
          id="services-title"
          className="
            font-serif
            text-[clamp(3.5rem,6vw,6.8rem)]
            leading-[0.84]
            tracking-[-0.06em]
            text-ivory
          "
        >
          Daha fazla
          <br />
          içerik değil.
          <br />

          <em className="text-white/72">
            Daha iyi fikir.
          </em>
        </h2>
      </div>

      {/* Wine lane */}
      <div
        aria-hidden="true"
        className="hidden xl:block"
      />

      {/* Bilerek boş bırakıyoruz */}
      <div
        aria-hidden="true"
        className="hidden xl:block"
      />
    </div>
  );
}