import React from "react";

import { AbsoluteFill } from "remotion";

import { PersonProfileCard } from "../components/PersonProfileCard/PersonProfileCard";

export const PersonProfileCardComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <PersonProfileCard
        name="John Edward Jones"
        role="Medical Student"
        age="26"
        location="Utah, USA"
      />
    </AbsoluteFill>
  );
};