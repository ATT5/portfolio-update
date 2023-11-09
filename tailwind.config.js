/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quick: ["Quicksand", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
        poppi: ["Poppins", "sans-serif"],
      },
      colors: {
        orange: "#FFBA49",
        darkGray: "#606470",
        lightGray: "#EEEEEE",
        x: "rgba(0, 0, 0, 0.31)",
        lightGreen: "#33CA7F",
        xblue: "#93DEFF",
      },
    },
  },
  plugins: [],
};
