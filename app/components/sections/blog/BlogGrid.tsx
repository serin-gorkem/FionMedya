
import Link from "next/link";

import type {
  BlogPost,
} from "@/features/blog/blog.types";

import BlogCard from "./BlogCard";

type BlogGridProps = {
  posts: BlogPost[];
};

export default function BlogGrid({
  posts,
}: BlogGridProps) {
  if (
    posts.length === 0
  ) {
    return (
      <div
        className="
          border-t
          border-white/10
          py-24
          text-center
        "
      >
        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-[#c45a78]
          "
        >
          Blog
        </p>

        <h2
          className="
            mt-6
            font-serif
            text-[clamp(2.8rem,5vw,5rem)]
            leading-[0.9]
            tracking-[-0.055em]
            text-[#f4efe9]
          "
        >
          İlk yazı
          <br />

          <em className="text-white/42">
            hazırlanıyor.
          </em>
        </h2>

        <Link
          href="/"
          className="
            mt-9
            inline-flex
            items-center
            gap-3
            text-[8px]
            uppercase
            tracking-[0.24em]
            text-white/38
          "
        >
          ← Fion&apos;a dön
        </Link>
      </div>
    );
  }

  return (
    <div>
      {posts.map(
        (
          post,
          index,
        ) => (
          <BlogCard
            key={post.id}
            post={post}
            index={index}
          />
        ),
      )}
    </div>
  );
}