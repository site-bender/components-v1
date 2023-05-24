import { DEFAULT_LANGUAGE, DEFAULT_LICENSE } from "@utilities/constants"
import type { LdImage, Metadata } from "@utilities/types"

export default function getImageData(meta: Metadata): LdImage | void {
	return meta.image
		? {
			"@type": "ImageObject",
			"@id": `${meta.canonical}#primary-image`,
			acquireLicensePage: DEFAULT_LICENSE,
			contentUrl: meta.image?.src,
			copyrightNotice: "Hannah",
			creator: {
				"@id": "https://cantankerouscoder.com/about/hannah",
			},
			creditText: "Charles & Hannah",
			height: meta.image?.height,
			inLanguage: meta.language || DEFAULT_LANGUAGE,
			license: meta.image?.license || DEFAULT_LICENSE,
			url: meta.image?.src,
			width: meta.image?.width,
		}
		: undefined
}
