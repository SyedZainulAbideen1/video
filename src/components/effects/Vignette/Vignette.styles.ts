import React from "react";

export const VignetteStyles: {
  container: React.CSSProperties;

  vignette: React.CSSProperties;
} = {
  container: {
    position: "absolute",

    inset: 0,

    overflow: "hidden",

    pointerEvents: "none",
  },

  vignette: {
    position: "absolute",

    inset: 0,

    background: `
      radial-gradient(
        ellipse at center,
        rgba(0, 0, 0, 0) 42%,
        rgba(0, 0, 0, 0.12) 60%,
        rgba(0, 0, 0, 0.38) 82%,
        rgba(0, 0, 0, 0.82) 100%
      )
    `,

    mixBlendMode: "multiply",

    opacity: 0.55,

    willChange: "opacity, transform",
  },
};