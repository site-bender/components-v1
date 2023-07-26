import { Intl, Temporal } from "@js-temporal/polyfill"

export default function toPlainYearMonthString(
	plainYearMonth: string | Temporal.PlainYearMonth | Temporal.PlainYearMonthLike
): string {
	const date = Temporal.PlainYearMonth.from(plainYearMonth)

	return Intl.DateTimeFormat("fr-CA", {
		calendar: "iso8601",
		year: "numeric",
		month: "2-digit",
	}).format(date)
}
