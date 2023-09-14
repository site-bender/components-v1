import {
	BeforeDateTimeConstraint,
	Validation,
} from "../../../../../types/constraints"

import { Temporal } from "@js-temporal/polyfill"
import beforeDateTime from "."
import type { TypeOfConstraint } from "../../../../types/enums"

const constraint: BeforeDateTimeConstraint = {
	constraintType: TypeOfConstraint.BEFORE_DATE_TIME,
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

test("[beforeDateTime] returns correct validation if date-time before constraint value", () => {
	const validation: Validation = {
		datatype: "plainDateTime",
		value: "2021-01-01T11:59:59",
	}

	expect(beforeDateTime(constraint)(validation)).toEqual(validation)
})

test("[beforeDateTime] returns error if date-time after constraint value", () => {
	const validation: Validation = {
		datatype: "plainDateTime",
		value: "2021-01-01T12:01:01",
	}

	expect(beforeDateTime(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.BEFORE_DATE_TIME,
			},
		],
		isInvalid: true,
	})
})

test("[beforeDateTime] returns error if bad date", () => {
	const validation: Validation = {
		datatype: "plainDateTime",
		value: "2001-09-31",
	}

	expect(beforeDateTime(constraint)(validation)).toEqual({
		...validation,
		errors: [
			{
				constraint,
				error: TypeOfConstraint.BEFORE_DATE_TIME,
				errorMessage: "RangeError: value out of range: 1 <= 31 <= 30",
			},
		],
		isInvalid: true,
	})
})
