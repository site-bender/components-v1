import { MAX_PAGES } from "../../constants"
import type { Metadata } from "../../types"

export default function getSlots(
	items: Array<Partial<Metadata>>,
	index: number,
): Array<Partial<Metadata>> {
	const len = items.length

	if (len <= MAX_PAGES) {
		return items
	}

	const split = Math.floor(MAX_PAGES / 2)

	if (index + split >= len) {
		return items.slice(MAX_PAGES * -1)
	}

	if (index - split < 0) {
		return items.slice(0, MAX_PAGES)
	}

	return items.slice(index - split, index + split)
}
