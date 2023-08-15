import type { PrecisionNumberValue } from "../../../../types/values"
import not from "../../../../utilities/not"

export default function comparePrecisionNumbers(
	left: PrecisionNumberValue,
	right: PrecisionNumberValue,
): number {
	if (
		not(Number.isFinite(left.value)) ||
		not(Number.isInteger(left.decimalPlaces))
	) {
		throw new Error(`${JSON.stringify(left.value)} is not a precision number`)
	}

	if (
		not(Number.isFinite(right.value)) ||
		not(Number.isInteger(right.decimalPlaces))
	) {
		throw new Error(`${JSON.stringify(right.value)} is not a precision number`)
	}

	const diff = Math.round(
		left.value * 10 ** left.decimalPlaces -
			right.value * 10 ** right.decimalPlaces,
	)

	return diff === 0 ? 0 : Math.round(diff / Math.abs(diff))
}
