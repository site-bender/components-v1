import { Temporal } from "@js-temporal/polyfill"

export default function getZonedDateTime(
	d: string | Date | Temporal.ZonedDateTime,
): Temporal.ZonedDateTime {
	if (d instanceof Temporal.ZonedDateTime) {
		return d
	}

	return (
		(d instanceof Date && Temporal.ZonedDateTime.from(d.toISOString())) ||
		Temporal.ZonedDateTime.from(d as string)
	)
}
