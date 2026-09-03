"use client";

import {
  motion,
  useScroll,
} from "framer-motion";

export default function BlogReadingProgress() {
  const {
    scrollYProgress,
  } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      className="
        fixed
        left-0
        right-0
        top-[75px]
        z-[60]

        h-px

        origin-left

        bg-[#c45a78]
      "
      style={{
        scaleX:
          scrollYProgress,
      }}
    />
  );
}