import type { WebSite } from "../../../../src/schema.org"

export default {
	about:
		"API documentation for the @sitebender/components Astro component library.",
	audience: {
		type: "Audience",
		name: "Web developers",
	},
	accountablePerson: {
		type: "Person",
		name: "Charles F. Munat",
		email: "charles@sitebender.io",
	},
	author: {
		type: "Person",
		name: "Charles F. Munat",
		email: "charles@sitebender.io",
	},
	copyrightHolder: {
		type: "Organization",
		name: "Sitebender",
		url: "https://sitebender.io",
	},
	description:
		"The API documentation for the @sitebender/components library providing vanilla components to Astro web projects.",
	inLanguage: "en",
	license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
	maintainer: {
		type: "Person",
		name: "Charles F. Munat",
		email: "charles@sitebender.io",
	},
	publisher: {
		type: "Organization",
		name: "Sitebender",
		url: "https://sitebender.io",
	},
} as WebSite
