import type {
	LessThanNConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { Operation } from "../../../../../types/operations"
import type { NumberValue } from "../../../../../types/values"
import makeOperator from "../../../../makeOperator"
import getNumericValue from "../../../utilities/getNumericValue"
import makeError from "../../../utilities/makeError"

export default function makeLessThanN(
	constraint: LessThanNConstraint,
): (validation: Validation) => Promise<Validation> {
	const { operand } = constraint
	const injector =
		typeof operand === "object" && "operatorType" in operand
			? makeOperator(operand as Operation)
			: () => operand

	return async function lessThanN(validation: Validation): Promise<Validation> {
		const injected = injector() as NumberValue | number
		const testValue = await getNumericValue(injected)
		const value = await getNumericValue(validation)

		return value < testValue ? validation : makeError(validation, constraint)
	}
}
