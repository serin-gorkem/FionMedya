import type {
  Editor,
} from "@tiptap/core";

import StarterKit from "@tiptap/starter-kit";

import {
  Placeholder,
} from "@tiptap/extensions";

import Highlight from "@tiptap/extension-highlight";

import TextAlign from "@tiptap/extension-text-align";

import FileHandler from "@tiptap/extension-file-handler";

import {
  FionCallout,
} from "./FionCallout";

import {
  BlogImage,
} from "./BlogImage";

import {
  SlashCommandExtension,
} from "./slash-command.extension";

type Options = {
  placeholder?: string;

  onImageFiles?: (
    editor: Editor,
    files: File[],
    position?: number,
  ) => void;
};

export function createBlogEditorExtensions({
  placeholder =
    'Yazmaya başla veya "/" ile blok ekle...',

  onImageFiles,
}: Options = {}) {
  return [
    StarterKit.configure({
      heading: {
        levels: [
          2,
          3,
        ],
      },

      link: {
        openOnClick:
          false,

        autolink:
          true,

        linkOnPaste:
          true,

        HTMLAttributes: {
          rel:
            "noopener noreferrer",

          target:
            "_blank",
        },
      },
    }),

    Highlight.configure({
      multicolor:
        false,
    }),

    TextAlign.configure({
      types: [
        "heading",
        "paragraph",
      ],

      alignments: [
        "left",
        "center",
        "right",
      ],
    }),

    Placeholder.configure({
      placeholder({
        node,
      }) {
        if (
          node.type.name ===
          "heading"
        ) {
          return "Başlık...";
        }

        return placeholder;
      },
    }),

    FionCallout,

    BlogImage,

    FileHandler.configure({
      allowedMimeTypes: [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/avif",
      ],

      consumePasteEvent:
        true,

      onPaste(
        editor,
        files,
      ) {
        onImageFiles?.(
          editor,
          files,
        );
      },

      onDrop(
        editor,
        files,
        position,
      ) {
        onImageFiles?.(
          editor,
          files,
          position,
        );
      },
    }),

    SlashCommandExtension,
  ];
}