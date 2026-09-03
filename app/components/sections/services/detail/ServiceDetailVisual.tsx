import ServiceMockup from "../mockups/ServiceMockup";

import type { ServiceMockupType } from "../services.types";

type ServiceDetailVisualProps = {
  type: ServiceMockupType;
  number: string;
};

export default function ServiceDetailVisual({
  type,
  number,
}: ServiceDetailVisualProps) {
  return (
    <div
      className="
        group/visual
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/15

        bg-black/35

        backdrop-blur-xl
      "
    >
      {/* WINE LIGHT */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          h-80
          w-80

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-wine/35

          blur-3xl

          sm:h-96
          sm:w-96
        "
      />

      {/* HUGE NUMBER */}

      <span
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          -right-4
          -top-10

          font-serif
          text-[12rem]
          leading-none
          tracking-[-0.08em]

          text-white/[0.025]

          sm:text-[16rem]
        "
      >
        {number}
      </span>

      {/* TOP META */}

      <div
        className="
          relative
          z-10

          flex
          items-center
          justify-between

          border-b
          border-white/10

          px-6
          py-5

          sm:px-8
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.28em]
            text-wine-light
          "
        >
          Fion / Studio
        </span>

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.24em]
            text-white/30
          "
        >
          Service {number}
        </span>
      </div>

      {/* MAIN MOCKUP */}

      <div
        className="
          relative
          z-10

          flex
          items-center
          justify-center

          px-6
          py-16

          sm:px-10
          sm:py-20

          lg:py-24
        "
      >
        <div
          className={type === "social" ? "w-full max-w-lg" : "w-full max-w-3xl"}
        >
          <ServiceMockup type={type} />
        </div>
      </div>

      {/* BOTTOM VISUAL LANGUAGE */}

      <div
        className="
          relative
          z-10

          grid

          border-t
          border-white/10

          sm:grid-cols-3
        "
      >
        {type === "social" && (
          <>
            <VisualTile label="Content" value="Feed" />

            <VisualTile label="Format" value="Story" />

            <VisualTile label="Focus" value="Attention" />
          </>
        )}

        {type === "design" && (
          <>
            <VisualTile label="System" value="Identity" />

            <VisualTile label="Type" value="Aa" />

            <VisualTile label="Output" value="Digital" />
          </>
        )}

        {type === "ads" && (
          <>
            <VisualTile label="Target" value="Audience" />

            <VisualTile label="Creative" value="Test" />

            <VisualTile label="Goal" value="Result" />
          </>
        )}
      </div>
    </div>
  );
}

function VisualTile({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="
        flex
        min-h-28
        flex-col
        justify-between

        border-b
        border-white/10

        p-6

        last:border-b-0

        sm:border-b-0
        sm:border-r
        sm:last:border-r-0
      "
    >
      <span
        className="
          text-[8px]
          uppercase
          tracking-[0.24em]
          text-white/30
        "
      >
        {label}
      </span>

      <span
        className="
          font-serif
          text-2xl
          tracking-[-0.04em]
          text-ivory
        "
      >
        {value}
      </span>
    </div>
  );
}
