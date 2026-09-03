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
          gap-8

          border-b
          border-white/15

          pb-8

          lg:flex-row
          lg:items-end
          lg:justify-between
        "
      >
        <div>
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.22em]

              text-[#d86a88]
            "
          >
            Yazıyı Düzenle
          </p>

          <h1
            className="
              mt-4

              max-w-[850px]

              font-serif

              text-[clamp(2.6rem,4.5vw,4.7rem)]

              leading-[0.9]
              tracking-[-0.05em]

              text-[var(--text-primary)]
            "
          >
            {post.title}
          </h1>

          <div
            className="
              mt-5

              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <span
              className={`
                inline-flex
                items-center
                gap-2

                rounded-[9px]

                border

                px-3
                py-2

                text-[9px]
                font-medium
                uppercase
                tracking-[0.14em]

                ${
                  post.status ===
                  "published"
                    ? `
                      border-[#8a304c]
                      bg-[#591323]/45
                      text-[#ef9eb4]
                    `
                    : `
                      border-white/15
                      bg-[#151515]
                      text-[var(--text-secondary)]
                    `
                }
              `}
            >
              <span
                className={`
                  h-[6px]
                  w-[6px]

                  rounded-full

                  ${
                    post.status ===
                    "published"
                      ? "bg-[#d86a88]"
                      : "bg-[#85817f]"
                  }
                `}
              />

              {post.status ===
              "published"
                ? "Yayında"
                : "Taslak"}
            </span>

            <span
              className="
                text-[10px]
                text-[var(--text-muted)]
              "
            >
              /blog/{post.slug}
            </span>
          </div>
        </div>

        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >
          {post.status ===
            "published" && (
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2

                rounded-[10px]

                border
                border-[#7f2945]

                bg-[#591323]/35

                px-4
                py-3

                text-[10px]
                font-medium
                uppercase
                tracking-[0.14em]

                text-[#ef9eb4]

                transition-all
                duration-200

                hover:border-[#d86a88]
                hover:bg-[#591323]/60
                hover:text-white
              "
            >
              Yazıyı Gör ↗
            </Link>
          )}

          <Link
            href="/admin/blog"
            className="
              inline-flex
              items-center
              gap-2

              rounded-[10px]

              border
              border-white/15

              bg-[#111111]

              px-4
              py-3

              text-[10px]
              font-medium
              uppercase
              tracking-[0.14em]

              text-[var(--text-secondary)]

              transition-all
              duration-200

              hover:border-white/25
              hover:bg-[#171717]
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