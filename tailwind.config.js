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
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
