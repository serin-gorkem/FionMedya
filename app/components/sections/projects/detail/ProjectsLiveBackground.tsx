"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import { useEffect } from "react";

const springConfig = {
  stiffness: 32,
  damping: 24,
  mass: 1.5,
};

export default function ProjectsLiveBackground() {
  const prefersReducedMotion = useReducedMotion();

  /*
   * 0 = sol / üst
   * 0.5 = merkez
   * 1 = sağ / alt
   */
  const pointerX = useMotionValue(0.5);

  const pointerY = useMotionValue(0.5);

  const smoothX = useSpring(pointerX, springConfig);

  const smoothY = useSpring(pointerY, springConfig);

  /* =====================================================
     WINE LIGHT LEAK
     Mouse yönüne belirgin şekilde gider.
  ====================================================== */

  const leakX = useTransform(smoothX, [0, 1], [-180, 180]);

  const leakY = useTransform(smoothY, [0, 1], [-90, 90]);

  /* =====================================================
     PROJECTOR
     Aynı yönde ama daha az hareket eder.
  ====================================================== */

  const projectorX = useTransform(smoothX, [0, 1], [-75, 75]);

  const projectorY = useTransform(smoothY, [0, 1], [-40, 40]);

  /* =====================================================
     FRAME
     TERS yönde hareket eder.
  ====================================================== */

  const frameX = useTransform(smoothX, [0, 1], [90, -90]);

  const frameY = useTransform(smoothY, [0, 1], [45, -45]);

  /* =====================================================
     SECONDARY LIGHT
  ====================================================== */

  const secondaryX = useTransform(smoothX, [0, 1], [110, -110]);

  const secondaryY = useTransform(smoothY, [0, 1], [-60, 60]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    let cleanup = () => {};

    const configure = () => {
      cleanup();

      /* ================================================
         DESKTOP
      ================================================= */

      if (pointerQuery.matches) {
        const handlePointerMove = (event: PointerEvent) => {
          pointerX.set(event.clientX / window.innerWidth);

          pointerY.set(event.clientY / window.innerHeight);
        };

        window.addEventListener("pointermove", handlePointerMove, {
          passive: true,
        });

        cleanup = () => {
          window.removeEventListener("pointermove", handlePointerMove);
        };

        return;
      }

      /* ================================================
         MOBILE
      ================================================= */
      const wander = () => {
        pointerX.set(0.05 + Math.random() * 0.9);

        pointerY.set(0.08 + Math.random() * 0.84);
      };

      wander();

      const interval = window.setInterval(wander, 3600);

      cleanup = () => {
        window.clearInterval(interval);
      };
    };

    configure();

    pointerQuery.addEventListener("change", configure);

    return () => {
      cleanup();

      pointerQuery.removeEventListener("change", configure);
    };
  }, [pointerX, pointerY, prefersReducedMotion]);

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
      {/* =================================================
          BASE
      ================================================== */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at 15% 12%,
              rgba(89, 19, 35, 0.24),
              transparent 44%
            ),
            radial-gradient(
              ellipse at 88% 78%,
              rgba(117, 31, 57, 0.18),
              transparent 48%
            ),
            linear-gradient(
              145deg,
              #12090c 0%,
              #090809 38%,
              #10080b 70%,
              #080708 100%
            )
          `,
        }}
      />

      {/* =================================================
          PROJECTOR LIGHT
          Mouse'u hafif takip eder.
      ================================================== */}

      <motion.div
        style={{
          x: projectorX,
          y: projectorY,
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [0.2, 0.32, 0.22, 0.2],
                scale: [1, 1.08, 1],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-36
          left-[18%]

          h-96
          w-[46rem]

          -rotate-6

          rounded-full

          bg-[#f4efe9]/20

          blur-3xl
        "
      />

      {/* =================================================
          MAIN WINE LIGHT LEAK
          Mouse'u belirgin takip eder.
      ================================================== */}

      <motion.div
        style={{
          x: leakX,
          y: leakY,
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.12, 0.96, 1],
              }
        }
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-[8%]

          h-[110%]
          w-96

          rotate-12

          rounded-[50%]

          bg-[#8e304d]/40

          blur-3xl
        "
      />

      {/* Bright inner leak */}

      <motion.div
        style={{
          x: leakX,
          y: leakY,
        }}
        className="
          absolute
          -left-16
          top-[26%]

          h-[55%]
          w-40

          rotate-12

          rounded-full

          bg-[#c45a78]/18

          blur-3xl
        "
      />

      {/* =================================================
          RIGHT LIGHT
          Mouse'un tersine gider.
      ================================================== */}

      <motion.div
        style={{
          x: secondaryX,
          y: secondaryY,
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 0.92, 1.1, 1],
              }
        }
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-44
          top-[16%]

          h-[85%]
          w-96

          -rotate-12

          rounded-full

          bg-[#591323]/40

          blur-3xl
        "
      />

      {/* =================================================
          FRAME — LEFT
          Mouse'un tersine hareket eder.
      ================================================== */}

      <motion.div
        style={{
          x: frameX,
          y: frameY,
        }}
        className="
          absolute
          bottom-[-8%]
          left-[16%]
          top-[-8%]

          hidden
          w-px

          bg-gradient-to-b
          from-transparent
          via-white/15
          to-transparent

          lg:block
        "
      />

      {/* =================================================
          FRAME — RIGHT
      ================================================== */}

      <motion.div
        style={{
          x: frameX,
          y: frameY,
        }}
        className="
          absolute
          bottom-[-8%]
          right-[18%]
          top-[-8%]

          hidden
          w-px

          bg-gradient-to-b
          from-transparent
          via-[#c45a78]/20
          to-transparent

          lg:block
        "
      />

      {/* =================================================
          MOVING HORIZONTAL FRAME
      ================================================== */}

      <motion.div
        style={{
          y: frameY,
        }}
        className="
          absolute
          left-0
          right-0
          top-[42%]

          hidden
          h-px

          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent

          lg:block
        "
      />

      {/* =================================================
          FOCUS RING
      ================================================== */}

      <motion.div
        style={{
          x: frameX,
          y: projectorY,
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                rotate: [0, 5, -3, 0],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[8%]
          top-[17%]

          hidden
          size-80

          rounded-full

          border
          border-white/[0.07]

          lg:block
        "
      >
        <div
          className="
            absolute
            inset-10

            rounded-full

            border
            border-[#c45a78]/10
          "
        />

        <div
          className="
            absolute
            inset-20

            rounded-full

            border
            border-white/[0.05]
          "
        />
      </motion.div>

      {/* =================================================
          FILM BURN
      ================================================== */}

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [-100, 180, 60, -100],
                y: [20, -40, 70, 20],
              }
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[6%]
          left-[32%]

          h-72
          w-[30rem]

          -rotate-12

          rounded-full

          bg-[#c45a78]/14

          blur-3xl
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
                  "18px -14px",
                  "-12px 20px",
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

          opacity-[0.03]

          mix-blend-screen
        "
        style={{
          backgroundImage: `
            radial-gradient(
              rgba(255,255,255,0.75) 0.6px,
              transparent 0.7px
            )
          `,
          backgroundSize: "5px 5px",
        }}
      />

      {/* =================================================
          VIGNETTE
      ================================================== */}

      <div
        className="absolute inset-0"
        style={{
          boxShadow: "inset 0 0 170px 20px rgba(0,0,0,0.44)",
        }}
      />
    </div>
  );
}
