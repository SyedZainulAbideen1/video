import React from "react";

export const LightRaysStyles: {
  container: React.CSSProperties;

  ray1: React.CSSProperties;

  ray2: React.CSSProperties;

  ray3: React.CSSProperties;
} = {
  container: {
    position: "absolute",

    inset: 0,

    overflow: "hidden",

    pointerEvents: "none",
  },

  ray1: {
    position: "absolute",

    width: 420,

    height: 2400,

    top: -760,

    left: 120,

    transform: "rotate(-28deg)",

    transformOrigin: "top center",

    background:
      "linear-gradient(to bottom, rgba(255,245,210,0.34), rgba(255,245,210,0))",

    filter: "blur(42px)",

    opacity: 0.30,

    mixBlendMode: "screen",

    willChange: "transform, opacity",
  },

  ray2: {
    position: "absolute",

    width: 340,

    height: 2250,

    top: -760,

    left: 520,

    transform: "rotate(-24deg)",

    transformOrigin: "top center",

    background:
      "linear-gradient(to bottom, rgba(255,250,225,0.26), rgba(255,250,225,0))",

    filter: "blur(50px)",

    opacity: 0.24,

    mixBlendMode: "screen",

    willChange: "transform, opacity",
  },

  ray3: {
    position: "absolute",

    width: 280,

    height: 2150,

    top: -740,

    left: 940,

    transform: "rotate(-18deg)",

    transformOrigin: "top center",

    background:
      "linear-gradient(to bottom, rgba(255,255,240,0.20), rgba(255,255,240,0))",

    filter: "blur(60px)",

    opacity: 0.20,

    mixBlendMode: "screen",

    willChange: "transform, opacity",
  },
};