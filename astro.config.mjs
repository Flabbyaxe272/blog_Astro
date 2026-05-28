// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rss from "@astrojs/rss"

// import cloudflare from '@astrojs/cloudflare';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://justin.farrisfam.org',
  adapter: node({
      mode: 'standalone'
    }),
  integrations: [mdx(), sitemap()],
//  adapter: cloudflare({
//    platformProxy: {
//      enabled: true,
//    },
//  }),
});
