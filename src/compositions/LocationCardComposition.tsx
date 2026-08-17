import React from "react";

import { LocationCard } from "../components/LocationCard/LocationCard";

export const LocationCardComposition: React.FC = () => {
  return (
    <LocationCard
      country="United States"
      state="Utah"
      location="Nutty Putty Cave"
      latitude="40.089° N"
      longitude="111.758° W"
    />
  );
};