/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#333",
      white: "#fff",
      lightRed: "#ff4e0a",
      border: "#d2d2d2",
      lightGray: "#ccc",
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
        whiteShadow: "2px 4px 6px rgba(230,230,230, 0.4)",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
