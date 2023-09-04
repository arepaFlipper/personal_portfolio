/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        "yellow": "#FDCC49",
        "grey": "#EDEDED",
        "deep-blue": "#010026",
        "deep-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": "linear-gradient(81deg, #00B5EE 7%, #FF45A4 45%, #FFBA00 78%)",
        "gradient-rainblue": "linear-gradient(90deg, #24CBFF 14%, #FC59FF 69.36%, #FFBD0C 117%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.svg')",
        person1: "url('./assets/person-1.svg')",
        person2: "url('./assets/person-2.svg')",
        person3: "url('./assets/person-3.svg')",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      }
    },
  },
  plugins: [],
}