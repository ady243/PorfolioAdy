module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      classic: ["Work Sans"],
    },

    boxShadow: {
      "custom-light": "0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e, -5px -5px -10px #14161c",
    },

    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#0101010",
          100: "#0a0b0e",
          200: "#0f1115",
          300: "#0f1115",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  version: {
    extends: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
