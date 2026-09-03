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
          items-end
          justify-between

          border-b
          border-white/10

          pb-8
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
            Fion CMS
          </p>

          <h1
            className="
              mt-4

              font-serif

              text-[clamp(2.8rem,5vw,5rem)]

              leading-[0.88]
              tracking-[-0.055em]

              text-[#f4efe9]
            "
          >
            Yeni
            <br />

            <em className="text-white/45">
              yazı.
            </em>
          </h1>
        </div>

        <Link
          href="/admin/blog"
          className="
            text-[8px]
            uppercase
            tracking-[0.22em]
            text-white/30

            hover:text-white
          "
        >
          ← Bloglar
        </Link>
      </div>

      <BlogForm mode="create" />
    </main>
  );
}