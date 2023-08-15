import type {
	InstantTypeConstraint,
	Validation,
} from "../../../../../types/constraints"

import { Temporal } from "@js-temporal/polyfill"
import getInstant from "../../../utilities/getInstant"
import makeError from "../../../utilities/makeError"

// FIXME
export default function makeIsInstant(
	constraint: InstantTypeConstraint,
): (validation: Validation) => Validation {
	return function isInstant(validation: Validation): Validation {
		const value = validation.value

		try {
			getInstant(value as Temporal.Instant | Date | string)

			return validation
		} catch (e) {
			return makeError(validation, constraint, (e as Error).toString())
		}
	}
}
