/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "cdllife-blue": "#2e5ff6",
        "coconut-flour": "#dad5ca",
        "creme-brulee": "#a1846e",
        "mocha-latte": "#5b4338",
        "espresso-martini": "#352620",
        "dark-chocolate": "#161513",
        "olive-branch": "#575242",
      },
      //   fontFamily: {
      //     "plex-sans": ["IBM Plex Sans", "sans-serif"],
      //     "plex-mono": ["IBM Plex Mono", "monospace"],
      //     graphik: ["Graphik", "sans-serif"],
      //   },
      //   backgroundImage: {
      //     dashboard: "url('/images/dashboard-bg.png')",
      //     start: "url('/images/start-bg.png')",
      //   },
    },
  },
  plugins: [],
};
