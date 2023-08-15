import type {
	ArrayInfer,
	SetTypeConstraint,
	Validation,
} from "../../../../../types/constraints"
import type { Arrays, Sets, SetValue } from "../../../../../types/values"

import makeError from "../../../utilities/makeError"

export default function makeIsSet(
	constraint: SetTypeConstraint,
): (validation: Validation) => Validation {
	return function isSet(validation: Validation): Validation {
		try {
			const value = typeof validation.value === "string"
				? validation.value.split((validation as SetValue).separator || ",")
				: Array.isArray(validation.value) ||
						"size" in (validation.value as Sets | Arrays)
				? Array.from(
					validation.value as Array<ArrayInfer<typeof validation.value>>,
				)
				: undefined

			return value && new Set(value).size === value.length
				? validation
				: makeError(validation, constraint)
		} catch (e) {
			return makeError(validation, constraint, e.message)
		}
	}
}
