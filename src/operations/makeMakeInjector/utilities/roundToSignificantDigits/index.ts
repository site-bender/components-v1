export default function roundToSignificantDigits(
	num: number,
	length = 0,
): number {
	const multiplier = Math.pow(10, length)

	return Math.round(num * multiplier) / multiplier
}
