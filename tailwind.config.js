/** @type {import('tailwindcss').Config} */
export default {
  content:  ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFDD3A",
        secondary: "#C03A00",
        tertiary: "#FFF"
      },
      screens: {
        "mobile": "393px",
        "tablet": "690px",
        "desktop": "1680px",
        xs: "450px",
      }
    },
  },
  plugins: [],
}

