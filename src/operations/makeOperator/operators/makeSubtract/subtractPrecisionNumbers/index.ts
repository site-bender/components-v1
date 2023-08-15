import type {
	NumberValue,
	PrecisionNumberValue,
} from "../../../../../types/values"

import { TypeOfTruncation } from "../../../../../types/enums"
import type { Injector } from "../../../../../types/operations"
import truncate from "../../..//utilities/truncate"
import convertToPrecisionNumber from "../../../utilities/convertToPrecisionNumber"

export default function subtractPrecisionNumbers(
	minuend: Injector,
	subtrahend: Injector,
	decimalPlaces = 0,
	truncationType = TypeOfTruncation.ROUND,
): PrecisionNumberValue {
	const left = convertToPrecisionNumber(
		minuend() as NumberValue | number,
		decimalPlaces,
		truncationType,
	)
	const right = convertToPrecisionNumber(
		subtrahend() as NumberValue | number,
		decimalPlaces,
		truncationType,
	)

	return {
		datatype: "precision",
		decimalPlaces,
		value: truncate(left.value - right.value, truncationType, decimalPlaces),
	} as PrecisionNumberValue
}
