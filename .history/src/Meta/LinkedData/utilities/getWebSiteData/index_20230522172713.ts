import { DEFAULT_LANGUAGE } from "@utilities/constants"
import type { Metadata } from "@utilities/types"

export default function getWebSiteData(meta: Metadata) {
	return {
		"@type": "WebSite",
		"@id": "https://cantankerouscoder.com/#website",
		url: "https://cantankerouscoder.com/",
		name: "cantaᴎkeᴙous codeᴙ",
		description:
			"A series of epistles from Charles to Hannah, billets doux really, discussing life, love, and the pursuit of wisdom.",
		inLanguage: meta.language || DEFAULT_LANGUAGE,
	}
}
