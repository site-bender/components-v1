import type { FractionValue } from "../../../../types/values"
import not from "../../../../utilities/not"

export default function compareFractions(
	left: FractionValue,
	right: FractionValue,
): number {
	if (
		not(Number.isInteger(left.value?.numerator)) ||
		not(Number.isInteger(left.value?.denominator))
	) {
		throw new Error(`${JSON.stringify(left.value)} is not a fraction`)
	}

	if (
		not(Number.isInteger(right.value?.numerator)) ||
		not(Number.isInteger(right.value?.denominator))
	) {
		throw new Error(`${JSON.stringify(right.value)} is not a fraction`)
	}

	const diff = left.value?.numerator * right.value?.denominator -
		right.value?.numerator * left.value?.denominator

	return diff === 0 ? 0 : Math.round(diff / Math.abs(diff))
}
