import type {
  Metadata,
} from "next";

import {
  notFound,
} from "next/navigation";

import BlogArticle from "@/app/components/sections/blog/BlogArticle";
import BlogEditorialBackground from "@/app/components/sections/blog/BlogEditorialBackground";
import BlogJournalHeader from "@/app/components/sections/blog/BlogJournalHeader";
import BlogReadingProgress from "@/app/components/sections/blog/BlogReadingProgress";

import {
  requireAdmin,
} from "@/features/auth/admin-auth";

import {
  createBlogService,
} from "@/features/blog/blog.server";

type BlogPreviewPageProps = {
  params: Promise<{
    id: string;
  }>;
};

/* =========================================================
   PREVIEW SEO

   Kesinlikle indexlenmesin.
========================================================= */

export const metadata: Metadata = {
  title:
    "Blog Önizleme",

  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

/* =========================================================
   PAGE
========================================================= */

export default async function BlogPreviewPage({
  params,
}: BlogPreviewPageProps) {
  /*
   * Bu route public klasörde ama
   * yalnızca admin oturumu olan kişi görebilir.
   *
   * Admin değilse /admin/login'e gider.
   */
  await requireAdmin();

  const {
    id,
  } = await params;

  const service =
    await createBlogService();

  /*
   * getById kullanıyoruz.
   *
   * Böylece status draft olsa bile
   * yazıyı okuyabiliyoruz.
   */
  const post =
    await service.getById(
      id,
    );

  if (!post) {
    notFound();
  }

  /*
   * Related alanı boş kalmasın.
   *
   * Preview edilen draft'ı related listesine
   * sokmuyoruz.
   */
  const publishedPosts =
    await service.getPublished(
      5,
    );

  const relatedPosts =
    publishedPosts
      .filter(
        (candidate) =>
          candidate.id !==
          post.id,
      )
      .slice(
        0,
        2,
      );

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
          BACKGROUND
      ============================================== */}

      <BlogEditorialBackground />

      {/* =============================================
          JOURNAL HEADER
      ============================================== */}

      <BlogJournalHeader />

      {/* =============================================
          READING PROGRESS
      ============================================== */}

      <BlogReadingProgress />

      {/* =============================================
          PREVIEW BADGE
      ============================================== */}

      <div
        className="
          fixed
          right-4
          top-[92px]
          z-[80]

          flex
          items-center
          gap-3

          border
          border-[#d86a88]/35

          bg-black/80

          px-4
          py-3

          backdrop-blur-xl

          sm:right-6
        "
      >
        <span
          className="
            size-1.5

            rotate-45

            bg-[#d86a88]
          "
        />

        <div>
          <p
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.22em]

              text-[#ef9eb4]
            "
          >
            Taslak Önizleme
          </p>

          <p
            className="
              mt-1

              text-[9px]

              text-white/35
            "
          >
            Bu sayfa yalnızca admin tarafından görülebilir.
          </p>
        </div>
      </div>

      {/* =============================================
          ARTICLE
      ============================================== */}

      <div className="relative z-10">
        <BlogArticle
          post={post}
          relatedPosts={
            relatedPosts
          }
        />
      </div>
    </main>
  );
}