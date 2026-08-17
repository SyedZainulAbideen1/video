import React from "react";

export const DustParticlesStyles: {
  container: React.CSSProperties;

  particle: React.CSSProperties;
} = {
  container: {
    position: "absolute",

    inset: 0,

    overflow: "hidden",

    pointerEvents: "none",
  },

  particle: {
    position: "absolute",

    width: 5,

    height: 5,

    borderRadius: "50%",

    background:
      "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0) 100%)",

    opacity: 0.22,

    filter: "blur(0.8px)",

    mixBlendMode: "screen",

    boxShadow:
      "0 0 14px rgba(255,255,255,0.40)",

    willChange: "transform, opacity",
  },
};