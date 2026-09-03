import SectionEyebrow from "@/app/components/ui/SectionEyebrow";

export default function ProjectsIntro() {
  return (
    <div className="mb-28 xl:grid xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)] xl:items-end xl:gap-10">
      <div className="max-w-[570px]">
        <SectionEyebrow className="mb-6">Seçili Projeler</SectionEyebrow>
        <h2 id="projects-title" className="font-serif text-[clamp(3.7rem,6.4vw,7rem)] leading-[0.84] tracking-[-0.06em] text-[#f4efe9]">
          Biz<br />anlatmayalım.<br /><em className="text-white/65">İşler anlatsın.</em>
        </h2>
      </div>

      <div aria-hidden="true" className="hidden xl:block" />

      <div className="mt-14 xl:mt-0 xl:flex xl:justify-end">
        <div className="w-full max-w-[390px]">
          <p className="text-[9px] uppercase tracking-[0.32em] text-[#c45a78]">Portfolyo</p>
          <p className="mt-5 font-serif text-[clamp(2rem,2.9vw,3.5rem)] leading-[0.95] tracking-[-0.045em] text-[#f4efe9]">
            Gerçek markalar.<br /><span className="text-white/58">Gerçek işler.</span><br /><em className="text-[#c45a78]">Gerçek sonuçlar.</em>
          </p>
          <p className="mt-7 max-w-[340px] text-sm leading-7 text-white/45">Sosyal medya yönetimi, reklam ve dijital deneyim çalışmalarımızdan seçilmiş projeler.</p>
        </div>
      </div>
    </div>
  );
}
