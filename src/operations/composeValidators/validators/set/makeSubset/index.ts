import type {
	SubsetConstraint,
	Validation,
} from "../../../../../types/constraints"
import type { Arrays, SetValue, Sets } from "../../../../types/values"

import makeOperator from "../../../../makeOperator"
import type { Operation } from "../../../../types/operations"
import convertToSet from "../../../utilities/convertToSet"
import isSuperset from "../../../utilities/isSuperset"
import makeError from "../../../utilities/makeError"

export default function makeSubset(
	constraint: SubsetConstraint,
): (validation: Validation) => Validation {
	const { operand } = constraint

	const injector =
		typeof operand === "object" && "operatorType" in operand
			? makeOperator(operand as Operation)
			: () => operand

	return function subset(validation: Validation): Validation {
		const injected = injector()

		return isSuperset(
			convertToSet(injected as string | SetValue | Sets | Arrays),
			convertToSet(validation.value as string | SetValue | Sets | Arrays),
		)
			? validation
			: makeError(validation, constraint)
	}
}
