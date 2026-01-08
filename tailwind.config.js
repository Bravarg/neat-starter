module.exports = {
  content: ["./**/*.html", "./**/*.njk", "./**/*.md"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
