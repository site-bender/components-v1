import type { Arrays, Value } from "../../../../types/values"

import { TypeOfReturn } from "../../../../types/enums"
import type { InjectValueOperation } from "../../../../types/operations"
import getArray from "../getArray"
import getCalendar from "../getCalendar"
import getDuration from "../getDuration"
import getInstant from "../getInstant"
import getMap from "../getMap"
import getPlainDate from "../getPlainDate"
import getPlainDateTime from "../getPlainDateTime"
import getRecord from "../getRecord"
import getSet from "../getSet"
import getZonedDateTime from "../getZonedDateTime"
import roundToSignificantDigits from "../roundToSignificantDigits"

const falseValueMatcher = /^f|false|0$/i

export default function parseValue(
	value: string,
	operation: InjectValueOperation,
): Value {
	const { decimalPlaces, keyValueSeparator, returnType, separator } = operation

	switch (returnType) {
		case TypeOfReturn.INTEGER:
			return {
				datatype: "integer",
				value: parseInt(value, 10),
			}
		case TypeOfReturn.REAL_NUMBER:
			return {
				datatype: "real",
				value: typeof decimalPlaces === "number"
					? roundToSignificantDigits(parseFloat(value), decimalPlaces)
					: parseFloat(value),
				...(typeof decimalPlaces === "number"
					? { significantDigits: decimalPlaces }
					: {}),
			}
		case TypeOfReturn.PRECISION_NUMBER:
			return {
				datatype: "precision",
				value: typeof decimalPlaces === "number"
					? roundToSignificantDigits(parseFloat(value), decimalPlaces)
					: parseFloat(value),
				...(typeof decimalPlaces === "number"
					? { precision: decimalPlaces }
					: {}),
			}
		case TypeOfReturn.BOOLEAN:
			return {
				datatype: "boolean",
				value: falseValueMatcher.test(value) ? false : Boolean(value),
			}
		case TypeOfReturn.PLAIN_DATE:
			return {
				datatype: "plainDate",
				value: getPlainDate(value),
			}
		case TypeOfReturn.PLAIN_DATE_TIME:
			return {
				datatype: "plainDateTime",
				value: getPlainDateTime(value),
			}
		case TypeOfReturn.ZONED_DATE_TIME:
			return {
				datatype: "zonedDateTime",
				value: getZonedDateTime(value),
			}
		case TypeOfReturn.INSTANT:
			return {
				datatype: "instant",
				value: getInstant(value),
			}
		case TypeOfReturn.CALENDAR:
			return {
				datatype: "calendar",
				value: getCalendar(value),
			}
		case TypeOfReturn.DURATION:
			return {
				datatype: "duration",
				value: getDuration(value),
			}
		case TypeOfReturn.ARRAY:
			return {
				datatype: "array",
				value: getArray(value, separator) as Arrays,
				separator,
			}
		case TypeOfReturn.MAP:
			return {
				datatype: "map",
				value: getMap(value, separator, keyValueSeparator),
			}
		case TypeOfReturn.RECORD:
			return {
				datatype: "record",
				value: getRecord(value, separator, keyValueSeparator),
			}
		case TypeOfReturn.SET:
			return {
				datatype: "set",
				value: getSet(value, separator),
			}
		default:
			return {
				datatype: "string",
				value,
			}
	}
}
