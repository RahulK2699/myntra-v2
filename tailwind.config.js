/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        whitneyssm: ["WhitneySSM"],
      },
      colors: {
        btnred: "#ff3e6c",
        star: "#03a685",
        white: "#fff",
        lightpink: "#fdebe9",
      },
    },
  },
  plugins: [],
};
