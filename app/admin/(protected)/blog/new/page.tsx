import Link from "next/link";

import BlogForm from "@/app/components/blog/admin/BlogForm";

export default function NewBlogPostPage() {
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

          sm:flex-row
          sm:items-end
          sm:justify-between
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
            Fion CMS
          </p>

          <h1
            className="
              mt-4

              font-serif

              text-[clamp(2.8rem,5vw,5rem)]

              leading-[0.88]
              tracking-[-0.055em]

              text-[var(--text-primary)]
            "
          >
            Yeni
            <br />

            <em className="text-[var(--text-secondary)]">
              yazı.
            </em>
          </h1>

          <p
            className="
              mt-6
              max-w-[450px]

              text-[14px]
              leading-7
              text-[var(--text-body)]
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

      <BlogForm
        mode="create"
      />
    </main>
  );
}