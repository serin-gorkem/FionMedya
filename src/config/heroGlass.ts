export const HERO_GLASS_TRANSFORM = {
  position: [
    -3.4,
    0.32,
    1,
  ] as const,

  rotation: [
    0.15,
    -3.5,
    Math.PI / 2.25,
  ] as const,

  scale: 10,
};
/**
 * Kadehin içindeki şarap doluluğu için
 * tamamen local-space ayarlar.
 *
 * Bu değerler modeline göre fine tune edilecek.
 */
export const INNER_WINE_TRANSFORM = {
  volumePosition: [0, 0.11, 0.005] as const,
  volumeScale: [0.058, 0.05, 0.058] as const,

  surfacePosition: [0, 0.145, 0.005] as const,
  surfaceScale: [0.043, 0.043, 1] as const,

  lipBlobPosition: [0, 0.075, 0.06] as const,
  lipBlobScale: [0.018, 0.014, 0.022] as const,
};

/**
 * Kadehin LOCAL coordinate sisteminde
 * şarabın çıktığı nokta.
 *
 * BUNU birazdan ekrandan fine tune edeceğiz.
 *
 * Şimdilik tahmini değer.
 */
export const WINE_ORIGIN_LOCAL = [
  -0.03,
  0.2,
  0.0,
] as const;

