import adapter from '@sveltejs/adapter-static';
//import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  //extensions: ['.svelte'],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  //vitePlugin: {
  //  inspector: true
  //},
  kit: {
    //adapter: adapter(),
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: "404.html"
    }),
  },
};
export default config;
