"use client";

import {
  useEffect,
  useState,
} from "react";

import Image from "next/image";

import BlogArticleContent from "@/app/components/sections/blog/BlogArticleContent";
import BlogEditorialBackground from "@/app/components/sections/blog/BlogEditorialBackground";

import {
  getReadingTime,
} from "@/features/blog/blog.reading-time";

type BlogPreviewProps = {
  title: string;

  excerpt: string;

  contentHtml: string;

  coverImageUrl:
    | string
    | null;

  category: string;

  tags: string[];

  onClose: () => void;
};

type PreviewViewport =
  | "desktop"
  | "mobile";

export default function BlogPreview({
  title,
  excerpt,
  contentHtml,
  coverImageUrl,
  category,
  tags,
  onClose,
}: BlogPreviewProps) {
  const [
    viewport,
    setViewport,
  ] =
    useState<PreviewViewport>(
      "desktop",
    );

  const readingTime =
    getReadingTime(
      contentHtml,
    );

  useEffect(() => {
    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key ===
        "Escape"
      ) {
        onClose();
      }
    };

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
    onClose,
  ]);

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]

        isolate

        overflow-y-auto

        bg-[#171214]

        text-[#f4efe9]
      "
    >
      <BlogEditorialBackground />

      {/* =============================================
          PREVIEW BAR
      ============================================== */}

      <header
        className="
          sticky
          top-0
          z-40

          border-b
          border-white/10

          bg-[#100d0e]/95

          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto

            flex
            h-[70px]
            max-w-[1500px]

            items-center
            justify-between
            gap-5

            px-4

            sm:px-6
            lg:px-10
          "
        >
          {/* BRAND */}

          <div
            className="
              flex
              items-center
              gap-5
            "
          >
            <div
              className="
                relative

                h-8
                w-[102px]
              "
            >
              <Image
                src="/fion-logo.png"
                alt="Fion Medya"
                fill
                priority
                sizes="102px"
                className="
                  object-contain
                  object-left
                "
              />
            </div>

            <span
              className="
                hidden

                h-px
                w-7

                bg-[#7c2a43]

                sm:block
              "
            />

            <span
              className="
                hidden

                text-[7px]
                uppercase
                tracking-[0.24em]

                text-white/35

                sm:block
              "
            >
              Live Preview
            </span>
          </div>

          {/* CONTROLS */}

          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <div
              className="
                hidden

                border
                border-white/10

                bg-black/20

                p-1

                sm:flex
              "
            >
              <PreviewButton
                active={
                  viewport ===
                  "desktop"
                }
                onClick={() =>
                  setViewport(
                    "desktop",
                  )
                }
              >
                Desktop
              </PreviewButton>

              <PreviewButton
                active={
                  viewport ===
                  "mobile"
                }
                onClick={() =>
                  setViewport(
                    "mobile",
                  )
                }
              >
                Mobile
              </PreviewButton>
            </div>

            <button
              type="button"
              onClick={
                onClose
              }
              className="
                flex
                h-10
                items-center
                gap-3

                border
                border-white/10

                px-4

                text-[8px]
                uppercase
                tracking-[0.2em]

                text-white/55

                transition-colors

                hover:border-[#d36b88]/40
                hover:text-white
              "
            >
              Kapat

              <span
                className="
                  text-[#d36b88]
                "
              >
                ×
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* =============================================
          DEVICE CANVAS
      ============================================== */}

      <div
        className="
          relative
          z-10

          min-h-[calc(100vh-70px)]

          bg-black/20

          px-0
          py-0

          sm:px-6
          sm:py-8
        "
      >
        <div
          className={`
            relative

            mx-auto

            min-h-screen

            overflow-hidden

            bg-[#171214]

            transition-[width]
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              viewport ===
              "mobile"
                ? `
                  max-w-[430px]

                  border-x
                  border-white/10

                  shadow-2xl
                  shadow-black/50
                `
                : `
                  max-w-[1500px]
                `
            }
          `}
        >
          {/* =========================================
              JOURNAL HEADER
          ========================================== */}

          <div
            className="
              flex
              h-[76px]

              items-center
              justify-between

              border-b
              border-white/10

              px-5

              sm:px-8
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  relative

                  h-8
                  w-[105px]
                "
              >
                <Image
                  src="/fion-logo.png"
                  alt="Fion Medya"
                  fill
                  sizes="105px"
                  className="
                    object-contain
                    object-left
                  "
                />
              </div>

              <span
                className="
                  h-px
                  w-6
                  bg-[#7c2a43]
                "
              />

              <span
                className="
                  text-[6px]
                  uppercase
                  tracking-[0.23em]

                  text-white/35
                "
              >
                Journal
              </span>
            </div>

            <span
              className="
                flex
                items-center
                gap-2

                text-[6px]
                uppercase
                tracking-[0.23em]

                text-[#d36b88]
              "
            >
              <span
                className="
                  size-1
                  rotate-45

                  bg-[#d36b88]
                "
              />

              Fion Journal
            </span>
          </div>

          {/* =========================================
              HERO
          ========================================== */}

          <header
            className={`
              px-5
              pb-14
              pt-16

              ${
                viewport ===
                "desktop"
                  ? `
                    sm:px-10
                    sm:pb-20
                    sm:pt-20
                    lg:px-14
                  `
                  : ""
              }
            `}
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-2

                border-b
                border-white/10

                pb-4
              "
            >
              <span
                className="
                  flex
                  items-center
                  gap-2

                  text-[7px]
                  uppercase
                  tracking-[0.27em]

                  text-[#d36b88]
                "
              >
                <span
                  className="
                    size-1
                    rotate-45
                    bg-[#d36b88]
                  "
                />

                {category ||
                  "Genel"}
              </span>

              <span
                className="
                  text-[6px]
                  uppercase
                  tracking-[0.22em]

                  text-white/35
                "
              >
                {readingTime} dk
                okuma
              </span>
            </div>

            <h1
              className={`
                mt-10

                max-w-[1100px]

                font-serif

                leading-[0.84]
                tracking-[-0.065em]

                text-[#f4efe9]

                ${
                  viewport ===
                  "mobile"
                    ? "text-[3.7rem]"
                    : "text-[clamp(4rem,7vw,8.5rem)]"
                }
              `}
            >
              {title ||
                "Yazının başlığı burada görünecek."}
            </h1>

            <p
              className={`
                mt-10

                max-w-[680px]

                font-serif

                leading-[1.35]
                tracking-[-0.02em]

                text-white/65

                ${
                  viewport ===
                  "mobile"
                    ? "text-xl"
                    : "text-[clamp(1.3rem,1.8vw,1.8rem)]"
                }
              `}
            >
              {excerpt ||
                "Kısa özet burada görünecek."}
            </p>

            {tags.length >
              0 && (
              <div
                className="
                  mt-7

                  flex
                  flex-wrap
                  gap-x-4
                  gap-y-2
                "
              >
                {tags.map(
                  (tag) => (
                    <span
                      key={
                        tag
                      }
                      className="
                        text-[6px]
                        uppercase
                        tracking-[0.19em]

                        text-[#d36b88]/80
                      "
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            )}
          </header>

          {/* =========================================
              COVER
          ========================================== */}

          {coverImageUrl && (
            <div
              className={`
                ${
                  viewport ===
                  "desktop"
                    ? "px-5 sm:px-10 lg:px-14"
                    : "px-5"
                }
              `}
            >
              <div
                role="img"
                aria-label={`${title || "Blog"} kapak görseli`}
                className="
                  aspect-[16/9]
                  w-full

                  border-y
                  border-white/10

                  bg-black/20
                  bg-cover
                  bg-center
                  bg-no-repeat
                "
                style={{
                  backgroundImage:
                    `url("${coverImageUrl}")`,
                }}
              />
            </div>
          )}

          {/* =========================================
              ARTICLE
          ========================================== */}

          <section
            className="
              mx-auto

              max-w-[900px]

              px-5
              py-16

              sm:px-8
              sm:py-24
            "
          >
            {contentHtml ? (
              <BlogArticleContent
                html={
                  contentHtml
                }
              />
            ) : (
              <p
                className="
                  font-serif
                  text-2xl
                  italic

                  text-white/25
                "
              >
                İçeriği yazmaya
                başladığında burada
                görünecek.
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function PreviewButton({
  children,
  active,
  onClick,
}: {
  children:
    React.ReactNode;

  active:
    boolean;

  onClick:
    () => void;
}) {
  return (
    <button
      type="button"
      onClick={
        onClick
      }
      className={`
        h-8
        px-3

        text-[7px]
        uppercase
        tracking-[0.18em]

        transition-colors

        ${
          active
            ? `
              bg-[#591323]/45
              text-[#f4efe9]
            `
            : `
              text-white/30
              hover:text-white/70
            `
        }
      `}
    >
      {children}
    </button>
  );
}