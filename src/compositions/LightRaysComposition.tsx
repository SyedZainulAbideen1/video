import React from "react";

import { AbsoluteFill } from "remotion";

import { LightRays } from "../components/effects/LightRays/LightRays";

export const LightRaysComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #0B1020 0%, #111827 55%, #1F2937 100%)",
      }}
    >
      <LightRays
        opacity={0.35}
        intensity={1}
        angle={-25}
        animated
        color="#FFF5D6"
      />
    </AbsoluteFill>
  );
};