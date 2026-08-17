import React from "react";

import { AbsoluteFill } from "remotion";

import { EventCard } from "../components/EventCard/EventCard";

export const EventCardComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#000000",
      }}
    >
      <EventCard
        date="24 NOVEMBER 2009"
        title="THE RESCUE BEGINS"
        time="08:17 PM"
      />
    </AbsoluteFill>
  );
};