import not from "~utilities/not"
import type { DurationOptions } from "../../types"

export default function formatTimeToRead(duration: DurationOptions): string {
	if (not(duration)) {
		return ""
	}

	const { minutes = 0, seconds = 0 } = duration

	if (minutes < 1) {
		return `${seconds} seconds`
	}

	if (seconds < 16) {
		return `${minutes} minute${minutes > 1 ? "s" : ""}`
	}

	if (seconds < 45) {
		return `${minutes}-${minutes + 1} minutes`
	}

	return `${minutes + 1} minutes`
}
