import type { FractionValue, NumberValue } from "../../../../../types/values"

import { TypeOfTruncation } from "../../../../../types/enums"
import type { Injector } from "../../../../../types/operations"
import convertToFraction from "../../../utilities/convertToFraction"
import reduceToLowestForm from "../../../utilities/reduceToLowestForm"

export default function multiplyFractions(
	multiplicands: Array<Injector>,
	decimalPlaces = 0,
	truncationType = TypeOfTruncation.ROUND,
): FractionValue {
	return multiplicands.reduce<FractionValue>(
		(acc: FractionValue, multiplicand: Injector) => {
			const value = convertToFraction(
				multiplicand() as NumberValue | number,
				decimalPlaces,
				truncationType,
			) as FractionValue

			return reduceToLowestForm({
				datatype: "fraction",
				value: {
					denominator: acc.value.denominator * value.value.denominator,
					numerator: acc.value.numerator * value.value.numerator,
				},
			})
		},
		{
			datatype: "fraction",
			value: {
				denominator: 1,
				numerator: 1,
			},
		},
	)
}
