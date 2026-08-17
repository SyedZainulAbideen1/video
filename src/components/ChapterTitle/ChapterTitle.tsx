import React from "react";
import { AbsoluteFill } from "remotion";

import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TextReveal } from "../TextReveal/TextReveal";
import { Divider } from "../Divider/Divider";

import { ChapterTitleProps } from "./ChapterTitle.types";
import { ChapterTitleStyles } from "./ChapterTitle.styles";

import { Sequence } from "../../motion/sequence";

export const ChapterTitle: React.FC<ChapterTitleProps> = ({
  chapter,
  title,
}) => {
  return (
    <AnimatedPanel
      width={1180}
      height={480}
    >
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={ChapterTitleStyles.container}>
          {/* Chapter */}

          <TextReveal
            text={chapter}
            delay={Sequence.country}
            style={ChapterTitleStyles.chapter}
            offsetY={15}
          />

          {/* Main Title */}

          <div
            style={{
              marginTop: 18,
              marginBottom: 14,
            }}
          >
            <TextReveal
              text={title}
              delay={Sequence.location}
              style={ChapterTitleStyles.title}
              offsetY={24}
            />
          </div>

          {/* Cinematic Divider */}

          <Divider
            width={620}
            height={3}
          />
        </div>
      </AbsoluteFill>
    </AnimatedPanel>
  );
};