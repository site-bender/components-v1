import { PageMeta } from "../../../types"

function createSubTree(
	menu: Array<string>,
	pages: Array<PageMeta>,
): Array<PageMeta> {
	return menu.reduce((acc, path) => {
		const page = pages.find((page) => page.path?.split("/").at(-1) === path)

		const fullPage = page?.children
			? {
					...page,
					children: createSubTree(page.children, pages),
			  }
			: page

		return [...acc, fullPage]
	}, [])
}

export default function createPageTree(pages: Array<PageMeta> = []) {
	const home = pages.find((page) => page?.menu)
	const menu: Array<string> = home?.menu || []

	const subTree = createSubTree(menu, pages)

	return [...(home ? [home] : []), ...subTree]
}
