import type {
	MonthDayConstraint,
	Validation,
} from "../../../../types/constraints"

import type { TypeOfConstraint } from "../../../../types/enums"
import type { MonthDayValue } from "../../../../types/values"
import makeIsMonthDay from "."

const constraint: MonthDayConstraint = {
	constraintType: TypeOfConstraint.IS_MONTH_DAY,
}

test("[makeIsMonthDay] returns correct validation when value is a date", () => {
	const validation: Validation = {
		datatype: "plainMonthDay",
		value: "2000-01-01",
	}

	expect(makeIsMonthDay(constraint)(validation)).toEqual(validation)
})

test("[makeIsMonthDay] returns error when value is not a date", () => {
	const validation: Validation & MonthDayValue = {
		datatype: "monthDay",
		// @ts-expect-error override for testing purposes
		value: 666,
	}

	expect(makeIsMonthDay(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_MONTH_DAY,
				constraint,
				errorMessage: "RangeError: invalid ISO 8601 string: 666",
			},
		],
	})
})
