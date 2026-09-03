import type { MetadataRoute } from "next";

import { createBlogService } from "@/features/blog/blog.server";

function getSiteUrl() {
  const value =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://fionmedya.com";

  return value.replace(/\/+$/, "");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();

  const service = await createBlogService();

  const posts = await service.getPublished();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,

      lastModified: new Date(),

      changeFrequency: "weekly",

      priority: 1,
    },

    {
      url: `${siteUrl}/blog`,

      lastModified: new Date(),

      changeFrequency: "weekly",

      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,

    lastModified: new Date(post.updatedAt),

    changeFrequency: "monthly",

    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}