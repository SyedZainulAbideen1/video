import React from "react";

import { AbsoluteFill } from "remotion";

import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TVPanel } from "../TVPanel";
import { TextReveal } from "../TextReveal/TextReveal";
import { Divider } from "../Divider/Divider";

import { TimelineCardProps } from "./TimelineCard.types";
import { TimelineCardStyles } from "./TimelineCard.styles";

import { Motion } from "../../motion/timings";
import { Sequence } from "../../motion/sequence";

export const TimelineCard: React.FC<TimelineCardProps> = ({
  year,
  title,
  description,
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
          width={1120}
          height={560}
        >
          <div style={TimelineCardStyles.container}>
            {/* Year */}

            <TextReveal
              text={year}
              delay={Sequence.country}
              offsetY={Motion.textOffsetY}
              style={TimelineCardStyles.year}
            />

            {/* Timeline Divider */}

            <div
              style={{
                marginBottom: 34,
              }}
            >
              <Divider
                width={180}
                height={3}
              />
            </div>

            {/* Event Title */}

            <TextReveal
              text={title}
              delay={Sequence.location}
              offsetY={Motion.locationOffsetY}
              style={TimelineCardStyles.title}
            />

            {/* Event Description */}

            {description && (
              <div
                style={{
                  marginTop: 22,
                }}
              >
                <TextReveal
                  text={description}
                  delay={Sequence.coordinates}
                  offsetY={Motion.coordinateOffsetY}
                  style={TimelineCardStyles.description}
                />
              </div>
            )}
          </div>
        </TVPanel>
      </AnimatedPanel>
    </AbsoluteFill>
  );
};