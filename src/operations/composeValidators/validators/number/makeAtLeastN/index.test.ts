import type {
	AtLeastNConstraint,
	Validation,
} from "../../../../types/constraints"

import atLeastN from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: AtLeastNConstraint = {
	constraintType: TypeOfConstraint.AT_LEAST_N,
	operand: 42,
}

test("[atLeastN] returns correct validation if integer more than constraint value", () => {
	const validation: Validation = {
		datatype: "integer",
		value: 43,
	}

	expect(atLeastN(constraint)(validation)).toEqual(validation)
})

test("[atLeastN] returns correct validation if integer equals constraint value", () => {
	const validation: Validation = {
		datatype: "integer",
		value: 42,
	}

	expect(atLeastN(constraint)(validation)).toEqual(validation)
})

test("[atLeastN] returns error if integer less than constraint value", () => {
	const validation: Validation = {
		datatype: "integer",
		value: 41,
	}

	expect(atLeastN(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.AT_LEAST_N,
			},
		],
		isInvalid: true,
	})
})
