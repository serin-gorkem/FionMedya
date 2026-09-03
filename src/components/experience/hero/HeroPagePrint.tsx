"use client";

import {
  useEffect,
  useMemo,
} from "react";

import * as THREE from "three";

import type {
  ExperienceMode,
} from "@/config/experiencePolicy";

type HeroPagePrintProps = {
  mode: ExperienceMode;
};

const PAGE_LAYOUTS = {
  desktop: {
    width: 10.8,
    height: 6.3,

    canvasWidth: 1920,
    canvasHeight: 1120,
  },

  tablet: {
    width: 7.2,
    height: 8.7,

    canvasWidth: 1400,
    canvasHeight: 1690,
  },

  mobile: {
    width: 4.15,
    height: 7.7,

    canvasWidth: 1024,
    canvasHeight: 1900,
  },
} as const;

export function HeroPagePrint({
  mode,
}: HeroPagePrintProps) {
  const layout =
    PAGE_LAYOUTS[mode];

  const texture =
    useMemo(() => {
      if (
        typeof document ===
        "undefined"
      ) {
        return null;
      }

      const canvas =
        document.createElement(
          "canvas",
        );

      canvas.width =
        layout.canvasWidth;

      canvas.height =
        layout.canvasHeight;

      const context =
        canvas.getContext("2d");

      if (!context) {
        return null;
      }

      drawWebsite(
        context,
        canvas.width,
        canvas.height,
        mode,
      );

      const nextTexture =
        new THREE.CanvasTexture(
          canvas,
        );

      nextTexture.colorSpace =
        THREE.SRGBColorSpace;

      nextTexture.minFilter =
        THREE.LinearMipmapLinearFilter;

      nextTexture.magFilter =
        THREE.LinearFilter;

      nextTexture.anisotropy = 4;

      nextTexture.needsUpdate =
        true;

      return nextTexture;
    }, [
      layout.canvasWidth,
      layout.canvasHeight,
      mode,
    ]);

  useEffect(() => {
    return () => {
      texture?.dispose();
    };
  }, [texture]);

  return (
    <group>
      {/*
        Kağıt / website yüzeyi.

        Çok ince bir hacim veriyoruz.
        İlk frame'de kenar görünmeyecek,
        kamera çıkınca "sayfa" olduğu
        anlaşılacak.
      */}
      <mesh
        position={[
          0,
          0.018,
          0,
        ]}
        castShadow
        receiveShadow
      >
        <boxGeometry
          args={[
            layout.width,
            0.036,
            layout.height,
          ]}
        />

        <meshStandardMaterial
          color="#f2eee7"
          roughness={0.92}
          metalness={0}
        />
      </mesh>

      {/*
        Asıl website baskısı.
      */}
      <mesh
        position={[
          0,
          0.038,
          0,
        ]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >
        <planeGeometry
          args={[
            layout.width,
            layout.height,
          ]}
        />

        <meshBasicMaterial
          map={
            texture ??
            undefined
          }
          color="#f3f0e9"
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

/* ========================================
   CANVAS WEBSITE DRAWING
======================================== */

function drawWebsite(
  context:
    CanvasRenderingContext2D,

  width: number,
  height: number,

  mode:
    ExperienceMode,
) {
  const isMobile =
    mode === "mobile";

  const isTablet =
    mode === "tablet";

  const background =
    "#f3f0e9";

  const foreground =
    "#171311";

  const muted =
    "#625e58";

  const line =
    "rgba(23, 19, 17, 0.18)";

  const padding =
    isMobile
      ? 72
      : isTablet
        ? 88
        : 100;

  context.clearRect(
    0,
    0,
    width,
    height,
  );

  context.fillStyle =
    background;

  context.fillRect(
    0,
    0,
    width,
    height,
  );

  context.textBaseline =
    "top";

  /* ======================================
     HEADER
  ====================================== */

  const logoSize =
    isMobile
      ? 54
      : isTablet
        ? 48
        : 42;

  context.fillStyle =
    foreground;

  context.font =
    `700 ${logoSize}px Arial`;

  context.fillText(
    "FION",
    padding,
    padding,
  );

  if (isMobile) {
    context.font =
      "600 42px Arial";

    drawRightText(
      context,
      "MENÜ",
      width - padding,
      padding + 5,
    );
  } else {
    const navItems = [
      "İŞLER",
      "HİZMETLER",
      "HAKKIMIZDA",
      "İLETİŞİM",
    ];

    context.font =
      isTablet
        ? "600 26px Arial"
        : "600 23px Arial";

    let cursor =
      width -
      padding;

    for (
      let index =
        navItems.length - 1;
      index >= 0;
      index--
    ) {
      const label =
        navItems[index];

      const measurement =
        context.measureText(
          label,
        );

      cursor -=
        measurement.width;

      context.fillText(
        label,
        cursor,
        padding + 10,
      );

      cursor -=
        isTablet
          ? 48
          : 62;
    }
  }

  const headerLineY =
    padding +
    (
      isMobile
        ? 105
        : 90
    );

  context.strokeStyle =
    line;

  context.lineWidth = 2;

  context.beginPath();

  context.moveTo(
    padding,
    headerLineY,
  );

  context.lineTo(
    width - padding,
    headerLineY,
  );

  context.stroke();

  /* ======================================
     HERO
  ====================================== */

  const heroTop =
    isMobile
      ? height * 0.41
      : isTablet
        ? height * 0.4
        : height * 0.31;

  context.fillStyle =
    muted;

  context.font =
    isMobile
      ? "600 25px Arial"
      : isTablet
        ? "600 23px Arial"
        : "600 20px Arial";

  context.fillText(
    "KREATİF / DİJİTAL / 2026",
    padding,
    heroTop - 70,
  );

  const titleSize =
    isMobile
      ? 184
      : isTablet
        ? 176
        : 216;

  const titleLineHeight =
    titleSize * 0.82;

  context.fillStyle =
    foreground;

  context.font =
    `700 ${titleSize}px Arial`;

  const titleLines = [
    "SIRADAN",
    "OLANI",
    "UNUT.",
  ];

  titleLines.forEach(
    (text, index) => {
      context.fillText(
        text,
        padding,
        heroTop +
          index *
            titleLineHeight,
      );
    },
  );

  /* ======================================
     DESCRIPTION
  ====================================== */

  const descriptionY =
    heroTop +
    titleLineHeight * 3 +
    (
      isMobile
        ? 105
        : 75
    );

  context.fillStyle =
    foreground;

  context.font =
    isMobile
      ? "400 37px Arial"
      : isTablet
        ? "400 31px Arial"
        : "400 28px Arial";

  const description =
    "Markaların sadece görünmesini değil, fark edilmesini sağlayan fikirler üretiyoruz.";

  wrapText(
    context,
    description,
    padding,
    descriptionY,

    isMobile
      ? width - padding * 2
      : width * 0.44,

    isMobile
      ? 54
      : 43,
  );

  /* ======================================
     CTA
  ====================================== */

  const ctaY =
    isMobile
      ? descriptionY + 210
      : descriptionY + 145;

  const ctaWidth =
    isMobile
      ? 285
      : 230;

  const ctaHeight =
    isMobile
      ? 88
      : 68;

  context.strokeStyle =
    foreground;

  context.lineWidth = 2;

  context.strokeRect(
    padding,
    ctaY,
    ctaWidth,
    ctaHeight,
  );

  context.fillStyle =
    foreground;

  context.font =
    isMobile
      ? "600 28px Arial"
      : "600 22px Arial";

  context.fillText(
    "KEŞFET  ↓",
    padding +
      (
        isMobile
          ? 35
          : 28
      ),

    ctaY +
      (
        isMobile
          ? 28
          : 22
      ),
  );

  /* ======================================
     FOOTER
  ====================================== */

  const footerLineY =
    height -
    padding -
    70;

  context.strokeStyle =
    line;

  context.beginPath();

  context.moveTo(
    padding,
    footerLineY,
  );

  context.lineTo(
    width - padding,
    footerLineY,
  );

  context.stroke();

  context.fillStyle =
    muted;

  context.font =
    isMobile
      ? "600 23px Arial"
      : "600 18px Arial";

  context.fillText(
    "KUŞADASI / AYDIN",
    padding,
    footerLineY + 30,
  );

  drawRightText(
    context,
    "© 2026",
    width - padding,
    footerLineY + 30,
  );
}

function wrapText(
  context:
    CanvasRenderingContext2D,

  text: string,

  x: number,
  y: number,

  maxWidth: number,

  lineHeight: number,
) {
  const words =
    text.split(" ");

  let line = "";
  let currentY = y;

  for (
    let index = 0;
    index < words.length;
    index++
  ) {
    const testLine =
      `${line}${words[index]} `;

    const width =
      context.measureText(
        testLine,
      ).width;

    if (
      width >
        maxWidth &&
      line !== ""
    ) {
      context.fillText(
        line.trim(),
        x,
        currentY,
      );

      line =
        `${words[index]} `;

      currentY +=
        lineHeight;
    } else {
      line =
        testLine;
    }
  }

  context.fillText(
    line.trim(),
    x,
    currentY,
  );
}

function drawRightText(
  context:
    CanvasRenderingContext2D,

  text: string,

  x: number,
  y: number,
) {
  const width =
    context.measureText(
      text,
    ).width;

  context.fillText(
    text,
    x - width,
    y,
  );
}