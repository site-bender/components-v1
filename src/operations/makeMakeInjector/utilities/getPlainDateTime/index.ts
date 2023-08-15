import { Temporal } from "@js-temporal/polyfill"

export default function getPlainDateTime(
	d: Temporal.PlainDateTime | string | Date,
): Temporal.PlainDateTime {
	if (d instanceof Temporal.PlainDateTime) {
		return d
	}

	const dateTime =
		(d instanceof Date && Temporal.PlainDateTime.from(d.toISOString())) ||
		Temporal.PlainDateTime.from(d as string)

	return dateTime
}
