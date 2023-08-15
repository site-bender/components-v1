import {
	ReversedListConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import reversedList from "."

const constraint: ReversedListConstraint = {
	constraintType: TypeOfConstraint.REVERSED_LIST,
	operand: "red,yellow,green,cyan,blue,magenta",
}

test("[reversedList] returns correct validation if list contains the constraint values in the same order", () => {
	const validation: Validation = {
		datatype: "list",
		value: "blue,green,red",
	}

	expect(reversedList(constraint)(validation)).toEqual(validation)
})

test("[reversedList] works with arrays", () => {
	const validation: Validation = {
		datatype: "list",
		value: ["blue", "green", "red"],
	}

	expect(
		reversedList({
			...constraint,
			operand: ["red", "yellow", "green", "cyan", "blue", "magenta"],
		})(validation),
	).toEqual(validation)
})

test("[reversedList] returns error if list after constraint value", () => {
	const validation: Validation = {
		datatype: "list",
		value: "red,blue,green",
	}

	expect(reversedList(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.REVERSED_LIST,
			},
		],
		isInvalid: true,
	})
})
