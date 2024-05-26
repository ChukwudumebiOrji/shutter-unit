/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      fontFamily: {
        hanken: ["Hanken Grotesk", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
