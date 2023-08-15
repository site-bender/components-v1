import {
	MoreThanNCharactersConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import moreThanNCharacters from "."

const validation: Validation = {
	datatype: "string",
	value: "Peter Piper picked a peck of pickled peppers.",
}

test("[moreThanNCharacters] returns correct validation if string length more than constraint value", () => {
	const constraint: MoreThanNCharactersConstraint = {
		constraintType: TypeOfConstraint.MORE_THAN_N_CHARACTERS,
		operand: 44,
	}

	expect(moreThanNCharacters(constraint)(validation)).toEqual(validation)
})

test("[moreThanNCharacters] returns error if string length equals constraint value", () => {
	const constraint: MoreThanNCharactersConstraint = {
		constraintType: TypeOfConstraint.MORE_THAN_N_CHARACTERS,
		operand: 45,
	}

	expect(moreThanNCharacters(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.MORE_THAN_N_CHARACTERS,
			},
		],
		isInvalid: true,
	})
})

test("[moreThanNCharacters] returns error if string length less than constraint value", () => {
	const constraint: MoreThanNCharactersConstraint = {
		constraintType: TypeOfConstraint.MORE_THAN_N_CHARACTERS,
		operand: 46,
	}

	expect(moreThanNCharacters(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.MORE_THAN_N_CHARACTERS,
			},
		],
		isInvalid: true,
	})
})

test("[moreThanNCharacters] returns correct validation if string length less than constraint value using match", () => {
	const constraint: MoreThanNCharactersConstraint = {
		constraintType: TypeOfConstraint.MORE_THAN_N_CHARACTERS,
		operand: 11,
		match: /([pc])/gi,
	}

	expect(moreThanNCharacters(constraint)(validation)).toEqual(validation)
})

test("[moreThanNCharacters] returns correct response when match returns null", () => {
	const constraint: MoreThanNCharactersConstraint = {
		constraintType: TypeOfConstraint.MORE_THAN_N_CHARACTERS,
		operand: 11,
		match: /([x])/gi,
	}

	expect(moreThanNCharacters(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.MORE_THAN_N_CHARACTERS,
			},
		],
		isInvalid: true,
	})
})
