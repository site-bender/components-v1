import type {
	BeforeDateTimeConstraint,
	Validation,
} from "../../../../../types/constraints"

import { Temporal } from "@js-temporal/polyfill"
import type { Operation } from "../../../../../types/operations"
import makeOperator from "../../../../makeOperator"
import getPlainDateTime from "../../../utilities/getPlainDateTime"
import makeError from "../../../utilities/makeError"

export default function makeBeforeDateTime(
	constraint: BeforeDateTimeConstraint,
): (validation: Validation) => Validation {
	const { operand } = constraint
	const injector = typeof operand === "object" && "operatorType" in operand
		? makeOperator(operand as Operation)
		: () => operand

	return function beforeDateTime(validation: Validation): Validation {
		const injected = injector()
		const testValue = typeof injected === "object" && "value" in injected
			? injected.value
			: injected

		try {
			const testDateTime = getPlainDateTime(
				testValue as string | Temporal.PlainDateTime | Date,
			)
			const dateToTest = getPlainDateTime(
				validation.value as string | Temporal.PlainDateTime | Date,
			)

			return Temporal.PlainDateTime.compare(dateToTest, testDateTime) < 0
				? validation
				: makeError(validation, constraint)
		} catch (e) {
			return makeError(validation, constraint, e.toString())
		}
	}
}
