export default function isOverlapping(
	set1: Set<unknown>,
	set2: Set<unknown>,
): boolean {
	const commons = Array.from(set1).filter((item) => set2.has(item))

	return Boolean(
		commons.length && commons.length < set2.size && commons.length < set1.size,
	)
}
