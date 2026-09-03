export const BLOG_STATUSES = [
  "draft",
  "published",
] as const;

export type BlogStatus =
  (typeof BLOG_STATUSES)[number];

export type BlogPost = {
  id: string;

  title: string;
  slug: string;

  excerpt: string;
  contentHtml: string;

  coverImageUrl: string | null;

  category: string;
  tags: string[];

  seoTitle: string | null;
  seoDescription: string | null;

  status: BlogStatus;

  publishedAt: string | null;

  createdAt: string;
  updatedAt: string;
};

/* =========================================================
   DATABASE REPRESENTATION
========================================================= */

export type BlogPostRow = {
  id: string;

  title: string;
  slug: string;

  excerpt: string;
  content_html: string;

  cover_image_url:
    | string
    | null;

  category: string;
  tags: string[];

  seo_title: string | null;

  seo_description:
    | string
    | null;

  status: BlogStatus;

  published_at:
    | string
    | null;

  created_at: string;
  updated_at: string;
};

/* =========================================================
   INPUT
========================================================= */

export type BlogPostInput = {
  title: string;

  /*
   * Boş bırakılırsa title'dan
   * otomatik oluşturulur.
   */
  slug?: string;

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
};

/* =========================================================
   ACTION RESULT
========================================================= */

export type BlogActionResult<
  T = undefined,
> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      message: string;

      fieldErrors?: Record<
        string,
        string[]
      >;
    };