import {
	NotEqualToNConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import notEqualToN from "."

const constraint: NotEqualToNConstraint = {
	constraintType: TypeOfConstraint.NOT_EQUAL_TO_N,
	operand: 42,
}

test("[moreThanN] returns correct validation if integer more than constraint value", () => {
	const validation: Validation = {
		datatype: "integer",
		value: 43,
	}

	expect(notEqualToN(constraint)(validation)).toEqual(validation)
})

test("[notEqualToN] returns error if integer less than constraint value", () => {
	const validation: Validation = {
		datatype: "integer",
		value: 41,
	}

	expect(notEqualToN(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.NOT_EQUAL_TO_N,
			},
		],
		isInvalid: true,
	})
})
