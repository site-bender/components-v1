import type {
	MemberTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import makeError from "../../../utilities/makeError"

export default function makeIsMember(
	constraint: MemberTypeConstraint,
): (validation: Validation) => Validation {
	return function isMember(validation: Validation): Validation {
		const value = validation.value

		return typeof value !== "undefined"
			? validation
			: makeError(validation, constraint)
	}
}
