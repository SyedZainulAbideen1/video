import React from "react";

import { AbsoluteFill } from "remotion";

import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TVPanel } from "../TVPanel";
import { TextReveal } from "../TextReveal/TextReveal";
import { Divider } from "../Divider/Divider";

import { MemorialCardProps } from "./MemorialCard.types";
import { MemorialCardStyles } from "./MemorialCard.styles";

import { Motion } from "../../motion/timings";
import { Sequence } from "../../motion/sequence";

export const MemorialCard: React.FC<MemorialCardProps> = ({
  heading = "IN MEMORY OF",
  name,
  years,
  subtitle,
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
          <div style={MemorialCardStyles.container}>
            {/* Heading */}

            <TextReveal
              text={heading}
              delay={Sequence.country}
              offsetY={Motion.textOffsetY}
              style={MemorialCardStyles.heading}
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

            {/* Name */}

            <TextReveal
              text={name}
              delay={Sequence.state}
              offsetY={Motion.textOffsetY}
              style={MemorialCardStyles.name}
            />

            {/* Years */}

            {years && (
              <div
                style={{
                  marginTop: 12,
                }}
              >
                <TextReveal
                  text={years}
                  delay={Sequence.location}
                  offsetY={Motion.locationOffsetY}
                  style={MemorialCardStyles.years}
                />
              </div>
            )}

            {/* Subtitle */}

            {subtitle && (
              <div
                style={{
                  marginTop: 10,
                }}
              >
                <TextReveal
                  text={subtitle}
                  delay={Sequence.coordinates}
                  offsetY={Motion.coordinateOffsetY}
                  style={MemorialCardStyles.subtitle}
                />
              </div>
            )}
          </div>
        </TVPanel>
      </AnimatedPanel>
    </AbsoluteFill>
  );
};