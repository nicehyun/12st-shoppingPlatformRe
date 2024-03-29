import { fontFamily } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/pages/**/*.{ts,tsx}",
  "./src/features/**/*.{ts,tsx}",
  "./src/features/common/**/*.{ts,tsx}",
  "./src/app/**/*.{ts,tsx}",
]
export const darkMode = ["class"]
export const theme = {
  colors: {
    transparent: "transparent",
    lightBlack: "#777",
    black: "#333",
    white: "#fff",
    lightRed: "#ff4e0a",
    border: "#d2d2d2",
    lightBorder: "#ececec",
    lightGray: "#ccc",
    gray: "#5d5d5d",
    error: "#D43639",
    success: "#28a745",
    transparentWhite: "rgba(240,240,240, 0.8)",
    opacity0: "rgba(0,0,0,0)",
  },
  screens: {
    sm: { max: "479px" },
    md: { min: "480px", max: "767px" },
    lg: { min: "768px", max: "1023px" },
    xl: { min: "1024px" },
  },
  extend: {
    boxShadow: {
      DEFAULT: "2px 2px 8px rgba(43, 46, 74, 0.5)",
      whiteShadow: "2px 4px 6px rgba(200,200,200, 0.4)",
    },
    container: {
      center: true,
    },
    margin: {
      "2percent": "2%",
    },
    fontFamily: {
      sans: ["var(--font-roboto)", ...fontFamily.sans],
    },
  },
}
export const corePlugins = {
  aspectRatio: false,
}
export const plugins = [require("@tailwindcss/aspect-ratio")]
