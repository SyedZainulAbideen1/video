import React from "react";

import { AbsoluteFill } from "remotion";

import { Bloom } from "../components/effects/Bloom/Bloom";

export const BloomComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #0F172A 0%, #111827 100%)",

        justifyContent: "center",

        alignItems: "center",
      }}
    >
      {/* Bright Source */}
      <div
        style={{
          width: 180,

          height: 180,

          borderRadius: "50%",

          background: "#FFFFFF",

          boxShadow: "0 0 80px rgba(255,255,255,0.9)",
        }}
      />

      <Bloom
        opacity={0.35}
        blur={90}
        intensity={1}
        color="#FFF5D6"
        animated
      />
    </AbsoluteFill>
  );
};