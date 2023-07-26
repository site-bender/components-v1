import type { Dataset, HTMLAttributes } from "../../types/html"
import createClassList from "../createClassList"
import mapDataset from "../mapDataset"

export default function mapAttributes(
	data: Partial<HTMLAttributes> | null = {},
	classes: Array<string> = [],
	attrs?: HTMLAttributes
) {
	const {
		["class:list"]: classList = [],
		dataset = {} as Dataset,
		...attributes
	} = data as Partial<HTMLAttributes>

	return {
		...attributes,
		["class:list"]: createClassList(...classes, classList),
		...mapDataset(dataset),
		...attrs,
	}
}
