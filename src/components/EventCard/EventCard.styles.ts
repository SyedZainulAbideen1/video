import React from "react";

import { TVTheme } from "../../theme/theme";

export const EventCardStyles: {
  container: React.CSSProperties;

  date: React.CSSProperties;

  divider: React.CSSProperties;

  title: React.CSSProperties;

  time: React.CSSProperties;
} = {
  container: {
    width: "100%",

    height: "100%",

    display: "flex",

    flexDirection: "column",

    justifyContent: "center",

    alignItems: "center",

    textAlign: "center",

    padding: "50px",

    boxSizing: "border-box",
  },

  date: {
    color: "#8FAFD7",

    fontFamily: TVTheme.font.family,

    fontSize: 24,

    fontWeight: 600,

    letterSpacing: 8,

    textTransform: "uppercase",

    marginBottom: 20,
  },

  divider: {
    width: 160,

    height: 2,

    borderRadius: 999,

    background:
      "linear-gradient(90deg,#FFFFFF 0%,#9FC7FF 50%,#FFFFFF 100%)",

    marginBottom: 28,
  },

  title: {
    color: "#FFFFFF",

    fontFamily: TVTheme.font.family,

    fontSize: 54,

    fontWeight: 700,

    lineHeight: 1.25,

    letterSpacing: 1,

    textTransform: "uppercase",

    maxWidth: 820,
  },

  time: {
    color: "#B8C4D6",

    fontFamily: TVTheme.font.family,

    fontSize: 24,

    fontWeight: 500,

    letterSpacing: 3,

    textTransform: "uppercase",

    marginTop: 28,
  },
};