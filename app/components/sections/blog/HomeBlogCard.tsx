import Link from "next/link";

import type { BlogPost } from "@/features/blog/blog.types";
import { getReadingTime } from "@/features/blog/blog.reading-time";

type HomeBlogCardProps = {
  post: BlogPost;
  index: number;
};

export default function HomeBlogCard({
  post,
  index,
}: HomeBlogCardProps) {
  const readingTime = getReadingTime(post.contentHtml);

  return (
    <article
      className="
        group
        border-t
        border-white/10
        py-10
        sm:py-12
      "
    >
      <Link
        href={`/blog/${post.slug}`}
        className="
          grid
          gap-7

          xl:grid-cols-[72px_minmax(0,1fr)]
          xl:gap-8
        "
      >
        <span
          className="
            font-serif
            text-[2rem]
            tracking-[-0.05em]
            text-white/18
          "
        >
          {(index + 1).toString().padStart(2, "0")}
        </span>

        <div>
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-4
              gap-y-2
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.26em]
                text-[#c45a78]
              "
            >
              {post.category}
            </span>

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-white/25
              "
            >
              {readingTime} dk okuma
            </span>
          </div>

          <h3
            className="
              mt-4
              max-w-[520px]

              font-serif
              text-[clamp(2rem,3.1vw,3.6rem)]

              leading-[0.92]
              tracking-[-0.05em]

              text-[#f4efe9]

              transition-colors
              duration-300

              group-hover:text-white
            "
          >
            {post.title}
          </h3>

          <p
            className="
              mt-5
              max-w-[460px]

              text-sm
              leading-7
              text-white/42
            "
          >
            {post.excerpt}
          </p>

          <span
            className="
              mt-6
              inline-flex
              items-center
              gap-3

              text-[8px]
              uppercase
              tracking-[0.24em]

              text-white/35

              transition-colors
              duration-300

              group-hover:text-[#c45a78]
            "
          >
            Okumaya devam et

            <span
              className="
                transition-transform
                duration-500

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}