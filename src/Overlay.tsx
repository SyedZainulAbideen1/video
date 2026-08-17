import React from "react";
import { AbsoluteFill } from "remotion";
import { LocationCard } from "./components/LocationCard/LocationCard";

export const Overlay: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0B0B0B",
      }}
    >
      <LocationCard
        country="USA"
        state="UTAH"
        location="Nutty Putty Cave"
        latitude="39.98°N"
        longitude="111.74°W"
      />
    </AbsoluteFill>
  );
};
