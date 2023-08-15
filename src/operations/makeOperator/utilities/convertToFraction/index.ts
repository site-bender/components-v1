import type {
	FractionValue,
	NumberValue,
	RealNumberValue,
} from "../../../../types/values"

import { TypeOfTruncation } from "../../../../types/enums"
import truncate from "../truncate"

export default function convertToFraction(
	value: NumberValue | number,
	decimalPlaces = 0,
	truncationType = TypeOfTruncation.ROUND,
): FractionValue {
	if (typeof value === "object" && value.datatype === "fraction") {
		return value
	}

	const exponent: number = typeof value === "object"
		? (value as RealNumberValue).decimalPlaces || 0
		: decimalPlaces
	const multiplier = Math.pow(10, exponent)
	const finalValue = typeof value === "number" ? value : value.value

	return {
		datatype: "fraction",
		value: {
			denominator: multiplier,
			numerator: truncate(finalValue * multiplier, truncationType) as number,
		},
	}
}
