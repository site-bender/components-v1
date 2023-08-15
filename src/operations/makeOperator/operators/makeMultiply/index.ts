import type {
	Injector,
	MultiplyOperation,
	Operation,
} from "../../../../types/operations"

import { TypeOfReturn } from "../../../../types/enums"
import { TypeOfTruncation } from "../../../../types/enums"
import type { NumberValue } from "../../../../types/values"
import makeOperator from "../../../makeOperator"
import truncate from "../../utilities/truncate"
import multiplyFractions from "./multiplyFractions"
import multiplyIntegers from "./multiplyIntegers"
import multiplyPrecisionNumbers from "./multiplyPrecisionNumbers"
import multiplyRealNumbers from "./multiplyRealNumbers"

export type Multiplier = (
	multiplicands: Array<Injector>,
	decimalPlaces?: number,
	truncationType?: keyof typeof TypeOfTruncation,
) => NumberValue

const multipliers = {
	[TypeOfReturn.FRACTION]: multiplyFractions,
	[TypeOfReturn.INTEGER]: multiplyIntegers,
	[TypeOfReturn.PRECISION_NUMBER]: multiplyPrecisionNumbers,
	[TypeOfReturn.REAL_NUMBER]: multiplyRealNumbers,
}

export default function makeMultiply(operation: MultiplyOperation): Injector {
	const { decimalPlaces, returnType, truncationType } = operation

	const multiplicands: Array<Injector> = operation.operands.map<Injector>(
		(operand: Operation | NumberValue | number) => {
			if (typeof operand === "number") {
				return () => {
					if (typeof decimalPlaces === "number") {
						return {
							datatype: "precision",
							decimalPlaces,
							value: truncate(
								Number(operand),
								TypeOfTruncation.ROUND,
								decimalPlaces,
							) as number,
						}
					}

					if (Number.isInteger(operand)) {
						return {
							datatype: "integer",
							value: operand,
						}
					}

					return {
						datatype: "real",
						value: Number(operand),
					}
				}
			}

			if (typeof operand === "object" && "operatorType" in operand) {
				return makeOperator(operand as Operation)
			}

			return () => operand
		},
	)

	return function multiply() {
		return (
			multipliers[returnType as keyof typeof multipliers] as Multiplier
		)?.(multiplicands, decimalPlaces, truncationType)
	}
}
