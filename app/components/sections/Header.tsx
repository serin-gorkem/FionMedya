import Image from "next/image";
import Link from "next/link";

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
      <Link
        href="#hero"
        aria-label="Fion Medya ana sayfa"
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
      </Link>
    </header>
  );
}
