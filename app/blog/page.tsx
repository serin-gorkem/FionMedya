import type {
  Metadata,
} from "next";

import BlogHero from "@/app/components/sections/blog/BlogHero";
import BlogGrid from "@/app/components/sections/blog/BlogGrid";

import BlogEditorialBackground from "@/app/components/sections/blog/BlogEditorialBackground";
import BlogJournalHeader from "@/app/components/sections/blog/BlogJournalHeader";

import DetailContactCTA from "@/app/components/pages/DetailContactCTA";

import {
  createBlogService,
} from "@/features/blog/blog.server";

export const metadata: Metadata = {
  title: "Blog",

  description:
    "Sosyal medya, reklam, grafik tasarım ve marka stratejisi üzerine Fion Medya notları; işletmeler için fikirler, rehberler ve vaka çalışmaları.",

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Fion Journal",

    description:
      "Sosyal medya, reklam, tasarım ve marka iletişimi üzerine fikirler, rehberler ve vaka çalışmaları.",

    type: "website",

    siteName: "Fion Medya",
  },
};

export const dynamic =
  "force-dynamic";

export default async function BlogPage() {
  const service =
    await createBlogService();

  const posts =
    await service.getPublished();

  return (
    <main
      className="
        relative
        isolate

        min-h-screen

        overflow-x-clip

        bg-[#171214]
        text-[#f4efe9]
      "
    >
      {/* =============================================
          EDITORIAL BACKGROUND
      ============================================== */}

      <BlogEditorialBackground />

      {/* =============================================
          FION LOGO / JOURNAL HEADER
      ============================================== */}

      <BlogJournalHeader />

      {/* =============================================
          PAGE
      ============================================== */}

      <div className="relative z-10">
        {/* ===========================================
            HERO
        ============================================ */}

        <div
          className="
            mx-auto
            max-w-[1500px]

            px-5

            sm:px-8
            lg:px-12
          "
        >
          <BlogHero />
        </div>

        {/* ===========================================
            INDEX BAR
        ============================================ */}

        <section
          className="
            relative
            left-1/2

            w-screen
            -translate-x-1/2

            border-y
            border-white/10
          "
        >
          <div
            className="
              mx-auto

              flex
              min-h-24
              max-w-[1500px]

              flex-col
              justify-center
              gap-5

              px-5
              py-6

              sm:flex-row
              sm:items-center
              sm:justify-between

              sm:px-8
              lg:px-12
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <span
                aria-hidden="true"
                className="
                  size-1.5

                  rotate-45

                  bg-[#d36b88]
                "
              />

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.3em]

                  text-[#d36b88]
                "
              >
                Journal Index
              </span>

              <span
                aria-hidden="true"
                className="
                  h-px
                  w-10

                  bg-[#7c2a43]
                "
              />
            </div>

            <div
              className="
                flex
                items-center
                gap-6
              "
            >
              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.23em]

                  text-white/40
                "
              >
                {posts.length
                  .toString()
                  .padStart(
                    2,
                    "0",
                  )}{" "}
                yazı
              </span>

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.23em]

                  text-white/30
                "
              >
                Fion / Journal
              </span>
            </div>
          </div>
        </section>

        {/* ===========================================
            ARTICLES
        ============================================ */}

        <section
          className="
            mx-auto
            max-w-[1500px]

            px-5

            sm:px-8
            lg:px-12
          "
        >
          {posts.length > 0 ? (
            <BlogGrid
              posts={posts}
            />
          ) : (
            <div
              className="
                flex
                min-h-[420px]

                items-center
                justify-center

                border-b
                border-white/10
              "
            >
              <div className="text-center">
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]

                    text-[#d36b88]
                  "
                >
                  Fion Journal
                </p>

                <p
                  className="
                    mt-5

                    font-serif
                    text-4xl
                    tracking-[-0.05em]

                    text-[#f4efe9]
                  "
                >
                  İlk notlar
                  hazırlanıyor.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* ===========================================
            JOURNAL END
        ============================================ */}

        {posts.length > 0 && (
          <div
            className="
              mx-auto
              max-w-[1500px]

              px-5
              pb-20
              pt-8

              sm:px-8
              sm:pb-24

              lg:px-12
              lg:pb-28
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5

                border-t
                border-white/10

                pt-5

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.26em]

                  text-white/30
                "
              >
                Fikir · Strateji · Tasarım · Dijital
              </span>

              <span
                className="
                  font-serif
                  text-lg
                  italic

                  text-white/40
                "
              >
                Sıradan olanı unut.
              </span>
            </div>
          </div>
        )}

        {/* ===========================================
            COMMON CTA
        ============================================ */}

        <DetailContactCTA />
      </div>
    </main>
  );
}