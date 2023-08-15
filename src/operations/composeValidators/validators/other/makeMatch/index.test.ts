import type { MatchConstraint, Validation } from "../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import matches from "."

const constraint: MatchConstraint = {
	constraintType: TypeOfConstraint.MATCHING,
	operand: "^\\d+$",
}

test("[matches] returns correct validation when value matches constraint regexp", () => {
	const validation: Validation = {
		datatype: "string",
		value: "666",
	}

	expect(matches(constraint)(validation)).toEqual(validation)
})

test("[matches] returns error when value does not match constraint regexp", () => {
	const validation: Validation = {
		datatype: "string",
		value: "xyz",
	}

	expect(matches(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.MATCHING,
			},
		],
	})
})

test("[matches] works with flags", () => {
	const validation: Validation = {
		datatype: "string",
		value: "xyz",
	}

	expect(
		matches({
			...constraint,
			operand: "^[A-Z]+$",
			flags: "i",
		})(validation),
	).toEqual(validation)
})
