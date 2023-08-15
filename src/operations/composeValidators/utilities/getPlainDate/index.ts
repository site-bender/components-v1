import { Temporal } from "@js-temporal/polyfill"

export default function getPlainDate(
	d: string | Date | Temporal.PlainDate,
): Temporal.PlainDate {
	if (d instanceof Temporal.PlainDate) {
		return d
	}

	return (
		(d instanceof Date && Temporal.PlainDate.from(d.toISOString())) ||
		Temporal.PlainDate.from(d as string)
	)
}
