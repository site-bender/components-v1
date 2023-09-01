import { TypeOfReturn, TypeOfTruncation } from "../../../../types/enums"
import type {
	Injector,
	Operation,
	SumOperation,
} from "../../../../types/operations"

import type { NumberValue } from "../../../../types/values"
import truncate from "../../utilities/truncate"
import makeOperator from "./"
import addFractions from "./addFractions"
import addIntegers from "./addIntegers"
import addPrecisionNumbers from "./addPrecisionNumbers"
import addRealNumbers from "./addRealNumbers"

export type Summer = (
	addends: Array<Injector>,
	decimalPlaces?: number,
	truncationType?: keyof typeof TypeOfTruncation,
) => NumberValue

const summers = {
	[TypeOfReturn.FRACTION]: addFractions,
	[TypeOfReturn.INTEGER]: addIntegers,
	[TypeOfReturn.PRECISION_NUMBER]: addPrecisionNumbers,
	[TypeOfReturn.REAL_NUMBER]: addRealNumbers,
}

export default function makeSum(operation: SumOperation): Injector {
	const { decimalPlaces, returnType, truncationType } =
		operation as SumOperation

	const addends: Array<Injector> = operation.operands.map<Injector>(
		(operand: Operation | NumberValue | number) => {
			if (typeof operand === "number") {
				return () =>
					typeof decimalPlaces === "number"
						? {
							datatype: "precision",
							decimalPlaces,
							value: truncate(operand, TypeOfTruncation.ROUND, decimalPlaces),
						}
						: Number.isInteger(operand)
						? {
							datatype: "integer",
							value: operand,
						}
						: {
							datatype: "real",
							value: operand,
						}
			}

			if (typeof operand === "object" && "operatorType" in operand) {
				return makeOperator(operand as Operation)
			}

			return () => operand
		},
	)

	return function sum() {
		return (summers[returnType as keyof typeof summers] as Summer)?.(
			addends,
			decimalPlaces,
			truncationType,
		)
	}
}
