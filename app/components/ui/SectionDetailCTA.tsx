import Link from "next/link";

type SectionDetailCTAProps = {
  href: string;
  label: string;
};

export default function SectionDetailCTA({
  href,
  label,
}: SectionDetailCTAProps) {
  return (
    <Link
      href={href}
      className="
        group
        relative

        flex
        w-full
        max-w-[330px]

        items-center
        justify-between

        overflow-hidden

        border-y
        border-white/15

        px-5
        py-5

        text-[10px]
        font-medium
        uppercase
        tracking-[0.24em]

        text-white/65

        transition-colors
        duration-500

        hover:text-[#f4efe9]
      "
    >
      {/* =================================================
          WINE SWEEP
      ================================================== */}

      <span
        aria-hidden="true"
        className="
          absolute
          inset-0

          origin-left
          scale-x-0

          bg-[#591323]/28

          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:scale-x-100
        "
      />

      {/* =================================================
          TRAVELLING LINE
      ================================================== */}

      <span
        aria-hidden="true"
        className="
          absolute
          left-0
          top-1/2

          h-px
          w-full

          -translate-x-full
          -translate-y-1/2

          bg-gradient-to-r
          from-transparent
          via-[#c45a78]
          to-transparent

          opacity-0

          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:translate-x-full
          group-hover:opacity-100
        "
      />

      {/* =================================================
          LEFT MARK
      ================================================== */}

      <span
        aria-hidden="true"
        className="
          relative
          z-10

          mr-4

          h-1.5
          w-1.5

          shrink-0

          bg-[#c45a78]

          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:scale-[1.35]
        "
      />

      {/* =================================================
          LABEL
      ================================================== */}

      <span
        className="
          relative
          z-10

          flex-1

          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:translate-x-1.5
        "
      >
        {label}
      </span>

      {/* =================================================
          ARROW
      ================================================== */}

      <span
        aria-hidden="true"
        className="
          relative
          z-10

          ml-6

          flex
          size-8

          shrink-0

          items-center
          justify-center

          border-l
          border-white/15

          text-sm
          text-[#c45a78]

          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:border-[#c45a78]/40
          group-hover:translate-x-1
        "
      >
        ↗
      </span>

      {/* =================================================
          BOTTOM ACCENT
      ================================================== */}

      <span
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0

          h-px
          w-16

          bg-[#591323]

          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:w-full
          group-hover:bg-[#c45a78]/70
        "
      />
    </Link>
  );
}