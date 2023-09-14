import type { FractionValue, NumberValue } from "../../../../../types/values"

import { TypeOfTruncation } from "../../../../../types/enums"
import type { Injector } from "../../../../../types/operations"
import convertToFraction from "../../../utilities/convertToFraction"
import reduceToLowestForm from "../../../utilities/reduceToLowestForm"

export default function addFractions(
	addends: Array<Injector>,
	decimalPlaces = 0,
	truncationType = TypeOfTruncation.ROUND,
): FractionValue {
	return addends.reduce<FractionValue>(
		(acc: FractionValue, addend: Injector) => {
			const value = convertToFraction(
				addend() as NumberValue | number,
				decimalPlaces,
				truncationType,
			) as FractionValue

			return reduceToLowestForm({
				datatype: "fraction",
				value: {
					denominator: acc.value.denominator * value.value.denominator,
					numerator:
						acc.value.numerator * value.value.denominator +
						value.value.numerator * acc.value.denominator,
				},
			})
		},
		{
			datatype: "fraction",
			value: {
				denominator: 1,
				numerator: 0,
			},
		},
	)
}
