import { PageMeta } from "~types"

function injectPage(
	filename: string,
	children: Array<string>,
	page: PageMeta<"a">,
): Array<string | PageMeta<"a">> {
	return [
		...children.slice(0, children.indexOf(filename)),
		page,
		...children.slice(children.indexOf(filename) + 1),
	]
}

export default function createPageTree(pages: Array<PageMeta<"a">>) {
	return pages.reduce((acc, page) => {
		const [last] = acc.slice(-1)
		const first = acc.slice(0, -1)
		const filename = page.path.split("/").at(-1)

		return last?.children?.includes(filename)
			? [
					...first,
					{
						...last,
						children: injectPage(filename, last.children, page),
					},
			  ]
			: [...acc, page]
	}, [])
}
