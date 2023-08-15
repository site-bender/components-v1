import { Temporal } from "@js-temporal/polyfill"
import getPlainDate from "."

test("[getPlainDate] returns correct Temporal PlainDate for string input", () => {
	expect(getPlainDate("2021-01-01")).toEqual(
		Temporal.PlainDate.from("2021-01-01"),
	)
})

test("[getPlainDate] returns correct Temporal PlainDate for Date input", () => {
	expect(getPlainDate(new Date("2021-01-01"))).toEqual(
		Temporal.PlainDate.from("2021-01-01"),
	)
})

test("[getPlainDate] returns correct Temporal PlainDate for Temporal PlainDate input", () => {
	expect(getPlainDate(Temporal.PlainDate.from("2021-01-01"))).toEqual(
		Temporal.PlainDate.from("2021-01-01"),
	)
})

test("[getPlainDate] throws error for bad input", () => {
	expect(() => getPlainDate("2021-01-011")).toThrow(
		"invalid ISO 8601 string: 2021-01-011",
	)
})
