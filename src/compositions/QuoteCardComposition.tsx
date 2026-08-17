import React from "react";

import { AbsoluteFill } from "remotion";

import { QuoteCard } from "../components/QuoteCard/QuoteCard";

export const QuoteCardComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <QuoteCard
        quote="No one had ever gone that deep."
        author="John Jones"
        source="2009 Rescue Interview"
      />
    </AbsoluteFill>
  );
};