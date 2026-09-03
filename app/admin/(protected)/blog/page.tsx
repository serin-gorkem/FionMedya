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
      {/* =================================================
          HEADER
      ================================================== */}

      <div
        className="
          flex
          flex-col
          gap-10

          border-b
          border-white/10

          pb-10

          lg:flex-row
          lg:items-end
          lg:justify-between
        "
      >
        <div>
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.32em]
              text-[#c45a78]
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

              text-[#f4efe9]
            "
          >
            Blog
            <br />
            <em className="text-white/50">Yönetimi.</em>
          </h1>

          <p
            className="
              mt-6
              max-w-[480px]

              text-sm
              leading-7
              text-white/40
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
      text-sm
      transition-transform
      duration-300
      group-hover:rotate-90
    "
          >
            +
          </span>
        </Link>
      </div>

      {/* =================================================
          STATS
      ================================================== */}

      <div
        className="
          grid

          border-b
          border-white/10

          sm:grid-cols-3
        "
      >
        <div
          className="
            flex
            min-h-[110px]
            flex-col
            justify-between

            border-b
            border-white/10

            py-6

            sm:border-b-0
            sm:border-r
            sm:pr-8
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/28
            "
          >
            Toplam
          </span>

          <span
            className="
              font-serif
              text-4xl
              tracking-[-0.05em]
              text-[#f4efe9]
            "
          >
            {posts.length.toString().padStart(2, "0")}
          </span>
        </div>

        <div
          className="
            flex
            min-h-[110px]
            flex-col
            justify-between

            border-b
            border-white/10

            py-6

            sm:border-b-0
            sm:border-r
            sm:px-8
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/28
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
                h-[6px]
                w-[6px]
                rounded-full
                bg-[#c45a78]
              "
            />

            <span
              className="
                font-serif
                text-4xl
                tracking-[-0.05em]
                text-[#f4efe9]
              "
            >
              {publishedCount.toString().padStart(2, "0")}
            </span>
          </div>
        </div>

        <div
          className="
            flex
            min-h-[110px]
            flex-col
            justify-between

            py-6

            sm:pl-8
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-white/28
            "
          >
            Taslak
          </span>

          <span
            className="
              font-serif
              text-4xl
              tracking-[-0.05em]
              text-white/45
            "
          >
            {draftCount.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* =================================================
          LIST
      ================================================== */}

      <div className="mt-12">
        <BlogList posts={posts} />
      </div>
    </main>
  );
}
