import type {
	EqualToNConstraint,
	Validation,
} from "../../../../../types/constraints"
import type { Fraction, NumberValue } from "../../../../../types/values"

import type { Operation } from "../../../../../types/operations"
import makeOperator from "../../../../makeOperator"
import makeError from "../../../utilities/makeError"

export default function makeEqualToN(
	constraint: EqualToNConstraint,
): (validation: Validation) => Validation {
	const { operand } = constraint
	const injector = typeof operand === "object" && "operatorType" in operand
		? makeOperator(operand as Operation)
		: () => operand

	return function equalToN(validation: Validation): Validation {
		const injected = injector() as NumberValue | number
		const testValue: number = typeof injected === "number"
			? injected
			: typeof injected.value === "number"
			? injected.value
			: (injected.value as Fraction).numerator /
				(injected.value as Fraction).denominator
		const value: number = typeof validation.value === "number"
			? validation.value
			: (validation.value as Fraction).numerator /
				(validation.value as Fraction).denominator

		return value === testValue ? validation : makeError(validation, constraint)
	}
}
