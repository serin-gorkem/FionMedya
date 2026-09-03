import {
  notFound,
} from "next/navigation";

import Link from "next/link";

import BlogForm from "@/app/components/blog/admin/BlogForm";

import {
  createBlogService,
} from "@/features/blog/blog.server";

type EditBlogPostPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditBlogPostPage({
  params,
}: EditBlogPostPageProps) {
  const {
    id,
  } = await params;

  const service =
    await createBlogService();

  const post =
    await service.getById(
      id,
    );

  if (!post) {
    notFound();
  }

  return (
    <main
      className="
        mx-auto
        max-w-[1500px]

        px-6
        py-12

        sm:px-10
        sm:py-16
      "
    >
      <div
        className="
          mb-12

          flex
          flex-col
          gap-7

          border-b
          border-white/10

          pb-8

          sm:flex-row
          sm:items-end
          sm:justify-between
        "
      >
        <div>
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-[#c45a78]
            "
          >
            Yazıyı Düzenle
          </p>

          <h1
            className="
              mt-4

              max-w-[800px]

              font-serif

              text-[clamp(2.6rem,4.5vw,4.7rem)]

              leading-[0.9]
              tracking-[-0.05em]

              text-[#f4efe9]
            "
          >
            {post.title}
          </h1>
        </div>

        <div className="flex gap-5">
          {post.status ===
            "published" && (
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              className="
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-white/35

                hover:text-white
              "
            >
              Yazıyı Gör ↗
            </Link>
          )}

          <Link
            href="/admin/blog"
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]
              text-white/35

              hover:text-white
            "
          >
            ← Bloglar
          </Link>
        </div>
      </div>

      <BlogForm
        mode="edit"
        post={post}
      />
    </main>
  );
}