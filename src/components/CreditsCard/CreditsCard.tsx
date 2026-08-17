import React from "react";

import { AbsoluteFill } from "remotion";

import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TVPanel } from "../TVPanel";
import { TextReveal } from "../TextReveal/TextReveal";
import { Divider } from "../Divider/Divider";

import { CreditsCardProps } from "./CreditsCard.types";
import { CreditsCardStyles } from "./CreditsCard.styles";

import { Motion } from "../../motion/timings";
import { Sequence } from "../../motion/sequence";

export const CreditsCard: React.FC<CreditsCardProps> = ({
  heading = "SOURCES",
  items,
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
          height={620}
        >
          <div style={CreditsCardStyles.container}>
            {/* Heading */}

            <TextReveal
              text={heading}
              delay={Sequence.country}
              offsetY={Motion.textOffsetY}
              style={CreditsCardStyles.heading}
            />

            {/* Divider */}

            <div
              style={{
                marginBottom: 36,
              }}
            >
              <Divider
                width={220}
                height={3}
              />
            </div>

            {/* Credits */}

            <div style={CreditsCardStyles.list}>
              {items.map((item, index) => (
                <TextReveal
                  key={item}
                  text={item}
                  delay={
                    Sequence.location +
                    index * Motion.stagger
                  }
                  offsetY={Motion.locationOffsetY}
                  style={CreditsCardStyles.item}
                />
              ))}
            </div>
          </div>
        </TVPanel>
      </AnimatedPanel>
    </AbsoluteFill>
  );
};