import { PageMeta } from "../../types"

export default function createPageLookup(
	pages: Array<PageMeta>,
): Record<string, PageMeta> {
	return pages.reduce((acc, page) => {
		const p = page.path ? page : { ...page, path: "/" }

		return {
			...acc,
			[p.path]: p,
		}
	}, {})
}
