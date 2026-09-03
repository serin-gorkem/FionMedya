import Link from "next/link";

import type {
  BlogPost,
} from "@/features/blog/blog.types";

import {
  getReadingTime,
} from "@/features/blog/blog.reading-time";

type BlogArticleProps = {
  post: BlogPost;
};

function formatDate(
  value: string | null,
) {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat(
    "tr-TR",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    },
  ).format(
    new Date(value),
  );
}

export default function BlogArticle({
  post,
}: BlogArticleProps) {
  const readingTime =
    getReadingTime(
      post.contentHtml,
    );

  const publishedDate =
    formatDate(
      post.publishedAt,
    );

  return (
    <article>
      {/* =================================================
          ARTICLE HERO
      ================================================== */}

      <header
        className="
          mx-auto
          max-w-[1050px]

          pb-16
          pt-36

          sm:pt-44
        "
      >
        <Link
          href="/blog"
          className="
            inline-flex
            items-center
            gap-3

            text-[8px]
            uppercase
            tracking-[0.25em]
            text-white/30

            transition-colors
            hover:text-white
          "
        >
          ← Journal
        </Link>

        <div
          className="
            mt-12
            flex
            flex-wrap
            items-center
            gap-x-5
            gap-y-2
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-[#c45a78]
            "
          >
            {post.category}
          </span>

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.24em]
              text-white/25
            "
          >
            {readingTime} dk okuma
          </span>

          {publishedDate && (
            <time
              dateTime={
                post.publishedAt ??
                undefined
              }
              className="
                text-[8px]
                uppercase
                tracking-[0.24em]
                text-white/25
              "
            >
              {publishedDate}
            </time>
          )}
        </div>

        <h1
          className="
            mt-7

            font-serif

            text-[clamp(3.5rem,7vw,7.8rem)]

            leading-[0.84]
            tracking-[-0.06em]

            text-[#f4efe9]
          "
        >
          {post.title}
        </h1>

        <p
          className="
            mt-9
            max-w-[720px]

            font-serif

            text-[clamp(1.4rem,2vw,2.1rem)]

            leading-[1.2]
            tracking-[-0.035em]

            text-white/55
          "
        >
          {post.excerpt}
        </p>

        {post.tags.length >
          0 && (
          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-2
            "
          >
            {post.tags.map(
              (tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-white/[0.08]
                    px-3
                    py-2
                    text-[7px]
                    uppercase
                    tracking-[0.16em]
                    text-white/30
                  "
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        )}
      </header>

      {/* =================================================
          COVER
      ================================================== */}

      {post.coverImageUrl && (
        <div
          className="
            mx-auto
            max-w-[1300px]
            overflow-hidden
            rounded-[24px]
            border
            border-white/10
            bg-[#090909]
          "
        >
          <img
            src={
              post.coverImageUrl
            }
            alt={`${post.title} kapak görseli`}
            className="
              aspect-[16/8]
              w-full
              object-cover
            "
          />
        </div>
      )}

      {/* =================================================
          CONTENT
      ================================================== */}

      <div
        className="
          mx-auto
          grid
          max-w-[1050px]

          gap-12

          py-16

          lg:grid-cols-[180px_minmax(0,720px)]
          lg:justify-center
          lg:py-24
        "
      >
        {/* SIDE */}

        <aside
          className="
            hidden

            lg:block
          "
        >
          <div
            className="
              sticky
              top-28
            "
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.28em]
                text-white/22
              "
            >
              Fion Journal
            </p>

            <div
              className="
                mt-4
                h-px
                w-10
                bg-[#c45a78]/50
              "
            />

            <p
              className="
                mt-4
                text-[10px]
                leading-5
                text-white/25
              "
            >
              Daha iyi fikirler,
              daha güçlü markalar.
            </p>
          </div>
        </aside>

        {/* HTML */}

        <div
          className="
            blog-content

            text-[16px]
            leading-8
            text-white/68

            [&_p]:mb-7

            [&_h2]:mb-6
            [&_h2]:mt-14
            [&_h2]:font-serif
            [&_h2]:text-[clamp(2.4rem,4vw,4rem)]
            [&_h2]:leading-[0.95]
            [&_h2]:tracking-[-0.045em]
            [&_h2]:text-[#f4efe9]

            [&_h3]:mb-5
            [&_h3]:mt-10
            [&_h3]:font-serif
            [&_h3]:text-[clamp(1.8rem,3vw,2.8rem)]
            [&_h3]:leading-[1]
            [&_h3]:tracking-[-0.04em]
            [&_h3]:text-[#f4efe9]

            [&_strong]:font-semibold
            [&_strong]:text-white

            [&_em]:text-white/80

            [&_blockquote]:my-10
            [&_blockquote]:border-l-2
            [&_blockquote]:border-[#c45a78]
            [&_blockquote]:pl-7
            [&_blockquote]:font-serif
            [&_blockquote]:text-[1.5rem]
            [&_blockquote]:italic
            [&_blockquote]:leading-[1.35]
            [&_blockquote]:text-white/62

            [&_ul]:my-7
            [&_ul]:list-disc
            [&_ul]:space-y-2
            [&_ul]:pl-6

            [&_ol]:my-7
            [&_ol]:list-decimal
            [&_ol]:space-y-2
            [&_ol]:pl-6

            [&_a]:text-[#d86a88]
            [&_a]:underline
            [&_a]:underline-offset-4

            [&_hr]:my-12
            [&_hr]:border-white/10

            [&_img]:my-10
            [&_img]:w-full
            [&_img]:rounded-[18px]
          "
          dangerouslySetInnerHTML={{
            __html:
              post.contentHtml,
          }}
        />
      </div>

      {/* =================================================
          EXIT CTA
      ================================================== */}

      <div
        className="
          mx-auto
          max-w-[1050px]

          border-t
          border-white/10

          py-16
          sm:py-20
        "
      >
        <p
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
            text-[#c45a78]
          "
        >
          Okudun. Şimdi?
        </p>

        <div
          className="
            mt-6

            flex
            flex-col
            gap-8

            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <p
            className="
              max-w-[600px]

              font-serif

              text-[clamp(2.5rem,4vw,4.8rem)]

              leading-[0.9]
              tracking-[-0.05em]

              text-[#f4efe9]
            "
          >
            Fikri
            <br />

            <em className="text-white/50">
              işe çevirelim.
            </em>
          </p>

          <Link
            href="/#contact"
            className="
              group

              inline-flex
              items-center
              gap-4

              text-[9px]
              uppercase
              tracking-[0.24em]

              text-white/45

              transition-colors

              hover:text-white
            "
          >
            Bir proje konuşalım

            <span
              className="
                text-[#c45a78]
                transition-transform
                duration-500
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}