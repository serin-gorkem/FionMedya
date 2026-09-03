import SectionContainer from "@/app/components/ui/SectionContainer";
import WineLane from "@/app/components/ui/WineLane";
import AboutIntro from "./AboutIntro";
import AboutManifesto from "./AboutManifesto";
import AboutSummary from "./AboutSummary";
import Link from "next/link";
export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden border-t border-white/10 bg-black"
    >
      <WineLane />
      <SectionContainer>
        <AboutIntro />
        <AboutManifesto />
        <div
          className="
    mt-16
    border-t
    border-white/10
    pt-8

    xl:grid
    xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
    xl:gap-10
  "
        >
          <div>
            <p
              className="
        max-w-[360px]

        text-[12px]
        leading-6
        text-[var(--muted)]
      "
            >
              Nasıl düşündüğümüzü ve işleri nasıl ele aldığımızı daha yakından
              gör.
            </p>
          </div>

          <div aria-hidden="true" className="hidden xl:block" />

          <div
            className="
      mt-8
      xl:mt-0
      xl:flex
      xl:justify-end
    "
          >
            <Link
              href="/fion"
              className="
        group

        flex
        w-full
        max-w-[390px]

        items-center
        justify-between

        border-b
        border-white/20

        pb-4

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
              Fion&apos;u daha yakından tanı
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
        <AboutSummary />
      </SectionContainer>
    </section>
  );
}
