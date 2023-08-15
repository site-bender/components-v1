import { Temporal } from "@js-temporal/polyfill"

export default function getPlainDateTime(
	d: string | Date | Temporal.PlainDateTime,
): Temporal.PlainDateTime {
	if (d instanceof Temporal.PlainDateTime) {
		return d
	}

	return (
		(d instanceof Date && Temporal.PlainDateTime.from(d.toISOString())) ||
		Temporal.PlainDateTime.from(d as string)
	)
}
