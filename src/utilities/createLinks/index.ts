import type { Crumb, PageMeta } from "../../types"

export default function createLinks(
	paths: Array<string>,
	pageLookup: Record<string, PageMeta>,
): Array<Crumb> {
	return paths.reduce<Array<Crumb>>((acc, path) => {
		const {
			description,
			label,
			title,
			path: href,
		} = pageLookup[path] as PageMeta

		if (href) {
			acc.push({
				description,
				href,
				label: (label || title) as string,
			})
		}

		return acc
	}, [])
}