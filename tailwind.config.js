const colors = require("./lib/constants/colors");
const borderRadius = require("./lib/constants/borderRadius");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.tsx", "./**/*.tsx", "./**/**/*.tsx"],
  theme: {
    colors,
    borderRadius,
  },
  plugins: [],
};
