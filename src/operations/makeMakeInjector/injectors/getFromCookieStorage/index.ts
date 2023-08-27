import type { InjectValueOperation } from "../../../../types/operations"
import type { Value } from "../../../../types/values"
import parseValue from "../../../utilities/parseValue"

export default function getFromCookieStorage(
	operation: InjectValueOperation,
): Value {
	const { path = [] } = operation
	const [name, ...rest] = path

	if (!name) {
		return {} as Value
	}

	const storedValue = localStorage.getItem(name)

	if (storedValue == null) {
		return {} as Value
	}

	try {
		const parsed = JSON.parse(storedValue)
		const value = rest.length
			? rest.reduce((obj, key) => obj?.[key], parsed)
			: parsed

		return parseValue(value, operation)
	} catch (e) {
		console.error(e)
		return parseValue(storedValue, operation)
	}
}
