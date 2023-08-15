import type { IntegerValue, NumberValue } from "../../../../../types/values"

import { TypeOfTruncation } from "../../../../../types/enums"
import type { Injector } from "../../../../../types/operations"
import convertToInteger from "../../../utilities/convertToInteger"

export default function divideIntegers(
	dividend: Injector,
	divisor: Injector,
	truncationType = TypeOfTruncation.TRUNCATE,
): IntegerValue {
	const left = convertToInteger(
		dividend() as NumberValue | number,
		truncationType,
	)
	const right = convertToInteger(
		divisor() as NumberValue | number,
		truncationType,
	)

	return {
		datatype: "integer",
		value: Math.round(left.value / right.value),
	} as IntegerValue
}
