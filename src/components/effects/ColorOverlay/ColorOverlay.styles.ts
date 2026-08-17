import React from "react";

export const ColorOverlayStyles: {
  container: React.CSSProperties;

  overlay: React.CSSProperties;
} = {
  container: {
    position: "absolute",

    inset: 0,

    overflow: "hidden",

    pointerEvents: "none",
  },

  overlay: {
    position: "absolute",

    inset: 0,

    background: "#3B82F6",

    opacity: 0.15,

    mixBlendMode: "overlay",

    willChange: "opacity, background-color",
  },
};