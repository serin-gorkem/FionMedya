import Image from "next/image";
import Link from "next/link";

export default function BlogJournalHeader() {
  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50

        border-b
        border-white/10

        bg-[#171214]/88
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[76px]
          max-w-[1500px]
          items-center
          justify-between

          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* =========================================
            LOGO
        ========================================== */}

        <Link
          href="/"
          aria-label="Fion Medya ana sayfa"
          className="
            group
            flex
            items-center
            gap-5
          "
        >
          <div
            className="
              relative
              h-9
              w-[118px]

              sm:h-10
              sm:w-[132px]
            "
          >
            <Image
              src="/fion-logo.png"
              alt="Fion Medya"
              fill
              priority
              sizes="132px"
              className="
                object-contain
                object-left

                opacity-95

                transition-opacity
                duration-300

                group-hover:opacity-100
              "
            />
          </div>

          <span
            aria-hidden="true"
            className="
              hidden
              h-px
              w-8
              bg-[#7c2a43]

              sm:block
            "
          />
        </Link>

        {/* =========================================
            RIGHT
        ========================================== */}

        <div
          className="
            flex
            items-center
            gap-6
          "
        >
          <span
            className="
              flex
              items-center
              gap-3

              text-[7px]
              uppercase
              tracking-[0.27em]

              text-[#d36b88]
            "
          >
            <span
              aria-hidden="true"
              className="
                size-1.5
                rotate-45
                bg-[#d36b88]
              "
            />

            Fion Blog
          </span>

          <Link
            href="/"
            className="
              hidden

              text-[7px]
              uppercase
              tracking-[0.22em]

              text-white/45

              transition-colors
              duration-300

              hover:text-white

              sm:block
            "
          >
            Ana sayfa ↗
          </Link>
        </div>
      </div>
    </header>
  );
}