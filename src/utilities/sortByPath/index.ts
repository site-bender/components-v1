import { PageMeta } from "../../types"

export default function sortByPath(a: PageMeta, b: PageMeta) {
	if (a.path > b.path) {
		return 1
	}

	if (a.path < b.path) {
		return -1
	}

	return 0
}
