import React from "react";

export const BloomStyles: {
  container: React.CSSProperties;

  glow: React.CSSProperties;
} = {
  container: {
    position: "absolute",

    inset: 0,

    overflow: "hidden",

    pointerEvents: "none",
  },

  glow: {
    position: "absolute",

    inset: "-15%",

    background:
      "radial-gradient(circle at center, rgba(255,245,210,0.42) 0%, rgba(255,245,210,0.22) 22%, rgba(255,245,210,0.08) 48%, transparent 74%)",

    filter: "blur(120px)",

    mixBlendMode: "screen",

    opacity: 0.38,

    transform: "scale(1.25)",

    willChange: "transform, opacity, filter",
  },
};