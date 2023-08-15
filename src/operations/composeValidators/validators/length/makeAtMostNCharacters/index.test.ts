import {
	AtMostNCharactersConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import atMostNCharacters from "."

const validation: Validation = {
	datatype: "string",
	value: "Peter Piper picked a peck of pickled peppers.",
}

test("[atMostNCharacters] returns correct validation if string length less than constraint value", () => {
	const constraint: AtMostNCharactersConstraint = {
		constraintType: TypeOfConstraint.AT_MOST_N_CHARACTERS,
		operand: 46,
	}

	expect(atMostNCharacters(constraint)(validation)).toEqual(validation)
})

test("[atMostNCharacters] returns correct validation if string length equals constraint value", () => {
	const constraint: AtMostNCharactersConstraint = {
		constraintType: TypeOfConstraint.AT_MOST_N_CHARACTERS,
		operand: 45,
	}

	expect(atMostNCharacters(constraint)(validation)).toEqual(validation)
})

test("[atMostNCharacters] returns error if string length less than constraint value", () => {
	const constraint: AtMostNCharactersConstraint = {
		constraintType: TypeOfConstraint.AT_MOST_N_CHARACTERS,
		operand: 44,
	}

	expect(atMostNCharacters(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.AT_MOST_N_CHARACTERS,
			},
		],
		isInvalid: true,
	})
})

test("[atMostNCharacters] returns correct validation if string length equals constraint value using match", () => {
	const constraint: AtMostNCharactersConstraint = {
		constraintType: TypeOfConstraint.AT_MOST_N_CHARACTERS,
		operand: 12,
		match: /([pc])/gi,
	}

	expect(atMostNCharacters(constraint)(validation)).toEqual(validation)
})

test("[atMostNCharacters] returns correct response when match returns null", () => {
	const constraint: AtMostNCharactersConstraint = {
		constraintType: TypeOfConstraint.AT_MOST_N_CHARACTERS,
		operand: 12,
		match: /([x])/gi,
	}

	expect(atMostNCharacters(constraint)(validation)).toEqual(validation)
})
