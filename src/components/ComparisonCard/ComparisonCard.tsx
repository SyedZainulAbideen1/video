import React from "react";

import { AbsoluteFill } from "remotion";

import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TVPanel } from "../TVPanel";
import { TextReveal } from "../TextReveal/TextReveal";

import { ComparisonCardProps } from "./ComparisonCard.types";
import { ComparisonCardStyles } from "./ComparisonCard.styles";

import { Motion } from "../../motion/timings";
import { Sequence } from "../../motion/sequence";

export const ComparisonCard: React.FC<ComparisonCardProps> = ({
  leftTitle,
  leftValue,
  rightTitle,
  rightValue,
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
          width={1200}
          height={560}
        >
          <div style={ComparisonCardStyles.container}>
            <div style={ComparisonCardStyles.content}>
              {/* Left Side */}

              <div style={ComparisonCardStyles.column}>
                <TextReveal
                  text={leftTitle}
                  delay={Sequence.country}
                  offsetY={Motion.textOffsetY}
                  style={ComparisonCardStyles.title}
                />

                <div
                  style={{
                    marginTop: 18,
                  }}
                >
                  <TextReveal
                    text={leftValue}
                    delay={Sequence.location}
                    offsetY={Motion.locationOffsetY}
                    style={ComparisonCardStyles.value}
                  />
                </div>
              </div>

              {/* Arrow */}

              <TextReveal
                text="→"
                delay={Sequence.divider}
                offsetY={0}
                style={ComparisonCardStyles.arrow}
              />

              {/* Right Side */}

              <div style={ComparisonCardStyles.column}>
                <TextReveal
                  text={rightTitle}
                  delay={Sequence.state}
                  offsetY={Motion.textOffsetY}
                  style={ComparisonCardStyles.title}
                />

                <div
                  style={{
                    marginTop: 18,
                  }}
                >
                  <TextReveal
                    text={rightValue}
                    delay={Sequence.coordinates}
                    offsetY={Motion.coordinateOffsetY}
                    style={ComparisonCardStyles.value}
                  />
                </div>
              </div>
            </div>
          </div>
        </TVPanel>
      </AnimatedPanel>
    </AbsoluteFill>
  );
};