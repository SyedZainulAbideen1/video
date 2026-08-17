import React from "react";

import { AbsoluteFill } from "remotion";

import { ColorOverlay } from "../components/effects/ColorOverlay/ColorOverlay";

export const ColorOverlayComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",

        justifyContent: "center",

        alignItems: "center",

        color: "#FFFFFF",

        fontSize: 120,

        fontWeight: "bold",

        fontFamily: "Arial",
      }}
    >
      DOCUMENTARY

      <ColorOverlay
        color="#3B82F6"
        opacity={0.18}
        blendMode="overlay"
        animated
      />
    </AbsoluteFill>
  );
};