import React from "react";

import { AbsoluteFill } from "remotion";

import { FilmGrain } from "../components/effects/FilmGrain/FilmGrain";

export const FilmGrainComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <FilmGrain
        opacity={0.08}
        intensity={1}
        animated
      />
    </AbsoluteFill>
  );
};