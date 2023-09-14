import type {
	Injector,
	Operation,
	ReciprocalOperation,
} from "../../../../types/operations"

import type { NumberValue } from "../../../../types/values"
import makeOperator from "./"
import getReciprocal from "./getReciprocal"

export default function makeReciprocal(
	operation: ReciprocalOperation,
): Injector {
	const { operand } = operation as ReciprocalOperation

	const injector =
		typeof operand === "object" && "operatorType" in operand
			? makeOperator(operand as Operation)
			: () => operand

	return function reciprocal() {
		return getReciprocal(injector() as NumberValue | number)
	}
}
