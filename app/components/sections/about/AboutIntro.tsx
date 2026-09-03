import PillList from "@/app/components/ui/PillList";
import SectionEyebrow from "@/app/components/ui/SectionEyebrow";
import { aboutTags } from "./about.data";
import StudioBoard from "./StudioBoard";

export default function AboutIntro() {
  return (
    <div className="xl:grid xl:min-h-[760px] xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)] xl:items-center xl:gap-10">
      <div className="max-w-[550px]">
        <SectionEyebrow className="mb-7">Fion Medya Hakkında</SectionEyebrow>
        <h2 id="about-title" className="font-serif text-[clamp(4rem,6.5vw,7.2rem)] leading-[0.83] tracking-[-0.06em] text-[#f4efe9]">Biz<br />Fion&apos;uz.</h2>
        <p className="mt-9 max-w-[460px] font-serif text-[clamp(1.75rem,2.2vw,2.45rem)] leading-[1.03] tracking-[-0.04em] text-white/72">Markaların<span className="text-[#f4efe9]"> fark edilmesini </span>ve doğru müşterilere ulaşmasını sağlayan yaratıcı işler üretiyoruz.</p>
        <p className="mt-7 max-w-[430px] text-sm leading-7 text-white/48">Kuşadası merkezli Fion Medya; sosyal medya, grafik tasarım, dijital reklam ve marka iletişimini tek bir yaratıcı strateji altında buluşturur.</p>
        <PillList items={aboutTags} className="mt-8" />
        <div className="mt-10 flex items-center gap-4"><span className="h-px w-12 bg-[#c45a78]" /><span className="text-[8px] uppercase tracking-[0.28em] text-[#c45a78]">Kuşadası / Aydın / İzmir</span></div>
      </div>

      <div aria-hidden="true" className="hidden h-full xl:block" />
      <div className="mt-16 xl:mt-0 xl:flex xl:justify-end"><StudioBoard /></div>
    </div>
  );
}
