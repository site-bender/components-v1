import type { Option, Options } from "../../types/form"

import not from "../not"
import toUpperCase from "../toUpperCase"
import TIME_ZONES from "./timeZones"

export default function filterTimeZoneOptions(
	exclude: Array<string | number>,
	include: Array<string | number>
): Options {
	const exc = exclude.length && toUpperCase(exclude)
	const inc = include.length && toUpperCase(include)

	return TIME_ZONES.map((region) => {
		if (
			inc &&
			inc.includes(region.label.toLocaleUpperCase()) &&
			not(exc && exc.includes(region.label.toLocaleUpperCase()))
		) {
			return region
		}

		const options = region.options?.filter(({ alpha2, alpha3, numeric }) => {
			return inc || exc
				? inc &&
						(inc?.includes(alpha2 as string) ||
							inc?.includes(alpha3 as string) ||
							inc?.includes(numeric as string)) &&
						not(
							exc &&
								(exc?.includes(alpha2 as string) ||
									exc?.includes(alpha3 as string) ||
									exc?.includes(numeric as string))
						)
				: true
		})

		return options?.length
			? {
					...region,
					options,
			  }
			: ({} as Option)
	}).filter((item) => "label" in item)
}
