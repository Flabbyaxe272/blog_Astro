// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// astro/config
export default defineConfig({
  site: 'https://justin.farrisfam.org',
  output: 'static', // explicitly static (this is the default, but good to be clear)
  integrations: [mdx(), sitemap()],
});