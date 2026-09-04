import Link from "next/link";

import BlogForm from "@/app/components/blog/admin/BlogForm";

export default function NewBlogPostPage() {
  return (
    <main
      className="
        mx-auto
        max-w-[1500px]

        px-5
        pb-28
        pt-10

        sm:px-8
        sm:pt-14

        lg:px-10
        lg:pb-16
      "
    >
      {/* HEADER */}

      <div
        className="
          mb-12

          flex
          flex-col
          gap-8

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
              text-[8px]
              font-medium
              uppercase
              tracking-[0.25em]

              text-[#d86a88]
            "
          >
            Fion CMS / Editor
          </p>

          <h1
            className="
              mt-4

              font-serif

              text-[clamp(3.2rem,5vw,5.5rem)]

              leading-[0.85]
              tracking-[-0.06em]

              text-[#f4efe9]
            "
          >
            Yeni
            <br />

            <em className="text-white/55">
              yazı.
            </em>
          </h1>

          <p
            className="
              mt-6
              max-w-[480px]

              text-[13px]
              leading-7

              text-white/45
            "
          >
            İçeriğini oluştur,
            taslak olarak sakla veya
            hazır olduğunda doğrudan
            yayına al.
          </p>
        </div>

        <Link
          href="/admin/blog"
          className="
            inline-flex
            w-fit

            items-center
            gap-3

            border
            border-white/10

            bg-white/[0.025]

            px-4
            py-3

            text-[8px]
            font-medium
            uppercase
            tracking-[0.17em]

            text-white/50

            transition-all

            hover:border-white/20
            hover:text-white
          "
        >
          ← Bloglar
        </Link>
      </div>

      {/* FULL BLOG FORM */}

      <BlogForm
        mode="create"
      />
    </main>
  );
}