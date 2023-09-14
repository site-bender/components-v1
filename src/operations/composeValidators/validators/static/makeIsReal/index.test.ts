import type {
	RealTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import makeIsReal from "."
import type { RealNumberValue } from "../../../../../types/values"
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: RealTypeConstraint = {
	constraintType: TypeOfConstraint.IS_REAL,
}

test("[makeIsReal] returns correct validation when value is a real number", () => {
	const validation: Validation = {
		datatype: "real",
		value: 3.1415,
	}

	expect(makeIsReal(constraint)(validation)).toEqual(validation)
})

test("[makeIsReal] returns error when value is not a real number", () => {
	const validation: Validation & RealNumberValue = {
		datatype: "real",
		// @ts-expect-error override for testing purposes
		value: "7.7",
	}

	expect(makeIsReal(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_REAL,
				constraint,
			},
		],
	})
})
