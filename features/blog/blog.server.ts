import {
  createClient,
} from "@/lib/supabase/server";

import {
  SupabaseBlogRepository,
} from "./blog.repository";

import {
  BlogService,
} from "./blog.service";

export async function createBlogService() {
  const supabase =
    await createClient();

  const repository =
    new SupabaseBlogRepository(
      supabase,
    );

  return new BlogService(
    repository,
  );
}