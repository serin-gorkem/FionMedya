"use client";

import Image from "next/image";
import { useState } from "react";

import ClientWorkModal from "./ClientWorkModal";

import type { ClientWork } from "./projects-clients.data";

type ClientWorkCardProps = {
  client: ClientWork;
};

export default function ClientWorkCard({ client }: ClientWorkCardProps) {
  const [open, setOpen] = useState(false);

  const isExternal = !client.hasDetail;

  const hasExternalUrl = Boolean(client.websiteUrl?.trim());

  /*
   * Preview:
   * duo   → 2 adet 9:16
   * diğer → 3 adet 9:16
   *
   * Modal ise images içinde ne varsa
   * hepsini gösterecek.
   */
  const previewCount = client.layout === "duo" ? 2 : 3;

  const content = (
    <div
      className="
        relative

        grid

        overflow-hidden

        border
        border-white/10

        bg-[#090708]/75

        backdrop-blur-sm

        transition-colors
        duration-700

        group-hover:border-[#713047]/75

        sm:grid-cols-[190px_minmax(0,1fr)]

        xl:grid-cols-[220px_minmax(0,1fr)]
      "
    >
      {/* =================================================
          BRAND / INFO
      ================================================== */}

      <div
        className="
          relative
          z-20

          flex
          min-h-52
          flex-col
          justify-between

          overflow-hidden

          border-b
          border-white/10

          bg-[#0d090a]/85

          p-5

          sm:min-h-0
          sm:border-b-0
          sm:border-r
          sm:p-6

          xl:p-7
        "
      >
        {/* AMBIENT */}

        <div
          aria-hidden="true"
          className="
            absolute
            -left-24
            top-[10%]

            size-64

            rounded-full

            bg-[#591323]/20

            blur-3xl

            transition-colors
            duration-700

            group-hover:bg-[#7a1f3c]/30
          "
        />

        {/* TOP */}

        <div
          className="
            relative
            z-10

            flex
            items-start
            justify-between
            gap-5

            sm:block
          "
        >
          <span
            className="
              text-[7px]
              tracking-[0.27em]

              text-[#c45a78]
            "
          >
            {client.number}
          </span>

          {/* LOGO */}

          <div
            className="
              flex
              h-20
              w-36

              items-center
              justify-center

              sm:mt-10
              sm:h-28
              sm:w-full
            "
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={320}
              height={180}
              style={{
                transform: `scale(${client.logoScale ?? 1})`,
              }}
              className="
                max-h-full
                max-w-full

                object-contain
              "
            />
          </div>
        </div>

        {/* INFO */}

        <div
          className="
            relative
            z-10

            mt-7

            sm:mt-12
          "
        >
          <p
            className="
              text-[7px]
              uppercase
              tracking-[0.24em]

              text-white/30
            "
          >
            {isExternal ? "Dijital Deneyim" : "Selected Work"}
          </p>

          <p
            className="
              mt-3

              font-serif
              text-[1.8rem]
              leading-[0.95]
              tracking-[-0.045em]

              text-[#f4efe9]
            "
          >
            {client.summary}
          </p>

          {/* ==========================================
              DESKTOP HOVER DETAIL

              Görseller ASLA kapanmıyor.
              Yalnızca sol panel genişliyor.
          =========================================== */}

          {!isExternal && client.detail && (
            <div
              className="
                  hidden

                  max-h-0
                  overflow-hidden

                  opacity-0

                  transition-all
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  group-hover:max-h-40
                  group-hover:opacity-100

                  lg:block
                "
            >
              <p
                className="
                    mt-5

                    text-[11px]
                    leading-5

                    text-white/42
                  "
              >
                {client.detail}
              </p>
            </div>
          )}

          {/* SERVICES */}

          <div
            className="
              mt-5

              flex
              flex-wrap

              gap-x-3
              gap-y-2
            "
          >
            {client.services.map((service) => (
              <span
                key={service}
                className="
                    text-[6px]
                    uppercase
                    tracking-[0.18em]

                    text-[#c45a78]/75
                  "
              >
                {service}
              </span>
            ))}
          </div>

          {/* ACTION */}

          <div
            className="
              mt-6

              flex
              items-center
              justify-between
              gap-4

              border-t
              border-white/10

              pt-4
            "
          >
            <span
              className="
                text-[6px]
                uppercase
                tracking-[0.21em]

                text-white/35

                transition-colors
                duration-500

                group-hover:text-white/65
              "
            >
              {isExternal
                ? hasExternalUrl
                  ? "QR menüyü aç"
                  : "Site linki eklenecek"
                : "Projeyi görüntüle"}
            </span>

            <span
              aria-hidden="true"
              className="
                text-[#c45a78]

                transition-transform
                duration-500

                group-hover:translate-x-1
                group-hover:-translate-y-0.5
              "
            >
              ↗
            </span>
          </div>
        </div>

        {/* WINE EDGE */}

        <span
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0

            h-px
            w-12

            bg-[#591323]

            transition-all
            duration-700

            group-hover:w-full
            group-hover:bg-[#c45a78]/70
          "
        />
      </div>

      {/* =================================================
          9:16 PREVIEW
      ================================================== */}

      <div
        className="
          relative
          min-w-0

          bg-black/20

          p-3

          sm:p-4
          xl:p-5
        "
      >
        <div
          className={`
            grid

            h-full

            gap-2

            sm:gap-3

            ${previewCount === 2 ? "grid-cols-2" : "grid-cols-3"}
          `}
        >
          {Array.from({
            length: previewCount,
          }).map((_, index) => {
            const src = client.images[index];

            return (
              <div
                key={index}
                className="
                  relative

                  aspect-[1015/1350]
                  min-w-0

                  self-center

                  overflow-hidden

                  border
                  border-white/[0.08]

                  bg-[#0a0909]
                "
              >
                {src ? (
                  <Image
                    src={src}
                    alt={`${client.name} çalışması ${index + 1}`}
                    fill
                    sizes="
                      (max-width: 640px) 33vw,
                      (max-width: 1280px) 20vw,
                      260px
                    "
                    className="
                      object-cover

                      opacity-90

                      transition-all
                      duration-1000
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      group-hover:scale-[1.025]
                      group-hover:opacity-100
                    "
                  />
                ) : (
                  <PreviewPlaceholder client={client.name} index={index} />
                )}

                <span
                  className="
                    absolute
                    right-3
                    top-3
                    z-10

                    text-[6px]
                    tracking-[0.2em]

                    text-white/20
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>

        {/* MOBILE HINT */}

        <div
          className="
            pointer-events-none

            absolute
            bottom-5
            right-5

            flex
            size-10

            items-center
            justify-center

            border
            border-white/15

            bg-black/65

            text-[#c45a78]

            backdrop-blur-md

            sm:hidden
          "
        >
          ↗
        </div>
      </div>
    </div>
  );

  return (
    <>
      <article className="group">
        {/* =============================================
            DETAIL PROJECT
        ============================================== */}

        {client.hasDetail ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`${client.name} projesini görüntüle`}
            className="
              block
              w-full

              text-left

              focus-visible:outline-none
              focus-visible:ring-1
              focus-visible:ring-[#c45a78]
            "
          >
            {content}
          </button>
        ) : hasExternalUrl ? (
          /* ===========================================
             EXTERNAL QR MENU
          ============================================ */

          <a
            href={client.websiteUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${client.name} QR menüsünü görüntüle`}
            className="
              block
              w-full

              text-left

              focus-visible:outline-none
              focus-visible:ring-1
              focus-visible:ring-[#c45a78]
            "
          >
            {content}
          </a>
        ) : (
          /* URL HENÜZ YOK */

          <div className="w-full">{content}</div>
        )}
      </article>

      {/* =============================================
          MODAL
      ============================================== */}

      {client.hasDetail && (
        <ClientWorkModal
          client={client}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

/* =========================================================
   PREVIEW PLACEHOLDER
========================================================= */

function PreviewPlaceholder({
  client,
  index,
}: {
  client: string;
  index: number;
}) {
  return (
    <div
      className="
        absolute
        inset-0

        overflow-hidden
      "
      style={{
        background: `
          radial-gradient(
            circle at ${index % 2 === 0 ? "25% 75%" : "75% 25%"},
            rgba(110, 25, 52, 0.46),
            transparent 48%
          ),
          linear-gradient(
            160deg,
            #17090e 0%,
            #0a0909 58%,
            #12070b 100%
          )
        `,
      }}
    >
      {/* POST FRAME */}

      <div
        className="
          absolute
          inset-[7%]

          border
          border-white/[0.055]
        "
      >
        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-white/[0.05]

            p-3
          "
        >
          <span
            className="
              max-w-[70%]

              truncate

              text-[5px]
              uppercase
              tracking-[0.2em]

              text-white/20
            "
          >
            {client}
          </span>

          <span
            className="
              size-1

              rotate-45

              bg-[#c45a78]/50
            "
          />
        </div>

        <div
          className="
            absolute
            bottom-4
            left-4
          "
        >
          <span
            className="
              font-serif
              text-[clamp(2.5rem,4vw,4.5rem)]
              italic
              tracking-[-0.07em]

              text-white/[0.055]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div
            className="
              mt-2

              h-px
              w-8

              bg-[#591323]
            "
          />
        </div>
      </div>
    </div>
  );
}
