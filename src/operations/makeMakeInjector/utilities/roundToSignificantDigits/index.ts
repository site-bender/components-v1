export default function roundToSignificantDigits(
	num: number,
	length = 0,
): number {
	const multiplier = 10 ** length

	return Math.round(num * multiplier) / multiplier
}
