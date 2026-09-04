import sanitizeHtml from "sanitize-html";

import type { BlogPost, BlogPostInput } from "./blog.types";

import type { BlogRepository, CreateBlogRecord } from "./blog.repository";

import { createSlug } from "./blog.slug";

import { blogPostSchema } from "./blog.validation";

/* =========================================================
   HTML
========================================================= */

function cleanHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      "p",
      "br",

      "h2",
      "h3",

      "strong",
      "em",
      "u",
      "s",
      "mark",

      "a",

      "blockquote",

      "ul",
      "ol",
      "li",

      "pre",
      "code",

      "hr",

      "figure",
      "img",
      "figcaption",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],

      p: ["style"],
      h2: ["style"],
      h3: ["style"],

      blockquote: ["data-fion-callout"],

      figure: ["data-blog-image"],

      img: ["src", "alt", "title", "width", "height", "loading"],
    },

    allowedStyles: {
      p: {
        "text-align": [/^(left|center|right)$/],
      },
      h2: {
        "text-align": [/^(left|center|right)$/],
      },
      h3: {
        "text-align": [/^(left|center|right)$/],
      },
    },

    allowedSchemes: ["http", "https", "mailto"],

    transformTags: {
      a: sanitizeHtml.simpleTransform("a", {
        rel: "noopener noreferrer",
      }),
    },
  });
}

function htmlToText(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [],
    allowedAttributes: {},
  })
    .replace(/\s+/g, " ")
    .trim();
}

/* =========================================================
   NORMALIZATION
========================================================= */

function cleanTags(tags: string[]) {
  return Array.from(
    new Set(tags.map((tag) => tag.trim()).filter(Boolean)),
  ).slice(0, 8);
}

function nullableText(value: string | null) {
  if (!value) {
    return null;
  }

  const clean = value.trim();

  return clean || null;
}

/* =========================================================
   SERVICE
========================================================= */

export class BlogService {
  constructor(private readonly repository: BlogRepository) {}

  async getAll() {
    return this.repository.getAll();
  }

  async getPublished(limit?: number) {
    return this.repository.getPublished(limit);
  }

  async getById(id: string) {
    return this.repository.getById(id);
  }

  async getPublishedBySlug(slug: string) {
    return this.repository.getPublishedBySlug(slug);
  }

  /* =======================================================
     CREATE
  ======================================================= */

  async create(input: BlogPostInput): Promise<BlogPost> {
    const parsed = blogPostSchema.parse(input);

    const contentHtml = cleanHtml(parsed.contentHtml);

    this.assertPublishable({
      ...parsed,
      contentHtml,
    });

    const slug = await this.createUniqueSlug(parsed.slug || parsed.title);

    const record: CreateBlogRecord = {
      title: parsed.title.trim(),

      slug,

      excerpt: parsed.excerpt.trim(),

      contentHtml,

      coverImageUrl: parsed.coverImageUrl,

      category: parsed.category.trim(),

      tags: cleanTags(parsed.tags),

      seoTitle: nullableText(parsed.seoTitle),

      seoDescription: nullableText(parsed.seoDescription),

      status: parsed.status,

      publishedAt:
        parsed.status === "published" ? new Date().toISOString() : null,
    };

    return this.repository.create(record);
  }

  /* =======================================================
     UPDATE
  ======================================================= */

  async update(id: string, input: BlogPostInput): Promise<BlogPost> {
    const existing = await this.repository.getById(id);

    if (!existing) {
      throw new Error("Blog yazısı bulunamadı.");
    }

    const parsed = blogPostSchema.parse(input);

    const contentHtml = cleanHtml(parsed.contentHtml);

    this.assertPublishable({
      ...parsed,
      contentHtml,
    });

    /*
     * Slug admin tarafından
     * değiştirilmediyse mevcut URL'yi
     * koruyoruz.
     *
     * Başlık değişince URL'nin
     * kendiliğinden değişmesini
     * istemiyoruz. SEO açısından önemli.
     */
    let slug = existing.slug;

    if (parsed.slug && createSlug(parsed.slug) !== existing.slug) {
      slug = await this.createUniqueSlug(parsed.slug, id);
    }

    let publishedAt = existing.publishedAt;

    if (parsed.status === "published" && existing.status === "draft") {
      publishedAt = new Date().toISOString();
    }

    if (parsed.status === "draft") {
      publishedAt = null;
    }

    const record: CreateBlogRecord = {
      title: parsed.title.trim(),

      slug,

      excerpt: parsed.excerpt.trim(),

      contentHtml,

      coverImageUrl: parsed.coverImageUrl,

      category: parsed.category.trim(),

      tags: cleanTags(parsed.tags),

      seoTitle: nullableText(parsed.seoTitle),

      seoDescription: nullableText(parsed.seoDescription),

      status: parsed.status,

      publishedAt,
    };

    return this.repository.update(id, record);
  }

  /* =======================================================
     DELETE
  ======================================================= */

  async delete(id: string) {
    const existing = await this.repository.getById(id);

    if (!existing) {
      throw new Error("Silinecek blog yazısı bulunamadı.");
    }

    await this.repository.delete(id);
  }

  /* =======================================================
     BUSINESS RULES
  ======================================================= */

  private assertPublishable(input: BlogPostInput) {
    if (input.status !== "published") {
      return;
    }

    if (input.excerpt.trim().length < 30) {
      throw new Error("Yayınlamak için en az 30 karakterlik bir özet yaz.");
    }

    const text = htmlToText(input.contentHtml);

    if (text.length < 50) {
      throw new Error("Yayınlamak için blog içeriği çok kısa.");
    }
  }

  /* =======================================================
     UNIQUE SLUG
  ======================================================= */

  private async createUniqueSlug(source: string, excludeId?: string) {
    const baseSlug = createSlug(source);

    if (!baseSlug) {
      throw new Error("Geçerli bir blog URL'si oluşturulamadı.");
    }

    let candidate = baseSlug;

    let counter = 2;

    while (await this.repository.slugExists(candidate, excludeId)) {
      candidate = `${baseSlug}-${counter}`;

      counter += 1;
    }

    return candidate;
  }
}
