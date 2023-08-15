import type { RealNumberValue } from "../../../../types/values"
import not from "../../../../utilities/not"

export const REAL_NUMBER_PRECISION = 10 ** 12

export default function compareRealNumbers(
	left: RealNumberValue,
	right: RealNumberValue,
): number {
	if (not(Number.isFinite(left.value))) {
		throw new Error(`${JSON.stringify(left.value)} is not a real number`)
	}

	if (not(Number.isFinite(right.value))) {
		throw new Error(`${JSON.stringify(right.value)} is not a real number`)
	}

	const diff = Math.round(
		left.value * REAL_NUMBER_PRECISION - right.value * REAL_NUMBER_PRECISION,
	)

	return diff === 0 ? 0 : Math.round(diff / Math.abs(diff))
}
