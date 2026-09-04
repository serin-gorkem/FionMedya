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
  createBlogService,
} from "@/features/blog/blog.server";

const siteUrl =
  "https://fionmedya.com";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } =
    await params;

  const service =
    await createBlogService();

  const post =
    await service.getPublishedBySlug(
      slug,
    );

  if (!post) {
    return {
      title:
        "Yazı Bulunamadı",
    };
  }

  const canonicalUrl =
    `${siteUrl}/blog/${post.slug}`;

  return {
    title:
      post.seoTitle ||
      `${post.title}`,

    description:
      post.seoDescription ||
      post.excerpt,

    alternates: {
      canonical:
        `/blog/${post.slug}`,
    },

    openGraph: {
      type: "article",

      title:
        post.seoTitle ||
        post.title,

      description:
        post.seoDescription ||
        post.excerpt,

      url: canonicalUrl,

      siteName: "Fion Medya",

      images: post.coverImageUrl
        ? [
            {
              url:
                post.coverImageUrl,
              alt:
                post.title,
            },
          ]
        : undefined,

      publishedTime:
        post.publishedAt ||
        undefined,
    },

    twitter: {
      card:
        "summary_large_image",

      title:
        post.seoTitle ||
        post.title,

      description:
        post.seoDescription ||
        post.excerpt,

      images:
        post.coverImageUrl
          ? [
              post.coverImageUrl,
            ]
          : undefined,
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } =
    await params;

  const service =
    await createBlogService();

  const post =
    await service.getPublishedBySlug(
      slug,
    );

  if (!post) {
    notFound();
  }

  /*
   * Önce yayınlanmış yazıları alıyoruz,
   * sonra mevcut yazıyı çıkarıp
   * maksimum 2 ilgili yazı gösteriyoruz.
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
      .slice(0, 2);

  /* =====================================================
     ARTICLE STRUCTURED DATA
  ====================================================== */

  const articleJsonLd = {
    "@context":
      "https://schema.org",

    "@type":
      "BlogPosting",

    headline:
      post.title,

    description:
      post.excerpt,

    image:
      post.coverImageUrl
        ? [
            post.coverImageUrl,
          ]
        : undefined,

    datePublished:
      post.publishedAt ||
      undefined,

    author: {
      "@type":
        "Organization",

      name:
        "Fion Medya",

      url:
        siteUrl,
    },

    publisher: {
      "@type":
        "Organization",

      name:
        "Fion Medya",

      url:
        siteUrl,

      logo: {
        "@type":
          "ImageObject",

        url:
          `${siteUrl}/fion-logo.png`,
      },
    },

    mainEntityOfPage: {
      "@type":
        "WebPage",

      "@id":
        `${siteUrl}/blog/${post.slug}`,
    },
  };

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
          JOURNAL ATMOSPHERE
      ============================================== */}

      <BlogEditorialBackground />

      {/* =============================================
          FION LOGO HEADER
      ============================================== */}

      <BlogJournalHeader />

      {/* =============================================
          READING PROGRESS
      ============================================== */}

      <BlogReadingProgress />

      {/* =============================================
          JSON-LD
      ============================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              articleJsonLd,
            ),
        }}
      />

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