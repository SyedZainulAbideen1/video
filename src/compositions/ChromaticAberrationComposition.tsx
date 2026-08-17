import React from "react";

import { AbsoluteFill } from "remotion";

import { ChromaticAberration } from "../components/effects/ChromaticAberration/ChromaticAberration";

export const ChromaticAberrationComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",

        justifyContent: "center",

        alignItems: "center",

        color: "#FFFFFF",

        fontSize: 120,

        fontWeight: "bold",

        fontFamily: "Arial",
      }}
    >
      DOCUMENTARY

      <ChromaticAberration
        intensity={2}
        opacity={0.15}
        animated
      />
    </AbsoluteFill>
  );
};