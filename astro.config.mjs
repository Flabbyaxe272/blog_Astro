// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://justin.farrisfam.org',
  output: 'static',
  integrations: [mdx(), sitemap()],
});