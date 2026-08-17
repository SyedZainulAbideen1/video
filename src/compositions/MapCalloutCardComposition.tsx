import React from "react";

import { AbsoluteFill } from "remotion";

import { MapCalloutCard } from "../components/MapCalloutCard/MapCalloutCard";

export const MapCalloutCardComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <MapCalloutCard
        country="UTAH, USA"
        location="Nutty Putty Cave"
        coordinates="40.5746° N • 111.7505° W"
      />
    </AbsoluteFill>
  );
};