import { DEFAULT_LANGUAGE } from "@utilities/constants"
import type { Metadata } from "@utilities/types"

export default function getPersonData(meta: Metadata): unknown {
	return {
		"@type": "Person",
		"@id": "https://cantankerouscoder.com/about/charles",
		name: "Charles",
		image: {
			"@type": "ImageObject",
			inLanguage: meta.language || DEFAULT_LANGUAGE,
			"@id": "https://cantankerouscoder.com/#/schema/person/image",
			url: "https://cantankerouscoder.com/images/charles.png",
			contentUrl: "https://cantankerouscoder.com/images/charles.png",
			caption: "Charles",
		},
		description:
			"Charles is Hannah's partner. He asks the big questions, then shares his thoughts with Hannah.",
		url: "https://cantankerouscoder.com/about/charles",
	}
}
