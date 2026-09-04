"use client";

import { useState, type MouseEvent } from "react";

import { motion, type Variants } from "framer-motion";

type NavigationOverlayProps = {
  onNavigate: (href: string) => void;
};

const items = [
  {
    label: "Hizmetler",
    href: "#services",
    number: "01",
  },
  {
    label: "Projeler",
    href: "#projects",
    number: "02",
  },
  {
    label: "Blog",
    href: "#blog",
    number: "03",
  },
  {
    label: "Fion",
    href: "#about",
    number: "04",
  },
  {
    label: "İletişim",
    href: "#contact",
    number: "05",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.8,
      ease,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      /*
       * Önce içerik çıkıyor.
       * Ardından siyah perde çözülüyor.
       */
      delay: 0.32,
      duration: 0.72,
      ease,
    },
  },
};

const navigationVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.34,
      staggerChildren: 0.085,
    },
  },

  exit: {
    transition: {
      /*
       * Kapanırken aşağıdan yukarı değil,
       * son item'dan ilk item'a doğru çözülüyor.
       */
      staggerChildren: 0.045,
      staggerDirection: -1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.72,
      ease,
    },
  },

  exit: {
    opacity: 0,
    y: -18,
    filter: "blur(7px)",

    transition: {
      duration: 0.36,
      ease,
    },
  },
};

const wordmarkVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    filter: "blur(9px)",
  },

  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      delay: 0.28,
      duration: 0.9,
      ease,
    },
  },

  exit: {
    opacity: 0,
    scale: 1.025,
    filter: "blur(10px)",

    transition: {
      duration: 0.62,
      ease,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

export default function NavigationOverlay({
  onNavigate,
}: NavigationOverlayProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    setHoveredIndex(null);

    onNavigate(href);
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Ana navigasyon"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="
        fixed
        inset-0
        z-40
        overflow-hidden
        bg-black/[0.94]
      "
      style={{
        backdropFilter: "brightness(0.24) saturate(0.72) blur(2px)",
        WebkitBackdropFilter: "brightness(0.24) saturate(0.72) blur(2px)",
      }}
    >
      {/* =====================================================
          WINE AMBIENT LIGHT
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: 0.3,
        }}
        animate={{
          opacity: 0.24,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.7,
        }}
        transition={{
          duration: 0.9,
          delay: 0.12,
          ease,
        }}
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[48%]

          h-[44vh]
          w-[52vw]
          max-w-[760px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#591323]

          blur-[135px]
        "
      />

      {/* =====================================================
          CENTER SOFT LIGHT
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: 0.4,
        }}
        animate={{
          opacity: 0.055,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.65,
        }}
        transition={{
          duration: 0.85,
          delay: 0.18,
          ease,
        }}
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[48%]

          h-[20vh]
          w-[28vw]
          max-w-[420px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#f4efe9]

          blur-[110px]
        "
      />

      {/* =====================================================
          BACKGROUND WORDMARK
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        variants={wordmarkVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="
          pointer-events-none
          absolute
          inset-0

          flex
          items-center
          justify-center
        "
      >
        <p
          className="
            whitespace-nowrap

            font-serif

            text-[16vw]

            leading-none
            tracking-[-0.07em]

            text-white/[0.1]
          "
        >
          FİON MEDYA
        </p>
      </motion.div>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <motion.nav
        variants={navigationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onMouseLeave={() => setHoveredIndex(null)}
        className="
          relative
          z-10

          flex
          min-h-screen
          flex-col

          items-center
          justify-center

          gap-2

          px-6

          text-center
        "
      >
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;

          const hasHoveredItem = hoveredIndex !== null;

          return (
            <motion.a
              variants={itemVariants}
              key={item.label}
              href={item.href}
              onClick={(event) => handleNavigation(event, item.href)}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              className={`
                  group/item

                  relative

                  inline-flex
                  items-baseline
                  gap-4

                  font-serif

                  leading-[0.82]
                  tracking-[-0.055em]

                  transition-[font-size,color,letter-spacing]
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${
                    hasHoveredItem && !isHovered
                      ? "text-ivory/30"
                      : "text-ivory"
                  }

                  ${isHovered ? "italic" : ""}
                `}
              style={{
                fontSize: isHovered
                  ? "clamp(3.2rem, 6.5vw, 6.3rem)"
                  : hasHoveredItem
                    ? "clamp(2.15rem, 4.1vw, 4rem)"
                    : "clamp(2.5rem, 5vw, 4.8rem)",
              }}
            >
              {/* number */}

              <span
                className={`
                    translate-y-[-0.2em]

                    font-sans

                    text-[8px]
                    not-italic
                    tracking-[0.28em]

                    transition-colors
                    duration-500

                    ${isHovered ? "text-[#c45a78]" : "text-white/20"}
                  `}
              >
                {item.number}
              </span>

              {/* label */}

              <span>{item.label}</span>
            </motion.a>
          );
        })}
      </motion.nav>

      {/* =====================================================
          BOTTOM LABEL
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 8,
        }}
        transition={{
          delay: 0.65,
          duration: 0.5,
          ease,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          z-20

          -translate-x-1/2

          text-center
        "
      >
        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.34em]
            text-white/25
          "
        >
          Bir bölüm seç
        </span>
      </motion.div>
    </motion.div>
  );
}
