/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  extend: {
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "transparent",
    },
  },
};
