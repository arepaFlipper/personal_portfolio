/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        blue: "#2CBCE9",
        red: "#DC4492",
        "yellow": "#FDCC49",
        "grey": "#EDEDED",
        "deep-blue": "#010026",
        "deep-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        "default": "#white",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": "radial-gradient(circle at 10% 20%, #6FE7B0 0%, #9AC6F2 100%)",
        "gradient-rainblue": "radial-gradient(circle at 10% 20%, #6FE7B0 0%, #9AC6F2 100%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('/src/assets/brush.png')",
        person1: "url('/src/assets/person-1.png')",
        person2: "url('/src/assets/person-2.png')",
        person3: "url('/src/assets/person-3.png')",
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
