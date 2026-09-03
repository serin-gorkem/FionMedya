"use client";

import {
  useState,
  useTransition,
} from "react";

import {
  deleteBlogPostAction,
} from "@/features/blog/blog.actions";

type DeleteBlogButtonProps = {
  postId: string;
  postTitle: string;
};

export default function DeleteBlogButton({
  postId,
  postTitle,
}: DeleteBlogButtonProps) {
  const [
    confirmOpen,
    setConfirmOpen,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState<string | null>(
    null,
  );

  const [
    pending,
    startTransition,
  ] = useTransition();

  const handleDelete = () => {
    setError(null);

    startTransition(
      async () => {
        const result =
          await deleteBlogPostAction(
            postId,
          );

        if (!result.success) {
          setError(
            result.message,
          );

          return;
        }

        setConfirmOpen(false);
      },
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setError(null);
          setConfirmOpen(true);
        }}
        className="
          rounded-[10px]

          border
          border-transparent

          px-4
          py-3

          text-[10px]
          font-medium
          uppercase
          tracking-[0.14em]

          text-[#c68a9a]

          transition-all
          duration-300

          hover:border-[#8a304c]
          hover:bg-[#591323]/30
          hover:text-[#ef9eb4]
        "
      >
        Sil
      </button>

      {confirmOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            flex
            items-center
            justify-center

            bg-black/85

            px-6

            backdrop-blur-md
          "
          onMouseDown={(
            event,
          ) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setConfirmOpen(
                false,
              );
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-blog-title"
            className="
              w-full
              max-w-[480px]

              rounded-[26px]

              border
              border-[#74233d]

              bg-[#0d0d0d]

              p-7

              shadow-[0_40px_120px_rgba(0,0,0,0.75)]

              sm:p-8
            "
          >
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#d86a88]
              "
            >
              Yazıyı Sil
            </p>

            <h2
              id="delete-blog-title"
              className="
                mt-5

                font-serif
                text-[clamp(2.2rem,5vw,3.5rem)]

                leading-[0.92]
                tracking-[-0.05em]

                text-[var(--text-primary)]
              "
            >
              Emin
              <br />

              <em className="text-[var(--text-secondary)]">
                misin?
              </em>
            </h2>

            <p
              className="
                mt-6

                text-[14px]
                leading-7
                text-[var(--text-body)]
              "
            >
              <span className="text-[var(--text-primary)]">
                “{postTitle}”
              </span>{" "}
              kalıcı olarak silinecek.
              Bu işlem geri alınamaz.
            </p>

            {error && (
              <p
                className="
                  mt-5

                  rounded-[11px]

                  border
                  border-[#8a304c]

                  bg-[#591323]/30

                  px-4
                  py-3

                  text-[12px]
                  leading-5
                  text-[#ef9eb4]
                "
              >
                {error}
              </p>
            )}

            <div
              className="
                mt-8

                flex
                items-center
                justify-end
                gap-3
              "
            >
              <button
                type="button"
                disabled={pending}
                onClick={() =>
                  setConfirmOpen(
                    false,
                  )
                }
                className="
                  rounded-[10px]

                  border
                  border-white/15

                  bg-[#111111]

                  px-5
                  py-3.5

                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.14em]

                  text-[var(--text-secondary)]

                  transition-all
                  duration-200

                  hover:border-white/25
                  hover:bg-[#171717]
                  hover:text-white

                  disabled:opacity-40
                "
              >
                Vazgeç
              </button>

              <button
                type="button"
                disabled={pending}
                onClick={
                  handleDelete
                }
                className="
                  rounded-[10px]

                  border
                  border-[#8a304c]

                  bg-[#591323]

                  px-5
                  py-3.5

                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.14em]

                  text-[#f4efe9]

                  transition-all
                  duration-200

                  hover:border-[#d86a88]
                  hover:bg-[#6b1830]

                  disabled:cursor-wait
                  disabled:opacity-50
                "
              >
                {pending
                  ? "Siliniyor..."
                  : "Evet, Sil"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}