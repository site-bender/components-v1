import { Temporal } from "@js-temporal/polyfill"
import type { DurationOptions } from "../../../types/values"

export default function getDuration(
	d: Temporal.Duration | DurationOptions | string,
): Temporal.Duration {
	if (d instanceof Temporal.Duration) {
		return d
	}

	return Temporal.Duration.from(d)
}
