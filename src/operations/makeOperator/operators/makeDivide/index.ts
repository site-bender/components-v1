import type {
	DivideOperation,
	Injector,
	Operation,
} from "../../../../types/operations"

import { TypeOfReturn } from "../../../../types/enums"
import type { TypeOfTruncation } from "../../../../types/enums"
import type { NumberValue } from "../../../../types/values"
import makeOperator from "./"
import divideFractions from "./divideFractions"
import divideIntegers from "./divideIntegers"
import dividePrecisionNumbers from "./dividePrecisionNumbers"
import divideRealNumbers from "./divideRealNumbers"

export type Divider = (
	dividend: Injector,
	divisor: Injector,
	decimalPlaces?: number,
	truncationType?: keyof typeof TypeOfTruncation,
) => NumberValue

const dividers = {
	[TypeOfReturn.FRACTION]: divideFractions,
	[TypeOfReturn.INTEGER]: divideIntegers,
	[TypeOfReturn.PRECISION_NUMBER]: dividePrecisionNumbers,
	[TypeOfReturn.REAL_NUMBER]: divideRealNumbers,
}

export default function makeDivide(operation: DivideOperation): Injector {
	const { decimalPlaces, dividend, divisor, returnType, truncationType } =
		operation as DivideOperation

	const left = (dividend as Operation).operatorType
		? makeOperator(dividend as Operation)
		: () => dividend
	const right = (divisor as Operation).operatorType
		? makeOperator(divisor as Operation)
		: () => divisor

	return function divide() {
		return (dividers[returnType as keyof typeof dividers] as Divider)?.(
			left as Injector,
			right as Injector,
			decimalPlaces,
			truncationType,
		)
	}
}
