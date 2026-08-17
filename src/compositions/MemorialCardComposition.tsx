import React from "react";

import { AbsoluteFill } from "remotion";

import { MemorialCard } from "../components/MemorialCard/MemorialCard";

export const MemorialCardComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <MemorialCard
        heading="IN MEMORY OF"
        name="John Edward Jones"
        years="1983 – 2009"
        subtitle="Forever Remembered"
      />
    </AbsoluteFill>
  );
};