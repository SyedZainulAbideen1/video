import React from "react";

export const LensFlareStyles: {
  container: React.CSSProperties;

  glow: React.CSSProperties;

  streak: React.CSSProperties;
} = {
  container: {
    position: "absolute",

    inset: 0,

    overflow: "hidden",

    pointerEvents: "none",
  },

  glow: {
    position: "absolute",

    width: 260,

    height: 260,

    borderRadius: "50%",

    background:
      "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(180,220,255,0.55) 35%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0) 82%)",

    filter: "blur(40px)",

    opacity: 0.22,

    mixBlendMode: "screen",

    willChange: "transform, opacity",
  },

  streak: {
    position: "absolute",

    width: 620,

    height: 4,

    borderRadius: 999,

    background:
      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.98) 50%, rgba(255,255,255,0) 100%)",

    filter: "blur(3px)",

    opacity: 0.50,

    mixBlendMode: "screen",

    transformOrigin: "left center",

    willChange: "transform, opacity",
  },
};