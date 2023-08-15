import {
	PrecisionTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import makeIsPrecision from "."

const constraint: PrecisionTypeConstraint = {
	constraintType: TypeOfConstraint.IS_PRECISION,
	decimalPlaces: 4,
}

const validation: Validation = {
	datatype: "precision",
	value: 3.1415,
	decimalPlaces: 4,
}

test("[makeIsPrecision] returns correct validation when value is a correct precision number", () => {
	expect(makeIsPrecision(constraint)(validation)).toEqual(validation)
})

test("[makeIsPrecision] defaults precision to zero", () => {
	expect(
		makeIsPrecision({
			...constraint,
			// @ts-expect-error override for testing purposes
			decimalPlaces: undefined,
		})(validation),
	).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_PRECISION,
				constraint: {
					...constraint,
					decimalPlaces: undefined,
				},
			},
		],
	})
})

test("[makeIsPrecision] returns correct validation when value is a correct precision number", () => {
	expect(makeIsPrecision(constraint)(validation)).toEqual(validation)
})

test("[makeIsPrecision] returns error when value is not a precision number but should be", () => {
	expect(
		makeIsPrecision({
			...constraint,
			decimalPlaces: 3,
		})(validation),
	).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_PRECISION,
				constraint: {
					...constraint,
					decimalPlaces: 3,
				},
			},
		],
	})
})
