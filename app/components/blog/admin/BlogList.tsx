import Link from "next/link";

import type { BlogPost } from "@/features/blog/blog.types";

import BlogListItem from "./BlogListItem";
import { adminPrimaryActionClassName } from "@/app/components/admin/admin.styles";
type BlogListProps = {
  posts: BlogPost[];
};

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div
        className="
          flex
          min-h-[420px]

          flex-col
          items-center
          justify-center

          rounded-[28px]

          border
          border-dashed
          border-[#4a1627]

          bg-[#080808]

          px-6
          py-16

          text-center
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.32em]
            text-[#c45a78]
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

            text-[#f4efe9]
          "
        >
          İlk yazıyı
          <br />
          <em className="text-white/45">birlikte ekleyelim.</em>
        </h2>

        <p
          className="
            mt-6
            max-w-[380px]

            text-sm
            leading-7
            text-white/38
          "
        >
          Blog yazıları burada listelenecek. Taslaklarını saklayabilir, daha
          sonra düzenleyip yayına alabilirsin.
        </p>

        <Link
          href="/admin/blog/new"
          className={`mt-9 ${adminPrimaryActionClassName}`}
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
        border-white/10

        bg-[#080808]
      "
    >
      {/* DESKTOP TABLE HEADER */}

      <div
        className="
          hidden

          grid-cols-[92px_minmax(0,1fr)_130px_150px_180px]
          items-center

          border-b
          border-white/10

          px-6
          py-4

          lg:grid
        "
      >
        <span className="text-[8px] uppercase tracking-[0.24em] text-white/22">
          No
        </span>

        <span className="text-[8px] uppercase tracking-[0.24em] text-white/22">
          Yazı
        </span>

        <span className="text-[8px] uppercase tracking-[0.24em] text-white/22">
          Durum
        </span>

        <span className="text-[8px] uppercase tracking-[0.24em] text-white/22">
          Güncelleme
        </span>

        <span className="text-right text-[8px] uppercase tracking-[0.24em] text-white/22">
          İşlem
        </span>
      </div>

      <div>
        {posts.map((post, index) => (
          <BlogListItem
            key={post.id}
            post={post}
            index={index}
            isLast={index === posts.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
