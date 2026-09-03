import SectionEyebrow from "@/app/components/ui/SectionEyebrow";

export default function ProjectsIntro() {
  return (
    <div
      className="
        mb-24

        xl:grid
        xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
        xl:gap-10
      "
    >
      <div className="max-w-xl">
        <SectionEyebrow className="mb-6">Seçili Projeler</SectionEyebrow>

        <h2
          id="projects-title"
          className="
            font-serif
            text-[clamp(3.7rem,6.4vw,7rem)]
            leading-[0.84]
            tracking-[-0.06em]
            text-ivory
          "
        >
          Biz
          <br />
          anlatmayalım.
          <br />
          <em className="text-white/65">İşler anlatsın.</em>
        </h2>
      </div>

      <div aria-hidden="true" className="hidden xl:block" />

      <div aria-hidden="true" className="hidden xl:block" />
    </div>
  );
}
