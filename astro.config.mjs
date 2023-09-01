import { defineConfig } from "astro/config"
import sitebenderTheme from "./sitebender.theme.dark.json"

// ignore unused exports
export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: sitebenderTheme,
		},
	},
})
