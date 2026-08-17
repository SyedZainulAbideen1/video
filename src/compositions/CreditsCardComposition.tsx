import React from "react";

import { AbsoluteFill } from "remotion";

import { CreditsCard } from "../components/CreditsCard/CreditsCard";

export const CreditsCardComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <CreditsCard
        heading="SOURCES"
        items={[
          "BBC Documentary",
          "National Geographic",
          "Utah County Archives",
          "Wikipedia",
        ]}
      />
    </AbsoluteFill>
  );
};