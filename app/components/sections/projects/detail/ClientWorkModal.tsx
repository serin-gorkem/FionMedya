"use client";

import Image from "next/image";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { useEffect } from "react";

import type {
  ClientWork,
} from "./projects-clients.data";

type ClientWorkModalProps = {
  client: ClientWork;
  open: boolean;
  onClose: () => void;
};

export default function ClientWorkModal({
  client,
  open,
  onClose,
}: ClientWorkModalProps) {
  const visuals =
    client.images.filter(Boolean);

  const visualCount =
    visuals.length;

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key === "Escape"
      ) {
        onClose();
      }
    };

    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style.overflow =
      "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    open,
    onClose,
  ]);

  const visualLayoutClass =
    visualCount === 1
      ? "mx-auto max-w-[520px]"
      : visualCount === 2
        ? "grid sm:grid-cols-2"
        : "grid sm:grid-cols-2 lg:grid-cols-3";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${client.name} proje detayları`}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            fixed
            inset-0
            z-[100]

            overflow-y-auto

            bg-black/92

            backdrop-blur-xl
          "
        >
          {/* =============================================
              BACKDROP
          ============================================== */}

          <button
            type="button"
            aria-label="Projeyi kapat"
            onClick={onClose}
            className="
              absolute
              inset-0

              cursor-default
            "
          />

          {/* =============================================
              MODAL
          ============================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.99,
            }}
            transition={{
              duration: 0.5,

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              relative
              z-10

              mx-auto

              min-h-screen
              max-w-[1500px]

              px-5
              py-6

              sm:px-10
              sm:py-10
            "
          >
            {/* ===========================================
                TOP BAR
            ============================================ */}

            <div
              className="
                sticky
                top-0
                z-30

                flex
                items-center
                justify-between
                gap-8

                border-b
                border-white/10

                bg-black/50

                pb-5

                backdrop-blur-xl

                sm:pb-6
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-4

                  sm:gap-5
                "
              >
                <span
                  className="
                    text-[8px]
                    tracking-[0.28em]

                    text-[#c45a78]
                  "
                >
                  {client.number}
                </span>

                <span
                  className="
                    h-px
                    w-8

                    bg-[#591323]

                    sm:w-10
                  "
                />

                <span
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.23em]

                    text-white/35

                    sm:text-[8px]
                  "
                >
                  Selected Work
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Projeyi kapat"
                className="
                  flex
                  size-11

                  shrink-0

                  items-center
                  justify-center

                  border
                  border-white/15

                  text-lg
                  text-white/60

                  transition-colors
                  duration-300

                  hover:border-[#c45a78]
                  hover:text-white
                "
              >
                ×
              </button>
            </div>

            {/* ===========================================
                INTRO
            ============================================ */}

            <div
              className="
                grid
                gap-10

                py-10

                lg:grid-cols-[minmax(0,1fr)_420px]
                lg:items-end
                lg:gap-16
                lg:py-16
              "
            >
              {/* BRAND */}

              <div>
                {/* NORMALIZED LOGO */}

                <div
                  className="
                    relative

                    h-24
                    w-[220px]

                    sm:w-[260px]
                  "
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="260px"
                    className="
                      object-contain
                      object-left
                    "
                  />
                </div>

                <h2
                  className="
                    mt-8
                    max-w-4xl

                    font-serif

                    text-[clamp(3.3rem,6vw,7rem)]

                    leading-[0.84]
                    tracking-[-0.06em]

                    text-[#f4efe9]
                  "
                >
                  {client.name}
                </h2>
              </div>

              {/* INFO */}

              <div
                className="
                  border-t
                  border-white/10

                  pt-6

                  lg:border-l
                  lg:border-t-0
                  lg:pl-8
                  lg:pt-0
                "
              >
                <p
                  className="
                    text-sm
                    leading-7

                    text-white/55
                  "
                >
                  {client.detail ??
                    client.summary}
                </p>

                <div
                  className="
                    mt-7

                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {client.services.map(
                    (service) => (
                      <span
                        key={service}
                        className="
                          border
                          border-white/10

                          px-3
                          py-2

                          text-[7px]
                          uppercase
                          tracking-[0.18em]

                          text-white/40
                        "
                      >
                        {service}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* ===========================================
                VISUALS
            ============================================ */}

            {visualCount > 0 && (
              <div
                className={`
                  gap-5

                  ${visualLayoutClass}
                `}
              >
                {visuals.map(
                  (
                    src,
                    index,
                  ) => (
                    <div
                      key={`${src}-${index}`}
                      className="
                        relative

                        aspect-[4/5]

                        overflow-hidden

                        border
                        border-white/10

                        bg-[#070607]
                      "
                    >
                      <Image
                        src={src}
                        alt={`${client.name} proje görseli ${index + 1}`}
                        fill
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          420px
                        "
                        className="
                          object-contain
                        "
                      />

                      <span
                        className="
                          absolute
                          right-4
                          top-4
                          z-10

                          text-[7px]
                          tracking-[0.22em]

                          text-white/25
                        "
                      >
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          "0",
                        )}
                      </span>
                    </div>
                  ),
                )}
              </div>
            )}

            {/* ===========================================
                FOOT
            ============================================ */}

            <div
              className="
                mt-16

                flex
                items-center
                justify-between
                gap-8

                border-t
                border-white/10

                py-8
              "
            >
              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.24em]

                  text-white/25
                "
              >
                Fion /{" "}
                {client.name}
              </span>

              <button
                type="button"
                onClick={onClose}
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.22em]

                  text-[#c45a78]

                  transition-colors

                  hover:text-[#f4efe9]
                "
              >
                Projeyi kapat ↑
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}