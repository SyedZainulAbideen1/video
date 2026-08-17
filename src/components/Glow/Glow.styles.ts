import React from "react";

export const GlowStyles: {
  glow: React.CSSProperties;
} = {
  glow: {
    position: "absolute",

    inset: 0,

    pointerEvents: "none",

    borderRadius: 22,

    background: `
      radial-gradient(
        ellipse at center,

        rgba(255,255,255,0.10) 0%,

        rgba(255,255,255,0.05) 35%,

        rgba(255,255,255,0.02) 60%,

        transparent 100%
      )
    `,

    filter: "blur(38px)",

    mixBlendMode: "screen",

    willChange: "opacity",
  },
};