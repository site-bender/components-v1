import { Temporal } from "@js-temporal/polyfill"

export default function getInstant(
	d: string | Date | Temporal.Instant,
): Temporal.Instant {
	if (d instanceof Temporal.Instant) {
		return d
	}

	return (
		(d instanceof Date && Temporal.Instant.from(d.toISOString())) ||
		Temporal.Instant.from(d as string)
	)
}
