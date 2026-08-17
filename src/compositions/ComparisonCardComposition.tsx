import React from "react";

import { AbsoluteFill } from "remotion";

import { ComparisonCard } from "../components/ComparisonCard/ComparisonCard";

export const ComparisonCardComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <ComparisonCard
        leftTitle="BEFORE"
        leftValue="Open Cave"
        rightTitle="AFTER"
        rightValue="Permanently Sealed"
      />
    </AbsoluteFill>
  );
};