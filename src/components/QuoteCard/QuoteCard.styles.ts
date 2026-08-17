import React from "react";

import { TVTheme } from "../../theme/theme";

export const QuoteCardStyles: {
  container: React.CSSProperties;

  quoteMark: React.CSSProperties;

  quote: React.CSSProperties;

  author: React.CSSProperties;

  source: React.CSSProperties;
} = {
  container: {
    width: "100%",

    height: "100%",

    display: "flex",

    flexDirection: "column",

    justifyContent: "center",

    alignItems: "center",

    textAlign: "center",

    padding: "80px 120px",

    boxSizing: "border-box",
  },

  quoteMark: {
    fontFamily: TVTheme.font.family,

    fontSize: 150,

    fontWeight: 700,

    lineHeight: 0.8,

    color: "rgba(210,225,245,0.22)",

    marginBottom: 28,

    userSelect: "none",

    textShadow:
      "0 0 25px rgba(255,255,255,.08)",
  },

  quote: {
    fontFamily: TVTheme.font.family,

    fontSize: 60,

    fontWeight: 700,

    lineHeight: 1.45,

    letterSpacing: 0.6,

    color: "#FFFFFF",

    maxWidth: 1180,

    textShadow:
      "0 4px 18px rgba(0,0,0,.35)",
  },

  author: {
    fontFamily: TVTheme.font.family,

    fontSize: 28,

    fontWeight: 700,

    letterSpacing: 3,

    color: "#E4EEF8",

    textTransform: "uppercase",

    marginTop: 52,
  },

  source: {
    fontFamily: TVTheme.font.family,

    fontSize: 18,

    fontWeight: 500,

    letterSpacing: 4,

    color: "#8FAFD7",

    textTransform: "uppercase",

    marginTop: 14,

    opacity: 0.85,
  },
};