import type { BaseData, Metadata } from "../../../../types"

export default function getPersonData(baseData: BaseData, metadata: Metadata): unknown {
	return {
		"@type": "Person",
		"@id": "https://cantankerouscoder.com/about/charles",
		name: "Charles",
		image: {
			"@type": "ImageObject",
			inLanguage: metadata.language || baseData.language,
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
