import type {
	Injector,
	IsOddOperation,
	Operation,
} from "../../types/operations"

import type { IntegerValue } from "../../types/values"
import makeOperator from "../"
import checkIsOdd from "./checkIsOdd"

export default function makeIsOdd(operation: IsOddOperation): Injector {
	const { operand } = operation as IsOddOperation

	const value = typeof operand === "object" && "operatorType" in operand
		? makeOperator(operand as Operation)
		: () => operand

	return function isOdd() {
		return checkIsOdd(value() as IntegerValue | number)
	}
}
