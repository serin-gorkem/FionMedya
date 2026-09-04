import type { Metadata } from "next";

import DetailContactCTA from "@/app/components/pages/DetailContactCTA";
import DetailLavaBackground from "@/app/components/pages/DetailLavaBackground";
import DetailPageShell from "@/app/components/pages/DetailPageShell";

import ServiceDetailSection from "@/app/components/sections/services/detail/ServiceDetailSection";

import { serviceDetails } from "@/app/components/sections/services/detail/services-detail.data";

export const metadata: Metadata = {
  title: "Hizmetler",

  description:
    "Fion Medya; sosyal medya yönetimi, grafik tasarım, reklam yönetimi, kurumsal kimlik ve marka stratejisi alanlarında Kuşadası, Aydın ve İzmir'deki markalarla çalışır.",
};

const additionalServices = [
  {
    number: "04",
    title: "Kurumsal Kimlik",
    description:
      "Markanın yalnızca logosunu değil, her temas noktasında tanınmasını sağlayan görsel sistemi oluşturuyoruz.",
    scope: [
      "Görsel sistem",
      "Renk & tipografi",
      "Marka materyalleri",
      "Dijital uygulamalar",
    ],
  },

  {
    number: "05",
    title: "Marka Stratejisi",
    description:
      "Markanın ne söyleyeceğini, kime söyleyeceğini ve nasıl hatırlanacağını netleştiriyoruz.",
    scope: [
      "Konumlandırma",
      "İletişim dili",
      "Hedef kitle",
      "Kreatif yön",
    ],
  },
] as const;

const supportServices = [
  "Google çalışmaları",
  "Web sitesi tasarımı",
  "Geleneksel medya",
  "Video prodüksiyon",
  "QR menü tasarımı",
  "AI destekli kreatif üretim",
] as const;

export default function HizmetlerPage() {
  return (
    <DetailPageShell
      background={
        <DetailLavaBackground
          variant="services"
        />
      }
      eyebrow="Fion / Hizmetler"
      title={
        <>
          Fikri
          <br />
          görünür,
          <br />

          <em className="text-white/55">
            hatırlanır
          </em>

          <br />
          ve etkili
          <br />
          hale getiriyoruz.
        </>
      }
      description="Sosyal medya, tasarım ve reklamı ayrı ayrı teslim edilen işler olarak değil, markanın aynı hedefe çalışan parçaları olarak ele alıyoruz."
    >
      {/* =================================================
          CORE SERVICES
      ================================================== */}

      <div>
        {serviceDetails.map(
          (service) => (
            <ServiceDetailSection
              key={service.number}
              service={service}
            />
          ),
        )}
      </div>

      {/* =================================================
          BRAND SERVICES
      ================================================== */}

      <section
        className="
          border-t
          border-white/10

          py-20

          sm:py-28
        "
      >
        <div
          className="
            grid
            gap-10

            lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]
            lg:gap-16
          "
        >
          {/* INTRO */}

          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]

                text-wine-light
              "
            >
              Markanın Temeli
            </p>

            <h2
              className="
                mt-6
                max-w-[600px]

                font-serif

                text-[clamp(3.4rem,6vw,7rem)]

                leading-[0.84]
                tracking-[-0.06em]

                text-ivory
              "
            >
              Görselden
              <br />

              <em className="text-white/55">
                önce fikir.
              </em>
            </h2>

            <p
              className="
                mt-8
                max-w-[480px]

                text-sm
                leading-7

                text-white/55
              "
            >
              Güçlü bir iletişimin yalnızca içerikle başlamadığını biliyoruz.
              Markanın kim olduğunu ve nasıl konuşacağını da birlikte
              şekillendiriyoruz.
            </p>
          </div>

          {/* SERVICES */}

          <div
            className="
              border-t
              border-white/10
            "
          >
            {additionalServices.map(
              (service) => (
                <article
                  key={service.number}
                  className="
                    grid
                    gap-8

                    border-b
                    border-white/10

                    py-10

                    sm:grid-cols-[70px_minmax(0,1fr)]
                    sm:py-12
                  "
                >
                  <span
                    className="
                      font-serif
                      text-3xl

                      text-white/25
                    "
                  >
                    {service.number}
                  </span>

                  <div>
                    <h3
                      className="
                        font-serif

                        text-[clamp(2.2rem,4vw,4.2rem)]

                        leading-[0.9]
                        tracking-[-0.05em]

                        text-ivory
                      "
                    >
                      {service.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-[600px]

                        text-sm
                        leading-7

                        text-white/55
                      "
                    >
                      {service.description}
                    </p>

                    <div
                      className="
                        mt-7

                        flex
                        flex-wrap
                        gap-x-6
                        gap-y-3
                      "
                    >
                      {service.scope.map(
                        (item) => (
                          <span
                            key={item}
                            className="
                              text-[9px]
                              uppercase
                              tracking-[0.18em]

                              text-white/38
                            "
                          >
                            {item}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =================================================
          SUPPORT SERVICES
      ================================================== */}

      <section
        className="
          border-t
          border-white/10

          py-16

          sm:py-20
        "
      >
        <div
          className="
            grid
            gap-10

            lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]
            lg:gap-16
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]

                text-wine-light
              "
            >
              Destek Hizmetler
            </p>

            <h2
              className="
                mt-5

                font-serif

                text-[clamp(2.8rem,5vw,5.2rem)]

                leading-[0.88]
                tracking-[-0.055em]

                text-ivory
              "
            >
              Gerektiğinde
              <br />

              <em className="text-white/50">
                alanı genişletiyoruz.
              </em>
            </h2>
          </div>

          <div
            className="
              grid

              border-t
              border-white/10

              sm:grid-cols-2
            "
          >
            {supportServices.map(
              (service, index) => (
                <div
                  key={service}
                  className="
                    flex
                    min-h-28
                    items-end
                    justify-between

                    border-b
                    border-white/10

                    py-6

                    sm:px-6
                    sm:odd:border-r
                  "
                >
                  <span
                    className="
                      text-sm

                      text-ivory
                    "
                  >
                    {service}
                  </span>

                  <span
                    className="
                      text-[8px]
                      tracking-[0.22em]

                      text-white/25
                    "
                  >
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      "0",
                    )}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <DetailContactCTA />
    </DetailPageShell>
  );
}