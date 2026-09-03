import Link from "next/link";

import type {
  BlogPost,
} from "@/features/blog/blog.types";

type HomeBlogCardProps = {
  post: BlogPost;
};

function truncateText(
  value: string,
  maxLength: number,
) {
  const clean = value
    .replace(/\s+/g, " ")
    .trim();

  if (clean.length <= maxLength) {
    return clean;
  }

  return `${clean
    .slice(0, maxLength - 1)
    .trimEnd()}…`;
}

export default function HomeBlogCard({
  post,
}: HomeBlogCardProps) {
  const shortTitle =
    truncateText(
      post.title,
      20,
    );

  const shortExcerpt =
    truncateText(
      post.excerpt,
      40,
    );

  return (
    <article className="group">
      <Link
        href={`/blog/${post.slug}`}
        className="block"
      >
        {/* IMAGE */}

        <div
          className="
            relative
            aspect-[16/10]
            overflow-hidden

            rounded-2xl

            border
            border-white/10

            bg-[#0d0d0d]
          "
        >
          {post.coverImageUrl ? (
            <img
              src={post.coverImageUrl}
              alt=""
              className="
                h-full
                w-full
                object-cover

                opacity-75

                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]

                group-hover:scale-[1.025]
                group-hover:opacity-100
              "
            />
          ) : (
            <div
              className="
                flex
                h-full
                items-center
                justify-center

                bg-[#11080c]
              "
            >
              <span
                className="
                  font-serif
                  text-6xl
                  italic
                  tracking-[-0.06em]
                  text-[#591323]
                "
              >
                Fion.
              </span>
            </div>
          )}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/45
              via-transparent
              to-transparent
            "
          />
        </div>

        {/* META */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            gap-5
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.26em]
              text-wine-light
            "
          >
            {post.category}
          </span>

          <span
            className="
              text-base
              text-wine-light

              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          >
            →
          </span>
        </div>

        {/* TITLE */}

        <h3
          className="
            mt-4

            max-w-md

            font-serif
            text-[clamp(2rem,3vw,3.1rem)]
            leading-[0.92]
            tracking-[-0.05em]

            text-ivory
          "
        >
          {shortTitle}
        </h3>

        {/* EXCERPT */}

        <p
          className="
            mt-4
            max-w-sm

            text-[13px]
            leading-6
            text-muted
          "
        >
          {shortExcerpt}
        </p>
      </Link>
    </article>
  );
}