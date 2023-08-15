import type {
	ListTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import makeError from "../../../utilities/makeError"

export default function makeIsList(
	constraint: ListTypeConstraint,
): (validation: Validation) => Validation {
	return function isList(validation: Validation): Validation {
		const value = validation.value

		return typeof value === "string" || Array.isArray(value)
			? validation
			: makeError(validation, constraint)
	}
}
