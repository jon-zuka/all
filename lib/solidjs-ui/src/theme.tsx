import "./global.d.ts";

export const theme = {
  colors: {
    primary: "#36a094",
    background: "#031613",
    text: "#ffffffc8",
    warn: "#FFA500",
    info: "#17A2B8",
    danger: "#DC3545",
    success: "#28A745",
  },
  breakpoints: {
    mobile: "600px",
    tablet: "900px",
    desktop: "1200px",
  },
  shapes: {
    bevel: "10px"
  }
};

export type Theme = typeof theme;
export type ThemeColor = keyof Theme["colors"];

export const getColor = (theme: Theme, color?: string): string => {
  if (!color) {
    return "inherit";
  }
  if (color in theme.colors) {
    return theme.colors[color as ThemeColor];
  }
  return color;
};
