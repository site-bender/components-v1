export default function makeMaskValue({
	pattern,
	segments = [],
	separator = "",
}: MakeMaskValueParameters): Formatter {
	return (value: string) => {
		const [, ...matches] = value.match(pattern) || []

		return matches
			.map((match, index) =>
				Object.keys(segments).includes(String(index))
					? match.replaceAll(/./g, segments[index])
					: match
			)
			.join(separator)
	}
}
