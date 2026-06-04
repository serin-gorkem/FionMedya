const processSteps = [
  {
    step: "01",
    title: "Ön Görüşme",
    description:
      "İhtiyaçlarınızı, hedeflerinizi ve beklentilerinizi dinleriz.",
  },
  {
    step: "02",
    title: "İşletme Analizi",
    description:
      "Markanızı, rakiplerinizi ve hedef kitlenizi analiz ederiz.",
  },
  {
    step: "03",
    title: "Konsept & Strateji",
    description:
      "Markanıza özel kreatif konsept ve stratejiyi oluştururuz.",
  },
  {
    step: "04",
    title: "Üretim",
    description:
      "Çekim, tasarım ve içerik üretim sürecini gerçekleştiririz.",
  },
  {
    step: "05",
    title: "Revize",
    description:
      "Geri bildirimlerinizi alır ve en iyi sonucu elde edene kadar revize ederiz.",
  },
  {
    step: "06",
    title: "Teslim & Yayın",
    description:
      "İçerikleri yayına hazır şekilde teslim eder, yayına alırız.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-10 md:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/H_BG.png')] bg-cover bg-center bg-no-repeat opacity-10 md:bg-[url('/images/V_BG.png')]" />
      <div className="absolute inset-0 bg-[#030303]/92" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030303] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#030303]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-[var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--red)]">
            Çalışma Sürecimiz
          </p>

          <h2 className="mt-5 font-[var(--font-playfair)] text-4xl leading-tight tracking-[-0.03em] text-white md:text-6xl">
            Nasıl Çalışıyoruz?
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.018]">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="group grid grid-cols-[86px_1fr] gap-6 border-b border-white/10 px-5 py-8 transition duration-300 last:border-b-0 hover:bg-red-500/[0.035] md:grid-cols-[140px_1fr] md:px-8 md:py-10"
            >
              <span className="font-[var(--font-playfair)] text-6xl leading-none tracking-[-0.08em] text-[var(--red)]/70 transition duration-300 group-hover:text-[var(--red)] md:text-7xl">
                {item.step}
              </span>

              <div className="pt-1">
                <h3 className="font-[var(--font-inter)] text-sm font-bold uppercase tracking-[0.22em] text-white">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xl font-[var(--font-inter)] text-sm leading-7 text-zinc-500 md:text-base md:leading-8">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}