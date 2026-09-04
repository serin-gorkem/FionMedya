import Link from "next/link";
import type { ReactNode } from "react";

type SectionOpeningProps = {
  eyebrow: string;
  titleId: string;
  title: ReactNode;

  detailHref: string;
  detailLabel: string;

  className?: string;
};

export default function SectionOpening({
  eyebrow,
  titleId,
  title,
  detailHref,
  detailLabel,
  className = "",
}: SectionOpeningProps) {
  const [primaryEyebrow, secondaryEyebrow] = eyebrow.split("·");

  return (
    <div
      className={`
        relative
        z-20

        mb-28

        xl:grid
        xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
        xl:items-stretch
        xl:gap-10

        ${className}
      `}
    >
      {/* =================================================
          LEFT
      ================================================== */}

      <div className="max-w-[570px]">
        <div
          className="
            flex
            items-center
            gap-5

            text-[9px]
            font-medium
            uppercase
            tracking-[0.3em]
          "
        >
          <span className="text-[#c45a78]">{primaryEyebrow}</span>

          <span
            aria-hidden="true"
            className="
              h-px
              w-11
              bg-[#591323]
            "
          />

          {secondaryEyebrow && (
            <span className="text-white/38">{secondaryEyebrow}</span>
          )}
        </div>

        <h2
          id={titleId}
          className="
            mt-8

            font-serif
            text-[clamp(3.7rem,6.4vw,7rem)]
            leading-[0.84]
            tracking-[-0.06em]

            text-[#f4efe9]
          "
        >
          {title}
        </h2>
      </div>

      {/* =================================================
          WINE LANE
      ================================================== */}

      <div aria-hidden="true" className="hidden xl:block" />

      {/* =================================================
          DETAIL CTA
          Desktop'ta sağ kolonun TAM ORTASI
      ================================================== */}

      <div
        className="
          mt-14

          flex

          xl:mt-0
          xl:items-center
          xl:justify-center
        "
      >
        <Link
          href={detailHref}
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
      SINGLE WINE SWEEP

      Bütün hover animasyonunun ana hareketi bu.
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

      Wine lane'den CTA'nın içine giriyormuş hissi.
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
            {detailLabel}
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
      </div>
    </div>
  );
}
