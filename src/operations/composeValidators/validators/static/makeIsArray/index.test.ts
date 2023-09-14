import type {
	ArrayTypeConstraint,
	Validation,
} from "../../../../types/constraints"

import makeIsArray from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: ArrayTypeConstraint = {
	constraintType: TypeOfConstraint.IS_ARRAY,
	datatype: "array",
}

test("[makeIsArray] returns correct validation when value is an array", () => {
	const validation: Validation = {
		datatype: "array",
		value: [],
	}

	expect(makeIsArray(constraint)(validation)).toEqual(validation)
})

test("[makeIsArray] returns error when value is not an array", () => {
	const validation: Validation = {
		datatype: "array",
		value: "",
	}

	expect(makeIsArray(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_ARRAY,
				constraint,
			},
		],
	})
})
