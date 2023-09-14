export default function makeReplace({
	pattern,
	replaceWith = "",
	replaceOne,
}: MakeReplaceParameters): Formatter {
	const flag = replaceOne ? "" : "g"
	const matcher =
		typeof pattern === "string" ? new RegExp(pattern, flag) : pattern

	return (value: string) =>
		replaceOne
			? value.replace(matcher, replaceWith)
			: value.replaceAll(matcher, replaceWith)
}
