import Link from "next/link";

import SectionContainer from "@/app/components/ui/SectionContainer";
import WineLane from "@/app/components/ui/WineLane";
import SectionEyebrow from "@/app/components/ui/SectionEyebrow";

import AboutIntro from "./AboutIntro";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="
        relative
        overflow-hidden

        border-t
        border-white/10

        bg-black
      "
    >
      <WineLane />

      <SectionContainer>
        <AboutIntro />

        {/* =================================================
            SUMMARY / CTA ROW
        ================================================== */}

        <div
          className="
            mt-20

            border-t
            border-white/10

            pt-10

            xl:grid
            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:items-end
            xl:gap-10
          "
        >
          {/* =============================================
              LEFT
          ============================================== */}

          <div>
            <SectionEyebrow>Ne için buradayız?</SectionEyebrow>

            <p
              className="
                mt-5
                max-w-[470px]

                font-serif

                text-[clamp(2.4rem,3.4vw,4.2rem)]

                leading-[0.92]
                tracking-[-0.05em]

                text-[#f4efe9]
              "
            >
              Görünmek için değil.
              <br />
              <em className="text-white/50">Hatırlanmak için.</em>
            </p>
          </div>

          {/* =============================================
              EMPTY WINE LANE
          ============================================== */}

          <div
            aria-hidden="true"
            className="
              hidden
              xl:block
            "
          />

          {/* =============================================
              CTA CELL
          ============================================== */}

          <div
            className="
              mt-12

              xl:mt-0
              xl:flex
              xl:justify-end
            "
          >
            <div
              className="
                w-full
                max-w-[420px]
              "
            >
              {/* FION */}

              <Link
                href="/fion"
                className="
                  group

                  flex
                  w-full

                  items-center
                  justify-between
                  gap-6

                  border-b
                  border-white/15

                  py-5

                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]

                  text-[var(--ivory)]

                  transition-colors
                  duration-300

                  hover:border-[var(--wine-light)]
                "
              >
                <span>Fion&apos;u daha yakından tanı</span>

                <span
                  className="
                    text-[var(--wine-light)]

                    transition-transform
                    duration-300

                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
