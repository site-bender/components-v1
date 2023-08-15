import type { Arrays, Sets } from "../../../types/values"

export default function getSet(
	set: Sets | Arrays | string,
	separator: string | RegExp = ",",
): Sets {
	if (Array.isArray(set)) {
		return new Set(set as Array<typeof set>) as Sets
	}

	return typeof set === "string" ? new Set(set.split(separator)) : set
}
