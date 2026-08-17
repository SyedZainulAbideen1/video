import React from "react";

export const DividerStyles: {
  divider: React.CSSProperties;
} = {
  divider: {
    position: "relative",

    width: "100%",

    height: 2,

    borderRadius: 999,

    overflow: "hidden",

    background:
      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.95) 18%, rgba(150,200,255,.95) 50%, rgba(255,255,255,.95) 82%, rgba(255,255,255,0) 100%)",

    boxShadow: `
      0 0 8px rgba(170,210,255,.18),
      0 0 18px rgba(120,180,255,.08)
    `,

    willChange: "transform, opacity",

    backfaceVisibility: "hidden",
  },
};