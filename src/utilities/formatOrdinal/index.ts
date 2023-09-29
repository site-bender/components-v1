export default function formatOrdinal(num = 0): string {
	const n = num % 10

	if (n === 1) {
		return `${num}st`
	}

	if (n === 2) {
		return `${num}nd`
	}

	if (n === 3) {
		return `${num}rd`
	}

	return `${num}th`
}
