import React from "react";

import { TVTheme } from "../../theme/theme";

export const ChapterTitleStyles = {
  container: {
    width: "100%",

    height: "100%",

    display: "flex",

    flexDirection: "column",

    justifyContent: "center",

    alignItems: "center",

    paddingLeft: 80,

    paddingRight: 80,

    boxSizing: "border-box",
  } as React.CSSProperties,

  chapter: {
    color: "rgba(225,235,245,0.88)",

    fontSize: 24,

    fontWeight: 600,

    letterSpacing: 14,

    textTransform: "uppercase",

    fontFamily: TVTheme.font.family,

    lineHeight: 1.2,

    textAlign: "center",

    textShadow:
      "0 2px 10px rgba(0,0,0,.35)",
  } as React.CSSProperties,

  title: {
    color: "#FFFFFF",

    fontSize: 92,

    fontWeight: 800,

    letterSpacing: 2,

    lineHeight: 1.08,

    marginTop: 24,

    fontFamily: TVTheme.font.family,

    textTransform: "uppercase",

    textAlign: "center",

    maxWidth: 1500,

    textShadow:
      "0 6px 24px rgba(0,0,0,.45)",
  } as React.CSSProperties,

  line: {
    width: 620,

    height: 3,

    borderRadius: 999,

    background:
      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,.95) 50%, transparent 100%)",

    marginTop: 42,

    boxShadow:
      "0 0 18px rgba(255,255,255,.18)",

    opacity: 0.95,
  } as React.CSSProperties,
};