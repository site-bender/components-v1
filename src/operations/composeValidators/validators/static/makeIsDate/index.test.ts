import type {
	DateTypeConstraint,
	Validation,
} from "../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import type { PlainDateValue } from "../../../../types/values"
import makeIsDate from "."

const constraint: DateTypeConstraint = {
	constraintType: TypeOfConstraint.IS_DATE,
}

test("[makeIsDate] returns correct validation when value is a date", () => {
	const validation: Validation = {
		datatype: "plainDate",
		value: "2000-01-01",
	}

	expect(makeIsDate(constraint)(validation)).toEqual(validation)
})

test("[makeIsDate] returns error when value is not a date", () => {
	const validation: Validation & PlainDateValue = {
		datatype: "plainDate",
		// @ts-expect-error override for testing purposes
		value: 666,
	}

	expect(makeIsDate(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_DATE,
				constraint,
				errorMessage: "RangeError: invalid ISO 8601 string: 666",
			},
		],
	})
})
