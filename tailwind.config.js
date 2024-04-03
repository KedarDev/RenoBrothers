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
        'mobile': {max: "320px"} ,
        // => @media (min-width: 320px) { ... }

        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
        
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }

      },
      animation: {
        ["infinite-slider"]: "infinitsSlider 20s linear infinite"
      },
      keyframes: {
        infiniteSlider: {
          "0%": {transform: "translatex(0" },
          "100%" : {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  plugins: [],
}

