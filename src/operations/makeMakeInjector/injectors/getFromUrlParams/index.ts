import type {
	InjectValueOperation,
	Injector,
} from "../../../../types/operations"

// import { useRoute } from "@rturnq/solid-router"
import not from "../../../../../../utilities/not"
import type { Value } from "../../../../types/values"
import parseValue from "../../../utilities/parseValue"

export default function getFromUrlParams(
	operation: InjectValueOperation,
): Injector {
	// const { params = {} } = useRoute()
	const params = {} as Record<string, string>
	const { path = [] } = operation
	const [name] = path

	if (not(name)) {
		return () => ({})
	}

	return function injectValueFromUrlParams(): Value {
		const paramValue = name ? params[name] : ""

		return parseValue(paramValue, operation)
	}
}
