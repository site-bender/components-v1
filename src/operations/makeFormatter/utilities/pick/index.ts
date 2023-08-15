export default function pick<T extends string | number | symbol, U>(
	list: Array<T> = [],
	obj: Record<T, U> = {} as Record<T, U>,
): Record<T, U> {
	return list.reduce(
		(acc, key) => ({
			...acc,
			[key]: obj[key],
		}),
		{} as Record<T, U>,
	)
}
