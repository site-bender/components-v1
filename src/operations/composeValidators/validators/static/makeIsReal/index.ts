import type {
	RealTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import not from "../../../../../utilities/not"
import makeError from "../../../utilities/makeError"

export default function makeIsReal(
	constraint: RealTypeConstraint,
): (validation: Validation) => Validation {
	return function isReal(validation: Validation): Validation {
		const value = validation.value

		return typeof value === "number" && not(Number.isNaN(value))
			? validation
			: makeError(validation, constraint)
	}
}
