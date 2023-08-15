import type { Temporal } from "@js-temporal/polyfill"
import getPlainDate from "../getPlainDate"

export default function formatDate(
	date: Temporal.PlainDate | Date | string,
): string {
	return getPlainDate(date).toLocaleString("en-NZ", {
		day: "numeric",
		month: "long",
		year: "numeric",
	})
}
