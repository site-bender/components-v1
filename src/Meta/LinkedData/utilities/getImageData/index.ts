import type { Basedata, LdImage, Metadata } from "../../../../types"

export default function getImageData(
	basedata: Basedata,
	metadata: Metadata,
): LdImage | void {
	const imageUrl = metadata.image?.src ||
		`${basedata.imageUrl}${metadata.image?.filename}.${metadata.image?.type}`

	return metadata.image
		? {
			"@type": "ImageObject",
			"@id": `${metadata.canonical}#primary-image`,
			acquireLicensePage: basedata.license,
			contentUrl: imageUrl,
			copyrightNotice: "Hannah",
			creator: {
				"@id": "https://cantankerouscoder.com/about/hannah",
			},
			creditText: "Charles & Hannah",
			height: metadata.image?.height,
			inLanguage: metadata.language || basedata.language || "en-US",
			license: metadata.image?.license || basedata.license,
			url: imageUrl,
			width: metadata.image?.width,
		}
		: undefined
}
