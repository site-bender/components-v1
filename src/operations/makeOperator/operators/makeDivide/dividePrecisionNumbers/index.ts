import type {
	NumberValue,
	PrecisionNumberValue,
} from "../../../../../types/values"

import { TypeOfTruncation } from "../../../../../types/enums"
import type { Injector } from "../../../../../types/operations"
import convertToPrecisionNumber from "../../../utilities/convertToPrecisionNumber"
import truncate from "../../../utilities/truncate"

export default function dividePrecisionNumbers(
	dividend: Injector,
	divisor: Injector,
	decimalPlaces = 0,
	truncationType = TypeOfTruncation.ROUND,
): PrecisionNumberValue {
	const left = convertToPrecisionNumber(
		dividend() as NumberValue | number,
		decimalPlaces,
		truncationType,
	)
	const right = convertToPrecisionNumber(
		divisor() as NumberValue | number,
		decimalPlaces,
		truncationType,
	)

	return {
		datatype: "precision",
		decimalPlaces,
		value: truncate(left.value / right.value, truncationType, decimalPlaces),
	} as PrecisionNumberValue
}
