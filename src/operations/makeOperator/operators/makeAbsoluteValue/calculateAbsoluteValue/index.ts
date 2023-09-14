import type {
	FractionValue,
	NonFractionValue,
	NumberValue,
} from "../../../../../types/values"

export default function calculateAbsoluteValue(
	value: NumberValue | number,
): NumberValue {
	if (typeof value === "number") {
		return Number.isInteger(value)
			? {
					datatype: "integer",
					value: Math.abs(value),
			  }
			: {
					datatype: "real",
					value: Math.abs(value),
			  }
	}

	if ((value as NumberValue).datatype === "fraction") {
		return {
			datatype: "fraction",
			value: {
				denominator: Math.abs((value as FractionValue).value.denominator),
				numerator: Math.abs((value as FractionValue).value.numerator),
			},
		}
	}

	return {
		...(value as NonFractionValue),
		value: Math.abs((value as NonFractionValue).value),
	}
}
