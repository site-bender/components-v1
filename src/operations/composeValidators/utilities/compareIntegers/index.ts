import type { IntegerValue } from "../../../../types/values"
import not from "../../../../utilities/not"

export default function compareIntegers(
	left: IntegerValue,
	right: IntegerValue,
): number {
	if (not(Number.isInteger(left.value))) {
		throw new Error(`${JSON.stringify(left.value)} is not an integer`)
	}

	if (not(Number.isInteger(right.value))) {
		throw new Error(`${JSON.stringify(right.value)} is not an integer`)
	}

	const diff = left.value - right.value

	return diff === 0 ? 0 : Math.round(diff / Math.abs(diff))
}
