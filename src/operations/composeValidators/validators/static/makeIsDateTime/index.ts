import type {
	DateTimeTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import { Temporal } from "@js-temporal/polyfill"
import type { Value } from "../../../../types/values"
import getPlainDateTime from "../../../utilities/getPlainDateTime"
import makeError from "../../../utilities/makeError"

export default function makeIsDateTime(
	constraint: DateTimeTypeConstraint,
): (validation: Validation) => Validation {
	return function isDateTime(validation: Validation): Validation {
		const value = typeof validation?.value === "object" &&
				"value" in (validation.value as Value)
			? (validation.value as Value).value
			: validation.value

		try {
			getPlainDateTime(value as string | Temporal.PlainDateTime | Date)

			return validation
		} catch (e) {
			return makeError(validation, constraint, (e as Error).toString())
		}
	}
}
