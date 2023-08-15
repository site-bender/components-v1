import type { Maps, Records } from "../../../types/values"

import stringToMap from "../stringToMap"

export default function getMap(
	map: Maps | Records | string,
	separator: string | RegExp = ",",
	keyValueSeparator: string | RegExp = ":",
): Maps {
	if (typeof map === "string") {
		return stringToMap(map, separator, keyValueSeparator)
	}

	return map instanceof Map ? map : (new Map(Object.entries(map)) as Maps)
}
