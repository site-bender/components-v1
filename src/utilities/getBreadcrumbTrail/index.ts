import type { Metadata, PageMeta } from "../../types"

export default function getBreadcrumbTrail(
	pathname?: string,
	pages?: Record<string, Partial<Metadata>>,
): Array<PageMeta<"a">> {
	const path = pathname?.replace(/^\/|\/$/g, "")

	if (!pages || !path) {
		return [] as Array<PageMeta<"a">>
	}

	const trail = [
		"/",
		...path
			.split("/")
			.reduce(
				(acc, p) => [...acc, `${acc.at(-1) || ""}/${p}`],
				[] as Array<string>,
			),
	]

	return trail.map((path) => pages[path]) as Array<PageMeta<"a">>
}
