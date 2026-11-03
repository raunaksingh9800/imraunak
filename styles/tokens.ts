/**
 * Centralized Design System Tokens
 * Aesthetic: 1996 Web Design meets Sophisticated Swiss Editorial Design
 * Strictly controlled 5-color palette: Black, White, Light Gray, Mid Gray, Dell Red
 */

export const TOKENS = {
  colors: {
    // 5-Color System
    black: "#000000",
    white: "#FFFFFF",
    lightGray: "#F2F2F2",
    midGray: "#777777",
    red: "#E91D2A", // Single accent color

    // Semantic mappings
    frame: "#000000",
    canvas: "#FFFFFF",
    surface: "#FFFFFF",
    surfaceSubtle: "#F2F2F2",
    textPrimary: "#000000",
    textSecondary: "#777777",
    accent: "#E91D2A",
    border: "#000000",
    borderSubtle: "#E5E5E5",
  },

  typography: {
    display: {
      fontFamily: "'Arial Black', Helvetica, Arial, sans-serif",
      fontSize: "36px",
      fontWeight: 900,
      lineHeight: 1.05,
      textTransform: "uppercase" as const,
    },
    heading1: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: "24px",
      fontWeight: 900,
      lineHeight: 1.1,
      textTransform: "uppercase" as const,
    },
    heading2: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: 1.2,
      textTransform: "uppercase" as const,
    },
    heading3: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: "13px",
      fontWeight: 700,
      lineHeight: 1.2,
      textTransform: "uppercase" as const,
    },
    body: {
      fontFamily: "'Times New Roman', Times, Georgia, serif",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    bodySm: {
      fontFamily: "'Times New Roman', Times, Georgia, serif",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: 1.45,
    },
    caption: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: "11px",
      fontWeight: 700,
      lineHeight: 1.2,
      textTransform: "uppercase" as const,
    },
    button: {
      fontFamily: "Helvetica, Arial, sans-serif",
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: 1.0,
      textTransform: "uppercase" as const,
    },
  },

  spacing: {
    xxs: "2px",
    xs: "4px",
    s: "6px",
    sm: "8px",
    m: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    section: "64px",
  },

  borders: {
    frameDesktop: "8px solid #000000",
    frameTablet: "4px solid #000000",
    frameMobile: "2px solid #000000",
    standard: "1px solid #000000",
    heavy: "2px solid #000000",
    radius: "0px",
  },
} as const;
