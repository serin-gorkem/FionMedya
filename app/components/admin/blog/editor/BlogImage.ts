import {
  Node,
} from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<
    ReturnType
  > {
    blogImage: {
      setBlogImage: (
        attributes: {
          src: string;
          alt?: string;
          caption?: string;
        },
      ) => ReturnType;

      updateBlogImage: (
        attributes: {
          alt?: string;
          caption?: string;
        },
      ) => ReturnType;
    };
  }
}

export const BlogImage =
  Node.create({
    name: "blogImage",

    group: "block",

    atom: true,

    selectable: true,

    draggable: true,

    isolating: true,

    addAttributes() {
      return {
        src: {
          default: null,
        },

        alt: {
          default: "",
        },

        caption: {
          default: "",
        },
      };
    },

    parseHTML() {
      return [
        {
          tag:
            'figure[data-blog-image="true"]',

          getAttrs(element) {
            if (
              !(element instanceof
                HTMLElement)
            ) {
              return false;
            }

            const image =
              element.querySelector(
                "img",
              );

            if (!image) {
              return false;
            }

            const src =
              image.getAttribute(
                "src",
              );

            if (!src) {
              return false;
            }

            const caption =
              element.querySelector(
                "figcaption",
              );

            return {
              src,

              alt:
                image.getAttribute(
                  "alt",
                ) ?? "",

              caption:
                caption?.textContent ??
                "",
            };
          },
        },
      ];
    },

    renderHTML({
      node,
    }) {
      const {
        src,
        alt,
        caption,
      } = node.attrs as {
        src: string;
        alt: string;
        caption: string;
      };

      const imageNode = [
        "img",
        {
          src,
          alt: alt || "",
          loading: "lazy",
        },
      ];

      if (!caption) {
        return [
          "figure",
          {
            "data-blog-image":
              "true",
          },
          imageNode,
        ];
      }

      return [
        "figure",
        {
          "data-blog-image":
            "true",
        },
        imageNode,
        [
          "figcaption",
          {},
          caption,
        ],
      ];
    },

    addCommands() {
      return {
        setBlogImage:
          (attributes) =>
          ({
            commands,
          }) =>
            commands.insertContent(
              {
                type:
                  this.name,

                attrs:
                  attributes,
              },
            ),

        updateBlogImage:
          (attributes) =>
          ({
            commands,
          }) =>
            commands.updateAttributes(
              this.name,
              attributes,
            ),
      };
    },
  });
