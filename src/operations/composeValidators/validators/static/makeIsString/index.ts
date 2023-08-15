import type {
	StringTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import makeError from "../../../utilities/makeError"

export default function makeIsString(
	constraint: StringTypeConstraint,
): (validation: Validation) => Validation {
	return function isString(validation: Validation): Validation {
		const value = validation.value

		return typeof value === "string"
			? validation
			: makeError(validation, constraint)
	}
}
