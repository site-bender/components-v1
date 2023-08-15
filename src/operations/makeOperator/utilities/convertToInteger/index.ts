import type {
	FractionValue,
	IntegerValue,
	NonFractionValue,
	NumberValue,
} from "../../../../types/values"

import { TypeOfTruncation } from "../../../../types/enums"
import truncate from "../truncate"

export default function convertToInteger(
	value: NumberValue | number,
	truncationType = TypeOfTruncation.TRUNCATE,
): IntegerValue {
	if (typeof value === "number") {
		return {
			datatype: "integer",
			value: Math.trunc(value),
		}
	}

	if ((value as NumberValue).datatype === "fraction") {
		return {
			datatype: "integer",
			value: truncate(
				(value as FractionValue).value.numerator /
					(value as FractionValue).value.denominator,
				truncationType,
			) as number,
		}
	}

	return {
		datatype: "integer",
		value: Math.trunc((value as NonFractionValue).value),
	}
}
