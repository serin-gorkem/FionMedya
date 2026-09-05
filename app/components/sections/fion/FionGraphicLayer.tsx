"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

type FionGraphicLayerProps = {
  variant:
    | "manifesto"
    | "not-us";

  index?: number;

  className?: string;
};

export default function FionGraphicLayer({
  variant,
  index = 0,
  className = "",
}: FionGraphicLayerProps) {
  const reduceMotion =
    useReducedMotion();

  if (
    variant ===
    "not-us"
  ) {
    return (
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          inset-0
          overflow-hidden

          ${className}
        `}
      >
        {/* =====================================
            GIANT × COLUMN
        ====================================== */}

        <div
          className="
            absolute
            -left-[0.08em]
            top-[5%]

            select-none

            font-sans
            text-[clamp(12rem,27vw,30rem)]
            font-light

            leading-[0.62]

            text-white/[0.018]
          "
        >
          ×
          <br />
          ×
          <br />
          ×
        </div>

        {/* =====================================
            LARGE O
        ====================================== */}

        <motion.div
          className="
            absolute
            -right-[14vw]
            top-[9%]

            aspect-square
            w-[clamp(320px,50vw,760px)]

            rounded-full

            border
            border-[#c45a78]/[0.08]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  rotate: [
                    0,
                    360,
                  ],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 70,
                  repeat:
                    Infinity,
                  ease:
                    "linear",
                }
          }
        >
          <span
            className="
              absolute
              left-1/2
              top-[-4px]

              size-2

              -translate-x-1/2
              rotate-45

              bg-[#c45a78]/35
            "
          />

          <span
            className="
              absolute
              bottom-[14%]
              left-[6%]

              text-[6px]
              uppercase
              tracking-[0.24em]

              text-[#c45a78]/30
            "
          >
            FION / 02
          </span>
        </motion.div>

        {/* =====================================
            WINE TRAJECTORY
        ====================================== */}

        <svg
          viewBox="0 0 1200 1000"
          preserveAspectRatio="none"
          className="
            absolute
            inset-0

            h-full
            w-full

            opacity-60
          "
        >
          <motion.path
            d="
              M 620 -30
              C 690 170, 520 250, 625 390
              C 750 560, 615 700, 690 1040
            "
            fill="none"
            stroke="#c45a78"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            initial={
              reduceMotion
                ? {
                    pathLength:
                      1,
                    opacity:
                      0.2,
                  }
                : {
                    pathLength:
                      0,
                    opacity:
                      0,
                  }
            }
            whileInView={{
              pathLength:
                1,
              opacity:
                0.24,
            }}
            viewport={{
              once: true,
              amount:
                0.15,
            }}
            transition={{
              duration:
                2.4,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          />

          <motion.circle
            cx="625"
            cy="390"
            r="4"
            fill="#c45a78"
            initial={
              reduceMotion
                ? false
                : {
                    opacity:
                      0,
                    scale:
                      0,
                  }
            }
            whileInView={{
              opacity:
                0.5,
              scale:
                1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay:
                1.1,
              duration:
                0.5,
            }}
          />
        </svg>
      </div>
    );
  }

  /* =====================================================
     MANIFESTO VARIANT
  ====================================================== */

  const even =
    index % 2 === 0;

  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none
        absolute
        inset-0
        overflow-hidden

        ${className}
      `}
    >
      {/* =====================================
          OUTLINE O
      ====================================== */}

      <motion.div
        className={`
          absolute

          top-1/2

          aspect-square
          w-[clamp(300px,47vw,720px)]

          -translate-y-1/2

          rounded-full

          border
          border-white/[0.055]

          ${
            even
              ? "-right-[14vw]"
              : "-left-[15vw]"
          }
        `}
        animate={
          reduceMotion
            ? undefined
            : {
                rotate: even
                  ? [
                      0,
                      360,
                    ]
                  : [
                      360,
                      0,
                    ],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration:
                  80 +
                  index *
                    10,

                repeat:
                  Infinity,

                ease:
                  "linear",
              }
        }
      >
        {/* orbit mark */}

        <span
          className={`
            absolute

            size-2

            rotate-45

            bg-[#c45a78]/40

            ${
              even
                ? `
                  left-[16%]
                  top-[8%]
                `
                : `
                  bottom-[8%]
                  right-[16%]
                `
            }
          `}
        />

        {/* inner ring */}

        <div
          className="
            absolute
            inset-[12%]

            rounded-full

            border
            border-[#c45a78]/[0.055]
          "
        />
      </motion.div>

      {/* =====================================
          CROPPED LETTER
      ====================================== */}

      <motion.span
        initial={
          reduceMotion
            ? false
            : {
                opacity:
                  0,
                y:
                  50,
              }
        }
        whileInView={{
          opacity:
            1,
          y:
            0,
        }}
        viewport={{
          once: true,
          amount:
            0.2,
        }}
        transition={{
          duration:
            1.2,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        className={`
          absolute

          bottom-[-0.12em]

          select-none

          font-serif
          text-[clamp(12rem,26vw,28rem)]

          leading-none
          tracking-[-0.12em]

          text-white/[0.018]

          ${
            even
              ? "left-[-0.04em]"
              : "right-[-0.04em]"
          }
        `}
      >
        {
          [
            "F",
            "I",
            "O",
            "N",
          ][
            index %
              4
          ]
        }
      </motion.span>

      {/* =====================================
          TRAJECTORY LINE
      ====================================== */}

      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        className="
          absolute
          inset-0

          h-full
          w-full
        "
      >
        <motion.path
          d={
            even
              ? `
                M -40 590
                C 220 560, 340 650, 530 525
                C 700 415, 770 330, 1240 350
              `
              : `
                M -40 260
                C 260 300, 390 170, 600 300
                C 760 400, 910 470, 1240 420
              `
          }
          fill="none"
          stroke="#c45a78"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          initial={
            reduceMotion
              ? {
                  pathLength:
                    1,
                  opacity:
                    0.15,
                }
              : {
                  pathLength:
                    0,
                  opacity:
                    0,
                }
          }
          whileInView={{
            pathLength:
              1,
            opacity:
              0.18,
          }}
          viewport={{
            once: true,
            amount:
              0.2,
          }}
          transition={{
            duration:
              2,
            delay:
              0.15,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        />
      </svg>

      {/* =====================================
          MICRO GRAPHIC CODE
      ====================================== */}

      <div
        className={`
          absolute

          top-8

          hidden
          items-center
          gap-3

          lg:flex

          ${
            even
              ? "right-12"
              : "left-12"
          }
        `}
      >
        <span
          className="
            h-px
            w-8

            bg-[#c45a78]/20
          "
        />

        <span
          className="
            text-[6px]
            uppercase
            tracking-[0.24em]

            text-white/20
          "
        >
          P.O.V /
          0
          {index +
            1}
        </span>
      </div>
    </div>
  );
}