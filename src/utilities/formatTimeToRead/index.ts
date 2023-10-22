import type { DurationOptions } from "../../types"
import not from "../../utilities/not"

export default function formatTimeToRead(duration: DurationOptions): string {
	if (not(duration)) {
		return ""
	}

	const { minutes = 0, seconds = 0 } = duration

	if (minutes < 1) {
		return "Less than a minute"
	}

	if (seconds < 16) {
		return `${minutes < 2 ? "A" : minutes} minute${
			minutes > 1 ? "s" : ""
		} or so`
	}

	if (seconds < 45) {
		return `${minutes}-${minutes + 1} minutes`
	}

	return `Less than ${minutes + 1} minutes`
}
