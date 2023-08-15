import type { Arrays } from "../../../types/values"

export default function getArray(
	arr: Arrays | string,
	separator: string | RegExp = ",",
): Arrays {
	if (Array.isArray(arr)) {
		return arr
	}

	return typeof arr === "string" ? arr.split(separator) : []
}
