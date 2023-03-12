/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Orbitron: ["Orbitron", "sans-serif"],
      ChakraPetch: ["Chakra Petch", "sans-serif"],
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
