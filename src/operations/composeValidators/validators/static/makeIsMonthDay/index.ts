import type {
	MonthDayConstraint,
	Validation,
} from "../../../../../types/constraints"

import { Temporal } from "@js-temporal/polyfill"
import getMonthDay from "../../../utilities/getMonthDay"
import makeError from "../../../utilities/makeError"

// FIXME
export default function makeIsMonthDay(
	constraint: MonthDayConstraint,
): (validation: Validation) => Validation {
	return function isMonthDay(validation: Validation): Validation {
		const value = validation.value

		try {
			getMonthDay(value as string | Temporal.PlainMonthDay | Date)

			return validation
		} catch (e) {
			return makeError(validation, constraint, (e as Error).toString())
		}
	}
}
