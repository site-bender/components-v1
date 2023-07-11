import TIME_ZONES from "./timezones"

export default function getTimeZoneOptions(
	countries: Array<string> = [],
	selected?: string,
): string {
	return TIME_ZONES
		.filter(({ countryCode }) =>
			countries.length ? countries.includes(countryCode) : true
		).map(
			({ timeZone }) =>
				`<option value="${timeZone}"${
					selected === timeZone ? " selected" : ""
				}>${timeZone}</option>`,
		).join("\n")
}
