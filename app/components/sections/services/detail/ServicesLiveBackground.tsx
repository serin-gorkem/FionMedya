"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

import { useEffect } from "react";

const springConfig = {
  stiffness: 34,
  damping: 22,
  mass: 1.5,
};

export default function ServicesLiveBackground() {
  const prefersReducedMotion =
    useReducedMotion();

  const targetX =
    useMotionValue(0);

  const targetY =
    useMotionValue(0);

  const x = useSpring(
    targetX,
    springConfig,
  );

  const y = useSpring(
    targetY,
    springConfig,
  );

  useEffect(() => {
    const center = () => {
      targetX.set(
        window.innerWidth / 2,
      );

      targetY.set(
        window.innerHeight / 2,
      );
    };

    center();

    if (prefersReducedMotion) {
      return;
    }

    const pointerQuery =
      window.matchMedia(
        "(hover: hover) and (pointer: fine)",
      );

    let cleanup = () => {};

    const configure = () => {
      cleanup();

      /* DESKTOP */

      if (pointerQuery.matches) {
        const handlePointerMove = (
          event: PointerEvent,
        ) => {
          targetX.set(
            event.clientX,
          );

          targetY.set(
            event.clientY,
          );
        };

        window.addEventListener(
          "pointermove",
          handlePointerMove,
          {
            passive: true,
          },
        );

        cleanup = () => {
          window.removeEventListener(
            "pointermove",
            handlePointerMove,
          );
        };

        return;
      }

      /* MOBILE */

      const wander = () => {
        const xMin =
          window.innerWidth * 0.12;

        const xMax =
          window.innerWidth * 0.88;

        const yMin =
          window.innerHeight * 0.12;

        const yMax =
          window.innerHeight * 0.88;

        targetX.set(
          xMin +
            Math.random() *
              (xMax - xMin),
        );

        targetY.set(
          yMin +
            Math.random() *
              (yMax - yMin),
        );
      };

      wander();

      const interval =
        window.setInterval(
          wander,
          3800,
        );

      cleanup = () => {
        window.clearInterval(
          interval,
        );
      };
    };

    configure();

    pointerQuery.addEventListener(
      "change",
      configure,
    );

    return () => {
      cleanup();

      pointerQuery.removeEventListener(
        "change",
        configure,
      );
    };
  }, [
    prefersReducedMotion,
    targetX,
    targetY,
  ]);

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
      {/* ==================================================
          BASE — ARTIK SİYAH DEĞİL
      =================================================== */}

      <div
        className="
          absolute
          inset-0
        "
        style={{
          background: `
            radial-gradient(
              ellipse at 18% 12%,
              rgba(105, 27, 49, 0.38) 0%,
              rgba(44, 13, 23, 0.20) 34%,
              transparent 62%
            ),
            radial-gradient(
              ellipse at 88% 76%,
              rgba(116, 24, 56, 0.28) 0%,
              transparent 55%
            ),
            linear-gradient(
              145deg,
              #15090d 0%,
              #0d0709 32%,
              #16080e 67%,
              #080506 100%
            )
          `,
        }}
      />

      {/* ==================================================
          IVORY HAZE
      =================================================== */}

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [
                  0.13,
                  0.22,
                  0.13,
                ],
                scale: [
                  1,
                  1.12,
                  1,
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
          -top-40
          left-[20%]

          h-[34rem]
          w-[50rem]

          rounded-full

          bg-[#f4efe9]

          opacity-[0.13]

          blur-3xl
        "
      />

      {/* ==================================================
          AUTONOMOUS WINE CLOUD 01
      =================================================== */}

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [
                  "-8%",
                  "12%",
                  "4%",
                  "-8%",
                ],

                y: [
                  "0%",
                  "18%",
                  "-8%",
                  "0%",
                ],

                scale: [
                  1,
                  1.18,
                  0.94,
                  1,
                ],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-48
          top-[22%]

          size-[34rem]

          rounded-full

          bg-[#7c2039]/35

          blur-3xl
        "
      />

      {/* ==================================================
          AUTONOMOUS WINE CLOUD 02
      =================================================== */}

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [
                  "6%",
                  "-14%",
                  "10%",
                  "6%",
                ],

                y: [
                  "0%",
                  "-12%",
                  "16%",
                  "0%",
                ],

                scale: [
                  1,
                  0.9,
                  1.2,
                  1,
                ],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-52
          bottom-[4%]

          size-[38rem]

          rounded-full

          bg-[#591323]/40

          blur-3xl
        "
      />

      {/* ==================================================
          SLOW ROTATING HALO
      =================================================== */}

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                rotate: 360,
              }
        }
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-1/2

          size-[70rem]

          -translate-x-1/2
          -translate-y-1/2

          opacity-25

          blur-3xl
        "
        style={{
          background: `
            conic-gradient(
              from 30deg,
              transparent 0deg,
              rgba(196,90,120,0.16) 70deg,
              transparent 145deg,
              rgba(89,19,35,0.22) 225deg,
              transparent 310deg
            )
          `,
        }}
      />

      {/* ==================================================
          POINTER ORB
      =================================================== */}

      <motion.div
        className="
          absolute
          left-0
          top-0
          will-change-transform
        "
        style={{
          x,
          y,
        }}
      >
        <div
          className="
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    scale: [
                      1,
                      1.1,
                      0.96,
                      1,
                    ],
                  }
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative

              size-80

              sm:size-96
              lg:size-[30rem]
            "
          >
            <div
              className="
                absolute
                inset-0

                rounded-full

                bg-[#9b3153]/38

                blur-3xl
              "
            />

            <div
              className="
                absolute
                inset-[18%]

                rounded-full

                bg-[#c45a78]/24

                blur-3xl
              "
            />

            <div
              className="
                absolute
                inset-[38%]

                rounded-full

                bg-[#f4efe9]/10

                blur-2xl
              "
            />
          </motion.div>
        </div>
      </motion.div>

      {/* ==================================================
          SOFT LIGHT VEIL
      =================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-white/[0.025]
          via-transparent
          to-black/25
        "
      />

      {/* ==================================================
          GRAIN
      =================================================== */}

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                backgroundPosition: [
                  "0px 0px",
                  "30px -20px",
                  "-20px 25px",
                  "0px 0px",
                ],
              }
        }
        transition={{
          duration: 0.7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0

          opacity-[0.035]

          mix-blend-screen
        "
        style={{
          backgroundImage: `
            radial-gradient(
              rgba(255,255,255,0.8) 0.6px,
              transparent 0.7px
            )
          `,
          backgroundSize:
            "5px 5px",
        }}
      />

      {/* ==================================================
          VIGNETTE
      =================================================== */}

      <div
        className="
          absolute
          inset-0
        "
        style={{
          boxShadow:
            "inset 0 0 180px 20px rgba(0,0,0,0.45)",
        }}
      />
    </div>
  );
}