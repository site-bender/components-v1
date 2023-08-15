import type {
	PrecisionTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import makeError from "../../../utilities/makeError"

// TODO: rethink this. Is it necessary?
export default function makeIsPrecision(
	constraint: PrecisionTypeConstraint,
): (validation: Validation) => Validation {
	const decimalPlaces = constraint.decimalPlaces || 0
	const multiplier = 10 ** decimalPlaces

	return function isPrecision(validation: Validation): Validation {
		const value = validation.value
		const shifted = (value as number) * multiplier

		return typeof value === "number" && shifted - Math.floor(shifted) === 0
			? validation
			: makeError(validation, constraint)
	}
}
