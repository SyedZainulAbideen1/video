import React from "react";

import { AbsoluteFill } from "remotion";

import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TVPanel } from "../TVPanel";
import { TextReveal } from "../TextReveal/TextReveal";

import { StatisticsCardProps } from "./StatisticsCard.types";
import { StatisticsCardStyles } from "./StatisticsCard.styles";

import { Sequence } from "../../motion/sequence";
import { Motion } from "../../motion/timings";

export const StatisticsCard: React.FC<StatisticsCardProps> = ({
  label,
  value,
  unit,
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
          width={520}
          height={260}
        >
          <div style={StatisticsCardStyles.container}>
            <TextReveal
              text={label}
              delay={Sequence.country}
              style={StatisticsCardStyles.label}
              offsetY={Motion.textOffsetY}
            />

            <div style={StatisticsCardStyles.valueRow}>
              <TextReveal
                text={value}
                delay={Sequence.location}
                style={StatisticsCardStyles.value}
                offsetY={Motion.locationOffsetY}
              />

              {unit && (
                <TextReveal
                  text={unit}
                  delay={Sequence.coordinates}
                  style={StatisticsCardStyles.unit}
                  offsetY={Motion.coordinateOffsetY}
                />
              )}
            </div>
          </div>
        </TVPanel>
      </AnimatedPanel>
    </AbsoluteFill>
  );
};