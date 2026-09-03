"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

export default function BlogEditorialBackground() {
  const reducedMotion =
    useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        overflow-hidden
      "
    >
      {/* BASE */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at 14% 12%,
              rgba(89,19,35,0.28),
              transparent 42%
            ),
            radial-gradient(
              ellipse at 82% 72%,
              rgba(116,36,61,0.18),
              transparent 46%
            ),
            linear-gradient(
              145deg,
              #160d10 0%,
              #0d090a 42%,
              #130a0e 72%,
              #090708 100%
            )
          `,
        }}
      />

      {/* =================================================
          PAPER LIGHT

          Blob değil:
          geniş, yatay bir ışık şeridi.
      ================================================== */}

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                x: [-120, 130, -40, -120],
                y: [-30, 70, 20, -30],
                rotate: [-9, -4, -12, -9],
                opacity: [0.12, 0.22, 0.14, 0.12],
              }
        }
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-[15%]
          top-[4%]

          h-72
          w-[105%]

          rounded-[50%]

          bg-[#f4efe9]/20

          blur-3xl
        "
      />

      {/* =================================================
          WINE INK WASH
      ================================================== */}

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                x: [80, -120, 50, 80],
                y: [20, -50, 80, 20],
                scale: [1, 1.12, 0.96, 1],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-60
          top-[34%]

          h-[28rem]
          w-[46rem]

          rotate-[-16deg]
          rounded-[48%]

          bg-[#7c2039]/32

          blur-3xl
        "
      />

      {/* SECOND INK WASH */}

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                x: [-70, 100, -20, -70],
                y: [60, -40, 30, 60],
              }
        }
        transition={{
          duration: 33,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-48
          bottom-[-10%]

          h-[32rem]
          w-[38rem]

          rotate-12
          rounded-[45%]

          bg-[#591323]/36

          blur-3xl
        "
      />

      {/* =================================================
          FLOATING PAGE FRAME 01
      ================================================== */}

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                x: [-25, 25, -10, -25],
                y: [-20, 35, -5, -20],
                rotate: [-8, -5, -10, -8],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-24
          top-[12%]

          hidden
          h-[34rem]
          w-96

          border
          border-white/[0.045]

          lg:block
        "
      >
        <div
          className="
            absolute
            inset-10
            border
            border-[#c45a78]/[0.06]
          "
        />
      </motion.div>

      {/* =================================================
          FLOATING PAGE FRAME 02
      ================================================== */}

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                x: [20, -30, 15, 20],
                y: [20, -25, 40, 20],
                rotate: [7, 4, 9, 7],
              }
        }
        transition={{
          duration: 27,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-28
          top-[52%]

          hidden
          h-[30rem]
          w-80

          border
          border-white/[0.035]

          lg:block
        "
      />

      {/* =================================================
          EDITORIAL RULES
      ================================================== */}

      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                backgroundPositionY: [
                  "0px",
                  "80px",
                ],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0

          opacity-[0.16]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,239,233,0.055) 1px, transparent 1px)",

          backgroundSize:
            "100% 120px",

          maskImage:
            "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",

          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
        }}
      />

      {/* VERTICAL EDITORIAL LINE */}

      <div
        className="
          absolute
          bottom-0
          left-[12%]
          top-0

          hidden
          w-px

          bg-gradient-to-b
          from-transparent
          via-white/[0.045]
          to-transparent

          lg:block
        "
      />

      {/* GRAIN */}

      <motion.div
        animate={
          reducedMotion
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
          duration: 0.8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0

          opacity-[0.025]

          mix-blend-screen
        "
        style={{
          backgroundImage: `
            radial-gradient(
              rgba(255,255,255,0.8) 0.55px,
              transparent 0.65px
            )
          `,
          backgroundSize: "5px 5px",
        }}
      />

      {/* VIGNETTE */}

      <div
        className="absolute inset-0"
        style={{
          boxShadow:
            "inset 0 0 160px 20px rgba(0,0,0,0.38)",
        }}
      />
    </div>
  );
}