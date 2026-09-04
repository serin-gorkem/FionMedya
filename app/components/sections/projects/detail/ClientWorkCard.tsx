"use client";

import Image from "next/image";
import { useState } from "react";

import ClientWorkModal from "./ClientWorkModal";

import type {
  ClientWork,
} from "./projects-clients.data";

type ClientWorkCardProps = {
  client: ClientWork;
};

/* =========================================================
   CLIENT WORK CARD

   0 image:
   compact editorial card

   1 image:
   compact horizontal card
   visual max width is limited

   2+:
   actual visual grid

   Images are never stretched.
========================================================= */

export default function ClientWorkCard({
  client,
}: ClientWorkCardProps) {
  const [open, setOpen] =
    useState(false);

  const visuals =
    client.images.filter(Boolean);

  const visualCount =
    visuals.length;

  const hasVisuals =
    visualCount > 0;

  const hasSingleVisual =
    visualCount === 1;

  const isExternal =
    !client.hasDetail;

  const externalUrl =
    client.websiteUrl?.trim() ??
    "";

  const hasExternalUrl =
    /^https?:\/\//i.test(
      externalUrl,
    );

  const normalizedServices =
    client.services.map(
      (service) =>
        service.toLocaleLowerCase(
          "tr-TR",
        ),
    );

  const isQrMenu =
    normalizedServices.some(
      (service) =>
        service.includes("qr"),
    );

  const isPrintedMenu =
    normalizedServices.some(
      (service) =>
        service.includes(
          "menü tasarımı",
        ),
    );

  /* =====================================================
     LABEL
  ====================================================== */

  const infoLabel =
    isQrMenu
      ? "Dijital Deneyim"
      : isPrintedMenu
        ? "Basılı Tasarım"
        : "Selected Work";

  /* =====================================================
     ACTION
  ====================================================== */

  const actionLabel =
    client.hasDetail
      ? "Projeyi görüntüle"
      : hasExternalUrl
        ? isQrMenu
          ? "QR menüyü aç"
          : "Projeyi aç"
        : null;

  /* =====================================================
     MULTI VISUAL GRID
  ====================================================== */

  const multiVisualGrid =
    visualCount === 2
      ? "grid-cols-2"
      : visualCount === 3
        ? "grid-cols-2 sm:grid-cols-3"
        : "grid-cols-2";

  /* =====================================================
     CONTENT
  ====================================================== */

  const content = (
    <div
      className={`
        relative

        grid
        overflow-hidden

        border
        border-white/10

        bg-[#090708]/78

        transition-colors
        duration-500

        group-hover:border-[#713047]/75

        ${
          hasVisuals
            ? `
              sm:grid-cols-[180px_minmax(0,1fr)]
              xl:grid-cols-[200px_minmax(0,1fr)]
            `
            : `
              grid-cols-1
            `
        }
      `}
    >
      {/* =================================================
          BRAND / INFO
      ================================================== */}

      <div
        className={`
          relative
          z-20

          flex
          flex-col

          overflow-hidden

          bg-[#0d090a]/88

          p-5

          sm:p-6
          xl:p-7

          ${
            hasVisuals
              ? `
                min-h-[270px]

                border-b
                border-white/10

                sm:min-h-[340px]
                sm:border-b-0
                sm:border-r
              `
              : `
                min-h-[280px]

                sm:min-h-[310px]
              `
          }
        `}
      >
        {/* =============================================
            AMBIENT
        ============================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute

            -left-24
            top-8

            size-56

            rounded-full

            bg-[#591323]/18

            blur-3xl
          "
        />

        {/* =============================================
            NUMBER
        ============================================== */}

        <span
          className="
            relative
            z-10

            text-[7px]
            tracking-[0.27em]

            text-[#c45a78]
          "
        >
          {client.number}
        </span>

        {/* =============================================
            NORMALIZED LOGO VIEWPORT

            Every logo gets the same visual stage.
            No more giant Kule / tiny Byron.
        ============================================== */}

        <div
          className={`
            relative
            z-10

            mt-9

            ${
              hasVisuals
                ? `
                  h-[72px]
                  w-[145px]
                `
                : `
                  h-[80px]
                  w-[200px]

                  sm:w-[220px]
                `
            }
          `}
        >
          <Image
            src={client.logo}
            alt={client.name}
            fill
            sizes={
              hasVisuals
                ? "145px"
                : "220px"
            }
            className="
              object-contain
              object-left
            "
          />
        </div>

        {/* =============================================
            TEXT
        ============================================== */}

        <div
          className="
            relative
            z-10

            mt-auto
            pt-9
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
            {infoLabel}
          </p>

          <p
            className={`
              mt-3

              font-serif

              tracking-[-0.045em]

              text-[#f4efe9]

              ${
                hasVisuals
                  ? `
                    text-[1.75rem]
                    leading-[0.95]
                  `
                  : `
                    max-w-[520px]

                    text-[clamp(2.2rem,4vw,3.8rem)]

                    leading-[0.9]
                    tracking-[-0.055em]
                  `
              }
            `}
          >
            {client.summary}
          </p>

          {/* ==========================================
              HOVER DETAIL

              Only real detail projects.
          =========================================== */}

          {!isExternal &&
            client.detail && (
              <div
                className="
                  hidden

                  overflow-hidden

                  lg:block
                "
              >
                <p
                  className="
                    mt-4

                    max-w-[360px]

                    text-[10px]
                    leading-5

                    text-white/0

                    transition-colors
                    duration-500

                    group-hover:text-white/40
                  "
                >
                  {client.detail}
                </p>
              </div>
            )}

          {/* ==========================================
              SERVICES
          =========================================== */}

          <div
            className="
              mt-4

              flex
              flex-wrap

              gap-x-3
              gap-y-2
            "
          >
            {client.services.map(
              (service) => (
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
              ),
            )}
          </div>

          {/* ==========================================
              ACTION
          =========================================== */}

          {actionLabel && (
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
                  duration-300

                  group-hover:text-white/65
                "
              >
                {actionLabel}
              </span>

              <span
                aria-hidden="true"
                className="
                  text-[#c45a78]

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-0.5
                "
              >
                ↗
              </span>
            </div>
          )}
        </div>

        {/* =============================================
            WINE EDGE
        ============================================== */}

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
            duration-500

            group-hover:w-full
            group-hover:bg-[#c45a78]/70
          "
        />
      </div>

      {/* =================================================
          SINGLE VISUAL

          Important:
          Does NOT fill the entire right side.

          4:5 viewport + object-contain.
          Result: compact horizontal project card.
      ================================================== */}

      {hasSingleVisual && (
        <div
          className="
            relative

            flex
            min-w-0

            items-center
            justify-center

            bg-black/20

            p-5

            sm:min-h-[340px]
            sm:p-6
          "
        >
          <ProjectVisual
            src={visuals[0]}
            clientName={
              client.name
            }
            index={0}
            single
          />
        </div>
      )}

      {/* =================================================
          MULTIPLE VISUALS

          No placeholder.
          No forced 3 cards.
      ================================================== */}

      {visualCount >= 2 && (
        <div
          className="
            relative
            min-w-0

            flex
            items-center

            bg-black/20

            p-3

            sm:p-4
            xl:p-5
          "
        >
          <div
            className={`
              grid
              w-full

              gap-2

              sm:gap-3

              ${multiVisualGrid}
            `}
          >
            {visuals.map(
              (
                src,
                index,
              ) => (
                <ProjectVisual
                  key={`${src}-${index}`}
                  src={src}
                  clientName={
                    client.name
                  }
                  index={
                    index
                  }
                />
              ),
            )}
          </div>

          {/* MOBILE HINT */}

          {(client.hasDetail ||
            hasExternalUrl) && (
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
          )}
        </div>
      )}
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
            onClick={() =>
              setOpen(true)
            }
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
             EXTERNAL
          ============================================ */

          <a
            href={
              externalUrl
            }
            target="_blank"
            rel="noreferrer"
            aria-label={
              isQrMenu
                ? `${client.name} QR menüsünü görüntüle`
                : `${client.name} projesini görüntüle`
            }
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
          /* ===========================================
             STATIC PROJECT
          ============================================ */

          <div className="w-full">
            {content}
          </div>
        )}
      </article>

      {/* =============================================
          MODAL

          Only actual detail projects.
      ============================================== */}

      {client.hasDetail && (
        <ClientWorkModal
          client={client}
          open={open}
          onClose={() =>
            setOpen(false)
          }
        />
      )}
    </>
  );
}

/* =========================================================
   PROJECT VISUAL

   Actual project assets in the ZIP are almost all
   between 3:4 and 4:5.

   We use a 4:5 stage but object-contain means:
   - never stretched
   - never cropped
   - native image ratio remains intact
========================================================= */

type ProjectVisualProps = {
  src: string;
  clientName: string;
  index: number;
  single?: boolean;
};

function ProjectVisual({
  src,
  clientName,
  index,
  single = false,
}: ProjectVisualProps) {
  return (
    <div
      className={`
        group/visual
        relative

        aspect-[4/5]

        overflow-hidden

        border
        border-white/[0.08]

        bg-[#070607]

        ${
          single
            ? `
              w-full
              max-w-[250px]

              sm:max-w-[260px]
              xl:max-w-[280px]
            `
            : `
              w-full
              min-w-0
            `
        }
      `}
    >
      <Image
        src={src}
        alt={`${clientName} çalışması ${index + 1}`}
        fill
        sizes={
          single
            ? "280px"
            : `
              (max-width: 640px) 45vw,
              (max-width: 1280px) 22vw,
              220px
            `
        }
        className="
          object-contain

          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          lg:group-hover/visual:scale-[1.015]
        "
      />

      <span
        className="
          absolute
          right-3
          top-3
          z-10

          text-[6px]
          tracking-[0.2em]

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
  );
}