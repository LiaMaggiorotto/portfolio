/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "whipped-cream": "#f7f3ee",
        "coconut-flour": "#dad5ca",
        "creme-brulee": "#a1846e",
        "mocha-latte": "#5b4338",
        "espresso-martini": "#352620",
        "dark-chocolate": "#161513",
        "olive-branch": "#575242",
      },
      fontFamily: {
        fraunces: ["Fraunces", ...defaultTheme.fontFamily.serif],
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
