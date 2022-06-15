/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    debugScreens: {
      position: ["top", "left"],
    },
    extend: {},
  },
  plugins: [require("tailwindcss-debug-screens")],
};
