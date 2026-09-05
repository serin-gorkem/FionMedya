import type { Metadata } from "next";

import DetailPageShell from "@/app/components/pages/DetailPageShell";
import DetailLavaBackground from "@/app/components/pages/DetailLavaBackground";

import ClientsLogoSlider from "@/app/components/sections/projects/ClientsLogoSlider";
import ClientWorkGallery from "@/app/components/sections/projects/detail/ClientWorkGallery";
import DetailContactCTA from "../components/pages/DetailContactCTA";
import { contactConfig } from "@/app/config/contact";
export const metadata: Metadata = {
  title: "İşler",

  description:
    "Fion Medya'nın Kuşadası, Aydın ve İzmir'deki markalar için ürettiği sosyal medya, reklam, tasarım ve dijital iletişim çalışmalarından seçkiler.",

  alternates: {
    canonical: "/isler",
  },
};

export default function IslerPage() {
  return (
    <DetailPageShell
      background={<DetailLavaBackground variant="projects" />}
      eyebrow="Fion / İşler"
      title={<>Yarattığımız ilhamı, işlerimizle görünür kılıyoruz.</>}
      description="Markalara değer katan projelerimiz."
    >
      <ClientsLogoSlider variant="detail" />

      <ClientWorkGallery />
      {/* =================================================
    INSTAGRAM CTA
================================================== */}

      <section
        className="
    relative
    left-1/2

    w-screen
    -translate-x-1/2

    border-t
    border-white/10
  "
      >
        <div
          className="
      mx-auto
      grid
      max-w-[1500px]

      gap-10

      px-5
      py-16

      sm:px-8
      sm:py-20

      lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.55fr)]
      lg:items-end
      lg:px-12
      lg:py-24
    "
        >
          <div>
            <p
              className="
          text-[8px]
          uppercase
          tracking-[0.3em]

          text-[#c45a78]
        "
            >
              İşler burada bitmiyor
            </p>

            <h2
              className="
          mt-5
          max-w-[850px]

          font-serif

          text-[clamp(3.5rem,7vw,7.5rem)]

          leading-[0.84]
          tracking-[-0.06em]

          text-[#f4efe9]
        "
            >
              Günlük üretimi
              <br />
              <em className="text-white/45">Instagram&apos;da gör.</em>
            </h2>
          </div>

          <div
            className="
        border-t
        border-white/10

        pt-6

        lg:border-l
        lg:border-t-0
        lg:pl-10
        lg:pt-0
      "
          >
            <p
              className="
          max-w-[420px]

          text-sm
          leading-7

          text-white/45
        "
            >
              Yeni işler, kreatifler ve Fion&apos;dan günlük üretimler.
            </p>

            <a
              href={contactConfig.socials[0].href}
              target="_blank"
              rel="noreferrer"
              className="
          group

          mt-8

          flex
          items-center
          justify-between

          border-y
          border-white/12

          py-5

          text-[9px]
          font-medium
          uppercase
          tracking-[0.24em]

          text-white/65

          transition-colors
          duration-300

          hover:text-[#f4efe9]
        "
            >
              <span>Instagram&apos;a geç</span>

              <span
                className="
            text-[#c45a78]

            transition-transform
            duration-300

            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>
      <DetailContactCTA />
    </DetailPageShell>
  );
}
