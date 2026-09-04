export type ClientWork = {
  number: string;
  name: string;
  logo: string;

  summary: string;
  detail?: string;

  services: readonly string[];
  images: readonly string[];

  side: "left" | "right";

  hasDetail: boolean;

  websiteUrl?: string;
};

export const clientWorks: readonly ClientWork[] = [
  /* =====================================================
     01 — BYRON
  ====================================================== */

  {
    number: "01",

    name: "Byron",
    logo: "/projects/clients/byron.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "Byron için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [
      "/projects/clients/byron/01.jpg",
      "/projects/clients/byron/02.jpg",
      "/projects/clients/byron/03.jpg",
    ],

    side: "left",

    hasDetail: true,
  },

  /* =====================================================
     02 — İSTANBUL KOKOREÇ
  ====================================================== */

  {
    number: "02",

    name: "İstanbul Kokoreç",
    logo: "/projects/clients/istanbul-kokorec.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "İstanbul Kokoreç için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: ["/projects/clients/istanbul-kokorec/01.jpg"],

    side: "right",

    hasDetail: true,
  },

  /* =====================================================
     03 — ÇAPAR TESİSAT
  ====================================================== */

  {
    number: "03",

    name: "Çapar Tesisat",
    logo: "/projects/clients/capar.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "Çapar Tesisat için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [
      "/projects/clients/capar/01.jpg",
      "/projects/clients/capar/02.jpg",
    ],

    side: "left",

    hasDetail: true,
  },

  /* =====================================================
     04 — KURYE PLUS
  ====================================================== */

  {
    number: "04",

    name: "Kurye Plus",
    logo: "/projects/clients/kurye-plus.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "Kurye Plus için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [
      "/projects/clients/kurye-plus/01.jpg",
      "/projects/clients/kurye-plus/02.jpg",
    ],

    side: "right",

    hasDetail: true,
  },

  /* =====================================================
     05 — FUYAPI
  ====================================================== */

  {
    number: "05",

    name: "FUYAPI",
    logo: "/projects/clients/fuyapi.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "FUYAPI için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [
      "/projects/clients/fuyapi/01.jpg",
      "/projects/clients/fuyapi/02.jpg",
    ],

    side: "left",

    hasDetail: true,
  },

  /* =====================================================
     06 — MAIA
  ====================================================== */

  {
    number: "06",

    name: "Maia",
    logo: "/projects/clients/maia.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "Maia için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [
      "/projects/clients/maia/01.jpg",
      "/projects/clients/maia/02.jpg",
      "/projects/clients/maia/03.jpg",
    ],

    side: "right",

    hasDetail: true,
  },

  /* =====================================================
     07 — GIT GIT
     BASILI MENÜ
  ====================================================== */

  {
    number: "07",

    name: "Git Git",
    logo: "/projects/clients/gitgit.png",

    summary: "Menü tasarımı.",

    services: ["Menü Tasarımı"],

    images: [],

    side: "left",

    hasDetail: false,
  },

  /* =====================================================
     08 — MT PRO
  ====================================================== */

  {
    number: "08",

    name: "MT Pro",
    logo: "/projects/clients/mt-pro.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "MT Pro için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [
      "/projects/clients/mt-pro/01.jpg",
      "/projects/clients/mt-pro/02.jpg",
    ],

    side: "right",

    hasDetail: true,
  },

  /* =====================================================
     09 — MOTO EXPRESS
  ====================================================== */

  {
    number: "09",

    name: "Moto Express",
    logo: "/projects/clients/moto-express.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "Moto Express için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [
      "/projects/clients/moto-express/01.jpg",
      "/projects/clients/moto-express/02.jpg",
      "/projects/clients/moto-express/03.jpg",
    ],

    side: "left",

    hasDetail: true,
  },

  /* =====================================================
     10 — KULE
     QR MENÜ
  ====================================================== */

  {
    number: "10",

    name: "Kule",
    logo: "/projects/clients/kule.png",

    summary: "QR menü deneyimi.",

    detail:
      "Kule için fiziksel menü kullanımını dijital ortama taşıyan, mobil cihazlardan hızlı ve kolay erişilebilen bir QR menü deneyimi hazırladık.",

    services: ["QR Menü"],

    images: [],

    side: "left",

    hasDetail: false,

    /*
     * Gerçek QR menü URL'si hazır olduğunda:
     *
     * websiteUrl:
     *   "https://...",
     */
  },

  /* =====================================================
     11 — PERLA
  ====================================================== */

  {
    number: "11",

    name: "Perla",
    logo: "/projects/clients/perla.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "Perla için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [
      "/projects/clients/perla/01.jpg",
      "/projects/clients/perla/02.jpg",
    ],

    side: "left",

    hasDetail: true,
  },

  /* =====================================================
     12 — CAFE ROMA
     QR MENÜ
  ====================================================== */

  {
    number: "12",

    name: "Cafe Roma",
    logo: "/projects/clients/cafe-roma.png",

    summary: "Menüyü dijital deneyime taşıdık.",

    detail:
      "Cafe Roma için müşterilerin mobil cihazlarından kolayca erişebildiği sade ve kullanışlı bir QR menü deneyimi hazırladık.",

    services: ["QR Menü"],

    images: [],

    side: "right",

    hasDetail: false,

    websiteUrl: "https://www.caferoma.com.tr/",
  },
];
