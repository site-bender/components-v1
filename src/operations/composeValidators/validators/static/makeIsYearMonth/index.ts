import type {
	Validation,
	YearMonthConstraint,
} from "../../../../../types/constraints"

import { Temporal } from "@js-temporal/polyfill"
import getYearMonth from "../../../utilities/getYearMonth"
import makeError from "../../../utilities/makeError"

// FIXME
export default function makeIsYearMonth(
	constraint: YearMonthConstraint,
): (validation: Validation) => Validation {
	return function isYearMonth(validation: Validation): Validation {
		const value = validation.value

		try {
			getYearMonth(value as string | Temporal.PlainYearMonth | Date)

			return validation
		} catch (e) {
			return makeError(validation, constraint, (e as Error).toString())
		}
	}
}
