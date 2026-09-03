"use server";

import {
  revalidatePath,
} from "next/cache";

import {
  z,
} from "zod";

import type {
  BlogActionResult,
  BlogPost,
} from "./blog.types";

import {
  blogPostSchema,
} from "./blog.validation";

import {
  createBlogService,
} from "./blog.server";

/* =========================================================
   CREATE
========================================================= */

export async function createBlogPostAction(
  input: unknown,
): Promise<
  BlogActionResult<BlogPost>
> {
  const validation =
    blogPostSchema.safeParse(
      input,
    );

  if (
    !validation.success
  ) {
    return {
      success: false,

      message:
        "Blog bilgilerini kontrol et.",

      fieldErrors:
        validation.error.flatten()
          .fieldErrors,
    };
  }

  try {
    const service =
      await createBlogService();

    const post =
      await service.create(
        validation.data,
      );

    revalidatePath(
      "/blog",
    );

    revalidatePath(
      `/blog/${post.slug}`,
    );

    revalidatePath("/");

    return {
      success: true,
      data: post,
    };
  } catch (error) {
    return {
      success: false,

      message:
        error instanceof Error
          ? error.message
          : "Blog oluşturulamadı.",
    };
  }
}

/* =========================================================
   UPDATE
========================================================= */

export async function updateBlogPostAction(
  id: string,
  input: unknown,
): Promise<
  BlogActionResult<BlogPost>
> {
  const idValidation =
    z
      .string()
      .uuid()
      .safeParse(id);

  if (
    !idValidation.success
  ) {
    return {
      success: false,
      message:
        "Geçersiz blog ID.",
    };
  }

  const validation =
    blogPostSchema.safeParse(
      input,
    );

  if (
    !validation.success
  ) {
    return {
      success: false,

      message:
        "Blog bilgilerini kontrol et.",

      fieldErrors:
        validation.error.flatten()
          .fieldErrors,
    };
  }

  try {
    const service =
      await createBlogService();

    const oldPost =
      await service.getById(
        id,
      );

    const post =
      await service.update(
        id,
        validation.data,
      );

    revalidatePath(
      "/blog",
    );

    revalidatePath(
      `/blog/${post.slug}`,
    );

    if (
      oldPost &&
      oldPost.slug !==
        post.slug
    ) {
      revalidatePath(
        `/blog/${oldPost.slug}`,
      );
    }

    revalidatePath("/");

    return {
      success: true,
      data: post,
    };
  } catch (error) {
    return {
      success: false,

      message:
        error instanceof Error
          ? error.message
          : "Blog güncellenemedi.",
    };
  }
}

/* =========================================================
   DELETE
========================================================= */

export async function deleteBlogPostAction(
  id: string,
): Promise<
  BlogActionResult
> {
  const validation =
    z
      .string()
      .uuid()
      .safeParse(id);

  if (
    !validation.success
  ) {
    return {
      success: false,
      message:
        "Geçersiz blog ID.",
    };
  }

  try {
    const service =
      await createBlogService();

    const post =
      await service.getById(
        id,
      );

    await service.delete(
      id,
    );

    revalidatePath(
      "/blog",
    );

    if (post) {
      revalidatePath(
        `/blog/${post.slug}`,
      );
    }

    revalidatePath("/");

    return {
      success: true,
      data: undefined,
    };
  } catch (error) {
    return {
      success: false,

      message:
        error instanceof Error
          ? error.message
          : "Blog silinemedi.",
    };
  }
}