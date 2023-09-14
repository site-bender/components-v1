import type { Arrays, SetValue, Sets } from "../../../../types/values"

export default function convertToSet(
	set: SetValue | Sets | Arrays | string,
	separator: string | RegExp = ",",
): Sets {
	const value = typeof set === "object" && "value" in set ? set.value : set

	if (value instanceof Set) {
		return value
	}

	if (Array.isArray(value)) {
		return new Set(value as Array<string>)
	}

	if (typeof value === "string") {
		return new Set(value.split(separator))
	}

	return value
}
