import { Temporal } from "@js-temporal/polyfill"

// https://tc39.es/proposal-temporal/docs/duration.html
export default function formatDuration(duration: Temporal.Duration): string {
	const d = Temporal.Duration.from(duration)

	return [
		...(d.years ? [`${d.years} year${d.years === 1 ? "" : "s"}`] : []),
		...(d.months ? [`${d.months} month${d.months === 1 ? "" : "s"}`] : []),
		...(d.days ? [`${d.days} day${d.days === 1 ? "" : "s"}`] : []),
		...(d.hours ? [`${d.hours} hour${d.hours === 1 ? "" : "s"}`] : []),
		...(d.minutes ? [`${d.minutes} minute${d.minutes === 1 ? "" : "s"}`] : []),
		...(d.seconds ? [`${d.seconds} second${d.seconds === 1 ? "" : "s"}`] : []),
		...(d.milliseconds
			? [`${d.milliseconds} millisecond${d.milliseconds === 1 ? "" : "s"}`]
			: []),
		...(d.microseconds
			? [`${d.microseconds} microsecond${d.microseconds === 1 ? "" : "s"}`]
			: []),
		...(d.nanoseconds
			? [`${d.nanoseconds} nanosecond${d.nanoseconds === 1 ? "" : "s"}`]
			: []),
	].join(", ")
}
