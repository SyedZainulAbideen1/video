import React from "react";

import { AbsoluteFill } from "remotion";

import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TVPanel } from "../TVPanel";
import { TextReveal } from "../TextReveal/TextReveal";
import { Divider } from "../Divider/Divider";

import { PersonProfileCardProps } from "./PersonProfileCard.types";
import { PersonProfileCardStyles } from "./PersonProfileCard.styles";

import { Motion } from "../../motion/timings";
import { Sequence } from "../../motion/sequence";

export const PersonProfileCard: React.FC<PersonProfileCardProps> = ({
  name,
  role,
  age,
  location,
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
          <div style={PersonProfileCardStyles.container}>
            {/* Name */}

            <TextReveal
              text={name}
              delay={Sequence.country}
              offsetY={Motion.textOffsetY}
              style={PersonProfileCardStyles.name}
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

            {/* Role */}

            <TextReveal
              text={role}
              delay={Sequence.state}
              offsetY={Motion.locationOffsetY}
              style={PersonProfileCardStyles.role}
            />

            {/* Age */}

            {age && (
              <div
                style={{
                  marginTop: 12,
                }}
              >
                <TextReveal
                  text={`Age: ${age}`}
                  delay={Sequence.location}
                  offsetY={Motion.coordinateOffsetY}
                  style={PersonProfileCardStyles.age}
                />
              </div>
            )}

            {/* Location */}

            {location && (
              <div
                style={{
                  marginTop: 8,
                }}
              >
                <TextReveal
                  text={location}
                  delay={Sequence.coordinates}
                  offsetY={Motion.coordinateOffsetY}
                  style={PersonProfileCardStyles.location}
                />
              </div>
            )}
          </div>
        </TVPanel>
      </AnimatedPanel>
    </AbsoluteFill>
  );
};