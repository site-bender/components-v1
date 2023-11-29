import type { AstroPage, Metadata } from "../../types"

export default function getPages(
	files: Array<AstroPage>,
): Record<string, Partial<Metadata>> {
	return files.reduce(
		(acc, { url, metadata }) => {
			if (url != null) {
				acc[url || "/"] = {
					...metadata,
					path: url.slice(url.lastIndexOf("/") + 1) || "/",
					url: url || "/",
				}
			}

			return acc
		},
		{} as Record<string, Partial<Metadata> & { path: string; url: string }>,
	)
}
