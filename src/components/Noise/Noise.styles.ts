import React from "react";

export const NoiseStyles: {
  noise: React.CSSProperties;
} = {
  noise: {
    position: "absolute",

    inset: 0,

    pointerEvents: "none",

    opacity: 1,

    backgroundImage: `
      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.025) 1px, transparent 1px),
      radial-gradient(circle at 80% 60%, rgba(255,255,255,0.02) 1px, transparent 1px),
      radial-gradient(circle at 50% 80%, rgba(255,255,255,0.02) 1px, transparent 1px)
    `,

    backgroundSize: "24px 24px",

    mixBlendMode: "overlay",
  },
};