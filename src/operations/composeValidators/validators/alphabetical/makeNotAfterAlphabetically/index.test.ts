import {
	NotAfterAlphabeticallyConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import notAfterAlphabetically from "."

const constraint: NotAfterAlphabeticallyConstraint = {
	constraintType: TypeOfConstraint.NOT_AFTER_ALPHABETICALLY,
	operand: "bob",
}

test("[notAfterAlphabetically] returns correct validation if string comes before constraint value alphabetically", () => {
	const validation: Validation = {
		datatype: "string",
		value: "alice",
	}

	expect(notAfterAlphabetically(constraint)(validation)).toEqual(validation)
})

test("[notAfterAlphabetically] returns correct validation if string and constraint value are alphabetically equal", () => {
	const validation: Validation = {
		datatype: "string",
		value: "BOB",
	}

	expect(
		notAfterAlphabetically({
			...constraint,
			options: {
				sensitivity: "base",
			},
		})(validation),
	).toEqual(validation)
})

test("[notAfterAlphabetically] handles constraint with options", () => {
	const validation: Validation = {
		datatype: "string",
		value: "alice",
	}

	expect(
		notAfterAlphabetically({
			...constraint,
			language: "fr",
			options: {
				sensitivity: "accent",
			},
		})(validation),
	).toEqual(validation)
})

test("[notAfterAlphabetically] returns error if validation fails", () => {
	const validation: Validation = {
		datatype: "string",
		value: "carol",
	}

	expect(notAfterAlphabetically(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.NOT_AFTER_ALPHABETICALLY,
			},
		],
		isInvalid: true,
	})
})
