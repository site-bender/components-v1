import type { NumberValue, RealNumberValue } from "../../../../../types/values"

import type { Injector } from "../../../../../types/operations"
import convertToRealNumber from "../../../utilities/convertToRealNumber"

export default function subtractRealNumbers(
	minuend: Injector,
	subtrahend: Injector,
): RealNumberValue {
	const left = convertToRealNumber(minuend() as NumberValue | number)
	const right = convertToRealNumber(subtrahend() as NumberValue | number)

	return {
		datatype: "real",
		value: left.value - right.value,
	} as RealNumberValue
}
