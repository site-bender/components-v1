import { Temporal } from "@js-temporal/polyfill"
import getPlainDateTime from "."

test("[getPlainDateTime] returns correct Temporal PlainDateTime for string input", () => {
	expect(getPlainDateTime("2021-01-01T00:00:00Z")).toEqual(
		Temporal.PlainDateTime.from("2021-01-01T00:00:00Z"),
	)
})

test("[getPlainDateTime] returns correct Temporal PlainDateTime for Date input", () => {
	expect(getPlainDateTime(new Date("2021-01-01T00:00:00Z"))).toEqual(
		Temporal.PlainDateTime.from("2021-01-01"),
	)
})

test("[getPlainDateTime] returns correct Temporal PlainDate for Temporal PlainDate input", () => {
	expect(
		getPlainDateTime(Temporal.PlainDateTime.from("2021-01-01T00:00:00Z")),
	).toEqual(Temporal.PlainDateTime.from("2021-01-01T00:00:00Z"))
})

test("[getPlainDateTime] throws error for bad input", () => {
	expect(() => getPlainDateTime("2021-01-011T00:00:00Z")).toThrow(
		"invalid ISO 8601 string: 2021-01-011",
	)
})
