import type { Maps } from "../../../types/values"
import not from "../../../utilities/not"

export default function stringToMap(
	value: string,
	separator: string | RegExp = ",",
	keyValueSeparator: string | RegExp = ":",
): Maps {
	const obj: Record<string, string> = value
		.split(separator)
		.reduce((acc, v) => {
			const [key, value] = v.split(keyValueSeparator)

			return not(key)
				? acc
				: {
					...acc,
					[key]: value,
				}
		}, {})

	return new Map(Object.entries(obj)) as Maps
}
