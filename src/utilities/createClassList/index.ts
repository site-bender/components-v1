export default function createClassList(
	...args: Array<string | Record<string, boolean> | Iterable<string>>
): Array<string> {
	return args.flatMap((arg) => {
		if (typeof arg === "string" || Array.isArray(arg)) {
			return arg
		}

		return Object.entries(arg).filter(([_, v]) => v).map(([k]) => k)
	})
}
