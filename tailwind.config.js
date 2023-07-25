/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    screens: {
      sm: { max: "479px" },
      md: { min: "480px", max: "767px" },
      lg: { min: "768px", max: "1023px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#333",
        white: "#fff",
        lightRed: "ff4e0a",
        border: "d2d2d2",
        lightGray: "#ccc",
      },
    },
  },
  plugins: [],
}
