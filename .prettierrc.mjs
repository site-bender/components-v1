/** @type {import("prettier").Config} */
export default {
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	arrowParens: "always",
	bracketSameLine: false,
	bracketSpacing: true,
	proseWrap: "always",
	quoteProps: "consistent",
	semi: false,
	singleAttributePerLine: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: true,
}
