import React from "react";

import { AbsoluteFill } from "remotion";

import { TimelineCard } from "../components/TimelineCard/TimelineCard";

export const TimelineCardComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <TimelineCard
        year="2009"
        title="John Jones Enters Nutty Putty Cave"
        description="Thanksgiving Weekend"
      />
    </AbsoluteFill>
  );
};