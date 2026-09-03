import type {
  SupabaseClient,
} from "@supabase/supabase-js";

import type {
  BlogPost,
  BlogPostRow,
  BlogStatus,
} from "./blog.types";

/* =========================================================
   REPOSITORY CONTRACT
========================================================= */

export type CreateBlogRecord = {
  title: string;
  slug: string;

  excerpt: string;
  contentHtml: string;

  coverImageUrl:
    | string
    | null;

  category: string;
  tags: string[];

  seoTitle:
    | string
    | null;

  seoDescription:
    | string
    | null;

  status: BlogStatus;

  publishedAt:
    | string
    | null;
};

export interface BlogRepository {
  getAll(): Promise<
    BlogPost[]
  >;

  getPublished(
    limit?: number,
  ): Promise<BlogPost[]>;

  getById(
    id: string,
  ): Promise<
    BlogPost | null
  >;

  getPublishedBySlug(
    slug: string,
  ): Promise<
    BlogPost | null
  >;

  slugExists(
    slug: string,
    excludeId?: string,
  ): Promise<boolean>;

  create(
    input: CreateBlogRecord,
  ): Promise<BlogPost>;

  update(
    id: string,
    input: CreateBlogRecord,
  ): Promise<BlogPost>;

  delete(
    id: string,
  ): Promise<void>;
}

/* =========================================================
   MAPPER
========================================================= */

function mapRow(
  row: BlogPostRow,
): BlogPost {
  return {
    id: row.id,

    title: row.title,
    slug: row.slug,

    excerpt: row.excerpt,

    contentHtml:
      row.content_html,

    coverImageUrl:
      row.cover_image_url,

    category: row.category,

    tags: row.tags ?? [],

    seoTitle:
      row.seo_title,

    seoDescription:
      row.seo_description,

    status: row.status,

    publishedAt:
      row.published_at,

    createdAt:
      row.created_at,

    updatedAt:
      row.updated_at,
  };
}

/* =========================================================
   SUPABASE IMPLEMENTATION
========================================================= */

export class SupabaseBlogRepository
  implements BlogRepository
{
  constructor(
    private readonly supabase: SupabaseClient,
  ) {}

  async getAll() {
    const {
      data,
      error,
    } =
      await this.supabase
        .from("blog_posts")
        .select("*")
        .order(
          "created_at",
          {
            ascending: false,
          },
        );

    if (error) {
      throw new Error(
        `Blog listesi alınamadı: ${error.message}`,
      );
    }

    return (
      (data ?? []) as BlogPostRow[]
    ).map(mapRow);
  }

  async getPublished(
    limit?: number,
  ) {
    let query =
      this.supabase
        .from("blog_posts")
        .select("*")
        .eq(
          "status",
          "published",
        )
        .lte(
          "published_at",
          new Date().toISOString(),
        )
        .order(
          "published_at",
          {
            ascending: false,
          },
        );

    if (limit) {
      query =
        query.limit(limit);
    }

    const {
      data,
      error,
    } = await query;

    if (error) {
      throw new Error(
        `Yayınlanmış bloglar alınamadı: ${error.message}`,
      );
    }

    return (
      (data ?? []) as BlogPostRow[]
    ).map(mapRow);
  }

  async getById(
    id: string,
  ) {
    const {
      data,
      error,
    } =
      await this.supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .maybeSingle();

    if (error) {
      throw new Error(
        `Blog yazısı alınamadı: ${error.message}`,
      );
    }

    if (!data) {
      return null;
    }

    return mapRow(
      data as BlogPostRow,
    );
  }

  async getPublishedBySlug(
    slug: string,
  ) {
    const {
      data,
      error,
    } =
      await this.supabase
        .from("blog_posts")
        .select("*")
        .eq(
          "slug",
          slug,
        )
        .eq(
          "status",
          "published",
        )
        .lte(
          "published_at",
          new Date().toISOString(),
        )
        .maybeSingle();

    if (error) {
      throw new Error(
        `Blog yazısı alınamadı: ${error.message}`,
      );
    }

    if (!data) {
      return null;
    }

    return mapRow(
      data as BlogPostRow,
    );
  }

  async slugExists(
    slug: string,
    excludeId?: string,
  ) {
    let query =
      this.supabase
        .from("blog_posts")
        .select(
          "id",
          {
            count: "exact",
            head: true,
          },
        )
        .eq(
          "slug",
          slug,
        );

    if (excludeId) {
      query =
        query.neq(
          "id",
          excludeId,
        );
    }

    const {
      count,
      error,
    } = await query;

    if (error) {
      throw new Error(
        `Slug kontrol edilemedi: ${error.message}`,
      );
    }

    return (
      count ?? 0
    ) > 0;
  }

  async create(
    input: CreateBlogRecord,
  ) {
    const {
      data,
      error,
    } =
      await this.supabase
        .from("blog_posts")
        .insert({
          title:
            input.title,

          slug:
            input.slug,

          excerpt:
            input.excerpt,

          content_html:
            input.contentHtml,

          cover_image_url:
            input.coverImageUrl,

          category:
            input.category,

          tags:
            input.tags,

          seo_title:
            input.seoTitle,

          seo_description:
            input.seoDescription,

          status:
            input.status,

          published_at:
            input.publishedAt,
        })
        .select("*")
        .single();

    if (error) {
      throw new Error(
        `Blog oluşturulamadı: ${error.message}`,
      );
    }

    return mapRow(
      data as BlogPostRow,
    );
  }

  async update(
    id: string,
    input: CreateBlogRecord,
  ) {
    const {
      data,
      error,
    } =
      await this.supabase
        .from("blog_posts")
        .update({
          title:
            input.title,

          slug:
            input.slug,

          excerpt:
            input.excerpt,

          content_html:
            input.contentHtml,

          cover_image_url:
            input.coverImageUrl,

          category:
            input.category,

          tags:
            input.tags,

          seo_title:
            input.seoTitle,

          seo_description:
            input.seoDescription,

          status:
            input.status,

          published_at:
            input.publishedAt,
        })
        .eq("id", id)
        .select("*")
        .single();

    if (error) {
      throw new Error(
        `Blog güncellenemedi: ${error.message}`,
      );
    }

    return mapRow(
      data as BlogPostRow,
    );
  }

  async delete(
    id: string,
  ) {
    const {
      error,
    } =
      await this.supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);

    if (error) {
      throw new Error(
        `Blog silinemedi: ${error.message}`,
      );
    }
  }
}