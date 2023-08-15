export default function isDisjoint(
	set1: Set<unknown>,
	set2: Set<unknown>,
): boolean {
	return set1.size > set2.size
		? Array.from(set2).reduce(
			(out: boolean, item) => (set1.has(item) ? false : out),
			true,
		)
		: Array.from(set1).reduce(
			(out: boolean, item) => (set2.has(item) ? false : out),
			true,
		)
}
