import type { AstroPage, Metadata } from "../../types"

export default function getPages(
	files: Array<AstroPage>,
): Record<string, Partial<Metadata>> {
	return files.reduce(
		(acc, { url, metadata }) => ({
			...acc,
			...(url != null
				? {
						[url || "/"]: {
							...metadata,
							path: url.slice(url.lastIndexOf("/") + 1) || "/",
							url: url || "/",
						},
				  }
				: {}),
		}),
		{},
	)
}
