import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"
import sitebenderTheme from "./sitebender.theme.dark.json"

const ignore = []

// ignore unused exports
export default defineConfig({
	build: {
		format: "directory",
	},
	integrations: [
		sitemap({
			canonicalURL: "https://components.sitebender.io/",
			filter: (page) => !ignore.includes(page),
			lastmod: new Date(),
		}),
	],
	markdown: {
		shikiConfig: {
			theme: sitebenderTheme,
		},
	},
	site: "https://components.sitebender.io/",
})
