import {
	InstantTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import type { InstantValue } from "../../../../types/values"
import makeIsInstant from "."

const constraint: InstantTypeConstraint = {
	constraintType: TypeOfConstraint.IS_INSTANT,
}

test("[makeIsInstant] returns correct validation when value is a date", () => {
	const validation: Validation = {
		datatype: "instant",
		value: "2000-01-01",
	}

	expect(makeIsInstant(constraint)(validation)).toEqual(validation)
})

test("[makeIsInstant] returns error when value is not a date", () => {
	const validation: Validation & InstantValue = {
		datatype: "instant",
		// @ts-expect-error override for testing purposes
		value: 666,
	}

	expect(makeIsInstant(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_INSTANT,
				constraint,
				errorMessage: "RangeError: invalid ISO 8601 string: 666",
			},
		],
	})
})
