import React from "react";

import { AbsoluteFill } from "remotion";

import { StatisticsCard } from "../components/StatisticsCard/StatisticsCard";

export const StatisticsCardComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <StatisticsCard
        label="DEPTH"
        value="410"
        unit="FT"
      />
    </AbsoluteFill>
  );
};