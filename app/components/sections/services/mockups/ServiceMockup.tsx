import Image from "next/image";

import type { ServiceMockupType } from "../services.types";

type ServiceMockupProps = {
  type: ServiceMockupType;
};

const mockups: Record<
  ServiceMockupType,
  {
    src: string;
    alt: string;
  }
> = {
  social: {
    src: "/services/mockups/social-media.png",
    alt: "Fion Medya sosyal medya yönetimi Instagram görünümü",
  },

  design: {
    src: "/services/mockups/graphic-design.png",
    alt: "Fion Medya grafik tasarım ve Photoshop çalışma alanı",
  },

  ads: {
    src: "/services/mockups/advertising.png",
    alt: "Fion Medya reklam yönetimi, prodüksiyon ve marka büyüme çalışmaları",
  },
};

export default function ServiceMockup({ type }: ServiceMockupProps) {
  const mockup = mockups[type];

  return (
    <div
      className="
        group/mockup
        relative
        mx-auto
        aspect-square
        w-full
        max-w-90
        overflow-hidden

        sm:max-w-[430px]
        xl:max-w-125
      "
    >
      {/* BACK AMBIENT GLOW */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-[14%]
          rounded-full
          bg-[#591323]/15
          blur-[75px]
        "
      />

      {/* IMAGE HOLDER */}

      <div
        className="
          relative
          z-10
          h-full
          w-full

          [mask-image:radial-gradient(circle_at_center,black_58%,rgba(0,0,0,0.9)_72%,transparent_100%)]
          [-webkit-mask-image:radial-gradient(circle_at_center,black_58%,rgba(0,0,0,0.9)_72%,transparent_100%)]
        "
      >
        <Image
          src={mockup.src}
          alt={mockup.alt}
          fill
          sizes="
            (max-width: 640px) 360px,
            (max-width: 1280px) 430px,
            500px
          "
          className="
            object-contain

            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            lg:group-hover/mockup:scale-[1.015]
          "
        />
      </div>

      {/* EDGE BLEND OVERLAY */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          blur-2xl
          opacity-90
        "
        style={{
          background: `
            radial-gradient(circle at center, transparent 48%, rgba(0,0,0,0.18) 68%, rgba(0,0,0,0.56) 100%),
            linear-gradient(to top, rgba(0,0,0,0.72), transparent 22%),
            linear-gradient(to bottom, rgba(0,0,0,0.72), transparent 18%),
            linear-gradient(to left, rgba(0,0,0,0.56), transparent 18%),
            linear-gradient(to right, rgba(0,0,0,0.56), transparent 18%)
          `,
        }}
      />

      {/* EXTRA BURGUNDY BLEND */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-30
          opacity-50
          mix-blend-screen
        "
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(137, 29, 61, 0.14), transparent 60%)
          `,
        }}
      />
    </div>
  );
}
