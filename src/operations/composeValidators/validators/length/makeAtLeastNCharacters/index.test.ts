import {
	AtLeastNCharactersConstraint,
	Validation,
} from "../../../../../types/constraints"

import atLeastNCharacters from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const validation: Validation = {
	datatype: "string",
	value: "Peter Piper picked a peck of pickled peppers.",
}

test("[atLeastNCharacters] returns correct validation if string length more than constraint value", () => {
	const constraint: AtLeastNCharactersConstraint = {
		constraintType: TypeOfConstraint.AT_LEAST_N_CHARACTERS,
		operand: 44,
	}

	expect(atLeastNCharacters(constraint)(validation)).toEqual(validation)
})

test("[atLeastNCharacters] returns correct validation if string length equals constraint value", () => {
	const constraint: AtLeastNCharactersConstraint = {
		constraintType: TypeOfConstraint.AT_LEAST_N_CHARACTERS,
		operand: 45,
	}

	expect(atLeastNCharacters(constraint)(validation)).toEqual(validation)
})

test("[atLeastNCharacters] returns error if string length less than constraint value", () => {
	const constraint: AtLeastNCharactersConstraint = {
		constraintType: TypeOfConstraint.AT_LEAST_N_CHARACTERS,
		operand: 46,
	}

	expect(atLeastNCharacters(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.AT_LEAST_N_CHARACTERS,
			},
		],
		isInvalid: true,
	})
})

test("[atLeastNCharacters] returns correct validation if string length equals constraint value using match", () => {
	const constraint: AtLeastNCharactersConstraint = {
		constraintType: TypeOfConstraint.AT_LEAST_N_CHARACTERS,
		operand: 12,
		match: /([pc])/gi,
	}

	expect(atLeastNCharacters(constraint)(validation)).toEqual(validation)
})

test("[atLeastNCharacters] returns correct response when match returns null", () => {
	const constraint: AtLeastNCharactersConstraint = {
		constraintType: TypeOfConstraint.AT_LEAST_N_CHARACTERS,
		operand: 12,
		match: /([x])/gi,
	}

	expect(atLeastNCharacters(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.AT_LEAST_N_CHARACTERS,
			},
		],
		isInvalid: true,
	})
})
