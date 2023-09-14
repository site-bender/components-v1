import type {
	SupersetConstraint,
	Validation,
} from "../../../../../types/constraints"
import type { Arrays, SetValue, Sets } from "../../../../types/values"

import makeOperator from "../../../../makeOperator"
import type { Operation } from "../../../../types/operations"
import convertToSet from "../../../utilities/convertToSet"
import isSuperset from "../../../utilities/isSuperset"
import makeError from "../../../utilities/makeError"

export default function makeSuperset(
	constraint: SupersetConstraint,
): (validation: Validation) => Validation {
	const { operand } = constraint

	const injector =
		typeof operand === "object" && "operatorType" in operand
			? makeOperator(operand as Operation)
			: () => operand

	return function superset(validation: Validation): Validation {
		const injected = injector()

		return isSuperset(
			convertToSet(validation.value as string | SetValue | Sets | Arrays),
			convertToSet(injected as string | SetValue | Sets | Arrays),
		)
			? validation
			: makeError(validation, constraint)
	}
}
