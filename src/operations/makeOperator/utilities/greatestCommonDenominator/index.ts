export default function greatestCommonDenominator(
	a: number,
	b: number,
): number {
	return b === 0 ? a : greatestCommonDenominator(b, a % b)
}
