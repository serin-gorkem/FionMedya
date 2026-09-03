import Image from "next/image";

import SmoothAnchor from "@/app/components/navigation/SmoothAnchor";

export default function Header() {
  return (
    <header
      className="
        header-appear
        pointer-events-none
        fixed left-6 top-6 z-20
        sm:left-10 sm:top-8
      "
    >
      <SmoothAnchor
        href="#hero"
        aria-label="Fion Medya ana sayfa"
        duration={1350}
        intensity="soft"
        className="pointer-events-auto flex h-10 items-center"
      >
        <Image
          src="/fion-logo.png"
          alt="Fion Medya"
          width={100}
          height={38}
          priority
          className="h-auto w-20 brightness-0 invert sm:w-[104px]"
        />
      </SmoothAnchor>
    </header>
  );
}
