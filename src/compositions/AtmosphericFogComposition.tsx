import React from "react";

import { AbsoluteFill } from "remotion";

import { AtmosphericFog } from "../components/effects/AtmosphericFog/AtmosphericFog";

export const AtmosphericFogComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <AtmosphericFog
        opacity={0.25}
        speed={1}
        blur={120}
      />
    </AbsoluteFill>
  );
};