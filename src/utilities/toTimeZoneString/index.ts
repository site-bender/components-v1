import { Temporal } from "@js-temporal/polyfill"

export default function toTimeZone(
	timeZone?: string | Temporal.TimeZone,
): string | undefined {
	if (typeof timeZone === "string") {
		return timeZone
	}

	if (timeZone instanceof Temporal.TimeZone) {
		return timeZone.toJSON()
	}

	return undefined
}
