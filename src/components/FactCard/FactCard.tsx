import React from "react";

import { AbsoluteFill } from "remotion";

import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TVPanel } from "../TVPanel";
import { TextReveal } from "../TextReveal/TextReveal";
import { Divider } from "../Divider/Divider";

import { FactCardProps } from "./FactCard.types";
import { FactCardStyles } from "./FactCard.styles";

import { Sequence } from "../../motion/sequence";
import { Motion } from "../../motion/timings";

export const FactCard: React.FC<FactCardProps> = ({
  title = "FACT",
  fact,
  source,
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
          <div style={FactCardStyles.container}>
            {/* Title */}

            <TextReveal
              text={title}
              delay={Sequence.country}
              offsetY={Motion.textOffsetY}
              style={FactCardStyles.title}
            />

            {/* Divider */}

            <div
              style={{
                marginBottom: 34,
              }}
            >
              <Divider
                width={200}
                height={3}
              />
            </div>

            {/* Fact */}

            <TextReveal
              text={fact}
              delay={Sequence.location}
              offsetY={Motion.locationOffsetY}
              style={FactCardStyles.fact}
            />

            {/* Source */}

            {source && (
              <div
                style={{
                  marginTop: 24,
                }}
              >
                <TextReveal
                  text={source}
                  delay={Sequence.coordinates}
                  offsetY={Motion.coordinateOffsetY}
                  style={FactCardStyles.source}
                />
              </div>
            )}
          </div>
        </TVPanel>
      </AnimatedPanel>
    </AbsoluteFill>
  );
};