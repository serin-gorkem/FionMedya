"use client";

import {
  useState,
  useTransition,
} from "react";

import {
  useRouter,
} from "next/navigation";

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

import BlogEditor from "./BlogEditor";
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

function FieldLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <label
      className="
        text-[8px]
        uppercase
        tracking-[0.26em]
        text-white/32
      "
    >
      {children}
    </label>
  );
}

const fieldClassName = `
  mt-3
  w-full

  rounded-[12px]

  border
  border-white/10

  bg-[#0b0b0b]

  px-4
  py-4

  text-sm
  text-[#f4efe9]

  outline-none

  placeholder:text-white/18

  transition-colors

  focus:border-[#6c2038]
`;

export default function BlogForm(
  props: BlogFormProps,
) {
  const router =
    useRouter();

  const [
    pending,
    startTransition,
  ] = useTransition();

  const post =
    props.mode === "edit"
      ? props.post
      : null;

  const [
    title,
    setTitle,
  ] = useState(
    post?.title ?? "",
  );

  const [
    slug,
    setSlug,
  ] = useState(
    post?.slug ?? "",
  );

  const [
    excerpt,
    setExcerpt,
  ] = useState(
    post?.excerpt ?? "",
  );

  const [
    contentHtml,
    setContentHtml,
  ] = useState(
    post?.contentHtml ??
      "",
  );

  const [
    coverImageUrl,
    setCoverImageUrl,
  ] = useState<
    string | null
  >(
    post?.coverImageUrl ??
      null,
  );

  const [
    category,
    setCategory,
  ] = useState(
    post?.category ??
      "Genel",
  );

  const [
    tags,
    setTags,
  ] = useState(
    post?.tags.join(", ") ??
      "",
  );

  const [
    seoTitle,
    setSeoTitle,
  ] = useState(
    post?.seoTitle ?? "",
  );

  const [
    seoDescription,
    setSeoDescription,
  ] = useState(
    post?.seoDescription ??
      "",
  );

  const [
    status,
    setStatus,
  ] =
    useState<BlogStatus>(
      post?.status ??
        "draft",
    );

  const [
    error,
    setError,
  ] = useState<
    string | null
  >(null);

  const [
    saved,
    setSaved,
  ] = useState(false);

  const submit =
    () => {
      setError(null);
      setSaved(false);

      const input:
        BlogPostInput = {
        title,
        slug,

        excerpt,
        contentHtml,

        coverImageUrl,

        category,

        tags: tags
          .split(",")
          .map((tag) =>
            tag.trim(),
          )
          .filter(Boolean),

        seoTitle:
          seoTitle.trim() ||
          null,

        seoDescription:
          seoDescription.trim() ||
          null,

        status,
      };

      startTransition(
        async () => {
          const result =
            props.mode ===
            "create"
              ? await createBlogPostAction(
                  input,
                )
              : await updateBlogPostAction(
                  props.post.id,
                  input,
                );

          if (
            !result.success
          ) {
            setError(
              result.message,
            );

            return;
          }

          if (
            props.mode ===
            "create"
          ) {
            router.replace(
              `/admin/blog/${result.data.id}/edit`,
            );

            return;
          }

          setSaved(true);

          router.refresh();
        },
      );
    };

  return (
    <div
      className="
        grid
        gap-8

        xl:grid-cols-[minmax(0,1fr)_360px]
      "
    >
      {/* =================================================
          MAIN
      ================================================== */}

      <div className="min-w-0">
        {/* TITLE */}

        <div>
          <FieldLabel>
            Yazı Başlığı
          </FieldLabel>

          <textarea
            value={title}
            rows={2}
            onChange={(
              event,
            ) =>
              setTitle(
                event.target
                  .value,
              )
            }
            placeholder="Örn. Sosyal Medya Yönetimi Nedir?"
            className="
              mt-3
              w-full
              resize-none

              border-b
              border-white/10

              bg-transparent

              pb-5

              font-serif

              text-[clamp(2.6rem,5vw,5.2rem)]

              leading-[0.9]
              tracking-[-0.055em]

              text-[#f4efe9]

              outline-none

              placeholder:text-white/12

              focus:border-[#6c2038]
            "
          />
        </div>

        {/* EXCERPT */}

        <div className="mt-10">
          <FieldLabel>
            Kısa Özet
          </FieldLabel>

          <textarea
            value={excerpt}
            maxLength={320}
            rows={3}
            onChange={(
              event,
            ) =>
              setExcerpt(
                event.target
                  .value,
              )
            }
            placeholder="Google ve blog kartında görünecek kısa açıklama..."
            className={`${fieldClassName} resize-none leading-7`}
          />

          <div
            className="
              mt-2
              flex
              justify-end
            "
          >
            <span className="text-[9px] text-white/20">
              {
                excerpt.length
              }
              /320
            </span>
          </div>
        </div>

        {/* EDITOR */}

        <div className="mt-10">
          <FieldLabel>
            İçerik
          </FieldLabel>

          <div className="mt-3">
            <BlogEditor
              value={
                contentHtml
              }
              onChange={
                setContentHtml
              }
            />
          </div>
        </div>
      </div>

      {/* =================================================
          SIDEBAR
      ================================================== */}

      <aside className="space-y-5">
        {/* PUBLISH */}

        <section
          className="
            rounded-[22px]

            border
            border-[#4d1729]

            bg-[#090909]

            p-5
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-[#c45a78]
            "
          >
            Yayın
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() =>
                setStatus(
                  "draft",
                )
              }
              className={`
                rounded-[11px]
                border
                px-4
                py-3.5

                text-[8px]
                uppercase
                tracking-[0.18em]

                transition-colors

                ${
                  status ===
                  "draft"
                    ? `
                      border-white/20
                      bg-white/[0.07]
                      text-white
                    `
                    : `
                      border-white/[0.07]
                      text-white/30
                    `
                }
              `}
            >
              Taslak
            </button>

            <button
              type="button"
              onClick={() =>
                setStatus(
                  "published",
                )
              }
              className={`
                rounded-[11px]
                border
                px-4
                py-3.5

                text-[8px]
                uppercase
                tracking-[0.18em]

                transition-colors

                ${
                  status ===
                  "published"
                    ? `
                      border-[#7a2842]
                      bg-[#591323]
                      text-white
                    `
                    : `
                      border-white/[0.07]
                      text-white/30
                    `
                }
              `}
            >
              Yayında
            </button>
          </div>

          {error && (
            <p
              className="
                mt-5

                rounded-[10px]

                border
                border-[#72243e]

                bg-[#591323]/20

                px-4
                py-3

                text-xs
                leading-5

                text-[#dc829a]
              "
            >
              {error}
            </p>
          )}

          {saved && (
            <p
              className="
                mt-5
                text-xs
                text-white/45
              "
            >
              Değişiklikler
              kaydedildi.
            </p>
          )}

          <button
            type="button"
            disabled={pending}
            onClick={submit}
            className={`mt-5 w-full ${adminPrimaryActionClassName}`}
          >
            {pending
              ? "Kaydediliyor..."
              : status ===
                  "published"
                ? "Kaydet & Yayınla"
                : "Taslağı Kaydet"}

            <span>→</span>
          </button>

          <button
            type="button"
            onClick={() =>
              router.push(
                "/admin/blog",
              )
            }
            className={`mt-2 w-full ${adminSecondaryActionClassName}`}
          >
            Listeye Dön
          </button>
        </section>

        {/* COVER */}

        <section>
          <p
            className="
              mb-3
              text-[8px]
              uppercase
              tracking-[0.26em]
              text-white/32
            "
          >
            Kapak Görseli
          </p>

          <CoverImageField
            value={
              coverImageUrl
            }
            onChange={
              setCoverImageUrl
            }
          />
        </section>

        {/* CATEGORY */}

        <section
          className="
            rounded-[20px]
            border
            border-white/10
            bg-[#090909]
            p-5
          "
        >
          <FieldLabel>
            Kategori
          </FieldLabel>

          <input
            value={category}
            onChange={(
              event,
            ) =>
              setCategory(
                event.target
                  .value,
              )
            }
            className={
              fieldClassName
            }
          />

          <div className="mt-6">
            <FieldLabel>
              Etiketler
            </FieldLabel>

            <input
              value={tags}
              onChange={(
                event,
              ) =>
                setTags(
                  event.target
                    .value,
                )
              }
              placeholder="SEO, Sosyal Medya, Reklam"
              className={
                fieldClassName
              }
            />

            <p className="mt-2 text-[9px] leading-4 text-white/20">
              Virgülle ayır.
            </p>
          </div>
        </section>

        {/* URL */}

        <section
          className="
            rounded-[20px]
            border
            border-white/10
            bg-[#090909]
            p-5
          "
        >
          <FieldLabel>
            URL / Slug
          </FieldLabel>

          <input
            value={slug}
            onChange={(
              event,
            ) =>
              setSlug(
                event.target
                  .value,
              )
            }
            placeholder="Otomatik oluşturulur"
            className={
              fieldClassName
            }
          />

          <p className="mt-3 break-all text-[9px] text-white/22">
            /blog/
            {slug ||
              "otomatik-olusturulur"}
          </p>
        </section>

        {/* SEO */}

        <section
          className="
            rounded-[20px]
            border
            border-white/10
            bg-[#090909]
            p-5
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.28em]
              text-[#c45a78]
            "
          >
            SEO
          </p>

          <div className="mt-5">
            <FieldLabel>
              SEO Başlığı
            </FieldLabel>

            <input
              value={seoTitle}
              maxLength={60}
              onChange={(
                event,
              ) =>
                setSeoTitle(
                  event.target
                    .value,
                )
              }
              placeholder={title}
              className={
                fieldClassName
              }
            />

            <p className="mt-2 text-right text-[9px] text-white/20">
              {
                seoTitle.length
              }
              /60
            </p>
          </div>

          <div className="mt-5">
            <FieldLabel>
              SEO Açıklaması
            </FieldLabel>

            <textarea
              value={
                seoDescription
              }
              maxLength={160}
              rows={4}
              onChange={(
                event,
              ) =>
                setSeoDescription(
                  event.target
                    .value,
                )
              }
              placeholder={excerpt}
              className={`${fieldClassName} resize-none leading-6`}
            />

            <p className="mt-2 text-right text-[9px] text-white/20">
              {
                seoDescription.length
              }
              /160
            </p>
          </div>
        </section>
      </aside>
    </div>
  );
}