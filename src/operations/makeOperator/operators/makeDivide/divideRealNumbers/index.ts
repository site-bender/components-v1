import type { NumberValue, RealNumberValue } from "../../../../../types/values"

import type { Injector } from "../../../../../types/operations"
import convertToRealNumber from "../../../utilities/convertToRealNumber"

export default function divideRealNumbers(
	dividend: Injector,
	divisor: Injector,
): RealNumberValue {
	const left = convertToRealNumber(dividend() as NumberValue | number)
	const right = convertToRealNumber(divisor() as NumberValue | number)

	return {
		datatype: "real",
		value: left.value / right.value,
	} as RealNumberValue
}
