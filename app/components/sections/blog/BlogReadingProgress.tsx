"use client";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

export default function BlogReadingProgress() {
  const {
    scrollYProgress,
  } = useScroll();

  const progress =
    useSpring(
      scrollYProgress,
      {
        stiffness: 120,
        damping: 28,
        mass: 0.25,
      },
    );

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none

        fixed
        left-0
        right-0
        top-[74px]
        z-[60]

        h-px

        bg-white/[0.055]
      "
    >
      {/* PROGRESS */}

      <motion.div
        style={{
          scaleX: progress,
          transformOrigin:
            "0% 50%",
        }}
        className="
          absolute
          inset-y-0
          left-0

          w-full

          bg-[#c45a78]
        "
      />

      {/* SOFT GLOW */}

      <motion.div
        style={{
          scaleX: progress,
          transformOrigin:
            "0% 50%",
        }}
        className="
          absolute
          -top-px
          left-0

          h-[3px]
          w-full

          bg-[#591323]/35

          blur-[2px]
        "
      />
    </div>
  );
}