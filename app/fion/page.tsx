import type { Metadata } from "next";
import DetailLavaBackground from "@/app/components/pages/DetailLavaBackground";
import DetailPageShell from "@/app/components/pages/DetailPageShell";

export const metadata: Metadata = {
  title: "Fion | Fion Medya",

  description:
    "Fion Medya'nın yaklaşımı, çalışma biçimi ve yaratıcı marka iletişimi anlayışı.",
};

export default function FionPage() {
  return (
    <DetailPageShell
      background={<DetailLavaBackground variant="fion" />}
      eyebrow="Fion / Biz"
      title={
        <>
          Biz
          <br />
          <em className="text-[#b9b1ad]">Fion&apos;uz.</em>
        </>
      }
      description="Markaların fark edilmesini ve doğru müşterilere ulaşmasını sağlayan yaratıcı işler üretiyoruz."
    >
      <div
        className="
          grid
          gap-14
          lg:grid-cols-2
          lg:gap-24
        "
      >
        <div>
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-[var(--wine-light)]
            "
          >
            Nasıl çalışıyoruz?
          </p>

          <div
            className="
              mt-7
              font-serif
              text-[clamp(2.6rem,4vw,5rem)]
              leading-[0.92]
              tracking-[-0.05em]
            "
          >
            <p>Markaya bakarız.</p>

            <p>Müşteriyi düşünürüz.</p>

            <p className="text-[#b9b1ad]">Sonra işi üretiriz.</p>
          </div>
        </div>

        <div
          className="
            border-t
            border-white/10
            pt-8
            lg:border-l
            lg:border-t-0
            lg:pl-10
            lg:pt-0
          "
        >
          <p
            className="
              max-w-[500px]
              font-serif
              text-[clamp(2rem,3vw,3.5rem)]
              leading-[1]
              tracking-[-0.045em]
            "
          >
            Daha fazla içerik üretmek için değil,
            <em className="text-[var(--wine-light)]"> daha iyi fikirler </em>
            üretmek için buradayız.
          </p>

          <p
            className="
              mt-8
              max-w-[460px]
              text-[14px]
              leading-7
              text-[var(--muted)]
            "
          >
            Kuşadası merkezli Fion Medya; sosyal medya, grafik tasarım, dijital
            reklam ve marka iletişimini aynı hedef etrafında buluşturur.
          </p>
        </div>
      </div>
    </DetailPageShell>
  );
}
