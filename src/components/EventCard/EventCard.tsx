import React from "react";

import { AbsoluteFill } from "remotion";

import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TVPanel } from "../TVPanel";
import { TextReveal } from "../TextReveal/TextReveal";
import { Divider } from "../Divider/Divider";

import { EventCardProps } from "./EventCard.types";
import { EventCardStyles } from "./EventCard.styles";

import { Motion } from "../../motion/timings";
import { Sequence } from "../../motion/sequence";

export const EventCard: React.FC<EventCardProps> = ({
  date,
  title,
  time,
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
          <div style={EventCardStyles.container}>
            <TextReveal
              text={date}
              delay={Sequence.country}
              offsetY={Motion.textOffsetY}
              style={EventCardStyles.date}
            />

            <Divider width={160} />

            <TextReveal
              text={title}
              delay={Sequence.location}
              offsetY={Motion.locationOffsetY}
              style={EventCardStyles.title}
            />

            {time && (
              <TextReveal
                text={time}
                delay={Sequence.coordinates}
                offsetY={Motion.coordinateOffsetY}
                style={EventCardStyles.time}
              />
            )}
          </div>
        </TVPanel>
      </AnimatedPanel>
    </AbsoluteFill>
  );
};