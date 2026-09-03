import { disciplines } from "./about.data";
import MiniCamera from "./MiniCamera";

export default function StudioBoard() {
  return (
    <div className="group/board relative w-full max-w-[560px]">
      <div className="absolute -right-4 -top-8 z-20 hidden transition-transform duration-700 group-hover/board:-rotate-[5deg] xl:block"><MiniCamera /></div>
      <div aria-hidden="true" className="absolute -left-[5%] top-[12%] hidden h-[58%] w-[38%] -rotate-[7deg] rounded-[22px] border border-[#4e1426] bg-[#16080d] opacity-65 transition-all duration-700 group-hover/board:-translate-x-3 group-hover/board:-rotate-[10deg] xl:block" />

      <div className="relative z-10 overflow-hidden rounded-[30px] border border-[#5d1a30] bg-[#090909] p-6 shadow-[0_28px_90px_rgba(72,12,31,0.25)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/board:-translate-y-2">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div><p className="text-[9px] uppercase tracking-[0.32em] text-[#c45a78]">Fion Medya</p><p className="mt-2 text-xs text-white/42">Kuşadası / Aydın / İzmir</p></div>
          <span className="shrink-0 text-[8px] uppercase tracking-[0.25em] text-white/25">Creative Studio</span>
        </div>

        <div className="py-8"><p className="max-w-[440px] font-serif text-[clamp(2.4rem,3.5vw,4rem)] leading-[0.92] tracking-[-0.05em] text-[#f4efe9]">Fikir önce gelir.<br /><em className="text-white/58">Geri kalanı<br />onun etrafında kurarız.</em></p></div>

        <div className="border-t border-white/10 pt-5">
          <p className="text-[8px] uppercase tracking-[0.28em] text-white/30">Uzmanlık Alanları</p>
          <div className="mt-4 flex flex-wrap gap-2">{disciplines.map((discipline) => <span key={discipline} className="rounded-full border border-[#4f1628] bg-[#16080d] px-4 py-2 text-[8px] uppercase tracking-[0.14em] text-white/58">{discipline}</span>)}</div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="flex min-h-[140px] flex-col justify-between rounded-[20px] border border-white/10 bg-[#111111] p-5"><span className="text-[8px] uppercase tracking-[0.25em] text-white/30">Yaklaşım</span><p className="font-serif text-[25px] leading-[0.95] tracking-[-0.04em] text-[#f4efe9]">Az laf.<br />Net fikir.</p></div>
          <div className="flex min-h-[140px] flex-col justify-between rounded-[20px] border border-[#6c2038] bg-[#591323] p-5"><span className="text-[8px] uppercase tracking-[0.25em] text-white/45">Fion</span><p className="font-serif text-[25px] leading-[0.95] tracking-[-0.04em] text-[#f4efe9]">Sıradan<br />Olanı Unut.</p></div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4"><span className="text-[8px] uppercase tracking-[0.24em] text-white/25">Strategy / Creative / Growth</span><span className="h-[6px] w-[6px] rounded-full bg-[#c45a78]" /></div>
      </div>
    </div>
  );
}
