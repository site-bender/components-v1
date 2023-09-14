import {
	OrderedListConstraint,
	Validation,
} from "../../../../../types/constraints"

import orderedList from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: OrderedListConstraint = {
	constraintType: TypeOfConstraint.ORDERED_LIST,
	operand: "red,yellow,green,cyan,blue,magenta",
}

test("[orderedList] returns correct validation if list contains the constraint values in the same order", () => {
	const validation: Validation = {
		datatype: "list",
		value: "red,green,blue",
	}

	expect(orderedList(constraint)(validation)).toEqual(validation)
})

test("[orderedList] works with arrays", () => {
	const validation: Validation = {
		datatype: "list",
		value: ["red", "green", "blue"],
	}

	expect(
		orderedList({
			...constraint,
			operand: ["red", "yellow", "green", "cyan", "blue", "magenta"],
		})(validation),
	).toEqual(validation)
})

test("[orderedList] returns error if list after constraint value", () => {
	const validation: Validation = {
		datatype: "list",
		value: "red,blue,green",
	}

	expect(orderedList(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.ORDERED_LIST,
			},
		],
		isInvalid: true,
	})
})
