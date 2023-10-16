import unique from "../unique"

export default function createClassList(
	...args: Array<string | Record<string, boolean> | Iterable<string>>
): Array<string> {
	return args.flatMap((arg) => {
		if (typeof arg === "string" || Array.isArray(arg)) {
			return arg
		}

		return unique(
			Object.entries(arg)
				.filter(([, v]) => v)
				.map(([k]) => k),
		)
	})
}
