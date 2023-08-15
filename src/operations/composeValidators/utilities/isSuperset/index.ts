export default function isSuperset(
	superset: Set<unknown>,
	subset: Set<unknown>,
): boolean {
	return (
		superset.size > subset.size &&
		Array.from(subset).reduce(
			(out: boolean, item) => (superset.has(item) ? out : false),
			true,
		)
	)
}
