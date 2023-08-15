import type {
	FractionValue,
	NonFractionValue,
	NumberValue,
} from "../../../../../types/values"

export default function getReciprocal(
	value: NumberValue | number,
): NumberValue {
	if (typeof value === "number") {
		return {
			datatype: "fraction",
			value: {
				denominator: value,
				numerator: 1,
			},
		}
	}

	if ((value as NumberValue).datatype === "fraction") {
		return {
			datatype: "fraction",
			value: {
				denominator: (value as FractionValue).value.numerator,
				numerator: (value as FractionValue).value.denominator,
			},
		}
	}

	return {
		datatype: "fraction",
		value: {
			denominator: (value as NonFractionValue).value,
			numerator: 1,
		},
	}
}
