import React from "react";
import { AbsoluteFill } from "remotion";

import { AnimatedPanel } from "../AnimatedPanel/AnimatedPanel";
import { TVPanel } from "../TVPanel";
import { TextReveal } from "../TextReveal/TextReveal";

import { QuoteCardProps } from "./QuoteCard.types";
import { QuoteCardStyles } from "./QuoteCard.styles";

import { Sequence } from "../../motion/sequence";
import { Motion } from "../../motion/timings";

export const QuoteCard: React.FC<QuoteCardProps> = ({
  quote,
  author,
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
          height={620}
        >
          <div style={QuoteCardStyles.container}>
            {/* Quote Mark */}

            <TextReveal
              text="❝"
              delay={Sequence.country}
              style={QuoteCardStyles.quoteMark}
              offsetY={Motion.textOffsetY}
            />

            {/* Main Quote */}

            <TextReveal
              text={quote}
              delay={Sequence.state}
              style={QuoteCardStyles.quote}
              offsetY={Motion.locationOffsetY}
            />

            {/* Author */}

            {author && (
              <div
                style={{
                  marginTop: 28,
                }}
              >
                <TextReveal
                  text={author}
                  delay={Sequence.location}
                  style={QuoteCardStyles.author}
                  offsetY={Motion.coordinateOffsetY}
                />
              </div>
            )}

            {/* Source */}

            {source && (
              <div
                style={{
                  marginTop: 10,
                }}
              >
                <TextReveal
                  text={source}
                  delay={Sequence.coordinates}
                  style={QuoteCardStyles.source}
                  offsetY={Motion.coordinateOffsetY}
                />
              </div>
            )}
          </div>
        </TVPanel>
      </AnimatedPanel>
    </AbsoluteFill>
  );
};