import React from "react";

import { TVTheme } from "../../theme/theme";

export const LowerThirdStyles = {
  container: {
    display: "flex",

    alignItems: "center",

    width: "100%",

    height: "100%",
  } as React.CSSProperties,

  content: {
    display: "flex",

    flexDirection: "column",

    justifyContent: "center",

    gap: 10,
  } as React.CSSProperties,

  title: {
    fontFamily: TVTheme.font.family,

    fontWeight: 700,

    fontSize: 40,

    color: "#FFFFFF",

    letterSpacing: 1.2,

    lineHeight: 1.1,

    textTransform: "uppercase",

    textShadow: "0 1px 8px rgba(0,0,0,0.25)",
  } as React.CSSProperties,

  subtitle: {
    fontFamily: TVTheme.font.family,

    fontWeight: 500,

    fontSize: 22,

    color: "rgba(220,228,238,0.88)",

    letterSpacing: 0.4,

    lineHeight: 1.35,
  } as React.CSSProperties,
};