import Image from "next/image";

import SmoothAnchor from "@/app/components/navigation/SmoothAnchor";

export default function Header() {
  return (
    <header
      className="
        header-appear

        pointer-events-none

        fixed
        inset-x-0
        top-0
        z-50

        h-[76px]

        border-b
        border-white/[0.06]

        bg-black/65

        backdrop-blur-md
      "
    >
      <div
        className="
          mx-auto

          flex
          h-full
          max-w-[1500px]

          items-center

          px-6

          sm:px-10
        "
      >
        <SmoothAnchor
          href="#hero"
          aria-label="Fion Medya ana sayfa"
          duration={1350}
          intensity="soft"
          className="
            pointer-events-auto

            flex
            h-10

            items-center
          "
        >
          <Image
            src="/fion-logo.png"
            alt="Fion Medya"
            width={100}
            height={38}
            priority
            className="
              h-auto
              w-20

              brightness-0
              invert

              sm:w-[104px]
            "
          />
        </SmoothAnchor>
      </div>
    </header>
  );
}