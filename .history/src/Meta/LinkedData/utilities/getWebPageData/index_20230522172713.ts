import { DEFAULT_LANGUAGE } from "@utilities/constants"
import type { Metadata } from "@utilities/types"

export default function getWebPageData(meta: Metadata, title: string) {
	return {
		"@type": "WebPage",
		"@id": meta.canonical,
		url: meta.canonical,
		name: title,
		isPartOf: { "@id": "https://cantankerouscoder.com/#website" },
		primaryImageOfPage: {
			"@id": `${meta.canonical}#primary-image`,
		},
		image: {
			"@id": `${meta.canonical}#primary-image`,
		},
		...(meta.thumbnailUrl ? { thumbnailUrl: meta.thumbnailUrl } : {}),
		...(meta.publishDate
			? { datePublished: meta.publishDate.toString() }
			: {}),
		...(meta.modifiedDate
			? { dateModified: meta.modifiedDate.toString() }
			: {}),
		author: {
			"@id": "https://cantankerouscoder.com/about/hannah",
		},
		breadcrumb: {
			"@id": "https://cantankerouscoder.com/#/schema/breadcrumb-trail",
		},
		inLanguage: meta.language || DEFAULT_LANGUAGE,
		potentialAction: [
			{
				"@type": "ReadAction",
				target: [
					meta.canonical,
				],
			},
		],
	}
}
