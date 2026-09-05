"use client";

import { useState, useTransition } from "react";

import { useRouter } from "next/navigation";

import type {
  BlogPost,
  BlogPostInput,
  BlogStatus,
} from "@/features/blog/blog.types";

import {
  createBlogPostAction,
  updateBlogPostAction,
} from "@/features/blog/blog.actions";

import {
  adminPrimaryActionClassName,
  adminSecondaryActionClassName,
} from "@/app/components/admin/admin.styles";

import BlogEditor from "@/app/components/admin/blog/editor/BlogEditor";
import CoverImageField from "./CoverImageField";

type BlogFormProps =
  | {
      mode: "create";
      post?: never;
    }
  | {
      mode: "edit";
      post: BlogPost;
    };

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label
      className="
        text-[9px]
        font-medium
        uppercase
        tracking-[0.2em]
        text-white/45
      "
    >
      {children}
    </label>
  );
}

const fieldClassName = `
  mt-3
  w-full

  border
  border-white/10

  bg-white/[0.025]

  px-4
  py-4

  text-[14px]
  text-[#f4efe9]

  outline-none

  placeholder:text-white/20

  transition-all
  duration-200

  hover:border-white/20

  focus:border-[#d86a88]/70
  focus:bg-white/[0.04]
`;

export default function BlogForm(props: BlogFormProps) {
  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const post = props.mode === "edit" ? props.post : null;

  const [title, setTitle] = useState(post?.title ?? "");

  const [slug, setSlug] = useState(post?.slug ?? "");

  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");

  const [contentHtml, setContentHtml] = useState(post?.contentHtml ?? "");

  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(
    post?.coverImageUrl ?? null,
  );

  const [category, setCategory] = useState(post?.category ?? "Genel");

  const [tags, setTags] = useState(post?.tags.join(", ") ?? "");

  const [seoTitle, setSeoTitle] = useState(post?.seoTitle ?? "");

  const [seoDescription, setSeoDescription] = useState(
    post?.seoDescription ?? "",
  );

  const [status, setStatus] = useState<BlogStatus>(post?.status ?? "draft");

  const [error, setError] = useState<string | null>(null);

  const [saved, setSaved] = useState(false);

  /* =========================================================
     SUBMIT
  ========================================================= */

  const submit = () => {
    setError(null);
    setSaved(false);

    const input: BlogPostInput = {
      title,
      slug,

      excerpt,
      contentHtml,

      coverImageUrl,

      category,

      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),

      seoTitle: seoTitle.trim() || null,

      seoDescription: seoDescription.trim() || null,

      status,
    };

    startTransition(async () => {
      const result =
        props.mode === "create"
          ? await createBlogPostAction(input)
          : await updateBlogPostAction(props.post.id, input);

      if (!result.success) {
        setError(result.message);

        return;
      }

      if (props.mode === "create") {
        router.replace(`/admin/blog/${result.data.id}/edit`);

        return;
      }

      setSaved(true);

      router.refresh();
    });
  };

  return (
    <div
      className="
        grid
        items-start
        gap-8

        lg:grid-cols-[minmax(0,1fr)_340px]

        xl:grid-cols-[minmax(0,1fr)_380px]
        xl:gap-10
      "
    >
      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="min-w-0">
        {/* TITLE */}

        <section>
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <FieldLabel>Yazı Başlığı</FieldLabel>

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-white/20
              "
            >
              H1
            </span>
          </div>

          <textarea
            value={title}
            rows={2}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Yazının başlığı..."
            className="
              mt-4
              w-full

              resize-none

              border-b
              border-white/15

              bg-transparent

              pb-6

              font-serif

              text-[clamp(2.7rem,5vw,5.5rem)]

              leading-[0.9]
              tracking-[-0.055em]

              text-[#f4efe9]

              outline-none

              placeholder:text-white/15

              transition-colors

              focus:border-[#d86a88]/60
            "
          />
        </section>

        {/* EXCERPT */}

        <section className="mt-12">
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <FieldLabel>Kısa Özet</FieldLabel>

            <span
              className="
                text-[9px]
                tabular-nums

                text-white/25
              "
            >
              {excerpt.length}/320
            </span>
          </div>

          <textarea
            value={excerpt}
            maxLength={320}
            rows={4}
            onChange={(event) => setExcerpt(event.target.value)}
            placeholder="Blog kartlarında ve yazı girişinde görünecek kısa açıklama..."
            className={`
              ${fieldClassName}

              resize-none
              leading-7
            `}
          />
        </section>

        {/* CONTENT */}

        <section className="mt-12">
          <div
            className="
              mb-3

              flex
              items-center
              justify-between
              gap-4
            "
          >
            <FieldLabel>İçerik</FieldLabel>

            <span
              className="
                flex
                items-center
                gap-2

                text-[7px]
                uppercase
                tracking-[0.19em]

                text-white/20
              "
            >
              <span
                className="
                  size-1
                  rotate-45
                  bg-[#d86a88]
                "
              />
              Fion Editor
            </span>
          </div>

          <BlogEditor value={contentHtml} onChange={setContentHtml} />
        </section>
      </div>

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className="
          min-w-0
          space-y-6

          lg:sticky
          lg:top-[100px]
        "
      >
        {/* =================================================
            PUBLISH
        ================================================== */}

        <section
          className="
            relative
            overflow-hidden

            border
            border-[#7c2a43]/60

            bg-[#100d0e]

            p-5
          "
        >
          <span
            aria-hidden="true"
            className="
              absolute
              left-0
              top-0

              h-px
              w-16

              bg-[#d86a88]
            "
          />

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.24em]

                  text-[#d86a88]
                "
              >
                Yayın
              </p>

              <p
                className="
                  mt-2

                  text-[11px]
                  text-white/30
                "
              >
                Yazının yayın durumunu seç.
              </p>
            </div>

            <span
              className={`
                size-2
                rotate-45

                ${status === "published" ? "bg-[#d86a88]" : "bg-white/25"}
              `}
            />
          </div>

          {/* STATUS */}

          <div
            className="
              mt-6

              grid
              grid-cols-2
              gap-2
            "
          >
            <button
              type="button"
              onClick={() => setStatus("draft")}
              className={`
                border

                px-3
                py-3.5

                text-[8px]
                font-medium
                uppercase
                tracking-[0.17em]

                transition-all

                ${
                  status === "draft"
                    ? `
                      border-white/25
                      bg-white/[0.07]
                      text-[#f4efe9]
                    `
                    : `
                      border-white/10
                      text-white/30

                      hover:border-white/20
                      hover:text-white/60
                    `
                }
              `}
            >
              Taslak
            </button>

            <button
              type="button"
              onClick={() => setStatus("published")}
              className={`
                border

                px-3
                py-3.5

                text-[8px]
                font-medium
                uppercase
                tracking-[0.17em]

                transition-all

                ${
                  status === "published"
                    ? `
                      border-[#d86a88]/60
                      bg-[#591323]/55
                      text-[#f4efe9]
                    `
                    : `
                      border-white/10
                      text-white/30

                      hover:border-[#d86a88]/30
                      hover:text-white/60
                    `
                }
              `}
            >
              Yayında
            </button>
          </div>

          {/* ERROR */}

          {error && (
            <div
              className="
                mt-5

                border
                border-[#8a304c]/70

                bg-[#591323]/20

                px-4
                py-3
              "
            >
              <p
                className="
                  text-[11px]
                  leading-5

                  text-[#ef9eb4]
                "
              >
                {error}
              </p>
            </div>
          )}

          {/* SAVED */}

          {saved && (
            <div
              className="
                mt-5

                border
                border-white/10

                bg-white/[0.03]

                px-4
                py-3
              "
            >
              <p
                className="
                  text-[11px]
                  text-white/50
                "
              >
                Değişiklikler kaydedildi.
              </p>
            </div>
          )}

          {/* SAVE */}

          <button
            type="button"
            disabled={pending}
            onClick={submit}
            className={`
              mt-5
              w-full

              ${adminPrimaryActionClassName}
            `}
          >
            <span>
              {pending
                ? "Kaydediliyor..."
                : status === "published"
                  ? "Kaydet & Yayınla"
                  : "Taslağı Kaydet"}
            </span>

            <span>→</span>
          </button>

          {/* =================================================
    PREVIEW
================================================== */}

          {props.mode === "edit" && (
            <>
              <a
                href={`/blog/preview/${props.post.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`
        mt-2
        w-full

        ${adminSecondaryActionClassName}

        flex
        items-center
        justify-between
      `}
              >
                <span>Önizle</span>

                <span>↗</span>
              </a>

              <p
                className="
        mt-2

        text-[9px]
        leading-4

        text-white/25
      "
              >
                Önizleme son kaydedilen hali gösterir.
              </p>
            </>
          )}

          {/* BACK */}

          <button
            type="button"
            onClick={() => router.push("/admin/blog")}
            className={`
              mt-2
              w-full

              ${adminSecondaryActionClassName}
            `}
          >
            Listeye Dön
          </button>
        </section>

        {/* =================================================
            COVER
        ================================================== */}

        <section>
          <div
            className="
              mb-3

              flex
              items-center
              justify-between
            "
          >
            <FieldLabel>Kapak Görseli</FieldLabel>

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.18em]

                text-white/20
              "
            >
              Cover
            </span>
          </div>

          <CoverImageField value={coverImageUrl} onChange={setCoverImageUrl} />
        </section>

        {/* =================================================
            CATEGORY + TAGS
        ================================================== */}

        <section
          className="
            border
            border-white/10

            bg-white/[0.02]

            p-5
          "
        >
          <FieldLabel>Kategori</FieldLabel>

          <input
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            placeholder="Genel"
            className={fieldClassName}
          />

          <div className="mt-7">
            <FieldLabel>Etiketler</FieldLabel>

            <input
              value={tags}
              onChange={(event) => setTags(event.target.value)}
              placeholder="SEO, Sosyal Medya, Reklam"
              className={fieldClassName}
            />

            <p
              className="
                mt-3

                text-[10px]
                leading-5

                text-white/25
              "
            >
              Etiketleri virgülle ayır.
            </p>
          </div>
        </section>

        {/* =================================================
            SLUG
        ================================================== */}

        <section
          className="
            border
            border-white/10

            bg-white/[0.02]

            p-5
          "
        >
          <FieldLabel>URL / Slug</FieldLabel>

          <input
            value={slug}
            onChange={(event) => setSlug(event.target.value)}
            placeholder="Otomatik oluşturulur"
            className={fieldClassName}
          />

          <div
            className="
              mt-3

              border-t
              border-white/[0.07]

              pt-3
            "
          >
            <p
              className="
                break-all

                text-[9px]
                leading-5

                text-white/25
              "
            >
              /blog/
              {slug || "otomatik-olusturulur"}
            </p>
          </div>
        </section>

        {/* =================================================
            SEO
        ================================================== */}

        <section
          className="
            border
            border-white/10

            bg-white/[0.02]

            p-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                size-1
                rotate-45

                bg-[#d86a88]
              "
            />

            <p
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.22em]

                text-[#d86a88]
              "
            >
              SEO
            </p>
          </div>

          {/* SEO TITLE */}

          <div className="mt-6">
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >
              <FieldLabel>SEO Başlığı</FieldLabel>

              <span
                className="
                  text-[9px]
                  tabular-nums
                  text-white/25
                "
              >
                {seoTitle.length}/60
              </span>
            </div>

            <input
              value={seoTitle}
              maxLength={60}
              onChange={(event) => setSeoTitle(event.target.value)}
              placeholder={title || "SEO başlığı"}
              className={fieldClassName}
            />
          </div>

          {/* SEO DESCRIPTION */}

          <div className="mt-6">
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >
              <FieldLabel>SEO Açıklaması</FieldLabel>

              <span
                className="
                  text-[9px]
                  tabular-nums
                  text-white/25
                "
              >
                {seoDescription.length}/160
              </span>
            </div>

            <textarea
              value={seoDescription}
              maxLength={160}
              rows={4}
              onChange={(event) => setSeoDescription(event.target.value)}
              placeholder={
                excerpt || "Arama sonuçlarında görünecek açıklama..."
              }
              className={`
                ${fieldClassName}

                resize-none
                leading-6
              `}
            />
          </div>
        </section>
      </aside>

      {/* =====================================================
          MOBILE SAVE BAR

          Sidebar aşağıda olsa bile kayıt aksiyonu kaybolmasın.
      ====================================================== */}

      <div
        className="
          fixed
          inset-x-0
          bottom-0
          z-30

          border-t
          border-white/10

          bg-[#100d0e]/95

          p-3

          backdrop-blur-xl

          lg:hidden
        "
      >
        <div
          className="
            mx-auto

            flex
            max-w-[700px]
            gap-2
          "
        >
          <button
            type="button"
            onClick={() =>
              setStatus(status === "draft" ? "published" : "draft")
            }
            className="
              min-w-[100px]

              border
              border-white/10

              px-3

              text-[7px]
              uppercase
              tracking-[0.15em]

              text-white/45
            "
          >
            {status === "draft" ? "Taslak" : "Yayında"}
          </button>

          <button
            type="button"
            disabled={pending}
            onClick={submit}
            className={`
              flex-1
              ${adminPrimaryActionClassName}
            `}
          >
            {pending
              ? "Kaydediliyor..."
              : status === "published"
                ? "Kaydet & Yayınla"
                : "Taslağı Kaydet"}

            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
