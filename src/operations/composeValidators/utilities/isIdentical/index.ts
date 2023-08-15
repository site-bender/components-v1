export default function isIdentical<T>(set1: Set<T>, set2: Set<T>): boolean {
	return (
		set1.size === set2.size &&
		Array.from(set1).reduce(
			(out: boolean, item: T) => (set2.has(item) ? out : false),
			true,
		)
	)
}
