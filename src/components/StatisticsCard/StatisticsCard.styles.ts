import React from "react";

import { TVTheme } from "../../theme/theme";

export const StatisticsCardStyles: {
  container: React.CSSProperties;

  label: React.CSSProperties;

  valueRow: React.CSSProperties;

  value: React.CSSProperties;

  unit: React.CSSProperties;
} = {
  container: {
    width: 520,

    minHeight: 220,

    display: "flex",

    flexDirection: "column",

    justifyContent: "center",

    alignItems: "center",

    padding: "40px 50px",

    boxSizing: "border-box",

    textAlign: "center",
  },

  label: {
    color: "#8FAFD7",

    fontFamily: TVTheme.font.family,

    fontSize: 22,

    fontWeight: 600,

    letterSpacing: 6,

    textTransform: "uppercase",

    marginBottom: 18,
  },

  valueRow: {
    display: "flex",

    alignItems: "flex-end",

    justifyContent: "center",

    gap: 10,
  },

  value: {
    color: "#FFFFFF",

    fontFamily: TVTheme.font.family,

    fontSize: 82,

    fontWeight: 700,

    lineHeight: 1,
  },

  unit: {
    color: "#B8C4D6",

    fontFamily: TVTheme.font.family,

    fontSize: 28,

    fontWeight: 500,

    marginBottom: 10,

    textTransform: "uppercase",
  },
};