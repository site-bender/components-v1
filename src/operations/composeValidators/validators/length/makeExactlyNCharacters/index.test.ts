import {
	ExactlyNCharactersConstraint,
	Validation,
} from "../../../../../types/constraints"

import exactlyNCharacters from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const validation: Validation = {
	datatype: "string",
	value: "Peter Piper picked a peck of pickled peppers.",
}

test("[exactlyNCharacters] returns error if string length less than constraint value", () => {
	const constraint: ExactlyNCharactersConstraint = {
		constraintType: TypeOfConstraint.EXACTLY_N_CHARACTERS,
		operand: 46,
	}

	expect(exactlyNCharacters(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.EXACTLY_N_CHARACTERS,
			},
		],
		isInvalid: true,
	})
})

test("[exactlyNCharacters] returns correct validation if string length equals constraint value", () => {
	const constraint: ExactlyNCharactersConstraint = {
		constraintType: TypeOfConstraint.EXACTLY_N_CHARACTERS,
		operand: 45,
	}

	expect(exactlyNCharacters(constraint)(validation)).toEqual(validation)
})

test("[exactlyNCharacters] returns error if string length more than constraint value", () => {
	const constraint: ExactlyNCharactersConstraint = {
		constraintType: TypeOfConstraint.EXACTLY_N_CHARACTERS,
		operand: 44,
	}

	expect(exactlyNCharacters(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.EXACTLY_N_CHARACTERS,
			},
		],
		isInvalid: true,
	})
})

test("[exactlyNCharacters] returns correct validation if string length equal to constraint value using match", () => {
	const constraint: ExactlyNCharactersConstraint = {
		constraintType: TypeOfConstraint.EXACTLY_N_CHARACTERS,
		operand: 12,
		match: /([pc])/gi,
	}

	expect(exactlyNCharacters(constraint)(validation)).toEqual(validation)
})

test("[exactlyNCharacters] returns correct response when match returns null", () => {
	const constraint: ExactlyNCharactersConstraint = {
		constraintType: TypeOfConstraint.EXACTLY_N_CHARACTERS,
		operand: 13,
		match: /([x])/gi,
	}

	expect(exactlyNCharacters(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.EXACTLY_N_CHARACTERS,
			},
		],
		isInvalid: true,
	})
})
