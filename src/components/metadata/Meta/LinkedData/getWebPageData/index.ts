import type { Basedata, Metadata } from "../../../../../types"

export default function getWebPageData(
	basedata: Basedata,
	metadata: Metadata,
	title: string,
) {
	return {
		"type": "WebPage",
		"@id": metadata.canonical,
		"url": metadata.canonical,
		"name": title,
		"isPartOf": { "@id": "https://cantankerouscoder.com/#website" },
		"primaryImageOfPage": {
			"@id": `${metadata.canonical}#primary-image`,
		},
		"image": {
			"@id": `${metadata.canonical}#primary-image`,
		},
		...(metadata.thumbnailUrl ? { thumbnailUrl: metadata.thumbnailUrl } : {}),
		...(metadata.publishDate
			? { datePublished: metadata.publishDate.toString() }
			: {}),
		...(metadata.modifiedDate
			? { dateModified: metadata.modifiedDate.toString() }
			: {}),
		"author": {
			"@id": "https://cantankerouscoder.com/about/hannah",
		},
		"breadcrumb": {
			"@id": "https://cantankerouscoder.com/#/schema/breadcrumb-trail",
		},
		"inLanguage": metadata.language || basedata.language,
		"potentialAction": [
			{
				type: "ReadAction",
				target: [metadata.canonical],
			},
		],
	}
}
