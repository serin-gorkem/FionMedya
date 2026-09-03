import Link from "next/link";

import type {
  BlogPost,
} from "@/features/blog/blog.types";

import {
  getReadingTime,
} from "@/features/blog/blog.reading-time";

import {
  getWhatsAppUrl,
} from "@/app/config/contact";

type BlogArticleProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
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
  relatedPosts,
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
    <article className="relative z-10">
      {/* =================================================
          ARTICLE HERO
      ================================================== */}

      <header
        className="
          mx-auto
          max-w-[1150px]

          pb-16
          pt-40

          sm:pb-20
          sm:pt-48
        "
      >
        {/* META */}

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-5
            gap-y-3
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
              tracking-[0.22em]
              text-white/35
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
                tracking-[0.22em]
                text-white/35
              "
            >
              {publishedDate}
            </time>
          )}
        </div>

        {/* TITLE */}

        <h1
          className="
            mt-8
            max-w-[1050px]

            font-serif
            text-[clamp(3.7rem,7vw,8rem)]
            leading-[0.83]
            tracking-[-0.062em]

            text-[#f4efe9]
          "
        >
          {post.title}
        </h1>

        {/* EXCERPT */}

        <p
          className="
            mt-9
            max-w-[760px]

            font-serif
            text-[clamp(1.45rem,2.1vw,2.2rem)]
            leading-[1.18]
            tracking-[-0.035em]

            text-white/65
          "
        >
          {post.excerpt}
        </p>

        {/* TAGS */}

        {post.tags.length > 0 && (
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
                    border-white/10

                    bg-black/10

                    px-3
                    py-2

                    text-[7px]
                    uppercase
                    tracking-[0.16em]

                    text-white/40

                    backdrop-blur-sm
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
        <figure
          className="
            mx-auto
            max-w-[1400px]

            overflow-hidden

            rounded-3xl

            border
            border-white/10

            bg-black/20

            backdrop-blur-sm
          "
        >
          <div
            className="
              relative
              aspect-[16/10]

              sm:aspect-[16/8]
            "
          >
            <img
              src={post.coverImageUrl}
              alt={`${post.title} kapak görseli`}
              className="
                h-full
                w-full
                object-cover
              "
            />

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t

                from-black/30
                via-transparent
                to-transparent
              "
            />
          </div>
        </figure>
      )}

      {/* =================================================
          ARTICLE BODY
      ================================================== */}

      <div
        className="
          mx-auto

          grid
          max-w-[1100px]

          gap-12

          py-20

          lg:grid-cols-[170px_minmax(0,720px)]
          lg:justify-center

          lg:py-28
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
              top-32
            "
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.28em]
                text-white/30
              "
            >
              Fion Journal
            </p>

            <span
              className="
                mt-5
                block
                h-px
                w-10
                bg-[#c45a78]
              "
            />

            <p
              className="
                mt-5
                max-w-[130px]

                text-[10px]
                leading-5

                text-white/30
              "
            >
              Fikir.
              <br />
              Not.
              <br />
              Bakış.
            </p>
          </div>
        </aside>

        {/* CONTENT */}

        <div
          className="
            min-w-0

            text-[16px]
            leading-8
            text-white/72

            sm:text-[17px]
            sm:leading-9

            [&_p]:mb-7

            [&_h2]:mb-7
            [&_h2]:mt-16
            [&_h2]:font-serif
            [&_h2]:text-[clamp(2.5rem,4vw,4rem)]
            [&_h2]:leading-[0.95]
            [&_h2]:tracking-[-0.045em]
            [&_h2]:text-[#f4efe9]

            [&_h3]:mb-5
            [&_h3]:mt-12
            [&_h3]:font-serif
            [&_h3]:text-[clamp(1.9rem,3vw,2.8rem)]
            [&_h3]:leading-[1]
            [&_h3]:tracking-[-0.04em]
            [&_h3]:text-[#f4efe9]

            [&_strong]:font-semibold
            [&_strong]:text-white

            [&_em]:text-white/85

            [&_blockquote]:my-12
            [&_blockquote]:border-l-2
            [&_blockquote]:border-[#c45a78]
            [&_blockquote]:pl-7
            [&_blockquote]:font-serif
            [&_blockquote]:text-[1.55rem]
            [&_blockquote]:italic
            [&_blockquote]:leading-[1.35]
            [&_blockquote]:text-white/70

            [&_ul]:my-8
            [&_ul]:list-disc
            [&_ul]:space-y-2
            [&_ul]:pl-6

            [&_ol]:my-8
            [&_ol]:list-decimal
            [&_ol]:space-y-2
            [&_ol]:pl-6

            [&_a]:text-[#d86a88]
            [&_a]:underline
            [&_a]:underline-offset-4

            [&_hr]:my-14
            [&_hr]:border-white/10

            [&_img]:my-12
            [&_img]:w-full
            [&_img]:rounded-2xl
          "
          dangerouslySetInnerHTML={{
            __html:
              post.contentHtml,
          }}
        />
      </div>

      {/* =================================================
          RELATED
      ================================================== */}

      {relatedPosts.length > 0 && (
        <section
          className="
            mx-auto
            max-w-[1150px]

            border-t
            border-white/10

            py-16
            sm:py-20
          "
        >
          <div
            className="
              flex
              items-end
              justify-between
              gap-8
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  text-[#c45a78]
                "
              >
                Devam et
              </p>

              <h2
                className="
                  mt-4

                  font-serif
                  text-[clamp(2.5rem,4vw,4.5rem)]
                  leading-[0.9]
                  tracking-[-0.05em]

                  text-[#f4efe9]
                "
              >
                Biraz daha
                <br />

                <em className="text-white/50">
                  oku.
                </em>
              </h2>
            </div>

            <Link
              href="/blog"
              className="
                hidden

                text-[9px]
                uppercase
                tracking-[0.22em]
                text-white/45

                transition-colors

                hover:text-white

                sm:block
              "
            >
              Tüm yazılar →
            </Link>
          </div>

          <div
            className="
              mt-10
              grid

              border-t
              border-white/10

              md:grid-cols-2
            "
          >
            {relatedPosts.map(
              (related, index) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className={`
                    group
                    py-8

                    ${
                      index === 0
                        ? "md:border-r md:border-white/10 md:pr-8"
                        : "border-t border-white/10 md:border-t-0 md:pl-8"
                    }
                  `}
                >
                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.24em]
                      text-[#c45a78]
                    "
                  >
                    {related.category}
                  </p>

                  <h3
                    className="
                      mt-4
                      max-w-md

                      font-serif
                      text-[clamp(2rem,3vw,3rem)]
                      leading-[0.94]
                      tracking-[-0.045em]

                      text-[#f4efe9]
                    "
                  >
                    {related.title}
                  </h3>

                  <span
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-3

                      text-[8px]
                      uppercase
                      tracking-[0.2em]

                      text-white/40

                      transition-colors

                      group-hover:text-[#c45a78]
                    "
                  >
                    Yazıyı oku

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>
                  </span>
                </Link>
              ),
            )}
          </div>
        </section>
      )}

      {/* =================================================
          FINAL CTA
      ================================================== */}

      <section
        className="
          mx-auto
          max-w-[1150px]

          border-t
          border-white/10

          py-16
          sm:py-20
        "
      >
        <div
          className="
            grid
            gap-10

            lg:grid-cols-[minmax(0,1fr)_340px]
            lg:items-end
          "
        >
          <div>
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

            <p
              className="
                mt-5

                font-serif
                text-[clamp(3rem,5vw,5.7rem)]
                leading-[0.86]
                tracking-[-0.055em]

                text-[#f4efe9]
              "
            >
              Fikri
              <br />

              <em className="text-white/50">
                işe çevirelim.
              </em>
            </p>
          </div>

          <div>
            <p
              className="
                text-sm
                leading-7
                text-white/50
              "
            >
              Markan için benzer bir
              fikir konuşmak istersen,
              uzun bir brief&apos;e
              ihtiyacımız yok.
            </p>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="
                group

                mt-7

                flex
                items-center
                justify-between

                border-b
                border-white/20

                pb-4

                text-[9px]
                uppercase
                tracking-[0.22em]

                text-[#f4efe9]

                transition-colors

                hover:border-[#c45a78]
              "
            >
              Bir proje konuşalım

              <span
                className="
                  text-[#c45a78]

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}