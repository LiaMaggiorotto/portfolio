import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: true,
  }),
  kit: {
    adapter: adapter({
      fallback: "404.html",
    }),
    paths: {
      // GitHub Actions sets BASE_PATH automatically: empty once the custom
      // domain is verified in repo settings, or "/portfolio" if you ever
      // preview the raw liamaggiorotto.github.io/portfolio URL instead.
      base: process.env.BASE_PATH ?? "",
    },
    prerender: {
      // Used to resolve canonical/OG URLs and the sitemap at build time.
      origin: "https://liamaggiorotto.com",
    },
  },
};

export default config;
