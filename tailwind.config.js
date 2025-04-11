/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "coconut-flour": "#dad5ca",
        "creme-brulee": "#a1846e",
        "mocha-latte": "#5b4338",
        "espresso-martini": "#352620",
        "dark-chocolate": "#161513",
        "olive-branch": "#575242",
        "text": "#333";
      },
      //   fontFamily: {
      //     "plex-sans": ["IBM Plex Sans", "sans-serif"],
      //     "plex-mono": ["IBM Plex Mono", "monospace"],
      //     graphik: ["Graphik", "sans-serif"],
      //   },
    },
  },
  plugins: [],
};
