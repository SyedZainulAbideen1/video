import React from "react";

export const LightSweepStyles: {
  sweep: React.CSSProperties;
} = {
  sweep: {
    position: "absolute",

    top: -100,

    bottom: -100,

    width: 140,

    transform: "rotate(18deg)",

    background:
      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",

    filter: "blur(14px)",

    pointerEvents: "none",
  },
};