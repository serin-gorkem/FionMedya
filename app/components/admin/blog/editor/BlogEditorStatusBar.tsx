"use client";

import type {
  Editor,
} from "@tiptap/core";

import {
  useEditorState,
} from "@tiptap/react";

export default function BlogEditorStatusBar({
  editor,
}: {
  editor: Editor;
}) {
  const stats =
    useEditorState({
      editor,

      selector: ({
        editor,
      }) => {
        const text =
          editor
            .getText()
            .trim();

        const words =
          text
            ? text
                .split(
                  /\s+/,
                )
                .filter(
                  Boolean,
                )
                .length
            : 0;

        return {
          words,

          characters:
            text.length,

          readingTime:
            Math.max(
              1,
              Math.ceil(
                words /
                  220,
              ),
            ),
        };
      },
    });

  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        justify-between
        gap-4

        border-t
        border-white/10

        px-5
        py-4
      "
    >
      <div
        className="
          flex
          flex-wrap
          gap-6
        "
      >
        <Stat
          value={
            stats.words
          }
          label="kelime"
        />

        <Stat
          value={
            stats.characters
          }
          label="karakter"
        />

        <Stat
          value={
            stats.readingTime
          }
          label="dk okuma"
        />
      </div>

      <span
        className="
          flex
          items-center
          gap-3

          text-[6px]
          uppercase
          tracking-[0.22em]

          text-white/25
        "
      >
        <span
          className="
            size-1.5
            rotate-45
            bg-[#d36b88]
          "
        />

        Fion Editor
      </span>
    </div>
  );
}

function Stat({
  value,
  label,
}: {
  value:
    number;

  label:
    string;
}) {
  return (
    <span
      className="
        text-[7px]
        uppercase
        tracking-[0.19em]

        text-white/30
      "
    >
      <strong
        className="
          font-normal
          text-white/65
        "
      >
        {value}
      </strong>{" "}
      {label}
    </span>
  );
}