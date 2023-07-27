import type { WebPage } from "../../../../src/types/schema.org"

export default {
	type: "WebPage",
	author: {
		type: "Person",
		name: "Charles F. Munat",
		email: "charles@sitebender.io",
	},
	inLanguage: "en",
	license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
	publisher: {
		type: "Organization",
		name: "Sitebender",
		url: "https://sitebender.io",
	},
} as WebPage
