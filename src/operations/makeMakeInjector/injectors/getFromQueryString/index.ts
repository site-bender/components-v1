import type {
	InjectValueOperation,
	Injector,
} from "../../../../types/operations"

import not from "../../../../../../utilities/not"
import type { Value } from "../../../../types/values"
import parseValue from "../../../utilities/parseValue"

export default function getFromQueryString(
	operation: InjectValueOperation,
): Injector {
	const { path = [] } = operation
	const [name] = path

	if (not(name)) {
		return () => ({}) as Value
	}

	return function injectValueFromQueryString(): Value {
		const search = new URLSearchParams(globalThis.location.search)
		const queryValue = search.get(name as string)

		if (queryValue == null) {
			return {} as Value
		}

		return parseValue(queryValue, operation)
	}
}
