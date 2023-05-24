
import type { BaseData, LdImage, Metadata } from "../../../../types"

export default function getImageData(baseData: BaseData, metadata: Metadata): LdImage | void {
	const imageUrl = 
	return metadata.image
		? {
			"@type": "ImageObject",
			"@id": `${metadata.canonical}#primary-image`,
			acquireLicensePage: baseData.license,
			contentUrl: metadata.image?.src,
			copyrightNotice: "Hannah",
			creator: {
				"@id": "https://cantankerouscoder.com/about/hannah",
			},
			creditText: "Charles & Hannah",
			height: metadata.image?.height,
			inLanguage: metadata.language || baseData.language,
			license: metadata.image?.license || baseData.license,
			url: metadata.image?.src,
			width: metadata.image?.width,
		}
		: undefined
}
