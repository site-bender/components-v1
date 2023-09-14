import {
	BeforeAlphabeticallyConstraint,
	Validation,
} from "../../../../../types/constraints"

import beforeAlphabetically from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: BeforeAlphabeticallyConstraint = {
	constraintType: TypeOfConstraint.BEFORE_ALPHABETICALLY,
	operand: "bob",
}

test("[beforeAlphabetically] returns correct validation if value validates against constraint", () => {
	const validation: Validation = {
		datatype: "string",
		value: "alice",
	}

	expect(beforeAlphabetically(constraint)(validation)).toEqual(validation)
})

test("[beforeAlphabetically] handles constraint with options", () => {
	const validation: Validation = {
		datatype: "string",
		value: "alice",
	}

	expect(
		beforeAlphabetically({
			...constraint,
			language: "fr",
			options: {
				sensitivity: "accent",
			},
		})(validation),
	).toEqual(validation)
})

test("[beforeAlphabetically] returns error if validation fails", () => {
	const validation: Validation = {
		datatype: "string",
		value: "carol",
	}

	expect(beforeAlphabetically(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.BEFORE_ALPHABETICALLY,
			},
		],
		isInvalid: true,
	})
})
