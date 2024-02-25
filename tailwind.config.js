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
        mobile: "390px",
        tablet: "750px",
        desktop: "1440px"
      }
    },
  },
  plugins: [],
}

