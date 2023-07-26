import { Intl, Temporal } from "@js-temporal/polyfill"

export default function toPlainDateString(
	plainDate?: Temporal.PlainDate,
	plainDateLike?: Temporal.PlainDateLike
): string {
	const date = plainDate
		? plainDate
		: plainDateLike
		? Temporal.PlainDate.from(plainDateLike)
		: undefined

	return Intl.DateTimeFormat("fr-CA", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	}).format(date)
}
