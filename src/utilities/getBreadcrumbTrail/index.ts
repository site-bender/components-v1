import type { Metadata, PageMeta } from "../../types"

export default function getBreadcrumbTrail(
	pathname?: string,
	pages?: Record<string, Partial<Metadata>>,
): Array<PageMeta> {
	const path = pathname?.replace(/^\/|\/$/g, "")

	if (!pages || !path) {
		return [] as Array<PageMeta>
	}

	const trail = [
		"/",
		...path.split("/").reduce((acc, p) => {
			acc.push(`${acc.at(-1) || ""}/${p}`)

			return acc
		}, [] as Array<string>),
	]

	return trail.map((path) => pages[path]) as Array<PageMeta>
}
