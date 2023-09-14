import {
	FewerThanNCharactersConstraint,
	Validation,
} from "../../../../../types/constraints"

import fewerThanNCharacters from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const validation: Validation = {
	datatype: "string",
	value: "Peter Piper picked a peck of pickled peppers.",
}

test("[fewerThanNCharacters] returns correct validation if string length less than constraint value", () => {
	const constraint: FewerThanNCharactersConstraint = {
		constraintType: TypeOfConstraint.FEWER_THAN_N_CHARACTERS,
		operand: 46,
	}

	expect(fewerThanNCharacters(constraint)(validation)).toEqual(validation)
})

test("[fewerThanNCharacters] returns error if string length equals constraint value", () => {
	const constraint: FewerThanNCharactersConstraint = {
		constraintType: TypeOfConstraint.FEWER_THAN_N_CHARACTERS,
		operand: 45,
	}

	expect(fewerThanNCharacters(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.FEWER_THAN_N_CHARACTERS,
			},
		],
		isInvalid: true,
	})
})

test("[fewerThanNCharacters] returns error if string length more than constraint value", () => {
	const constraint: FewerThanNCharactersConstraint = {
		constraintType: TypeOfConstraint.FEWER_THAN_N_CHARACTERS,
		operand: 44,
	}

	expect(fewerThanNCharacters(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.FEWER_THAN_N_CHARACTERS,
			},
		],
		isInvalid: true,
	})
})

test("[fewerThanNCharacters] returns correct validation if string length less than constraint value using match", () => {
	const constraint: FewerThanNCharactersConstraint = {
		constraintType: TypeOfConstraint.FEWER_THAN_N_CHARACTERS,
		operand: 13,
		match: /([pc])/gi,
	}

	expect(fewerThanNCharacters(constraint)(validation)).toEqual(validation)
})

test("[fewerThanNCharacters] returns correct response when match returns null", () => {
	const constraint: FewerThanNCharactersConstraint = {
		constraintType: TypeOfConstraint.FEWER_THAN_N_CHARACTERS,
		operand: 13,
		match: /([x])/gi,
	}

	expect(fewerThanNCharacters(constraint)(validation)).toEqual(validation)
})
