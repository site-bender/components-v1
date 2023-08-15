import type {
	IntegerTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import makeError from "../../../utilities/makeError"

export default function makeIsInteger(
	constraint: IntegerTypeConstraint,
): (validation: Validation) => Validation {
	return function isInteger(validation: Validation): Validation {
		const { value } = validation

		return typeof value === "number" && Number.isInteger(value)
			? validation
			: makeError(validation, constraint)
	}
}
