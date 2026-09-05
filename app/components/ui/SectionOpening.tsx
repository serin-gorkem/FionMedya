import type { ReactNode } from "react";

import SectionDetailCTA from "@/app/components/ui/SectionDetailCTA";

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
  const [primaryEyebrow, secondaryEyebrow] =
    eyebrow.split("·");

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
          <span className="text-[#c45a78]">
            {primaryEyebrow}
          </span>

          <span
            aria-hidden="true"
            className="
              h-px
              w-11
              bg-[#591323]
            "
          />

          {secondaryEyebrow && (
            <span className="text-white/38">
              {secondaryEyebrow}
            </span>
          )}
        </div>

        <h2
          id={titleId}
          className="
            mt-8

            max-w-[620px]

            font-serif
            font-normal

            text-[clamp(2.15rem,4.25vw,5rem)]

            leading-[1.2]
            tracking-[-0.01em]

            text-[#f4efe9]
          "
        >
          {title}
        </h2>
      </div>

      {/* =================================================
          WINE LANE
      ================================================== */}

      <div
        aria-hidden="true"
        className="hidden xl:block"
      />

      {/* =================================================
          DETAIL CTA
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
        <SectionDetailCTA
          href={detailHref}
          label={detailLabel}
        />
      </div>
    </div>
  );
}