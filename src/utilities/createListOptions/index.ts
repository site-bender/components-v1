import type { DatalistOption } from "../../types/form"

export default function createListOptions(
	list: Array<DatalistOption>,
): string {
	return list
		.map(
			(item) => `<option value="${item.value}"></option>`,
		)
		.join("\n")
}
