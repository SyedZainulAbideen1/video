import React from "react";

import { TVTheme } from "../../theme/theme";

export const ComparisonCardStyles: {
  container: React.CSSProperties;

  content: React.CSSProperties;

  column: React.CSSProperties;

  title: React.CSSProperties;

  value: React.CSSProperties;

  arrow: React.CSSProperties;
} = {
  container: {
    width: "100%",

    height: "100%",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    padding: "80px 120px",

    boxSizing: "border-box",
  },

  content: {
    display: "flex",

    alignItems: "center",

    justifyContent: "space-between",

    width: "100%",

    maxWidth: 1200,
  },

  column: {
    display: "flex",

    flexDirection: "column",

    alignItems: "center",

    flex: 1,

    padding: "0 20px",
  },

  title: {
    color: "#A9CBF2",

    fontFamily: TVTheme.font.family,

    fontSize: 28,

    fontWeight: 700,

    letterSpacing: 10,

    textTransform: "uppercase",

    textShadow:
      "0 2px 10px rgba(0,0,0,.30)",

    marginBottom: 30,
  },

  value: {
    color: "#FFFFFF",

    fontFamily: TVTheme.font.family,

    fontSize: 52,

    fontWeight: 700,

    textAlign: "center",

    lineHeight: 1.4,

    letterSpacing: 0.5,

    maxWidth: 420,

    textShadow:
      "0 5px 20px rgba(0,0,0,.35)",
  },

  arrow: {
    color: "#FFFFFF",

    fontFamily: TVTheme.font.family,

    fontSize: 82,

    fontWeight: 300,

    margin: "0 70px",

    opacity: 0.9,

    textShadow:
      "0 0 18px rgba(255,255,255,.18)",
  },
};