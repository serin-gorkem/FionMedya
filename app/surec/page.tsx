import { InnerPageShell } from "@/components/layout/InnerPageShell";

const steps = [
  {
    number: "01",
    title: "Ön Görüşme",
    description: "İhtiyaçlarınızı, hedeflerinizi ve beklentilerinizi dinleriz.",
  },
  {
    number: "02",
    title: "İşletme Analizi",
    description: "Markanızı, rakiplerinizi ve hedef kitlenizi analiz ederiz.",
  },
  {
    number: "03",
    title: "Konsept & Strateji",
    description: "Markanıza özel kreatif konsept ve stratejiyi oluştururuz.",
  },
  {
    number: "04",
    title: "Üretim",
    description: "Çekim, tasarım ve içerik üretim sürecini gerçekleştiririz.",
  },
  {
    number: "05",
    title: "Revize",
    description:
      "Geri bildirimlerinizi alır ve en iyi sonuca ulaşana kadar düzenleme yaparız.",
  },
  {
    number: "06",
    title: "Teslim & Yayın",
    description:
      "İçerikleri yayına hazır şekilde teslim eder, gerekli yönlendirmeleri yaparız.",
  },
];

export default function ProcessPage() {
  return (
    <InnerPageShell
      eyebrow="Süreç"
      title="Fikirden Yayına Kadar Net Bir Akış."
      description="Kreatif işler plansız ilerlediğinde sonuç dağılır. Bu yüzden her projede net, kontrollü ve uygulanabilir bir süreç izleriz."
      background="/images/home/BG_5_H.png"
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
        {steps.map((step) => (
          <article
            key={step.number}
            className="grid grid-cols-[86px_1fr] gap-6 border-b border-white/10 px-5 py-8 last:border-b-0 md:grid-cols-[140px_1fr] md:px-8 md:py-10"
          >
            <span className="font-[var(--font-playfair)] text-6xl leading-none tracking-[-0.08em] text-[var(--red-bright)] md:text-7xl">
              {step.number}
            </span>

            <div>
              <h2 className="font-[var(--font-inter)] text-sm font-bold uppercase tracking-[0.22em] text-white">
                {step.title}
              </h2>

              <p className="mt-3 max-w-xl font-[var(--font-inter)] text-sm leading-7 text-zinc-400">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </InnerPageShell>
  );
}