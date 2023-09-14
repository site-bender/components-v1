export default function makeInsert({
	pattern,
	insert = "-",
	flags = "",
}: MakeInsertParameters): Formatter {
	const matcher =
		typeof pattern === "string" ? new RegExp(pattern, flags) : pattern

	return (value: string) => {
		const [, ...matches] = value.match(matcher) || []

		return matches.join(insert)
	}
}
