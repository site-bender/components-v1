import { Temporal } from "@js-temporal/polyfill"
import getZonedDateTime from "."

test("[getZonedDateTime] returns correct Temporal ZonedDateTime for string input", () => {
	expect(getZonedDateTime("2021-01-01T00:00:00Z")).toEqual(
		Temporal.ZonedDateTime.from("2021-01-01T00:00:00Z"),
	)
})

test("[getZonedDateTime] returns correct Temporal ZonedDateTime for Date input", () => {
	expect(getZonedDateTime(new Date("2021-01-01T00:00:00Z"))).toEqual(
		Temporal.ZonedDateTime.from("2021-01-01"),
	)
})

test("[getZonedDateTime] returns correct Temporal PlainDate for Temporal PlainDate input", () => {
	expect(
		getZonedDateTime(Temporal.ZonedDateTime.from("2021-01-01T00:00:00Z")),
	).toEqual(Temporal.ZonedDateTime.from("2021-01-01T00:00:00Z"))
})

test("[getZonedDateTime] throws error for bad input", () => {
	expect(() => getZonedDateTime("2021-01-011T00:00:00Z")).toThrow(
		"invalid ISO 8601 string: 2021-01-011",
	)
})
