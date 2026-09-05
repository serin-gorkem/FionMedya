export type ClientLogo = {
  name: string;
  logo: string;

  sliderScale?: number;
  wallScale?: number;

  sliderTone?: "default" | "light";
};

export type ProjectTestimonial = {
  quote: string;
  client: string;
  person?: string;
  role?: string;
};

export const clientLogos: ClientLogo[] = [
  {
    name: "MonaLimo",
    logo: "/projects/clients/mona-limo.png",
    sliderScale: 1,
    wallScale: 0.95,
  },
  {
    name: "Seven For Life",
    logo: "/projects/clients/seven-for-life.png",
    sliderScale: 1.08,
    wallScale: 1,
    sliderTone: "light",
  },
  {
    name: "Byron",
    logo: "/projects/clients/byron.png",
    sliderScale: 1.25,
    wallScale: 1.3,
  },
  {
    name: "Çapar",
    logo: "/projects/clients/capar.png",
    sliderScale: 1.25,
    wallScale: 1.15,
  },
  {
    name: "FUYAPI",
    logo: "/projects/clients/fuyapi.png",
    sliderScale: 1,
    wallScale: 0.92,
  },
  {
    name: "Git Git",
    logo: "/projects/clients/gitgit.png",
    sliderScale: 0.85,
    wallScale: 1,
  },
  {
    name: "İstanbul Kokoreç",
    logo: "/projects/clients/istanbul-kokorec.png",
    sliderScale: 1.05,
    wallScale: 0.7,
  },
  {
    name: "Kule",
    logo: "/projects/clients/kule.png",
    sliderScale: 1.2,
    wallScale: 0.95,
  },
  {
    name: "Kurye Plus",
    logo: "/projects/clients/kurye-plus.png",
    sliderScale: 1.2,
    wallScale: 1.05,
  },
  {
    name: "Maia",
    logo: "/projects/clients/maia.png",
    sliderScale: 1.15,
    wallScale: 0.88,
  },
  {
    name: "Moto Express",
    logo: "/projects/clients/moto-express.png",
    sliderScale: 1,
    wallScale: 0.62,
  },
  {
    name: "MT Pro",
    logo: "/projects/clients/mt-pro.png",
    sliderScale: 1.05,
    wallScale: 0.78,
  },
  {
    name: "Perla",
    logo: "/projects/clients/perla.png",
    sliderScale: 1.2,
    wallScale: 0.9,
  },

  /* =====================================================
     NEW CLIENTS
  ====================================================== */

  {
    name: "Çat Kapı",
    logo: "/projects/clients/cat-kapi.png",
    sliderScale: 1.05,
    wallScale: 1,
  },
  {
    name: "Doğu Batı",
    logo: "/projects/clients/dogu-bati.png",
    sliderScale: 1,
    wallScale: 0.95,
  },
  {
    name: "EGE Tanzim",
    logo: "/projects/clients/ege-tanzim.png",
    sliderScale: 1,
    wallScale: 0.95,
  },
];
