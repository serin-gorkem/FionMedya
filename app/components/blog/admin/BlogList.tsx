import Link from "next/link";

import type {
  BlogPost,
} from "@/features/blog/blog.types";

import {
  adminPrimaryActionClassName,
} from "@/app/components/admin/admin.styles";

import BlogListItem from "./BlogListItem";

type BlogListProps = {
  posts: BlogPost[];
};

export default function BlogList({
  posts,
}: BlogListProps) {
  if (
    posts.length === 0
  ) {
    return (
      <div
        className="
          flex
          min-h-[440px]

          flex-col
          items-center
          justify-center

          rounded-[28px]

          border
          border-dashed
          border-white/20

          bg-[#0d0d0d]

          px-6
          py-16

          text-center
        "
      >
        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-[#d86a88]
          "
        >
          Henüz boş
        </span>

        <h2
          className="
            mt-5

            font-serif

            text-[clamp(2.6rem,4vw,4.5rem)]

            leading-[0.9]
            tracking-[-0.055em]

            text-[var(--text-primary)]
          "
        >
          İlk yazıyı
          <br />

          <em className="text-[#b9b4b0]">
            birlikte ekleyelim.
          </em>
        </h2>

        <p
          className="
            mt-6
            max-w-[400px]

            text-[14px]
            leading-7
            text-[var(--text-body)]
          "
        >
          Blog yazıları burada
          listelenecek. Taslaklarını
          saklayabilir, daha sonra
          düzenleyip yayına alabilirsin.
        </p>

        <Link
          href="/admin/blog/new"
          className={`
            mt-9
            ${adminPrimaryActionClassName}
          `}
        >
          İlk Yazıyı Oluştur

          <span
            className="
              transition-transform
              duration-300
              group-hover:rotate-90
            "
          >
            +
          </span>
        </Link>
      </div>
    );
  }

  return (
    <section
      aria-label="Blog yazıları"
      className="
        overflow-hidden

        rounded-[26px]

        border
        border-white/15

        bg-[#0d0d0d]
      "
    >
      {/* DESKTOP HEADER */}

      <div
        className="
          hidden

          grid-cols-[92px_minmax(0,1fr)_130px_150px_190px]
          items-center

          border-b
          border-white/15

          bg-[#111111]

          px-6
          py-4

          lg:grid
        "
      >
        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[var(--text-muted)]
          "
        >
          No
        </span>

        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[var(--text-muted)]
          "
        >
          Yazı
        </span>

        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[var(--text-muted)]
          "
        >
          Durum
        </span>

        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[var(--text-muted)]
          "
        >
          Güncelleme
        </span>

        <span
          className="
            text-right
            text-[9px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[var(--text-muted)]
          "
        >
          İşlem
        </span>
      </div>

      <div>
        {posts.map(
          (
            post,
            index,
          ) => (
            <BlogListItem
              key={post.id}
              post={post}
              index={index}
              isLast={
                index ===
                posts.length -
                  1
              }
            />
          ),
        )}
      </div>
    </section>
  );
}