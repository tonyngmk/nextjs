/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      montserrat: ["var(--font-montserrat)"],
    },
    gridTemplateColumns: {
      fluid: "repeat(auto-fit,minmax(15rem,1fr))",
    }
  },
  plugins: [],
}
