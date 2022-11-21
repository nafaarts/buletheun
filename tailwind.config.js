/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridAutoColumns: {
        default: "minmax(2, 1fr)",
      },
    },
  },
  plugins: [],
}
