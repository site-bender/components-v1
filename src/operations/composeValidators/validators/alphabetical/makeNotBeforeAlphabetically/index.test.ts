import {
	NotBeforeAlphabeticallyConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import notBeforeAlphabetically from "."

const constraint: NotBeforeAlphabeticallyConstraint = {
	constraintType: TypeOfConstraint.NOT_BEFORE_ALPHABETICALLY,
	operand: "bob",
}

test("[notBeforeAlphabetically] returns correct validation if string comes before constraint value alphabetically", () => {
	const validation: Validation = {
		datatype: "string",
		value: "carol",
	}

	expect(notBeforeAlphabetically(constraint)(validation)).toEqual(validation)
})

test("[notBeforeAlphabetically] returns correct validation if string and constraint value are alphabetically equal", () => {
	const validation: Validation = {
		datatype: "string",
		value: "BOB",
	}

	expect(
		notBeforeAlphabetically({
			...constraint,
			options: {
				sensitivity: "base",
			},
		})(validation),
	).toEqual(validation)
})

test("[notBeforeAlphabetically] handles constraint with options", () => {
	const validation: Validation = {
		datatype: "string",
		value: "carol",
	}

	expect(
		notBeforeAlphabetically({
			...constraint,
			language: "fr",
			options: {
				sensitivity: "accent",
			},
		})(validation),
	).toEqual(validation)
})

test("[notBeforeAlphabetically] returns error if validation fails", () => {
	const validation: Validation = {
		datatype: "string",
		value: "alice",
	}

	expect(notBeforeAlphabetically(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.NOT_BEFORE_ALPHABETICALLY,
			},
		],
		isInvalid: true,
	})
})
