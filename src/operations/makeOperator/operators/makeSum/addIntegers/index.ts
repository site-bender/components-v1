import type { IntegerValue, NumberValue } from "../../../../../types/values"

import { TypeOfTruncation } from "../../../../../types/enums"
import type { Injector } from "../../../../../types/operations"
import convertToInteger from "../../../utilities/convertToInteger"

export default function addIntegers(
	addends: Array<Injector>,
	truncationType = TypeOfTruncation.TRUNCATE,
): IntegerValue {
	return addends.reduce(
		(acc: IntegerValue, addend: Injector) => {
			const value = convertToInteger(
				addend() as NumberValue | number,
				truncationType,
			) as IntegerValue

			return {
				datatype: "integer",
				value: acc.value + value.value,
			} as IntegerValue
		},
		{
			datatype: "integer",
			value: 0,
		} as IntegerValue,
	) as IntegerValue
}
