import Link from "next/link";

import BlogList from "@/app/components/blog/admin/BlogList";

import { adminPrimaryActionClassName } from "@/app/components/admin/admin.styles";

import { createBlogService } from "@/features/blog/blog.server";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const service = await createBlogService();

  const posts = await service.getAll();

  const publishedCount = posts.filter(
    (post) => post.status === "published",
  ).length;

  const draftCount = posts.filter((post) => post.status === "draft").length;

  return (
    <main
      className="
        mx-auto
        max-w-[1500px]

        px-6
        py-14

        sm:px-10
        sm:py-20
      "
    >
      {/* HEADER */}

      <div
        className="
          flex
          flex-col
          gap-10

          border-b
          border-white/15

          pb-10

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
              tracking-[0.24em]
              text-[#d86a88]
            "
          >
            Fion CMS
          </p>

          <h1
            className="
              mt-4

              font-serif

              text-[clamp(3rem,5vw,5.5rem)]

              leading-[0.86]
              tracking-[-0.055em]

              text-[var(--text-primary)]
            "
          >
            Blog
            <br />
            <em className="text-[#b9b4b0]">Yönetimi.</em>
          </h1>

          <p
            className="
              mt-6
              max-w-[500px]

              text-[14px]
              leading-7
              text-[var(--text-body)]
            "
          >
            Yazıları oluştur, taslak olarak sakla, düzenle ve hazır olduğunda
            yayına al.
          </p>
        </div>

        <Link href="/admin/blog/new" className={adminPrimaryActionClassName}>
          Yeni Yazı
          <span
            className="
              text-base
              leading-none

              transition-transform
              duration-300

              group-hover:rotate-90
            "
          >
            +
          </span>
        </Link>
      </div>

      {/* STATS */}

      <div
        className="
          grid

          border-b
          border-white/15

          sm:grid-cols-3
        "
      >
        <div
          className="
            flex
            min-h-[120px]
            flex-col
            justify-between

            border-b
            border-white/15

            py-7

            sm:border-b-0
            sm:border-r
            sm:pr-8
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[var(--text-muted)]
            "
          >
            Toplam
          </span>

          <span
            className="
              font-serif
              text-4xl
              tracking-[-0.05em]
              text-[var(--text-primary)]
            "
          >
            {posts.length.toString().padStart(2, "0")}
          </span>
        </div>

        <div
          className="
            flex
            min-h-[120px]
            flex-col
            justify-between

            border-b
            border-white/15

            py-7

            sm:border-b-0
            sm:border-r
            sm:px-8
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[var(--text-muted)]
            "
          >
            Yayında
          </span>

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-[7px]
                w-[7px]

                rounded-full

                bg-[#d86a88]
              "
            />

            <span
              className="
                font-serif
                text-4xl
                tracking-[-0.05em]
                text-[var(--text-primary)]
              "
            >
              {publishedCount.toString().padStart(2, "0")}
            </span>
          </div>
        </div>

        <div
          className="
            flex
            min-h-[120px]
            flex-col
            justify-between

            py-7

            sm:pl-8
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[var(--text-muted)]
            "
          >
            Taslak
          </span>

          <span
            className="
              font-serif
              text-4xl
              tracking-[-0.05em]
              text-[var(--text-secondary)]
            "
          >
            {draftCount.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* LIST */}

      <div className="mt-12">
        <BlogList posts={posts} />
      </div>
    </main>
  );
}
