import type {
	Injector,
	Operation,
	RemainderOperation,
} from "../../../../types/operations"

import type { NumberValue } from "../../../../types/values"
import makeOperator from "../../../makeOperator"
import convertToInteger from "../../utilities/convertToInteger"

export default function makeRemainder(operation: RemainderOperation): Injector {
	const { dividend, divisor } = operation as RemainderOperation

	const first = (dividend as Operation).operatorType
		? makeOperator(dividend as Operation)
		: () => dividend

	const second = (divisor as Operation).operatorType
		? makeOperator(divisor as Operation)
		: () => divisor

	return function remainder() {
		const left = convertToInteger(first() as NumberValue | number)
		const right = convertToInteger(second() as NumberValue | number)

		return {
			datatype: "integer",
			value: left.value % right.value,
		}
	}
}
