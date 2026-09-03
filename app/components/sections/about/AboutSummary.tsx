import TextLink from "@/app/components/ui/TextLink";

export default function AboutSummary() {
  return (
    <div className="mt-20 border-t border-white/10 pt-10 xl:grid xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)] xl:items-end xl:gap-10">
      <div><p className="text-[9px] uppercase tracking-[0.32em] text-white/28">Ne için buradayız?</p><p className="mt-5 max-w-[440px] font-serif text-[clamp(2rem,2.8vw,3.4rem)] leading-[0.95] tracking-[-0.045em] text-[#f4efe9]">Görünmek için değil.<br /><em className="text-white/55">Hatırlanmak için.</em></p></div>
      <div aria-hidden="true" className="hidden xl:block" />
      <div className="mt-10 xl:mt-0 xl:flex xl:justify-end"><TextLink href="#contact" className="w-full max-w-[390px] justify-between border-b border-white/15 pb-4 text-[10px] text-white/58">Bir proje konuşalım</TextLink></div>
    </div>
  );
}
