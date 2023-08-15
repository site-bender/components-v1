import type {
	Validation,
	ZonedDateTimeTypeConstraint,
} from "../../../../../types/constraints"

import { Temporal } from "@js-temporal/polyfill"
import getZonedDateTime from "../../../../makeMakeInjector/utilities/getZonedDateTime"
import makeError from "../../../utilities/makeError"

export default function makeIsZonedDateTime(
	constraint: ZonedDateTimeTypeConstraint,
): (validation: Validation) => Validation {
	return function isZonedDateTime(validation: Validation): Validation {
		const value = validation.value

		try {
			getZonedDateTime(value as string | Temporal.ZonedDateTime | Date)

			return validation
		} catch (e) {
			return makeError(validation, constraint, (e as Error).toString())
		}
	}
}
