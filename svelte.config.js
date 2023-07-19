import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use the Vercel adapter for deployment
    adapter: adapter(),

    // ... other kit configuration options

  },

  preprocess: [
    vitePreprocess(),
    preprocess({
      scss: {
        // options
      },
    }),
  ],
};

export default config;
