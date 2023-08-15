import type {
	LessThanNConstraint,
	Validation,
} from "../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import lessThanN from "."

const constraint: LessThanNConstraint = {
	constraintType: TypeOfConstraint.LESS_THAN_N,
	operand: 42,
}

test("[lessThanN] returns correct validation if integer less than constraint value", () => {
	const validation: Validation = {
		datatype: "integer",
		value: 41,
	}

	expect(lessThanN(constraint)(validation)).toEqual(validation)
})

test("[lessThanN] returns error if integer more than constraint value", () => {
	const validation: Validation = {
		datatype: "integer",
		value: 43,
	}

	expect(lessThanN(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.LESS_THAN_N,
			},
		],
		isInvalid: true,
	})
})
