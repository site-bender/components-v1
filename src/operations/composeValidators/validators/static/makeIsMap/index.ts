import type {
	MapTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { MapValue } from "../../../../../types/values"
import makeError from "../../../utilities/makeError"
import stringToMap from "../../../utilities/stringToMap"

export default function makeIsMap(
	constraint: MapTypeConstraint,
): (validation: Validation) => Validation {
	return function isMap(validation: Validation): Validation {
		const { keyValueSeparator, separator, value } = validation as MapValue

		try {
			typeof value === "string"
				? stringToMap(value, separator, keyValueSeparator)
				: "entries" in value
				? value
				: new Map(Object.entries(value))

			return validation
		} catch (e) {
			return makeError(validation, constraint, (e as Error).toString())
		}
	}
}
