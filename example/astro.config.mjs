import mdx from "@astrojs/mdx"
import { defineConfig } from "astro/config"
import componentsThemeDark from "./components.theme.dark.json"

const ignore = []

// ignore unused exports
export default defineConfig({
	integrations: [mdx()],
	markdown: {
		shikiConfig: {
			theme: componentsThemeDark,
		},
	},
	site: "https://craft-code.dev/",
})
