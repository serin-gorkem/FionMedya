"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

export default function BlogEditorialBackground() {
  const reduceMotion =
    useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-0

        overflow-hidden

        bg-[#171214]
      "
    >
      {/* PAPER LIGHT */}

      <div
        className="
          absolute
          left-[5%]
          top-[-15%]

          size-[820px]

          rounded-full

          bg-[#f4efe9]/[0.065]

          blur-[160px]
        "
      />

      <div
        className="
          absolute
          bottom-[-25%]
          right-[4%]

          size-[720px]

          rounded-full

          bg-[#eadfd9]/[0.035]

          blur-[150px]
        "
      />

      {/* WINE WASH 01 */}

      <motion.div
        className="
          absolute
          -left-[12%]
          top-[15%]

          h-[620px]
          w-[780px]

          rounded-[48%_52%_58%_42%/44%_62%_38%_56%]

          bg-[#74213b]/20

          blur-[120px]
        "
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 70, 20, 0],
                y: [0, 70, 130, 0],
                scale: [
                  1,
                  1.06,
                  0.97,
                  1,
                ],
                rotate: [
                  0,
                  4,
                  -3,
                  0,
                ],
              }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* WINE WASH 02 */}

      <motion.div
        className="
          absolute
          right-[-15%]
          top-[45%]

          h-[680px]
          w-[820px]

          rounded-[55%_45%_38%_62%/56%_40%_60%_44%]

          bg-[#a63c5b]/10

          blur-[150px]
        "
        animate={
          reduceMotion
            ? undefined
            : {
                x: [
                  0,
                  -80,
                  -20,
                  0,
                ],
                y: [
                  0,
                  -40,
                  80,
                  0,
                ],
                scale: [
                  1,
                  0.95,
                  1.06,
                  1,
                ],
              }
        }
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* EDITORIAL RULE */}

      <motion.div
        className="
          absolute
          left-0
          top-[35%]

          h-px
          w-[45%]

          bg-gradient-to-r
          from-transparent
          via-white/[0.06]
          to-transparent
        "
        animate={
          reduceMotion
            ? undefined
            : {
                x: [
                  "-30%",
                  "180%",
                ],
                opacity: [
                  0,
                  1,
                  0,
                ],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* TEXTURE */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.16]
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(244,239,233,0.16) 0.55px, transparent 0.55px)",
          backgroundSize:
            "6px 6px",
        }}
      />

      {/* MUCH SOFTER VIGNETTE */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.34)_100%)]
        "
      />

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-black/5
          via-transparent
          to-black/18
        "
      />
    </div>
  );
}