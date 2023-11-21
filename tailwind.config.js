/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
    "./src/common/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
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
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
