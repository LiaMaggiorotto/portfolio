import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: true,
  }),
  kit: {
    adapter: adapter(),
    prerender: {
      // Used to resolve canonical/OG URLs and the sitemap at build time.
      // TODO: swap this for the real custom domain once it's connected.
      origin: "https://liamaggiorotto.com",
    },
  },
};

export default config;
