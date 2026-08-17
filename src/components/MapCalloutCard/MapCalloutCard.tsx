import React from "react";

import { AbsoluteFill } from "remotion";

import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TVPanel } from "../TVPanel";
import { TextReveal } from "../TextReveal/TextReveal";
import { Divider } from "../Divider/Divider";

import { MapCalloutCardProps } from "./MapCalloutCard.types";
import { MapCalloutCardStyles } from "./MapCalloutCard.styles";

import { Motion } from "../../motion/timings";
import { Sequence } from "../../motion/sequence";

export const MapCalloutCard: React.FC<MapCalloutCardProps> = ({
  country,
  location,
  coordinates,
}) => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatedPanel>
        <TVPanel
          width={900}
          height={420}
        >
          <div style={MapCalloutCardStyles.container}>
            <TextReveal
              text={`📍 ${country}`}
              delay={Sequence.country}
              offsetY={Motion.textOffsetY}
              style={MapCalloutCardStyles.country}
            />

            <Divider width={140} />

            <TextReveal
              text={location}
              delay={Sequence.location}
              offsetY={Motion.locationOffsetY}
              style={MapCalloutCardStyles.location}
            />

            {coordinates && (
              <TextReveal
                text={coordinates}
                delay={Sequence.coordinates}
                offsetY={Motion.coordinateOffsetY}
                style={MapCalloutCardStyles.coordinates}
              />
            )}
          </div>
        </TVPanel>
      </AnimatedPanel>
    </AbsoluteFill>
  );
};