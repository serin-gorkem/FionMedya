import type { Metadata } from "next";

import Link from "next/link";

import DetailPageShell from "@/app/components/pages/DetailPageShell";

import ServiceDetailSection from "@/app/components/sections/services/detail/ServiceDetailSection";

import { serviceDetails } from "@/app/components/sections/services/detail/services-detail.data";
import DetailLavaBackground from "@/app/components/pages/DetailLavaBackground";
import { getWhatsAppUrl } from "@/app/config/contact";

export const metadata: Metadata = {
  title: "Hizmetler | Fion Medya",

  description:
    "Fion Medya sosyal medya yönetimi, grafik tasarım ve dijital reklam yönetimi hizmetleri. Strateji, kreatif üretim ve reklam süreçlerini aynı marka hedefi etrafında birleştiriyoruz.",
};

export default function HizmetlerPage() {
  return (
    <DetailPageShell
      background={<DetailLavaBackground variant="services" />}
      eyebrow="Fion / Hizmetler"
      title={
        <>
          Fikri
          <br />
          görünür,
          <br />
          <em className="text-white/55">hatırlanır</em>
          <br />
          ve etkili
          <br />
          hale getiriyoruz.
        </>
      }
      description="Sosyal medya, grafik tasarım ve reklamı ayrı ayrı teslim edilen işler olarak değil, markanın aynı dili konuşan parçaları olarak ele alıyoruz."
    >
      {/* SERVICES */}

      <div>
        {serviceDetails.map((service) => (
          <ServiceDetailSection key={service.number} service={service} />
        ))}
      </div>

      {/* FINAL CTA */}

      <section
        className="
          relative

          mt-12
          overflow-hidden

          rounded-3xl

          border
          border-[#7a2943]

          bg-wine

          px-7
          py-14

          sm:px-12
          sm:py-20

          lg:px-16
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            -right-20
            -top-28

            h-80
            w-80

            rounded-full

            bg-white/10

            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10

            grid
            gap-12

            lg:grid-cols-[minmax(0,1fr)_360px]
            lg:items-end
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/55
              "
            >
              Birlikte çalışalım
            </p>

            <h2
              className="
                mt-6
                max-w-4xl

                font-serif

                text-[clamp(3.5rem,6vw,7rem)]

                leading-[0.84]
                tracking-[-0.06em]

                text-ivory
              "
            >
              Markanı
              <br />
              <em className="text-white/65">konuşalım.</em>
            </h2>
          </div>

          <div>
            <p
              className="
                text-sm
                leading-7
                text-white/65
              "
            >
              Nereden başlaman gerektiğinden emin değilsen sorun değil. Markanı
              anlat, birlikte doğru yolu seçelim.
            </p>

            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              className="
                group

                mt-8

                flex
                items-center
                justify-between

                border-b
                border-white/40

                pb-4

                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]

                text-ivory

                transition-colors
                duration-300

                hover:border-white
              "
            >
              WhatsApp&apos;tan konuşalım
              <span
                className="
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
    </DetailPageShell>
  );
}
