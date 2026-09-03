import Link from "next/link";

import WineLane from "@/app/components/ui/WineLane";
import SectionContainer from "@/app/components/ui/SectionContainer";
import SectionEyebrow from "@/app/components/ui/SectionEyebrow";

import { createBlogService } from "@/features/blog/blog.server";

import HomeBlogCard from "./HomeBlogCard";

export default async function BlogSection() {
  const service = await createBlogService();

  const posts = await service.getPublished(3);

  /*
   * Hiç yayınlanmış yazı yoksa homepage'te
   * boş bir blog section göstermiyoruz.
   */
  if (posts.length === 0) {
    return null;
  }

  return (
    <section
      id="blog"
      aria-labelledby="home-blog-title"
      className="
        relative
        overflow-hidden

        border-t
        border-white/10

        bg-black
      "
    >
      <WineLane />

      <SectionContainer>
        {/* =================================================
            INTRO
        ================================================== */}

        <div
          className="
            mb-24

            xl:grid
            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:items-end
            xl:gap-10
          "
        >
          {/* LEFT */}

          <div className="max-w-[570px]">
            <SectionEyebrow>
              Fion Journal / Blog
            </SectionEyebrow>

            <h2
              id="home-blog-title"
              className="
                mt-6

                font-serif
                text-[clamp(3.7rem,6vw,6.8rem)]

                leading-[0.84]
                tracking-[-0.06em]

                text-[#f4efe9]
              "
            >
              Bildiğimizi
              <br />

              <em className="text-white/58">
                saklamıyoruz.
              </em>
            </h2>
          </div>

          {/* STRICTLY EMPTY WINE LANE */}

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />

          {/* RIGHT */}

          <div
            className="
              mt-12

              xl:mt-0
              xl:flex
              xl:justify-end
            "
          >
            <div className="max-w-[400px]">
              <p
                className="
                  font-serif
                  text-[clamp(1.7rem,2.4vw,2.7rem)]

                  leading-[1]
                  tracking-[-0.04em]

                  text-[#f4efe9]
                "
              >
                Markanı büyütmek için
                <br />

                <em className="text-white/52">
                  bilmen gerekenler.
                </em>
              </p>

              <p
                className="
                  mt-7
                  max-w-[370px]

                  text-sm
                  leading-7
                  text-white/45
                "
              >
                Sosyal medya yönetimi, dijital reklam, grafik tasarım ve marka
                iletişimi üzerine kısa, uygulanabilir içerikler.
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            POSTS
        ================================================== */}

        <div
          className="
            xl:grid
            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:gap-10
          "
        >
          {/* LEFT POSTS */}

          <div>
            {posts
              .filter((_, index) => index % 2 === 0)
              .map((post, index) => (
                <HomeBlogCard
                  key={post.id}
                  post={post}
                  index={index * 2}
                />
              ))}
          </div>

          {/* WINE */}

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />

          {/* RIGHT POSTS */}

          <div>
            {posts
              .filter((_, index) => index % 2 !== 0)
              .map((post, index) => (
                <HomeBlogCard
                  key={post.id}
                  post={post}
                  index={index * 2 + 1}
                />
              ))}
          </div>
        </div>

        {/* =================================================
            EXIT
        ================================================== */}

        <div
          className="
            mt-20

            border-t
            border-white/10

            pt-9

            xl:grid
            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:items-end
            xl:gap-10
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/25
              "
            >
              Daha fazlası var.
            </p>

            <p
              className="
                mt-5
                max-w-[430px]

                font-serif
                text-[clamp(2.1rem,3vw,3.5rem)]

                leading-[0.95]
                tracking-[-0.045em]

                text-[#f4efe9]
              "
            >
              Biraz daha
              <br />

              <em className="text-white/52">
                derine in.
              </em>
            </p>
          </div>

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />

          <div
            className="
              mt-10
              xl:mt-0
              xl:flex
              xl:justify-end
            "
          >
            <Link
              href="/blog"
              className="
                group

                flex
                w-full
                max-w-[390px]

                items-center
                justify-between

                border-b
                border-white/15

                pb-4

                text-[9px]
                uppercase
                tracking-[0.26em]

                text-white/50

                transition-colors
                duration-300

                hover:text-white
              "
            >
              Tüm yazıları gör

              <span
                className="
                  text-[#c45a78]

                  transition-transform
                  duration-500

                  group-hover:translate-x-2
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}