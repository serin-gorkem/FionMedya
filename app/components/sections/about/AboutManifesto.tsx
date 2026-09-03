export default function AboutManifesto() {
  return (
    <div className="mt-24 border-t border-white/10 pt-12 xl:grid xl:min-h-[560px] xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)] xl:items-center xl:gap-10">
      <div className="max-w-[570px]">
        <p className="text-[9px] uppercase tracking-[0.36em] text-white/28">Nasıl çalışıyoruz?</p>
        <div className="mt-8">
          <p className="font-serif text-[clamp(2.8rem,4vw,4.8rem)] leading-[0.88] tracking-[-0.055em] text-[#f4efe9]">Markaya bakarız.</p>
          <p className="mt-2 font-serif text-[clamp(2.8rem,4vw,4.8rem)] leading-[0.88] tracking-[-0.055em] text-[#f4efe9]">Müşteriyi düşünürüz.</p>
          <p className="mt-2 font-serif text-[clamp(2.7rem,3.8vw,4.5rem)] italic leading-[0.88] tracking-[-0.055em] text-white/55">Sonra işi üretiriz.</p>
        </div>
        <div className="mt-9 flex items-center gap-4"><span className="h-px w-12 bg-[#c45a78]/60" /><span className="text-[8px] uppercase tracking-[0.3em] text-[#c45a78]">Strateji önce gelir</span></div>
      </div>

      <div aria-hidden="true" className="hidden h-full xl:block" />

      <div className="mt-16 xl:mt-0 xl:flex xl:justify-end">
        <div className="w-full max-w-[470px]">
          <p className="text-[9px] uppercase tracking-[0.36em] text-[#c45a78]">Fion yaklaşımı</p>
          <div className="mt-8">
            <p className="max-w-[400px] text-[clamp(1.2rem,1.5vw,1.6rem)] leading-[1.15] tracking-[-0.035em] text-white/48">Daha fazla içerik üretmek için değil,</p>
            <p className="mt-5 font-serif text-[clamp(3.1rem,4.5vw,5.3rem)] leading-[0.84] tracking-[-0.065em] text-[#f4efe9]">daha iyi<br />fikirler</p>
            <p className="mt-3 font-serif text-[clamp(2.2rem,3.1vw,3.7rem)] italic leading-[0.9] tracking-[-0.055em] text-white/55">üretmek için</p>
            <p className="mt-2 font-serif text-[clamp(3rem,4.4vw,5.2rem)] leading-[0.84] tracking-[-0.06em] text-[#c45a78]">buradayız.</p>
            <p className="mt-8 max-w-[360px] text-sm leading-7 text-white/42">Strateji, yaratıcı fikir ve doğru reklam yaklaşımı aynı hedefe çalıştığında marka yalnızca görünmez; hatırlanır.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
