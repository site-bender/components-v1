import { Temporal } from "@js-temporal/polyfill"

export default function getCalendar(
	d: Temporal.Calendar | string,
): Temporal.Calendar {
	if (d instanceof Temporal.Calendar) {
		return d
	}

	return Temporal.Calendar.from(d)
}
