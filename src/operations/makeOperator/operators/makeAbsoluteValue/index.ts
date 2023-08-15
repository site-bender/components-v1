import type {
	AbsoluteValueOperation,
	Injector,
	Operation,
} from "../../../../types/operations"

import type { NumberValue } from "../../../../types/values"
import makeOperator from "../.."
import calculateAbsoluteValue from "./calculateAbsoluteValue"

export default function makeAbsoluteValue(
	operation: AbsoluteValueOperation,
): Injector {
	const { operand } = operation

	const value = typeof operand === "object" && "operatorType" in operand
		? makeOperator(operand as Operation)
		: () => operand

	return function absoluteValue() {
		return calculateAbsoluteValue(value() as NumberValue | number)
	} as Injector
}
