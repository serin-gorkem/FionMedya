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
     01 — FUYAPI
  ====================================================== */

  {
    number: "01",

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
     02 — DOĞU BATI İNŞAAT
  ====================================================== */

  {
    number: "02",

    name: "Dogu Batı Insaat",
    logo: "/projects/clients/dogu-bati.png",

    summary: "Web Site Tasarımı.",

    detail: "Doğu Batı İnşaat için websitesi tasarımı. ",

    services: ["Web Sitesi"],

    images: [],

    side: "right",

    hasDetail: false,

    websiteUrl: "https://dogubatiinsaat.tr/",
  },
  /* =====================================================
     03 — MT PRO
  ====================================================== */

  {
    number: "03",

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

    summary: "Kurumsal Kimlik Hizmeti",

    detail: "Kurye Plus'ın kurumsal kimliğini oluşturduk..",

    services: ["Kurumsal Kimlik Hizmeti"],

    images: [
      "/projects/clients/kurye-plus/01.jpg",
      "/projects/clients/kurye-plus/02.jpg",
    ],

    side: "right",

    hasDetail: true,
  },

  /* =====================================================
     05 — MAIA
  ====================================================== */

  {
    number: "05",

    name: "Maia",
    logo: "/projects/clients/maia.png",

    summary: "Video Prodüksiyon.",

    detail: "Maia için video prodüksiyon hizmeti.",

    services: ["Video Prodüksiyon"],

    images: [
      "/projects/clients/maia/01.jpg",
      "/projects/clients/maia/02.jpg",
      "/projects/clients/maia/03.jpg",
    ],

    side: "right",

    hasDetail: true,
  },

  /* =====================================================
     06 — GIT GIT
     BASILI MENÜ
  ====================================================== */

  {
    number: "06",

    name: "Git Git",
    logo: "/projects/clients/gitgit.png",

    summary: "Menü tasarımı & Baskı",

    services: ["Menü Tasarımı"],

    images: [],

    side: "left",

    hasDetail: false,
  },

  /* =====================================================
     07 — KULE
     QR MENÜ
  ====================================================== */

  {
    number: "07",

    name: "Kule",
    logo: "/projects/clients/kule.png",

    summary: "Menü Tasarımı.",

    detail:
      "Kule için fiziksel menü kullanımını dijital ortama taşıyan, mobil cihazlardan hızlı ve kolay erişilebilen bir QR menü deneyimi hazırladık.",

    services: ["Menü Tasarımı"],

    images: [],

    side: "right",

    hasDetail: false,

    /*
     * Gerçek QR menü URL'si hazır olduğunda:
     *
     * websiteUrl:
     *   "https://...",
     */
  },
  /* =====================================================
     08— CAFE ROMA
     QR MENÜ
  ====================================================== */

  {
    number: "08",

    name: "Cafe Roma",
    logo: "/projects/clients/cafe-roma.png",

    summary: "QR Menü Tasarımı.",

    detail:
      "Cafe Roma için müşterilerin mobil cihazlarından kolayca erişebildiği sade ve kullanışlı bir QR menü deneyimi hazırladık.",

    services: ["QR Menü"],

    images: [],

    side: "left",

    hasDetail: false,

    websiteUrl: "https://www.caferoma.com.tr/",
  },
  /* =====================================================
     09 — PERLA
  ====================================================== */

  {
    number: "09",

    name: "Perla",
    logo: "/projects/clients/perla.png",

    summary: "Meta Yönetimi.",

    detail: "Perla Restorant için meta yönetimi hizmeti.",

    services: ["Meta Yönetimi"],

    images: [
      "/projects/clients/perla/01.jpg",
    ],

    side: "right",

    hasDetail: true,
  },
];
