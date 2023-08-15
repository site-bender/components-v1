import not from "../../../../utilities/not"

export default function compareIntegers(left: number, right: number): number {
	if (not(Number.isInteger(left))) {
		throw new Error(`${left} is not an integer`)
	}

	if (not(Number.isInteger(right))) {
		throw new Error(`${right} is not an integer`)
	}

	const diff = left - right

	return diff === 0 ? 0 : Math.round(diff / Math.abs(diff))
}
