import not from "../../../../utilities/not"

export default function stringToMap(
	str: string,
	separator: string | RegExp = ",",
	keyValueSeparator: string | RegExp = ":",
): Map<string, string> {
	const obj: Record<string, string> = str.split(separator).reduce((acc, v) => {
		const [key, value] = v.split(keyValueSeparator)

		return not(key)
			? acc
			: {
					...acc,
					[key]: value,
			  }
	}, {})

	return new Map<string, string>(Object.entries(obj))
}
