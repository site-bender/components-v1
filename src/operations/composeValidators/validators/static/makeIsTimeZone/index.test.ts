import {
	TimeZoneTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import makeIsTimeZone from "."
import type { TypeOfConstraint } from "../../../../types/enums"
import type { TimeZoneValue } from "../../../../types/values"

const constraint: TimeZoneTypeConstraint = {
	constraintType: TypeOfConstraint.IS_TIME_ZONE,
}

test("[makeIsTimeZone] returns correct validation when value is a date", () => {
	const validation: Validation = {
		datatype: "timeZone",
		value: "NZT",
	}

	expect(makeIsTimeZone(constraint)(validation)).toEqual(validation)
})

test("[makeIsTimeZone] returns error when value is not a date", () => {
	const validation: Validation & TimeZoneValue = {
		datatype: "timeZone",
		// @ts-expect-error override for testing purposes
		value: 666,
	}

	expect(makeIsTimeZone(constraint)(validation)).toEqual({
		...validation,
		isInvalid: true,
		errors: [
			{
				error: TypeOfConstraint.IS_TIME_ZONE,
				constraint,
				errorMessage: "RangeError: invalid ISO 8601 string: 666",
			},
		],
	})
})
