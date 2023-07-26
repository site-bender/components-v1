import { Intl, Temporal } from "@js-temporal/polyfill"

export default function getMonths(
	calendar: string,
	locales: Array<string>,
	format: "2-digit" | "long" | "numeric" | "short",
	filter?: Array<string | number> | null
) {
	const cal = Temporal.Calendar.from(calendar)
	const d = Temporal.Now.plainDate(cal)
	const formatter = new Intl.DateTimeFormat(locales, {
		calendar,
		month: format,
	})
	const { day, year } = d

	const options = new Array(d.monthsInYear).fill(null).map((_, i) => {
		const month = i + 1

		return {
			label: formatter.format(cal.dateFromFields({ year, month, day })),
			value: month,
		}
	})

	return filter
		? options.filter(({ value }) => filter.includes(value))
		: options
}
