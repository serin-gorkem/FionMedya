export const contactConfig = {
  email: "hello@fionmedya.com",
  whatsapp: {
    number: "905056435398",
    message: "Merhaba Fion Medya, markam için sizinle çalışmak istiyorum.",
  },
  instagram: "",
  locations: ["Kuşadası", "Aydın", "İzmir"],
} as const;

export function getWhatsAppUrl() {
  const { number, message } = contactConfig.whatsapp;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
