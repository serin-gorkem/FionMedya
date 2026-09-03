import type {
  Metadata,
} from "next";

import Image from "next/image";
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
        bg-[#0d080a]
        text-ivory
      "
    >
      {/* TOP NAV */}

      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-50

          border-b
          border-white/[0.07]

          bg-[#0d080a]/80

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
            aria-label="Fion Medya ana sayfa"
            className="
              transition-opacity
              duration-300
              hover:opacity-75
            "
          >
            <Image
              src="/fion-logo.png"
              alt="Fion Medya"
              width={100}
              height={38}
              priority
              className="
                h-auto
                w-20
                brightness-0
                invert

                sm:w-[104px]
              "
            />
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
                tracking-[0.28em]
                text-wine-light

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
                text-white/40

                transition-colors
                duration-300

                hover:text-white
              "
            >
              ← Ana sayfa
            </Link>
          </div>
        </div>
      </header>

      <div
        className="
          mx-auto
          max-w-[1500px]

          px-6
          sm:px-10
        "
      >
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
              text-white/35
            "
          >
            Son Yazılar
          </p>

          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.24em]
              text-white/25
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
            text-white/30

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            © 2026 Fion Medya
          </span>

          <Link
            href="/"
            className="
              text-white/45
              transition-colors
              hover:text-white
            "
          >
            Fion&apos;a dön →
          </Link>
        </footer>
      </div>
    </main>
  );
}