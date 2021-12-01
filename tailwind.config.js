module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#010E17",
        secondary: "#0E5159",
        accent: "#09736A",
        "Neutral-Green1": "#15AB89",
        "Neutral-Green2": "#76D9B9",
        "Neutral-Gray": "#EBEBEB",
        "Neutral-Orange": "#F28337",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
