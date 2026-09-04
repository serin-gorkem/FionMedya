import {
  mergeAttributes,
  Node,
} from "@tiptap/core";

export const FionCallout =
  Node.create({
    name: "fionCallout",

    priority: 1000,

    group: "block",

    content: "paragraph+",

    defining: true,

    parseHTML() {
      return [
        {
          tag: 'blockquote[data-fion-callout="true"]',
        },
      ];
    },

    renderHTML({
      HTMLAttributes,
    }) {
      return [
        "blockquote",
        mergeAttributes(
          HTMLAttributes,
          {
            "data-fion-callout":
              "true",
          },
        ),
        0,
      ];
    },
  });