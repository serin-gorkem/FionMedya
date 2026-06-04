import { InnerPageShell } from "@/components/layout/InnerPageShell";

export default function AboutPage() {
  return (
    <InnerPageShell
      eyebrow="Hakkımızda"
      title="Fion Medya Hakkında."
      description="Fion Medya, yerel işletmeler için video odaklı dijital içerik, reklam ve web çözümleri üreten yaratıcı bir medya stüdyosudur."
      background="/images/home/BG_3_H.png"
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
          <h2 className="font-[var(--font-playfair)] text-4xl tracking-[-0.03em] text-white">
            Farkımız, Bakış Açımızda.
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
          <p className="font-[var(--font-inter)] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            İşletmelerin dijitalde daha güvenilir, profesyonel ve tercih
            edilebilir görünmesini sağlamak için çalışıyoruz. Sadece içerik
            üretmiyor; markanın hedef kitlesi tarafından nasıl algılandığını da
            tasarlıyoruz.
          </p>

          <p className="mt-6 font-[var(--font-inter)] text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
            Video prodüksiyon, sosyal medya içerikleri, reklam kreatifleri ve
            web tasarım çözümlerini tek bir görsel dilde birleştiriyoruz.
          </p>
        </div>
      </div>
    </InnerPageShell>
  );
}