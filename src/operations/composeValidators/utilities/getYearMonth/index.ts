import { Temporal } from "@js-temporal/polyfill"

export default function getYearMonth(
	d: string | Date | Temporal.PlainYearMonth,
): Temporal.PlainYearMonth {
	if (d instanceof Temporal.PlainYearMonth) {
		return d
	}

	return (
		(d instanceof Date && Temporal.PlainYearMonth.from(d.toISOString())) ||
		Temporal.PlainYearMonth.from(d as string)
	)
}
