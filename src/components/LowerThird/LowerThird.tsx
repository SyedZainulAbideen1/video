import React from "react";

import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TVPanel } from "../TVPanel";

import { Slide } from "../Animations";
import { Fade } from "../Animations";

import { LowerThirdProps } from "./LowerThird.types";
import { LowerThirdStyles } from "./LowerThird.styles";

import { Sequence } from "../../motion/sequence";

export const LowerThird: React.FC<LowerThirdProps> = ({
  title,
  subtitle,
  width = 900,
  height = 220,
  icon,
}) => {
  return (
    <AnimatedPanel>
      <TVPanel
        width={width}
        height={height}
      >
        <div style={LowerThirdStyles.container}>
          {icon && (
            <div
              style={{
                marginRight: 24,

                display: "flex",

                alignItems: "center",

                justifyContent: "center",
              }}
            >
              {icon}
            </div>
          )}

          <div style={LowerThirdStyles.content}>
            <Slide
              delay={Sequence.country}
              offsetY={16}
            >
              <div style={LowerThirdStyles.title}>
                {title}
              </div>
            </Slide>

            <Fade
              delay={Sequence.state}
            >
              <div style={LowerThirdStyles.subtitle}>
                {subtitle}
              </div>
            </Fade>
          </div>
        </div>
      </TVPanel>
    </AnimatedPanel>
  );
};