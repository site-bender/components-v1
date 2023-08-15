import {
	DurationTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import type { DurationValue } from "../../../../types/values"
import makeIsDuration from "."

const constraint: DurationTypeConstraint = {
	constraintType: TypeOfConstraint.IS_DURATION,
}

test("[makeIsDuration] returns correct validation when value is a date", () => {
	const validation: Validation = {
		datatype: "duration",
		value: "2000-01-01",
	}

	expect(makeIsDuration(constraint)(validation)).toEqual(validation)
})

test("[makeIsDuration] returns error when value is not a date", () => {
	const validation: Validation & DurationValue = {
		datatype: "duration",
		// @ts-expect-error override for testing purposes
		value: 666,
	}

	expect(makeIsDuration(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_DURATION,
				constraint,
				errorMessage: "RangeError: invalid ISO 8601 string: 666",
			},
		],
	})
})
