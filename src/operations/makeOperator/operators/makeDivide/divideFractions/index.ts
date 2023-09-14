import type { FractionValue, NumberValue } from "../../../../../types/values"

import { TypeOfTruncation } from "../../../../../types/enums"
import type { Injector } from "../../../../../types/operations"
import convertToFraction from "../../../utilities/convertToFraction"
import reduceToLowestForm from "../../../utilities/reduceToLowestForm"

export default function divideFractions(
	dividend: Injector,
	divisor: Injector,
	decimalPlaces = 0,
	truncationType = TypeOfTruncation.ROUND,
): FractionValue {
	const left = convertToFraction(
		dividend() as NumberValue | number,
		decimalPlaces,
		truncationType,
	)
	const right = convertToFraction(
		divisor() as NumberValue | number,
		decimalPlaces,
		truncationType,
	)

	return reduceToLowestForm({
		datatype: "fraction",
		value: {
			denominator:
				(left as FractionValue).value.denominator *
				(right as FractionValue).value.numerator,
			numerator:
				(left as FractionValue).value.numerator *
				(right as FractionValue).value.denominator,
		},
	})
}
