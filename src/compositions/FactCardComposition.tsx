import React from "react";

import { AbsoluteFill } from "remotion";

import { FactCard } from "../components/FactCard/FactCard";

export const FactCardComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <FactCard
        title="DID YOU KNOW?"
        fact="Nutty Putty Cave was permanently sealed after the failed rescue in 2009."
        source="UTAH STATE RECORDS"
      />
    </AbsoluteFill>
  );
};