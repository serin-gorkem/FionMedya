export type ClientLogo = {
  name: string;
  logo: string;

  sliderScale?: number;
  wallScale?: number;
};

export type ProjectTestimonial = {
  quote: string;
  client: string;
  person?: string;
  role?: string;
};

export const clientLogos: ClientLogo[] = [
  {
    name: "Byron",
    logo: "/clients/byron.png",
    sliderScale: 1.25,
    wallScale: 1.3,
  },
  {
    name: "Çapar",
    logo: "/clients/capar.png",
    sliderScale: 1.25,
    wallScale: 1.15,
  },
  {
    name: "FUYAPI",
    logo: "/clients/fuyapi.png",
    sliderScale: 1,
    wallScale: 0.92,
  },
  {
    name: "Git Git",
    logo: "/clients/gitgit.png",
    sliderScale: 0.85,
    wallScale: 1.0,
  },
  {
    name: "İstanbul Kokoreç",
    logo: "/clients/istanbul-kokorec.png",
    sliderScale: 1.05,
    wallScale: 0.7,
  },
  {
    name: "Kule",
    logo: "/clients/kule.png",
    sliderScale: 1.2,
    wallScale: 0.95,
  },
  {
    name: "Kurye Plus",
    logo: "/clients/kurye-plus.png",
    sliderScale: 1.2,
    wallScale: 1.05,
  },
  {
    name: "Maia",
    logo: "/clients/maia.png",
    sliderScale: 1.15,
    wallScale: 0.88,
  },
  {
    name: "Moto Express",
    logo: "/clients/moto-express.png",
    sliderScale: 1,
    wallScale: 0.62,
  },
  {
    name: "MT Pro",
    logo: "/clients/mt-pro.png",
    sliderScale: 1.05,
    wallScale: 0.78,
  },
  {
    name: "Perla",
    logo: "/clients/perla.png",
    sliderScale: 1.2,
    wallScale: 0.9,
  },
];

export const projectTestimonials: ProjectTestimonial[] = [
  /*
  Gerçek yorumlar geldikçe burayı dolduracağız.

  {
    quote:
      "Fion ile çalışmaya başladıktan sonra ...",
    client: "FUYAPI",
    person: "Ad Soyad",
    role: "Kurucu",
  },
  */
];
