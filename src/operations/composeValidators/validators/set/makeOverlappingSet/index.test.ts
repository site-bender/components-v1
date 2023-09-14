import {
	OverlappingSetConstraint,
	Validation,
} from "../../../../../types/constraints"

import overlappingSet from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: OverlappingSetConstraint = {
	constraintType: TypeOfConstraint.OVERLAPPING_SET,
	operand: "red,blue,green",
}

test("[overlappingSet] returns correct validation if value set and constraint set share some but not all members", () => {
	const validation: Validation = {
		datatype: "set",
		value: "cyan,red,yellow,blue",
	}

	expect(overlappingSet(constraint)(validation)).toEqual(validation)
})

test("[overlappingSet] returns correct validation with arrays", () => {
	const validation: Validation = {
		datatype: "set",
		value: ["cyan", "red", "yellow", "black"],
	}

	expect(
		overlappingSet({
			...constraint,
			operand: ["red", "green", "blue"],
		})(validation),
	).toEqual(validation)
})

test("[overlappingSet] returns correct validation with sets", () => {
	const validation: Validation = {
		datatype: "set",
		value: new Set(["cyan", "magenta", "yellow", "blue"]),
	}

	expect(
		overlappingSet({
			...constraint,
			operand: new Set(["red", "green", "blue"]),
		})(validation),
	).toEqual(validation)
})

test("[overlappingSet] returns error if value set and constraint set share no members", () => {
	const validation: Validation = {
		datatype: "set",
		value: "cyan,magenta,yellow,black",
	}

	expect(overlappingSet(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.OVERLAPPING_SET,
			},
		],
		isInvalid: true,
	})
})

test("[overlappingSet] returns error if value set and constraint set share all members", () => {
	const validation: Validation = {
		datatype: "set",
		value: "red,blue,green",
	}

	expect(overlappingSet(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.OVERLAPPING_SET,
			},
		],
		isInvalid: true,
	})
})
