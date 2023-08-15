import type {
	FractionValue,
	NonFractionValue,
	NumberValue,
	PrecisionNumberValue,
} from "../../../../types/values"

import { TypeOfTruncation } from "../../../../types/enums"
import truncate from "../truncate"

export default function convertToPrecisionNumber(
	value: NumberValue | number,
	decimalPlaces = 0,
	truncationType = TypeOfTruncation.ROUND,
): PrecisionNumberValue {
	if (typeof value === "number") {
		return {
			datatype: "precision",
			precision: decimalPlaces,
			value: truncate(value, truncationType, decimalPlaces) as number,
		}
	}

	if ((value as NumberValue).datatype === "fraction") {
		return {
			datatype: "precision",
			precision: decimalPlaces,
			value: truncate(
				(value as FractionValue).value.numerator /
					(value as FractionValue).value.denominator,
				truncationType,
				decimalPlaces,
			) as number,
		}
	}

	return {
		datatype: "precision",
		precision: decimalPlaces,
		value: truncate(
			(value as NonFractionValue).value,
			truncationType,
			decimalPlaces,
		) as number,
	}
}
