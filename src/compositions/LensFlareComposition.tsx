import React from "react";

import { AbsoluteFill } from "remotion";

import { LensFlare } from "../components/effects/LensFlare/LensFlare";

export const LensFlareComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",

        justifyContent: "center",

        alignItems: "center",
      }}
    >
      <LensFlare
        opacity={0.2}
        size={260}
        angle={18}
      />
    </AbsoluteFill>
  );
};