import type { Records } from "../../../types/values"
import not from "../../../utilities/not"

export default function stringToRecord(
	str: string,
	separator: string | RegExp = ",",
	keyValueSeparator: string | RegExp = ":",
): Records {
	return str.split(separator).reduce((acc, v) => {
		const [key, value] = v.split(keyValueSeparator)

		return not(key)
			? acc
			: {
					...acc,
					[key]: value,
			  }
	}, {}) as Records
}
