import { Temporal } from "@js-temporal/polyfill"

export default function getZonedDateTime(
	d: Temporal.ZonedDateTime | string | Date,
	tz: Temporal.TimeZone | string = "UTC",
	calendar: Temporal.Calendar | string = "iso8601",
): Temporal.ZonedDateTime {
	if (d instanceof Temporal.ZonedDateTime) {
		return tz ? d.toInstant().toZonedDateTimeISO(tz) : d
	}

	const instant =
		d instanceof Date
			? Temporal.Instant.from(d.toISOString())
			: Temporal.Instant.from(d)

	return instant.toZonedDateTime({
		calendar: Temporal.Calendar.from(calendar),
		timeZone: Temporal.TimeZone.from(tz),
	})
}
