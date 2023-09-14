import type {
	Validation,
	YearMonthConstraint,
} from "../../../../types/constraints"

import makeIsYearMonth from "."
import type { TypeOfConstraint } from "../../../../types/enums"
import type { YearMonthValue } from "../../../../types/values"

const constraint: YearMonthConstraint = {
	constraintType: TypeOfConstraint.IS_YEAR_MONTH,
}

test("[makeIsYearMonth] returns correct validation when value is a date", () => {
	const validation: Validation = {
		datatype: "yearMonth",
		value: "2000-01",
	}

	expect(makeIsYearMonth(constraint)(validation)).toEqual(validation)
})

test("[makeIsYearMonth] returns error when value is not a date", () => {
	const validation: Validation & YearMonthValue = {
		datatype: "yearMonth",
		// @ts-expect-error override for testing purposes
		value: 666,
	}

	expect(makeIsYearMonth(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_YEAR_MONTH,
				constraint,
				errorMessage: "RangeError: invalid ISO 8601 string: 666",
			},
		],
	})
})
