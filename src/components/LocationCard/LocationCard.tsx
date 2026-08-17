import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TVPanel } from "../TVPanel";
import { TextReveal } from "../TextReveal/TextReveal";
import { Divider } from "../Divider/Divider";
import { LocationCardProps } from "./LocationCard.types";
import { LocationCardStyles } from "./LocationCard.styles";
import { Sequence } from "../../motion/sequence";
import { Motion } from "../../motion/timings";

export const LocationCard: React.FC<LocationCardProps> = ({
  country,
  state,
  location,
  latitude,
  longitude,
}) => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        rotate: "-0.2deg",
        translate: "0.9px -3.3px",
      }}
    >
      <AnimatedPanel>
        <TVPanel
          width={LocationCardStyles.panel.width}
          height={LocationCardStyles.panel.height}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 50,
              boxSizing: "border-box",
            }}
          >
            <TextReveal
              text={country}
              delay={Sequence.country}
              style={LocationCardStyles.country}
              offsetY={Motion.textOffsetY}
            />

            <TextReveal
              text={state}
              delay={Sequence.state}
              style={LocationCardStyles.state}
              offsetY={Motion.textOffsetY}
            />

            <Divider />

            <TextReveal
              text={location}
              delay={Sequence.location}
              style={LocationCardStyles.location}
              offsetY={Motion.locationOffsetY}
            />

            <TextReveal
              text={`${latitude} • ${longitude}`}
              delay={Sequence.coordinates}
              style={LocationCardStyles.coordinates}
              offsetY={Motion.coordinateOffsetY}
            />
          </div>
        </TVPanel>
      </AnimatedPanel>
    </AbsoluteFill>
  );
};
