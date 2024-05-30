const colors = require("./constants/colors");
const borderRadius = require("./constants/borderRadius");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.tsx", "./**/*.tsx", "./**/**/*.tsx"],
  theme: {
    colors,
    borderRadius,
  },
  plugins: [],
};
