import { Temporal } from "@js-temporal/polyfill"

export default function formatDuration(
	duration: string | Temporal.DurationLike,
): string {
	const d = Temporal.Duration.from(duration)

	return [
		...(d.years ? [`${d.years} years`] : []),
		...(d.months ? [`${d.months} months`] : []),
		...(d.days ? [`${d.days} days`] : []),
		...(d.hours ? [`${d.hours} hours`] : []),
		...(d.minutes ? [`${d.minutes} minutes`] : []),
		...(d.seconds ? [`${d.seconds} seconds`] : []),
		...(d.milliseconds ? [`${d.milliseconds} milliseconds`] : []),
		...(d.microseconds ? [`${d.microseconds} microseconds`] : []),
		...(d.nanoseconds ? [`${d.nanoseconds} nanoseconds`] : []),
	].join(", ")
}
