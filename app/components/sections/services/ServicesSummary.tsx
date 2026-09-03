import SectionEyebrow from "../../ui/SectionEyebrow";

export default function ServicesSummary() {
  return (
    <div className="mt-28 border-t border-white/10 pt-10 xl:grid xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)] xl:gap-10">
      <div>
        <SectionEyebrow>Tek ekip / tek dil</SectionEyebrow>
        <p className="mt-5 max-w-[430px] font-serif text-[clamp(2rem,2.8vw,3.4rem)] leading-[0.95] tracking-[-0.045em] text-[#f4efe9]">
          İçerik,
          <br />
          tasarım ve reklam
          <em className="text-white/55"> birbirinden ayrı değil.</em>
        </p>
      </div>

      <div aria-hidden="true" className="hidden xl:block" />

      <div className="mt-10 xl:mt-0 xl:flex xl:items-end xl:justify-end">
        <p className="max-w-[380px] text-sm leading-7 text-white/48">
          Fion Medya&apos;da sosyal medya yönetimi, grafik tasarım ve reklam
          yönetimi aynı marka stratejisinin parçaları olarak birlikte çalışır.
        </p>
      </div>
    </div>
  );
}
