import type { BaseData, LdImage, Metadata } from "../../../../types"

export default function getImageData(baseData: BaseData, metadata: Metadata): LdImage | void {
	const imageUrl = metadata.image?.src ||
		`${baseData.imageUrl}${metadata.image?.filename}.${metadata.image?.type}`

	return metadata.image
		? {
			"@type": "ImageObject",
			"@id": `${metadata.canonical}#primary-image`,
			acquireLicensePage: baseData.license,
			contentUrl: imageUrl,
			copyrightNotice: "Hannah",
			creator: {
				"@id": "https://cantankerouscoder.com/about/hannah",
			},
			creditText: "Charles & Hannah",
			height: metadata.image?.height,
			inLanguage: metadata.language || baseData.language || "en-NZ",
			license: metadata.image?.license || baseData.license,
			url: imageUrl,
			width: metadata.image?.width,
		}
		: undefined
}
