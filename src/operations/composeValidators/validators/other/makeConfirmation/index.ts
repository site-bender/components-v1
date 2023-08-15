import type {
	ConfirmationConstraint,
	Validation,
} from "../../../../../types/constraints"

import makeError from "../../../utilities/makeError"

export default function makeConfirmation(
	constraint: ConfirmationConstraint,
): (validation: Validation) => Validation {
	return function confirmation(validation: Validation): Validation {
		const value = validation.value

		return (typeof value === "boolean" && value) || value
			? validation
			: makeError(validation, constraint)
	}
}
