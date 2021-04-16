module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkbg: "#141d30",
        gold: "#ce9e62",
        aboutbg: "#DEE9FF",
        primary: "#F9FBFF",
        titleColor: "#1c2d8b"
      },
      spacing: {
        "0.7": "70vh",
        "0.5": "50vh"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
