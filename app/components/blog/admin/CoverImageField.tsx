"use client";

import {
  useRef,
  useState,
} from "react";

import {
  createClient,
} from "@/lib/supabase/client";

type CoverImageFieldProps = {
  value: string | null;

  onChange: (
    value: string | null,
  ) => void;
};

const allowedTypes = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
];

const extensions:
  Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/avif": "avif",
  };

export default function CoverImageField({
  value,
  onChange,
}: CoverImageFieldProps) {
  const inputRef =
    useRef<HTMLInputElement>(
      null,
    );

  const [
    uploading,
    setUploading,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState<
    string | null
  >(null);

  const uploadImage =
    async (
      file: File,
    ) => {
      setError(null);

      if (
        !allowedTypes.includes(
          file.type,
        )
      ) {
        setError(
          "JPG, PNG, WebP veya AVIF yükleyebilirsin.",
        );

        return;
      }

      if (
        file.size >
        5 * 1024 * 1024
      ) {
        setError(
          "Görsel en fazla 5 MB olabilir.",
        );

        return;
      }

      setUploading(true);

      try {
        const supabase =
          createClient();

        const extension =
          extensions[
            file.type
          ];

        const path =
          `covers/${new Date().getFullYear()}/${crypto.randomUUID()}.${extension}`;

        const {
          error: uploadError,
        } =
          await supabase.storage
            .from(
              "blog-media",
            )
            .upload(
              path,
              file,
              {
                contentType:
                  file.type,

                cacheControl:
                  "31536000",

                upsert: false,
              },
            );

        if (uploadError) {
          throw uploadError;
        }

        const {
          data,
        } =
          supabase.storage
            .from(
              "blog-media",
            )
            .getPublicUrl(
              path,
            );

        onChange(
          data.publicUrl,
        );
      } catch (
        uploadError
      ) {
        setError(
          uploadError instanceof
            Error
            ? uploadError.message
            : "Görsel yüklenemedi.",
        );
      } finally {
        setUploading(false);
      }
    };

  return (
    <div>
      <div
        className="
          overflow-hidden

          rounded-[20px]

          border
          border-white/10

          bg-[#090909]
        "
      >
        {value ? (
          <div className="relative">
            <img
              src={value}
              alt="Blog kapak önizlemesi"
              className="
                aspect-[16/9]
                w-full
                object-cover
              "
            />

            <div
              className="
                absolute
                inset-x-0
                bottom-0

                flex
                justify-end
                gap-2

                bg-black/70

                p-4

                backdrop-blur-sm
              "
            >
              <button
                type="button"
                disabled={
                  uploading
                }
                onClick={() =>
                  inputRef.current?.click()
                }
                className="
                  rounded-[10px]
                  border
                  border-white/15
                  bg-black/70

                  px-4
                  py-2.5

                  text-[8px]
                  uppercase
                  tracking-[0.18em]

                  text-white/60

                  hover:text-white
                "
              >
                Değiştir
              </button>

              <button
                type="button"
                onClick={() =>
                  onChange(null)
                }
                className="
                  rounded-[10px]
                  border
                  border-[#632038]

                  bg-[#591323]/60

                  px-4
                  py-2.5

                  text-[8px]
                  uppercase
                  tracking-[0.18em]

                  text-[#efb0c1]
                "
              >
                Kaldır
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            disabled={
              uploading
            }
            onClick={() =>
              inputRef.current?.click()
            }
            className="
              flex
              min-h-[220px]
              w-full

              flex-col
              items-center
              justify-center

              gap-3

              text-center

              transition-colors

              hover:bg-white/[0.02]
            "
          >
            <span
              className="
                flex
                h-12
                w-12

                items-center
                justify-center

                rounded-[12px]

                border
                border-[#5c1c31]

                bg-[#591323]/25

                text-lg
                text-[#c45a78]
              "
            >
              +
            </span>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.24em]
                text-white/48
              "
            >
              {uploading
                ? "Yükleniyor..."
                : "Kapak Görseli Yükle"}
            </span>

            <span className="text-[10px] text-white/22">
              JPG / PNG / WebP / AVIF
              · Maks. 5 MB
            </span>
          </button>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        hidden
        accept="image/jpeg,image/png,image/webp,image/avif"
        onChange={(
          event,
        ) => {
          const file =
            event.target
              .files?.[0];

          if (file) {
            void uploadImage(
              file,
            );
          }

          event.target.value =
            "";
        }}
      />

      {error && (
        <p
          className="
            mt-3
            text-xs
            text-[#d86a88]
          "
        >
          {error}
        </p>
      )}
    </div>
  );
}