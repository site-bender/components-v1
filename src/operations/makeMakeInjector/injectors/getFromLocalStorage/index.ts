import type {
	InjectValueOperation,
	Injector,
} from "../../../../types/operations"

import not from "../../../../../../utilities/not"
import type { Value } from "../../../../types/values"
import parseValue from "../../../utilities/parseValue"

export default function getFromLocalStorage(
	operation: InjectValueOperation,
): Injector {
	const { path = [] } = operation
	const [name, ...rest] = path

	if (not(name)) {
		return () => ({}) as Value
	}

	return function injectValue(): Value {
		const storedValue = localStorage.getItem(name as string)

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
}
