import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://dianaminjichun.com',
  output: 'hybrid',
  adapter: netlify(),
  integrations: [tailwind()],
});
