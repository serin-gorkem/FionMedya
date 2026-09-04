"use client";

import {
  createClient,
} from "@/lib/supabase/client";

export const BLOG_IMAGE_MIME_TYPES =
  [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif",
  ] as const;

export type BlogImageMimeType =
  (typeof BLOG_IMAGE_MIME_TYPES)[number];

const MAX_IMAGE_SIZE =
  5 * 1024 * 1024;

const extensionMap:
  Record<
    BlogImageMimeType,
    string
  > = {
    "image/jpeg":
      "jpg",

    "image/png":
      "png",

    "image/webp":
      "webp",

    "image/avif":
      "avif",
  };

export function isBlogImageFile(
  file: File,
) {
  return BLOG_IMAGE_MIME_TYPES.includes(
    file.type as BlogImageMimeType,
  );
}

export function validateBlogImage(
  file: File,
) {
  if (
    !isBlogImageFile(
      file,
    )
  ) {
    throw new Error(
      "JPG, PNG, WebP veya AVIF yükleyebilirsin.",
    );
  }

  if (
    file.size >
    MAX_IMAGE_SIZE
  ) {
    throw new Error(
      "Görsel en fazla 5 MB olabilir.",
    );
  }
}

export async function uploadBlogContentImage(
  file: File,
) {
  validateBlogImage(
    file,
  );

  const supabase =
    createClient();

  const mimeType =
    file.type as BlogImageMimeType;

  const extension =
    extensionMap[mimeType];

  const path = [
    "content",
    new Date()
      .getFullYear()
      .toString(),
    `${crypto.randomUUID()}.${extension}`,
  ].join("/");

  const {
    error:
      uploadError,
  } =
    await supabase.storage
      .from("blog-media")
      .upload(
        path,
        file,
        {
          cacheControl:
            "31536000",

          contentType:
            file.type,

          upsert:
            false,
        },
      );

  if (uploadError) {
    throw new Error(
      uploadError.message,
    );
  }

  const {
    data,
  } =
    supabase.storage
      .from("blog-media")
      .getPublicUrl(
        path,
      );

  if (
    !data.publicUrl
  ) {
    throw new Error(
      "Görsel URL'i oluşturulamadı.",
    );
  }

  return data.publicUrl;
}