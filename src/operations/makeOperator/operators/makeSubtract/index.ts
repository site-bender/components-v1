import type { TypeOfReturn, TypeOfTruncation } from "../../types/enums"
import type {
	Injector,
	Operation,
	SubtractOperation,
} from "../../types/operations"

import type { NumberValue } from "../../types/values"
import makeOperator from ".."
import subtractFractions from "./subtractFractions"
import subtractIntegers from "./subtractIntegers"
import subtractPrecisionNumbers from "./subtractPrecisionNumbers"
import subtractRealNumbers from "./subtractRealNumbers"

export type Subtractor = (
	minuend: Injector,
	subtrahend: Injector,
	decimalPlaces?: number,
	truncationType?: TypeOfTruncation,
) => NumberValue

const subtractors = {
	[TypeOfReturn.FRACTION]: subtractFractions,
	[TypeOfReturn.INTEGER]: subtractIntegers,
	[TypeOfReturn.PRECISION_NUMBER]: subtractPrecisionNumbers,
	[TypeOfReturn.REAL_NUMBER]: subtractRealNumbers,
}

export default function makeSubtract(operation: SubtractOperation): Injector {
	const { decimalPlaces, minuend, subtrahend, returnType, truncationType } =
		operation as SubtractOperation

	const left = (minuend as Operation).operatorType
		? makeOperator(minuend as Operation)
		: () => minuend
	const right = (subtrahend as Operation).operatorType
		? makeOperator(subtrahend as Operation)
		: () => subtrahend

	return function subtract() {
		return (
			subtractors[returnType as keyof typeof subtractors] as Subtractor
		)?.(left as Injector, right as Injector, decimalPlaces, truncationType)
	}
}
