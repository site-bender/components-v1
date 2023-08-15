import type {
	ReversedListConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { ListValue } from "../../../../../types/values"
import makeOperator from "../../../../makeOperator"
import type { Operation } from "../../../../types/operations"
import makeError from "../../../utilities/makeError"

export default function makeIsReversedList(
	constraint: ReversedListConstraint,
): (validation: Validation) => Validation {
	const { operand, separator = "," } = constraint

	const injector = typeof operand === "object" && "operatorType" in operand
		? makeOperator(operand as Operation)
		: () => operand

	return function isReversedList(validation: Validation): Validation {
		const injected = injector()

		const list: Array<unknown> = Array.isArray(injected)
			? injected
			: injected.split(separator)
		const values: Array<typeof validation.value> | typeof validation.value =
			typeof validation.value === "string"
				? validation.value.split((validation as ListValue).separator || ",")
				: (validation.value as Array<unknown>)

		const test = (values as Array<unknown>)
			.reverse()
			.reduce(
				(ordered: number, value: unknown) =>
					list.indexOf(value) >= ordered ? list.indexOf(value) : Infinity,
				0,
			)

		return test < Infinity ? validation : makeError(validation, constraint)
	}
}
