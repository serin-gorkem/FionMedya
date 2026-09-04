"use client";

import useMobilePerformanceMode from "@/app/hooks/useMobilePerformanceMode";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

type LavaVariant =
  | "services"
  | "projects"
  | "fion";

type DetailLavaBackgroundProps = {
  variant: LavaVariant;
};

type LavaBlob = {
  left: string;
  width: string;
  height: string;

  duration: number;
  delay: number;

  opacity: number;
  blur: number;

  color: string;

  drift: number[];
  scale: number[];

  rotate?: number[];
};

type LavaPalette = {
  base: string;
  blobs: LavaBlob[];
};

const palettes: Record<
  LavaVariant,
  LavaPalette
> = {
  /* =====================================================
     SERVICES
     Daha canlı / creative / rose
  ====================================================== */

  services: {
    base: `
      radial-gradient(
        ellipse at 18% 12%,
        rgba(126, 34, 61, 0.42),
        transparent 44%
      ),
      radial-gradient(
        ellipse at 82% 78%,
        rgba(89, 19, 35, 0.34),
        transparent 48%
      ),
      linear-gradient(
        145deg,
        #210d14 0%,
        #13090d 38%,
        #1c0a12 70%,
        #10080b 100%
      )
    `,

    blobs: [
      {
        left: "-8%",
        width: "32rem",
        height: "42rem",

        duration: 22,
        delay: -8,

        opacity: 0.58,
        blur: 52,

        color: "#7c2039",

        drift: [
          0,
          110,
          35,
          80,
          0,
        ],

        scale: [
          1,
          1.14,
          0.92,
          1.08,
          1,
        ],

        rotate: [
          -12,
          8,
          -4,
          12,
          -12,
        ],
      },

      {
        left: "18%",
        width: "24rem",
        height: "30rem",

        duration: 18,
        delay: -15,

        opacity: 0.48,
        blur: 48,

        color: "#c45a78",

        drift: [
          0,
          -80,
          70,
          -30,
          0,
        ],

        scale: [
          0.9,
          1.18,
          0.96,
          1.12,
          0.9,
        ],
      },

      {
        left: "42%",
        width: "38rem",
        height: "46rem",

        duration: 29,
        delay: -21,

        opacity: 0.48,
        blur: 60,

        color: "#591323",

        drift: [
          0,
          90,
          -45,
          60,
          0,
        ],

        scale: [
          1.08,
          0.94,
          1.16,
          0.98,
          1.08,
        ],

        rotate: [
          6,
          -10,
          4,
          -5,
          6,
        ],
      },

      {
        left: "68%",
        width: "28rem",
        height: "38rem",

        duration: 24,
        delay: -5,

        opacity: 0.5,
        blur: 50,

        color: "#9b3153",

        drift: [
          0,
          -95,
          45,
          -65,
          0,
        ],

        scale: [
          1,
          1.15,
          0.9,
          1.08,
          1,
        ],
      },

      {
        left: "82%",
        width: "22rem",
        height: "28rem",

        duration: 20,
        delay: -13,

        opacity: 0.36,
        blur: 46,

        color: "#d16a88",

        drift: [
          0,
          -60,
          35,
          -80,
          0,
        ],

        scale: [
          0.88,
          1.12,
          0.96,
          1.18,
          0.88,
        ],
      },

      {
        left: "32%",
        width: "18rem",
        height: "24rem",

        duration: 17,
        delay: -10,

        opacity: 0.26,
        blur: 42,

        color: "#f4efe9",

        drift: [
          0,
          65,
          -50,
          30,
          0,
        ],

        scale: [
          0.8,
          1.08,
          0.92,
          1.16,
          0.8,
        ],
      },
    ],
  },

  /* =====================================================
     PROJECTS
     Aynı aile ama daha ağır / gallery
  ====================================================== */

  projects: {
    base: `
      radial-gradient(
        ellipse at 10% 14%,
        rgba(100, 25, 48, 0.34),
        transparent 46%
      ),
      radial-gradient(
        ellipse at 88% 72%,
        rgba(70, 16, 33, 0.38),
        transparent 50%
      ),
      linear-gradient(
        145deg,
        #190c11 0%,
        #10090b 40%,
        #180b10 72%,
        #0c0809 100%
      )
    `,

    blobs: [
      {
        left: "-10%",
        width: "38rem",
        height: "50rem",

        duration: 30,
        delay: -12,

        opacity: 0.48,
        blur: 62,

        color: "#591323",

        drift: [
          0,
          105,
          35,
          75,
          0,
        ],

        scale: [
          1,
          1.08,
          0.94,
          1.1,
          1,
        ],

        rotate: [
          -8,
          5,
          -4,
          9,
          -8,
        ],
      },

      {
        left: "20%",
        width: "27rem",
        height: "34rem",

        duration: 25,
        delay: -4,

        opacity: 0.34,
        blur: 55,

        color: "#8e304d",

        drift: [
          0,
          -65,
          60,
          -25,
          0,
        ],

        scale: [
          0.92,
          1.08,
          0.95,
          1.12,
          0.92,
        ],
      },

      {
        left: "45%",
        width: "42rem",
        height: "52rem",

        duration: 36,
        delay: -27,

        opacity: 0.42,
        blur: 68,

        color: "#48101f",

        drift: [
          0,
          80,
          -55,
          40,
          0,
        ],

        scale: [
          1.04,
          0.94,
          1.12,
          0.98,
          1.04,
        ],
      },

      {
        left: "70%",
        width: "28rem",
        height: "38rem",

        duration: 28,
        delay: -17,

        opacity: 0.38,
        blur: 56,

        color: "#74233f",

        drift: [
          0,
          -80,
          40,
          -55,
          0,
        ],

        scale: [
          1,
          1.12,
          0.92,
          1.06,
          1,
        ],
      },

      {
        left: "84%",
        width: "21rem",
        height: "29rem",

        duration: 24,
        delay: -8,

        opacity: 0.27,
        blur: 48,

        color: "#c45a78",

        drift: [
          0,
          -55,
          35,
          -70,
          0,
        ],

        scale: [
          0.9,
          1.08,
          0.94,
          1.12,
          0.9,
        ],
      },

      {
        left: "34%",
        width: "16rem",
        height: "22rem",

        duration: 21,
        delay: -14,

        opacity: 0.18,
        blur: 42,

        color: "#f4efe9",

        drift: [
          0,
          45,
          -35,
          25,
          0,
        ],

        scale: [
          0.85,
          1.02,
          0.93,
          1.1,
          0.85,
        ],
      },
    ],
  },

  /* =====================================================
     FION
     Wine + ivory / sıcak
  ====================================================== */

  fion: {
    base: `
      radial-gradient(
        ellipse at 50% 8%,
        rgba(244,239,233,0.14),
        transparent 40%
      ),
      radial-gradient(
        ellipse at 15% 70%,
        rgba(89,19,35,0.34),
        transparent 46%
      ),
      linear-gradient(
        150deg,
        #1a0e12 0%,
        #100a0c 44%,
        #1c0c12 100%
      )
    `,

    blobs: [
      {
        left: "-6%",
        width: "35rem",
        height: "44rem",

        duration: 27,
        delay: -8,

        opacity: 0.48,
        blur: 58,

        color: "#591323",

        drift: [
          0,
          85,
          20,
          60,
          0,
        ],

        scale: [
          1,
          1.14,
          0.94,
          1.06,
          1,
        ],
      },

      {
        left: "18%",
        width: "24rem",
        height: "32rem",

        duration: 22,
        delay: -15,

        opacity: 0.28,
        blur: 48,

        color: "#f4efe9",

        drift: [
          0,
          -55,
          45,
          -20,
          0,
        ],

        scale: [
          0.9,
          1.06,
          0.95,
          1.12,
          0.9,
        ],
      },

      {
        left: "42%",
        width: "40rem",
        height: "48rem",

        duration: 34,
        delay: -23,

        opacity: 0.4,
        blur: 65,

        color: "#6f1d36",

        drift: [
          0,
          75,
          -45,
          55,
          0,
        ],

        scale: [
          1.04,
          0.94,
          1.15,
          0.98,
          1.04,
        ],
      },

      {
        left: "66%",
        width: "30rem",
        height: "38rem",

        duration: 29,
        delay: -10,

        opacity: 0.38,
        blur: 55,

        color: "#c45a78",

        drift: [
          0,
          -80,
          50,
          -45,
          0,
        ],

        scale: [
          1,
          1.1,
          0.94,
          1.08,
          1,
        ],
      },

      {
        left: "82%",
        width: "20rem",
        height: "27rem",

        duration: 23,
        delay: -17,

        opacity: 0.24,
        blur: 44,

        color: "#f4efe9",

        drift: [
          0,
          -45,
          30,
          -60,
          0,
        ],

        scale: [
          0.86,
          1.04,
          0.92,
          1.08,
          0.86,
        ],
      },
    ],
  },
};

export default function DetailLavaBackground({
  variant,
}: DetailLavaBackgroundProps) {
  const prefersReducedMotion =
    useReducedMotion();

  const mobilePerformanceMode =
    useMobilePerformanceMode();

  const config =
    palettes[variant];

  if (
    prefersReducedMotion ||
    mobilePerformanceMode
  ) {
    return (
      <StaticLavaBackground
        background={
          config.base
        }
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        overflow-hidden
      "
      style={{
        background: config.base,
      }}
    >
      {/* =================================================
          LAVA BLOBS
      ================================================== */}

      {config.blobs.map(
        (blob, index) => (
          <motion.div
            key={`${variant}-${index}`}
            initial={{
              y: "-55vh",
            }}
            animate={
              prefersReducedMotion
                ? {
                    y: "28vh",
                  }
                : {
                    y: [
                      "-55vh",
                      "115vh",
                    ],

                    x:
                      blob.drift,

                    scale:
                      blob.scale,

                    rotate:
                      blob.rotate ??
                      [
                        0,
                        4,
                        -5,
                        3,
                        0,
                      ],

                    borderRadius: [
                      "48% 52% 57% 43% / 45% 60% 40% 55%",

                      "63% 37% 42% 58% / 55% 39% 61% 45%",

                      "39% 61% 65% 35% / 61% 46% 54% 39%",

                      "58% 42% 36% 64% / 43% 64% 36% 57%",

                      "48% 52% 57% 43% / 45% 60% 40% 55%",
                    ],
                  }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    y: {
                      duration:
                        blob.duration,

                      repeat:
                        Infinity,

                      ease:
                        "linear",

                      delay:
                        blob.delay,
                    },

                    x: {
                      duration:
                        blob.duration *
                        0.7,

                      repeat:
                        Infinity,

                      ease:
                        "easeInOut",
                    },

                    scale: {
                      duration:
                        blob.duration *
                        0.52,

                      repeat:
                        Infinity,

                      ease:
                        "easeInOut",
                    },

                    rotate: {
                      duration:
                        blob.duration *
                        0.6,

                      repeat:
                        Infinity,

                      ease:
                        "easeInOut",
                    },

                    borderRadius: {
                      duration:
                        blob.duration *
                        0.42,

                      repeat:
                        Infinity,

                      ease:
                        "easeInOut",
                    },
                  }
            }
            className="
              absolute
              top-0

              will-change-transform

              mix-blend-screen
            "
            style={{
              left:
                blob.left,

              width:
                blob.width,

              height:
                blob.height,

              opacity:
                blob.opacity,

              backgroundColor:
                blob.color,

              filter: `blur(${blob.blur}px)`,
            }}
          />
        ),
      )}

      {/* =================================================
          CENTRAL WINE ATMOSPHERE
          Arada boş siyah alan kalmasını azaltıyor.
      ================================================== */}

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [
                  1,
                  1.08,
                  0.96,
                  1,
                ],

                opacity: [
                  0.18,
                  0.28,
                  0.2,
                  0.18,
                ],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2

          h-[75%]
          w-[80%]

          -translate-x-1/2
          -translate-y-1/2

          rounded-[45%]

          bg-[#591323]/25

          blur-3xl
        "
      />

      {/* =================================================
          TOP LIGHT
      ================================================== */}

      <div
        className="
          absolute
          -top-40
          left-1/2

          h-80
          w-[75%]

          -translate-x-1/2

          rounded-[50%]

          bg-[#f4efe9]/[0.07]

          blur-3xl
        "
      />

      {/* =================================================
          DEPTH VEIL
      ================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-transparent
          via-black/[0.04]
          to-black/20
        "
      />

      {/* =================================================
          GRAIN
      ================================================== */}

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                backgroundPosition: [
                  "0px 0px",
                  "17px -13px",
                  "-11px 19px",
                  "0px 0px",
                ],
              }
        }
        transition={{
          duration: 0.75,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0

          opacity-[0.032]

          mix-blend-screen
        "
        style={{
          backgroundImage: `
            radial-gradient(
              rgba(255,255,255,0.85) 0.6px,
              transparent 0.7px
            )
          `,

          backgroundSize:
            "5px 5px",
        }}
      />

      {/* =================================================
          VIGNETTE
      ================================================== */}

      <div
        className="absolute inset-0"
        style={{
          boxShadow:
            "inset 0 0 140px 10px rgba(0,0,0,0.30)",
        }}
      />
    </div>
  );
}
function StaticLavaBackground({
  background,
}: {
  background: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none

        fixed
        inset-0

        overflow-hidden
      "
      style={{
        background,
      }}
    >
      {/* STATIC WINE DEPTH */}

      <div
        className="
          absolute
          inset-0
        "
        style={{
          background: `
            radial-gradient(
              ellipse at 50% 46%,
              rgba(89,19,35,0.22) 0%,
              rgba(89,19,35,0.08) 35%,
              transparent 68%
            )
          `,
        }}
      />

      {/* STATIC LIGHT */}

      <div
        className="
          absolute
          inset-0
        "
        style={{
          background: `
            radial-gradient(
              ellipse at 50% -8%,
              rgba(244,239,233,0.07),
              transparent 46%
            )
          `,
        }}
      />

      {/* DEPTH */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-transparent
          via-black/[0.04]
          to-black/20
        "
      />

      {/* STATIC GRAIN */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.018]
        "
        style={{
          backgroundImage: `
            radial-gradient(
              rgba(255,255,255,0.75) 0.5px,
              transparent 0.6px
            )
          `,

          backgroundSize:
            "6px 6px",
        }}
      />

      <div
        className="
          absolute
          inset-0
        "
        style={{
          boxShadow:
            "inset 0 0 100px rgba(0,0,0,0.28)",
        }}
      />
    </div>
  );
}