import type { Maps, Records } from "../../../types/values"

import stringToRecord from "../stringToRecord"

export default function getRecord(
	record: Maps | Records | string,
	separator: string | RegExp = ",",
	keyValueSeparator: string | RegExp = ":",
): Records {
	if (typeof record === "string") {
		return stringToRecord(record, separator, keyValueSeparator)
	}

	return record instanceof Map
		? (Array.from(record as Iterable<string>).reduce((obj, [key, value]) => {
				obj[key] = value
				return obj
		  }, {} as Records) as Records)
		: record
}
