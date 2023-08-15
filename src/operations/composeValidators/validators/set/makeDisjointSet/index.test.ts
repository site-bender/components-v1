import {
	DisjointSetConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import disjointSet from "."

const constraint: DisjointSetConstraint = {
	constraintType: TypeOfConstraint.DISJOINT_SET,
	operand: "red,blue,green",
}

test("[disjointSet] returns correct validation if value set and constraint set share no members", () => {
	const validation: Validation = {
		datatype: "set",
		value: "cyan,magenta,yellow,black",
	}

	expect(disjointSet(constraint)(validation)).toEqual(validation)
})

test("[disjointSet] returns correct validation with arrays", () => {
	const validation: Validation = {
		datatype: "set",
		value: ["cyan", "magenta", "yellow", "black"],
	}

	expect(
		disjointSet({
			...constraint,
			operand: ["red", "green", "blue"],
		})(validation),
	).toEqual(validation)
})

test("[disjointSet] returns correct validation with sets", () => {
	const validation: Validation = {
		datatype: "set",
		value: new Set(["cyan", "magenta", "yellow", "black"]),
	}

	expect(
		disjointSet({
			...constraint,
			operand: new Set(["red", "green", "blue"]),
		})(validation),
	).toEqual(validation)
})

test("[disjointSet] returns error if value set and constraint set share members", () => {
	const validation: Validation = {
		datatype: "set",
		value: "red,yellow,black",
	}

	expect(disjointSet(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.DISJOINT_SET,
			},
		],
		isInvalid: true,
	})
})
