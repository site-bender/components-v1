import type {
	MoreThanNConstraint,
	Validation,
} from "../../../../../types/constraints"

import type { Operation } from "../../../../../types/operations"
import type { NumberValue } from "../../../../../types/values"
import makeOperator from "../../../../makeOperator"
import getNumericValue from "../../../utilities/getNumericValue"
import makeError from "../../../utilities/makeError"

export default function makeMoreThanN(
	constraint: MoreThanNConstraint,
): (validation: Validation) => Promise<Validation> {
	const { operand } = constraint
	const injector = typeof operand === "object" && "operatorType" in operand
		? makeOperator(operand as Operation)
		: () => operand

	return async function moreThanN(validation: Validation): Promise<Validation> {
		const injected = await injector() as NumberValue | number
		const testValue = await getNumericValue(injected)
		const value = await getNumericValue(validation)

		return value > testValue ? validation : makeError(validation, constraint)
	}
}
