const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.tsx", "./public/**/*.html"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    colors: {
      ...colors,
      primary: {
        light: colors.indigo[500],
        dark: colors.orange[500],
      },
    },
    fontFamily: {
      sans: ["Urbanist", "Inter var", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      spacing: {
        "full-2": "calc(100% + 0.5rem)",
      },
      lineHeight: {
        "extra-loose": "2.5",
      },
      zIndex: {
        "-10": "-10",
      },
      scale: {
        999: "99",
      },
    },
  },
  variants: {
    extend: {
      scale: ["focus-within"],
      width: ["group-hover", "group-focus"],
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
