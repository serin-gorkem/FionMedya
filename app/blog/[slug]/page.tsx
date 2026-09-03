import type {
  Metadata,
} from "next";

import {
  notFound,
} from "next/navigation";

import BlogArticle from "@/app/components/blog/public/BlogArticle";

import {
  createBlogService,
} from "@/features/blog/blog.server";

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
  const {
    slug,
  } = await params;

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
  const {
    slug,
  } = await params;

  const service =
    await createBlogService();

  const post =
    await service.getPublishedBySlug(
      slug,
    );

  if (!post) {
    notFound();
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
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
        min-h-screen
        bg-black
        px-6
        text-[#f4efe9]
        sm:px-10
      "
    >
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

      <BlogArticle
        post={post}
      />
    </main>
  );
}