import React from "react";

export const FilmGrainStyles: {
  container: React.CSSProperties;

  grain: React.CSSProperties;
} = {
  container: {
    position: "absolute",

    inset: 0,

    overflow: "hidden",

    pointerEvents: "none",
  },

  grain: {
    position: "absolute",

    inset: "-60%",

    opacity: 0.10,

    mixBlendMode: "overlay",

    backgroundImage: `
      radial-gradient(circle, rgba(255,255,255,0.30) 1px, transparent 1px),
      radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px),
      radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)
    `,

    backgroundSize:
      "5px 5px, 8px 8px, 11px 11px",

    backgroundPosition:
      "0 0, 3px 3px, 6px 6px",

    filter: "contrast(120%)",

    transform: "scale(1.25)",

    willChange:
      "background-position, opacity",
  },
};