export default function pick<T>(
	keys: Array<string>,
	object?: Record<string, T>,
): PickReturn<T> {
	function pickEm(object: Record<string, T>): Record<string, T> {
		return keys.reduce(
			(acc, key) => ({
				...acc,
				[key]: JSON.parse(JSON.stringify(object[key])),
			}),
			{},
		)
	}

	return object ? pickEm(object) : pickEm
}

export type PickReturn<T> =
	| ((arg: Record<string, T>) => Record<string, T>)
	| Record<string, T>
