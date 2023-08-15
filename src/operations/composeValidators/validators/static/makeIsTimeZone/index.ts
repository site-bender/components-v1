import type {
	TimeZoneTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import { Temporal } from "@js-temporal/polyfill"
import getTimeZone from "../../../utilities/getTimeZone"
import makeError from "../../../utilities/makeError"

// FIXME
export default function makeIsTimeZone(
	constraint: TimeZoneTypeConstraint,
): (validation: Validation) => Validation {
	return function isTimeZone(validation: Validation): Validation {
		const value = validation.value

		try {
			getTimeZone(value as Temporal.TimeZone | Date | string)

			return validation
		} catch (e) {
			return makeError(validation, constraint, (e as Error).toString())
		}
	}
}
