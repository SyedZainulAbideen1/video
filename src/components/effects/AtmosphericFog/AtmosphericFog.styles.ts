import React from "react";

export const AtmosphericFogStyles: {
  container: React.CSSProperties;

  layer1: React.CSSProperties;

  layer2: React.CSSProperties;

  layer3: React.CSSProperties;
} = {
  container: {
    position: "absolute",

    inset: 0,

    overflow: "hidden",

    pointerEvents: "none",
  },

  layer1: {
    position: "absolute",

    width: 1200,

    height: 700,

    borderRadius: "50%",

    background:
      "radial-gradient(circle, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0) 82%)",

    filter: "blur(170px)",

    opacity: 0.24,

    mixBlendMode: "screen",

    willChange: "transform, opacity",
  },

  layer2: {
    position: "absolute",

    width: 1450,

    height: 850,

    borderRadius: "50%",

    background:
      "radial-gradient(circle, rgba(205,225,255,0.16) 0%, rgba(180,210,255,0.05) 50%, rgba(255,255,255,0) 86%)",

    filter: "blur(200px)",

    opacity: 0.18,

    mixBlendMode: "screen",

    willChange: "transform, opacity",
  },

  layer3: {
    position: "absolute",

    width: 900,

    height: 560,

    borderRadius: "50%",

    background:
      "radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0) 88%)",

    filter: "blur(140px)",

    opacity: 0.16,

    mixBlendMode: "screen",

    willChange: "transform, opacity",
  },
};