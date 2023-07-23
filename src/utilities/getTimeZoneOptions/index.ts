import type { Options } from "../../types/form"
import TIME_ZONES from "./timezones"

export default function getTimeZoneOptions(
	countries: Array<string> | null | undefined = [],
): Options {
	return TIME_ZONES.filter(({ countryCode }) =>
		(countries as Array<string>).length
			? (countries as Array<string>).includes(countryCode)
			: true
	)
		.map(
			({ timeZone }) => ({
				label: timeZone,
				value: timeZone,
			}),
		)
}
