import {
	AfterDateTimeConstraint,
	Validation,
} from "../../../../../types/constraints"

import { Temporal } from "@js-temporal/polyfill"
import afterDateTime from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: AfterDateTimeConstraint = {
	constraintType: TypeOfConstraint.AFTER_DATE_TIME,
	operand: {
		datatype: "plainDateTime",
		value: Temporal.PlainDateTime.from({
			year: 2021,
			month: 1,
			day: 1,
			hour: 12,
		}),
	},
}

test("[afterDateTime] returns correct validation if date-time after constraint value", () => {
	const validation: Validation = {
		datatype: "plainDateTime",
		value: "2021-01-01T12:01:01",
	}

	expect(afterDateTime(constraint)(validation)).toEqual(validation)
})

test("[afterDateTime] returns error if date-time before constraint value", () => {
	const validation: Validation = {
		datatype: "plainDateTime",
		value: "2021-01-01T11:59:59",
	}

	expect(afterDateTime(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.AFTER_DATE_TIME,
			},
		],
		isInvalid: true,
	})
})

test("[afterDateTime] returns error if bad date", () => {
	const validation: Validation = {
		datatype: "plainDateTime",
		value: "2001-09-31",
	}

	expect(afterDateTime(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.AFTER_DATE_TIME,
				errorMessage: "RangeError: value out of range: 1 <= 31 <= 30",
			},
		],
		isInvalid: true,
	})
})
