import type {
	FractionValue,
	NonFractionValue,
	NumberValue,
} from "../../../../../types/values"

export default function doNegation(value: NumberValue | number): NumberValue {
	if (typeof value === "number") {
		return Number.isInteger(value)
			? {
					datatype: "integer",
					value: value * -1,
			  }
			: {
					datatype: "real",
					value: value * -1,
			  }
	}

	if ((value as NumberValue).datatype === "fraction") {
		return {
			datatype: "fraction",
			value: {
				denominator: (value as FractionValue).value.denominator * -1,
				numerator: (value as FractionValue).value.numerator,
			},
		}
	}

	return {
		...(value as NonFractionValue),
		value: (value as NonFractionValue).value * -1,
	}
}
