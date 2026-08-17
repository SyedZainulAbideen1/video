import React from "react";

import { AbsoluteFill } from "remotion";

import { DustParticles } from "../components/effects/DustParticles/DustParticles";

export const DustParticlesComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <DustParticles
        count={60}
        opacity={0.22}
        size={5}
        speed={1}
      />
    </AbsoluteFill>
  );
};