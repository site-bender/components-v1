import type {
	FractionValue,
	NonFractionValue,
	NumberValue,
	RealNumberValue,
} from "../../../../types/values"

export default function convertToRealNumber(
	value: NumberValue | number,
): RealNumberValue {
	if (typeof value === "number") {
		return {
			datatype: "real",
			value,
		}
	}

	if ((value as NumberValue).datatype === "fraction") {
		return {
			datatype: "real",
			value:
				(value as FractionValue).value.numerator /
				(value as FractionValue).value.denominator,
		}
	}

	return {
		datatype: "real",
		value: (value as NonFractionValue).value,
	}
}
