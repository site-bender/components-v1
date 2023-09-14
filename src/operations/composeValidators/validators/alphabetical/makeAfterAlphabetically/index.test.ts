import {
	AfterAlphabeticallyConstraint,
	Validation,
} from "../../../../../types/constraints"

import afterAlphabetically from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: AfterAlphabeticallyConstraint = {
	constraintType: TypeOfConstraint.AFTER_ALPHABETICALLY,
	operand: "bob",
}

test("[afterAlphabetically] returns correct validation if string comes after constraint value alphabetically", () => {
	const validation: Validation = {
		datatype: "string",
		value: "carol",
	}

	expect(afterAlphabetically(constraint)(validation)).toEqual(validation)
})

test("[afterAlphabetically] handles constraint with options", () => {
	const validation: Validation = {
		datatype: "string",
		value: "carol",
	}

	expect(
		afterAlphabetically({
			...constraint,
			language: "fr",
			options: {
				sensitivity: "accent",
			},
		})(validation),
	).toEqual(validation)
})

test("[afterAlphabetically] returns error if validation fails", () => {
	const validation: Validation = {
		datatype: "string",
		value: "alice",
	}

	expect(afterAlphabetically(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.AFTER_ALPHABETICALLY,
			},
		],
		isInvalid: true,
	})
})
