/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1540px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "0",
      },
    },
    // colors: {
    //   light: "",
    //   dark: "",
    //   green: "",
    //   red: "",
    // },
    fontFamily: {},
    extend: {},
  },
  plugins: [],
};
