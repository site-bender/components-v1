import type { DurationOptions } from "@sitebender/components/src/types/values"
import not from "~utilities/not"

export default function fromISODuration(duration: string): DurationOptions {
	if (not(duration)) {
		return {}
	}

	const [date, time] = duration.slice(1).split("T")
	const years = parseInt(date?.match(/([0-9]+)Y/)?.[1] || "0")
	const months = parseInt(date?.match(/([0-9]+)M/)?.[1] || "0")
	const days = parseInt(date?.match(/([0-9]+)D/)?.[1] || "0")
	const hours = parseInt(time?.match(/([0-9]+)H/)?.[1] || "0")
	const minutes = parseInt(time?.match(/([0-9]+)M/)?.[1] || "0")
	const seconds = parseInt(time?.match(/([0-9]+)S/)?.[1] || "0")

	return {
		...(years ? { years } : {}),
		...(months ? { months } : {}),
		...(days ? { days } : {}),
		...(hours ? { hours } : {}),
		...(minutes ? { minutes } : {}),
		...(seconds ? { seconds } : {}),
	}
}
