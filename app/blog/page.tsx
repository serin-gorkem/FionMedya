import type {
  Metadata,
} from "next";

import Link from "next/link";

import BlogHero from "@/app/components/blog/public/BlogHero";
import BlogGrid from "@/app/components/blog/public/BlogGrid";

import {
  createBlogService,
} from "@/features/blog/blog.server";

export const metadata:
  Metadata = {
  title:
    "Blog | Fion Medya",

  description:
    "Sosyal medya yönetimi, grafik tasarım, dijital reklam ve marka iletişimi üzerine Fion Medya blog yazıları.",

  alternates: {
    canonical: "/blog",
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
        min-h-screen
        bg-black
        text-[#f4efe9]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1500px]

          px-6

          sm:px-10
        "
      >
        {/* TOP NAV */}

        <div
          className="
            fixed
            left-0
            right-0
            top-0
            z-50

            border-b
            border-white/[0.06]

            bg-black/75

            backdrop-blur-xl
          "
        >
          <div
            className="
              mx-auto
              flex
              h-[76px]
              max-w-[1500px]
              items-center
              justify-between
              px-6
              sm:px-10
            "
          >
            <Link
              href="/"
              className="
                font-serif
                text-xl
                tracking-[-0.04em]
                text-[#f4efe9]
              "
            >
              Fion
            </Link>

            <div
              className="
                flex
                items-center
                gap-6
              "
            >
              <span
                className="
                  hidden
                  text-[8px]
                  uppercase
                  tracking-[0.26em]
                  text-[#c45a78]
                  sm:block
                "
              >
                Journal
              </span>

              <Link
                href="/"
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.24em]
                  text-white/35
                  transition-colors
                  hover:text-white
                "
              >
                Siteye dön ↗
              </Link>
            </div>
          </div>
        </div>

        <BlogHero />

        {/* LIST HEADER */}

        <div
          className="
            flex
            items-end
            justify-between

            border-t
            border-white/10

            pb-5
            pt-8
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-white/25
            "
          >
            Son Yazılar
          </p>

          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.24em]
              text-white/20
            "
          >
            {posts.length
              .toString()
              .padStart(
                2,
                "0",
              )}{" "}
            yazı
          </p>
        </div>

        <BlogGrid
          posts={posts}
        />

        {/* FOOTER */}

        <footer
          className="
            mt-20

            flex
            flex-col
            gap-5

            border-t
            border-white/10

            py-10

            text-[8px]
            uppercase
            tracking-[0.22em]
            text-white/24

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            © 2026 Fion Medya
          </span>

          <Link
            href="/#contact"
            className="
              text-white/40
              transition-colors
              hover:text-white
            "
          >
            Bir proje konuşalım →
          </Link>
        </footer>
      </div>
    </main>
  );
}