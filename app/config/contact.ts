export const contactConfig = {
  email: "info@fionmedya.com",

  whatsapp: {
    number: "905056435398",
    message:
      "Merhaba Fion Medya, markam için sizinle çalışmak istiyorum.",
  },

  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/fionmedya/",
    },

    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/fi%CC%87on/posts/?feedView=all",
    },

    {
      label: "Facebook",
      href: "https://www.facebook.com/fionmedya/",
    },

    {
      label: "YouTube",
      href: "https://www.youtube.com/@Fionmedya",
    },
  ],

  locations: [
    "Kuşadası",
    "Aydın",
    "İzmir",
  ],
} as const;

export function getWhatsAppUrl() {
  const {
    number,
    message,
  } = contactConfig.whatsapp;

  return `https://wa.me/${number}?text=${encodeURIComponent(
    message,
  )}`;
}