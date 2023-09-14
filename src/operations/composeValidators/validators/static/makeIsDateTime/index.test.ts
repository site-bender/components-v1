import {
	DateTimeTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import makeIsDateTime from "."
import type { TypeOfConstraint } from "../../../../types/enums"
import type { PlainDateTimeValue } from "../../../../types/values"

const constraint: DateTimeTypeConstraint = {
	constraintType: TypeOfConstraint.IS_DATE_TIME,
}

test("[makeIsDateTime] returns correct validation when value is a date", () => {
	const validation: Validation = {
		datatype: "plainDateTime",
		value: "2000-01-01T00:00:00Z",
	}

	expect(makeIsDateTime(constraint)(validation)).toEqual(validation)
})

test("[makeIsDateTime] returns error when value is not a date", () => {
	const validation: Validation & PlainDateTimeValue = {
		datatype: "plainDateTime",
		// @ts-expect-error override for testing purposes
		value: 666,
	}

	expect(makeIsDateTime(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_DATE_TIME,
				constraint,
				errorMessage: "RangeError: invalid ISO 8601 string: 666",
			},
		],
	})
})
