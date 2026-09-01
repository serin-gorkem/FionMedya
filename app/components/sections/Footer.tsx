"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

export default function Footer() {
  const footerRef =
    useRef<HTMLElement>(null);

  /*
   * 0:
   * Footer viewport'un altına girer.
   *
   * 1:
   * Footer tamamen viewport'a yerleşir.
   */

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  /* Şarap dolum yüksekliği */

  const fillHeight = useTransform(
    scrollYProgress,
    [0, 0.18, 0.72, 1],
    ["0vh", "5vh", "62vh", "105vh"],
  );

  const fillOpacity = useTransform(
    scrollYProgress,
    [0, 0.06, 0.15],
    [0, 0.75, 1],
  );

  /* Şarap yüzeyi */

  const surfaceOpacity = useTransform(
    scrollYProgress,
    [0.04, 0.12, 0.2],
    [0, 0.65, 1],
  );

  const surfaceScaleX = useTransform(
    scrollYProgress,
    [0.04, 0.25, 0.72, 1],
    [0.15, 0.55, 1.15, 1.5],
  );

  const surfaceScaleY = useTransform(
    scrollYProgress,
    [0.04, 0.25, 1],
    [0.2, 0.7, 1],
  );

  /*
   * Hareketli dolum tamamlandıktan sonra
   * footer'ın şarap renginde kalması.
   */

  const settledWineOpacity =
    useTransform(
      scrollYProgress,
      [0.86, 0.98, 1],
      [0, 1, 1],
    );

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="
        relative z-10
        min-h-screen
        overflow-hidden
        px-6 py-24
        sm:px-10 sm:py-36
      "
    >
      {/* ===============================================
          PERMANENT WINE BACKGROUND
      =============================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          z-0
        "
        style={{
          opacity:
            settledWineOpacity,

          background:
            "linear-gradient(180deg, #741b38 0%, #551027 42%, #360916 76%, #21060d 100%)",
        }}
      />

      {/* ===============================================
          MOVING WINE FILL
      =============================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          bottom-0 left-0
          z-[1]
          w-full
          will-change-[height,opacity]
        "
        style={{
          height: fillHeight,
          opacity: fillOpacity,

          background:
            "linear-gradient(180deg, #741b38 0%, #551027 42%, #360916 76%, #21060d 100%)",

          boxShadow:
            "0 -18px 55px rgba(102, 20, 48, 0.22)",
        }}
      />

      {/* ===============================================
          MOVING WINE SURFACE
      =============================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          z-[2]
          h-0 w-full
          will-change-[bottom,opacity]
        "
        style={{
          bottom: fillHeight,
          opacity: surfaceOpacity,
        }}
      >
        {/* Ana dalga yüzeyi */}

        <div
          className="
            absolute
            left-1/2 top-0
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          <motion.div
            className="
              h-[84px]
              w-[105vw]
              rounded-[50%]
              blur-[1px]
            "
            style={{
              scaleX:
                surfaceScaleX,

              scaleY:
                surfaceScaleY,

              background:
                "radial-gradient(ellipse at center, #a33c5e 0%, #7b203f 34%, #551027 65%, transparent 76%)",

              boxShadow:
                "inset 0 10px 20px rgba(225, 104, 140, 0.16), 0 -8px 24px rgba(110, 24, 52, 0.24)",
            }}
          />
        </div>

        {/* Dalga üzerindeki ışık çizgisi */}

        <div
          className="
            absolute
            left-1/2 top-0
            -translate-x-1/2
          "
        >
          <motion.div
            className="
              h-px
              w-[90vw]
              bg-[#d06a87]/40
              blur-[0.5px]
            "
            style={{
              scaleX:
                surfaceScaleX,
            }}
          />
        </div>
      </motion.div>

      {/* ===============================================
          FOOTER CONTENT
      =============================================== */}

      <div
        className="
          relative z-10
          mx-auto
          flex min-h-[70vh]
          max-w-7xl
          flex-col
          justify-end
        "
      >
        <p
          className="
            mb-6
            text-[10px]
            uppercase
            tracking-[0.4em]
            text-white/70
          "
        >
          Sıradaki iş
        </p>

        <h2
          className="
            max-w-4xl
            font-serif
            text-[clamp(3.7rem,8vw,8rem)]
            leading-[0.86]
            tracking-[-0.055em]
          "
        >
          Markanız için
          <br />
          ne yapabiliriz?
        </h2>

        <a
          href="mailto:hello@fionmedya.com"
          className="
            group relative
            mt-12
            inline-flex
            w-fit
            items-center
            gap-3
            pb-2
            text-[11px]
            uppercase
            tracking-[0.25em]
          "
        >
          İletişime geçelim
          <span>↗</span>

          <span
            className="
              absolute
              bottom-0 left-0
              h-px w-full
              origin-left
              scale-x-0
              bg-white
              transition-transform
              duration-500
              group-hover:scale-x-100
            "
          />
        </a>

        <div
          className="
            mt-24
            flex flex-col
            justify-between
            gap-6
            border-t
            border-white/25
            pt-6
            text-xs
            text-white/70
            sm:flex-row
          "
        >
          <span>
            © 2026 Görkem Serin. Tüm hakları
            saklıdır.
          </span>

          <span>Fion Medya</span>
        </div>
      </div>
    </footer>
  );
}