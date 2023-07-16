import type { SelectOption } from "../../types/form"

export default function createSelectOptions(
	list: Array<SelectOption>,
	selected?: string | number | undefined | null
): string {
	return list
		.map(
			(item) =>
				`<option value="${item.value}"${
					String(item.value) === String(selected) ? " selected" : ""
				}>${item.label || item.value}</option>`
		)
		.join("\n")
}
