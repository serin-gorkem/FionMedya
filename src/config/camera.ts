export const CAMERA_CONFIG = {
  /**
   * İlk sahne.
   *
   * Kamera TAM tepeden.
   * Perspective olmasına rağmen
   * kullanıcı neredeyse 2D bir
   * website görüyor.
   */
  hero: {
    desktop: {
      position: [
        0,
        9.3,
        0,
      ] as const,

      target: [
        0,
        0,
        0,
      ] as const,

      fov: 34,
    },

    tablet: {
      position: [
        0,
        10.6,
        0,
      ] as const,

      target: [
        0,
        0,
        0,
      ] as const,

      fov: 35,
    },

    mobile: {
      position: [
        0,
        11.2,
        0,
      ] as const,

      target: [
        0,
        0,
        0,
      ] as const,

      fov: 36,
    },
  },

  /**
   * Kullanıcı scroll yaptıktan sonra
   * "website'in dışına" çıktığımız
   * kamera.
   */
  worldReveal: {
    desktop: {
      position: [
        3,
        8.2,
        6.4,
      ] as const,

      target: [
        0,
        0,
        -0.55,
      ] as const,

      fov: 35,
    },

    tablet: {
      position: [
        2.3,
        8.8,
        5.9,
      ] as const,

      target: [
        0,
        0,
        -0.5,
      ] as const,

      fov: 37,
    },

    mobile: {
      position: [
        1.45,
        9.6,
        5.2,
      ] as const,

      target: [
        0,
        0,
        -0.45,
      ] as const,

      fov: 39,
    },
  },

  /**
   * Reveal sonrasında tekrar
   * editorial route kamerasına.
   */
  topDown: {
    position: [
      0,
      13,
      1,
    ] as const,

    target: [
      0,
      0,
      -2,
    ] as const,

    fov: 23,
  },

  journey: {
    curveStart: 0.08,
  },

  timing: {
    /**
     * Bardak devrilene kadar kamera
     * tam tepede kalıyor.
     */
    heroExitStart: 0.44,

    /**
     * Hero'nun sonunda website'in
     * dışına çıkmış oluyoruz.
     */
    heroExitEnd: 0.94,

    /**
     * Reveal sırasında route
     * top-down kamerasına dön.
     */
    revealTopDownEnd: 0.76,

    journeyStartAtReveal: 0.88,

    journeyBlendEnd: 0.08,
  },

  damping: {
    position: 5.8,

    target: 6.8,

    fov: 5,
  },
} as const;