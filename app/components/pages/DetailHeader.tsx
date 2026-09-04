import Image from "next/image";
import Link from "next/link";

export default function DetailHeader() {
  return (
    <header
      className="
        relative
        z-30

        border-b
        border-white/10
      "
    >
      <div
        className="
          mx-auto

          flex
          h-[82px]
          max-w-[1500px]

          items-center
          justify-between

          px-6

          sm:px-10
        "
      >
        {/* =========================================
            LOGO
        ========================================== */}

        <Link
          href="/"
          aria-label="Fion Medya ana sayfa"
          className="
            inline-flex
            items-center

            transition-opacity
            duration-300

            hover:opacity-75
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
        </Link>

        {/* =========================================
            HOME
        ========================================== */}

        <Link
          href="/"
          className="
            group

            flex
            items-center
            gap-3

            text-[9px]
            uppercase
            tracking-[0.19em]

            text-white/40

            transition-colors
            duration-300

            hover:text-[#f4efe9]
          "
        >
          <span
            className="
              text-[#c45a78]

              transition-transform
              duration-300

              group-hover:-translate-x-1
            "
          >
            ←
          </span>

          Ana sayfa
        </Link>
      </div>
    </header>
  );
}