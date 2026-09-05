import ServiceMockup from "../mockups/ServiceMockup";

import type { ServiceMockupType } from "../services.types";

type ServiceDetailVisualProps = {
  type: ServiceMockupType;
};

export default function ServiceDetailVisual({
  type,
}: ServiceDetailVisualProps) {
  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[500px]

        lg:ml-auto
        lg:mr-0
      "
    >
      {/* =================================================
          OUTER AMBIENT

          Görsel kutusunun sayfadan ayrı görünmesini engeller.
      ================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2

          h-[82%]
          w-[82%]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#591323]/22

          blur-[100px]
        "
      />

      {/* =================================================
          VISUAL SURFACE
      ================================================== */}

      <div
        className="
          group/visual
          relative

          aspect-square
          w-full

          overflow-hidden

          rounded-[24px]

          border
          border-white/[0.06]

          bg-[#0b0306]

          shadow-[0_30px_100px_rgba(0,0,0,0.22)]
        "
      >
        {/* =============================================
            BACKGROUND WASH
        ============================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0

            bg-[radial-gradient(circle_at_50%_45%,rgba(105,20,45,0.32),transparent_58%)]
          "
        />

        {/* =============================================
            IMAGE
        ============================================== */}

        <div
          className="
            relative
            z-10

            flex
            h-full
            w-full

            items-center
            justify-center

            p-3

            sm:p-4
          "
        >
          <div
            className="
              w-full
              max-w-[440px]
            "
          >
            <ServiceMockup
              type={type}
            />
          </div>
        </div>

        {/* =============================================
            EDGE BLEND
        ============================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
          "
          style={{
            background: `
              linear-gradient(to top, #0b0306 0%, transparent 16%),
              linear-gradient(to bottom, #0b0306 0%, transparent 14%),
              linear-gradient(to left, #0b0306 0%, transparent 12%),
              linear-gradient(to right, #0b0306 0%, transparent 12%)
            `,
          }}
        />

        {/* =============================================
            SOFT BOTTOM BLEND
        ============================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-[8%]
            bottom-[-10%]
            z-30

            h-24

            bg-[#591323]/20

            blur-[55px]
          "
        />
      </div>
    </div>
  );
}