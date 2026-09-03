import TextLink from "@/app/components/ui/TextLink";

export default function ProjectsOutro() {
  return (
    <div className="mt-28 border-t border-white/10 pt-10 xl:grid xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)] xl:items-end xl:gap-10">
      <div><p className="text-[9px] uppercase tracking-[0.3em] text-white/28">Sıradaki proje</p><p className="mt-5 max-w-[440px] font-serif text-[clamp(2.1rem,3vw,3.7rem)] leading-[0.94] tracking-[-0.045em] text-[#f4efe9]">Belki de<br /><em className="text-white/55">senin markan.</em></p></div>
      <div aria-hidden="true" className="hidden xl:block" />
      <div className="mt-10 xl:mt-0 xl:flex xl:justify-end"><TextLink href="#contact" className="w-full max-w-[380px] justify-between border-b border-white/15 pb-4 text-[10px] text-white/58">Bir proje konuşalım</TextLink></div>
    </div>
  );
}
