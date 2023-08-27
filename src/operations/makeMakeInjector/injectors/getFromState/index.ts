import type {
	Injector,
	InjectValueOperation,
} from "../../../../types/operations"
import type { EmptyValue, Value } from "../../../../types/values"

// import type { Store } from "solid-js/store"
// import type { StoreConfig } from "../.."
import not from "../../../../utilities/not"
import parseValue from "../../utilities/parseValue"

export default function getFromState(
	operation: InjectValueOperation,
	store: Record<string, string>,
): Injector {
	const { path = [] } = operation

	if (not(path.length)) {
		return () => ({} as EmptyValue)
	}

	return function injectValueFromState(): Value {
		const value = path.reduce(
			(state, key) => {
				return typeof state === "object" && key in state ? state[key] : state
			},
			{ ...(store.interfaces as unknown as Record<string, string>) },
		)

		return typeof value === "undefined"
			? ({} as EmptyValue)
			: parseValue(value as string, operation)
	}
}
