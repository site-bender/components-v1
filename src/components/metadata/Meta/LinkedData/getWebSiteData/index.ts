import type { Basedata, Metadata } from "../../../../../types"

export default function getWebSiteData(basedata: Basedata, metadata: Metadata) {
	return {
		type: "WebSite",
		"@id": "https://cantankerouscoder.com/#website",
		url: "https://cantankerouscoder.com/",
		name: "cantaᴎkeᴙous codeᴙ",
		description:
			"A series of epistles from Charles to Hannah, billets doux really, discussing life, love, and the pursuit of wisdom.",
		inLanguage: metadata.language || basedata.language,
	}
}
