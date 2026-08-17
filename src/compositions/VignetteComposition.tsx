import React from "react";

import { AbsoluteFill } from "remotion";

import { Vignette } from "../components/effects/Vignette/Vignette";

export const VignetteComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #1E293B 0%, #0F172A 100%)",
        justifyContent: "center",
        alignItems: "center",
        color: "#FFFFFF",
        fontSize: 120,
        fontWeight: "bold",
        fontFamily: "Arial",
      }}
    >
      DOCUMENTARY

      <Vignette
        opacity={0.55}
        radius={45}
        feather={85}
        color="#000000"
      />
    </AbsoluteFill>
  );
};