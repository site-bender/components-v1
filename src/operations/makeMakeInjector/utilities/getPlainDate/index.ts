import { Temporal } from "@js-temporal/polyfill"

export default function getPlainDate(
	d: Temporal.PlainDate | string | Date,
): Temporal.PlainDate {
	if (d instanceof Temporal.PlainDate) {
		return d
	}

	const date =
		(d instanceof Date && Temporal.PlainDate.from(d.toISOString())) ||
		Temporal.PlainDate.from(d as string)

	return date
}
