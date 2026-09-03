import {
  z,
} from "zod";

export const blogPostSchema =
  z.object({
    title: z
      .string()
      .trim()
      .min(
        3,
        "Başlık en az 3 karakter olmalı.",
      )
      .max(
        120,
        "Başlık en fazla 120 karakter olabilir.",
      ),

    slug: z
      .string()
      .trim()
      .max(140)
      .optional(),

    excerpt: z
      .string()
      .trim()
      .max(
        320,
        "Özet en fazla 320 karakter olabilir.",
      ),

    contentHtml: z
      .string()
      .max(
        200_000,
        "İçerik çok uzun.",
      ),

    coverImageUrl: z
      .string()
      .url(
        "Geçerli bir görsel URL'si gir.",
      )
      .nullable(),

    category: z
      .string()
      .trim()
      .min(
        2,
        "Kategori gerekli.",
      )
      .max(60),

    tags: z
      .array(
        z
          .string()
          .trim()
          .min(1)
          .max(40),
      )
      .max(
        8,
        "En fazla 8 etiket kullan.",
      ),

    seoTitle: z
      .string()
      .trim()
      .max(
        60,
        "SEO başlığı en fazla 60 karakter olmalı.",
      )
      .nullable(),

    seoDescription: z
      .string()
      .trim()
      .max(
        160,
        "SEO açıklaması en fazla 160 karakter olmalı.",
      )
      .nullable(),

    status: z.enum([
      "draft",
      "published",
    ]),
  });

export type ValidatedBlogPostInput =
  z.infer<
    typeof blogPostSchema
  >;