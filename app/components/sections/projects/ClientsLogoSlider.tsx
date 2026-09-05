"use client";

import Image from "next/image";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  clientLogos,
} from "./projects-proof.data";

type ClientsLogoSliderProps = {
  variant?: "home" | "detail";
};

export default function ClientsLogoSlider({
  variant = "home",
}: ClientsLogoSliderProps) {
  const reduceMotion =
    useReducedMotion();

  const isDetail =
    variant === "detail";

  /* =====================================================
     DETAIL / İŞLER

     Tek parça rail.
     Ortada boş lane YOK.
  ====================================================== */

  if (isDetail) {
    return (
      <div
        className="
          relative
          z-20

          flex
          h-[126px]
          w-full

          items-center

          overflow-hidden

          sm:h-[138px]
        "
      >
        <LogoRail
          direction="left"
          reduceMotion={Boolean(
            reduceMotion,
          )}
          compact
        />
      </div>
    );
  }

  /* =====================================================
     HOMEPAGE
  ====================================================== */

  return (
    <div
      className="
        relative
        z-20

        mt-20

        overflow-hidden

        py-10

        sm:mt-24
        sm:py-12
      "
    >
      {/* MOBILE */}

      <div className="xl:hidden">
        <LogoRail
          direction="left"
          reduceMotion={Boolean(
            reduceMotion,
          )}
          compact={false}
        />
      </div>

      {/* DESKTOP */}

      <div
        className="
          hidden

          xl:grid
          xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
        "
      >
        {/* LEFT */}

        <div className="min-w-0 overflow-hidden">
          <LogoRail
            direction="left"
            reduceMotion={Boolean(
              reduceMotion,
            )}
            compact={false}
          />
        </div>

        {/* WINE LANE */}

        <div
          aria-hidden="true"
          className="
            border-x
            border-[#35101d]
          "
        />

        {/* RIGHT */}

        <div className="min-w-0 overflow-hidden">
          <LogoRail
            direction="right"
            reduceMotion={Boolean(
              reduceMotion,
            )}
            compact={false}
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RAIL
========================================================= */

type LogoRailProps = {
  direction:
    | "left"
    | "right";

  reduceMotion: boolean;

  compact: boolean;
};

function LogoRail({
  direction,
  reduceMotion,
  compact,
}: LogoRailProps) {
  const isLeft =
    direction === "left";

  return (
    <motion.div
      className="
        flex
        w-max
        shrink-0
        items-center
      "
      animate={
        reduceMotion
          ? undefined
          : {
              x: isLeft
                ? [
                    "0%",
                    "-50%",
                  ]
                : [
                    "-50%",
                    "0%",
                  ],
            }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              duration: compact
                ? 42
                : 38,
              repeat: Infinity,
              ease: "linear",
            }
      }
    >
      <LogoGroup
        compact={compact}
      />

      <LogoGroup
        compact={compact}
      />
    </motion.div>
  );
}

/* =========================================================
   GROUP
========================================================= */

function LogoGroup({
  compact,
}: {
  compact: boolean;
}) {
  return (
    <div
      className={`
        flex
        shrink-0
        items-center

        ${
          compact
            ? "gap-12 pr-12"
            : "gap-10 pr-10"
        }
      `}
    >
      {clientLogos.map(
        (client) => {
          const isLightLogo =
            client.sliderTone ===
            "light";

          return (
            <div
              key={client.name}
              className={`
                group/logo

                flex
                shrink-0

                items-center
                justify-center

                ${
                  compact
                    ? "h-[92px] w-[190px] sm:w-[220px]"
                    : "h-20 w-44"
                }
              `}
            >
              <div
                className="
                  flex
                  h-[72%]
                  w-[84%]

                  items-center
                  justify-center

                  transition-transform
                  duration-500

                  group-hover/logo:scale-[1.04]
                "
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={280}
                  height={150}
                  style={{
                    transform: `scale(${
                      client.sliderScale ??
                      1
                    })`,
                  }}
                  className={`
                    max-h-full
                    max-w-full

                    select-none
                    object-contain

                    transition-[filter,opacity]
                    duration-500

                    ${
                      isLightLogo
                        ? `
                          brightness-0
                          invert
                          opacity-45

                          group-hover/logo:opacity-100
                        `
                        : `
                          grayscale
                          opacity-45

                          group-hover/logo:grayscale-0
                          group-hover/logo:opacity-100
                        `
                    }
                  `}
                />
              </div>
            </div>
          );
        },
      )}
    </div>
  );
}