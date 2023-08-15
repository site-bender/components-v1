import type { Temporal } from "@js-temporal/polyfill"
import getPlainDateTime from "../getPlainDateTime"

export default function formatDateTime(
	dateTime: Temporal.PlainDateTime | Date | string,
): string {
	return getPlainDateTime(dateTime).toLocaleString("en-NZ", {
		day: "numeric",
		month: "long",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	})
}
