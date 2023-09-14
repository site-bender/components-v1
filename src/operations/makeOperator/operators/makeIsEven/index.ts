import type {
	Injector,
	IsEvenOperation,
	Operation,
} from "../../../../types/operations"

import type { IntegerValue } from "../../../../types/values"
import makeOperator from "./"
import checkIsEven from "./checkIsEven"

export default function makeIsEven(operation: IsEvenOperation): Injector {
	const { operand } = operation as IsEvenOperation

	const value =
		typeof operand === "object" && "operatorType" in operand
			? makeOperator(operand as Operation)
			: () => operand

	return function isEven() {
		return checkIsEven(value() as IntegerValue | number)
	}
}
