import React from "react";

export const ChromaticAberrationStyles: {
  container: React.CSSProperties;

  redChannel: React.CSSProperties;

  greenChannel: React.CSSProperties;

  blueChannel: React.CSSProperties;
} = {
  container: {
    position: "absolute",

    inset: 0,

    overflow: "hidden",

    pointerEvents: "none",
  },

  redChannel: {
    position: "absolute",

    inset: 0,

    mixBlendMode: "screen",

    opacity: 0.08,

    filter: "blur(0.4px)",

    willChange: "transform, opacity",
  },

  greenChannel: {
    position: "absolute",

    inset: 0,

    mixBlendMode: "screen",

    opacity: 0.05,

    filter: "blur(0.3px)",

    willChange: "transform, opacity",
  },

  blueChannel: {
    position: "absolute",

    inset: 0,

    mixBlendMode: "screen",

    opacity: 0.08,

    filter: "blur(0.4px)",

    willChange: "transform, opacity",
  },
};