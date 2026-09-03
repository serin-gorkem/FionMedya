import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import BlogArticle from "@/app/components/blog/public/BlogArticle";
import BlogEditorialBackground from "@/app/components/blog/public/BlogEditorialBackground";
import BlogReadingProgress from "@/app/components/blog/public/BlogReadingProgress";

import { createBlogService } from "@/features/blog/blog.server";

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
  const { slug } = await params;

  const service =
    await createBlogService();

  const post =
    await service.getPublishedBySlug(
      slug,
    );

  if (!post) {
    return {
      title:
        "Yazı Bulunamadı | Fion Medya",
    };
  }

  const title =
    post.seoTitle ||
    `${post.title} | Fion Medya`;

  const description =
    post.seoDescription ||
    post.excerpt;

  return {
    title,

    description,

    alternates: {
      canonical:
        `/blog/${post.slug}`,
    },

    openGraph: {
      type: "article",

      title,

      description,

      publishedTime:
        post.publishedAt ??
        undefined,

      modifiedTime:
        post.updatedAt,

      images:
        post.coverImageUrl
          ? [
              {
                url:
                  post.coverImageUrl,
              },
            ]
          : undefined,
    },

    twitter: {
      card:
        post.coverImageUrl
          ? "summary_large_image"
          : "summary",

      title,

      description,

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

export const dynamic =
  "force-dynamic";

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

  /* =======================================================
     RELATED POSTS
  ======================================================== */

  const publishedPosts =
    await service.getPublished(5);

  const relatedPosts =
    publishedPosts
      .filter(
        (candidate) =>
          candidate.id !==
          post.id,
      )
      .slice(0, 2);

  /* =======================================================
     STRUCTURED DATA
  ======================================================== */

  const siteUrl =
    process.env
      .NEXT_PUBLIC_SITE_URL ??
    "https://fionmedya.com";

  const articleUrl =
    `${siteUrl}/blog/${post.slug}`;

  const structuredData = {
    "@context":
      "https://schema.org",

    "@type":
      "BlogPosting",

    headline:
      post.title,

    description:
      post.seoDescription ||
      post.excerpt,

    datePublished:
      post.publishedAt,

    dateModified:
      post.updatedAt,

    mainEntityOfPage: {
      "@type":
        "WebPage",

      "@id":
        articleUrl,
    },

    author: {
      "@type":
        "Organization",

      name:
        "Fion Medya",
    },

    publisher: {
      "@type":
        "Organization",

      name:
        "Fion Medya",

      url:
        siteUrl,
    },

    ...(post.coverImageUrl
      ? {
          image: [
            post.coverImageUrl,
          ],
        }
      : {}),
  };

  return (
    <main
      className="
        relative
        isolate

        min-h-screen
        overflow-x-clip

        bg-[#0d090a]

        px-6

        text-[#f4efe9]

        sm:px-10
      "
    >
      {/* ================================================
          JSON-LD
      ================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              structuredData,
            ).replace(
              /</g,
              "\\u003c",
            ),
        }}
      />

      {/* ================================================
          BACKGROUND
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-0
        "
      >
        <BlogEditorialBackground />
      </div>

      {/* ================================================
          TOP BAR
      ================================================= */}

      <header
        className="
          fixed
          left-0
          right-0
          top-0
          z-50

          border-b
          border-white/[0.07]

          bg-[#0d090a]/65

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

                text-[#c45a78]

                sm:block
              "
            >
              Journal
            </span>

            <Link
              href="/blog"
              className="
                text-[8px]
                uppercase
                tracking-[0.22em]

                text-white/45

                transition-colors
                duration-300

                hover:text-white
              "
            >
              ← Yazılar
            </Link>
          </div>
        </div>
      </header>

      <BlogReadingProgress />

      {/* ================================================
          ARTICLE
      ================================================= */}

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